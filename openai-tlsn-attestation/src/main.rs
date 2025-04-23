// This example demonstrates how to use the Prover to acquire an attestation for
// an HTTP request sent to OpenAI's API. The attestation and secrets are saved to
// disk.

mod storage;

use std::path::PathBuf;

use http_body_util::{BodyExt, Full};
use hyper::{body::Bytes, Request};
use hyper_util::rt::TokioIo;
use tokio_util::compat::{FuturesAsyncReadCompatExt, TokioAsyncReadCompatExt};

use notary_client::{Accepted, NotarizationRequest, NotaryClient};
use tlsn_common::config::ProtocolConfig;
use tlsn_core::{request::RequestConfig, transcript::TranscriptCommitConfig, CryptoProvider, presentation::Presentation};
use tlsn_prover::{Prover, ProverConfig};
use rangeset::RangeSet;

use clap::{Parser, Subcommand};
use serde_json::{json, Value};
use storage::StorageService;

// OpenAI API settings
const OPENAI_API_HOST: &str = "api.openai.com";
const OPENAI_API_PORT: u16 = 443;
const OPENAI_API_METHOD: &str = "POST";
const OPENAI_API_URI: &str = "/v1/chat/completions";
const USER_AGENT: &str = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";
const CONTENT_TYPE: &str = "application/json";
const MAX_SENT_DATA: usize = 16384; // 16KB
const MAX_RECV_DATA: usize = 16384; // 64KB
const NOTARY_HOST: &str = "notary.pineappl.xyz";
const NOTARY_PORT: u16 = 443;
const NOTARY_TLS: bool = true;

// AWS S3 settings
const BUCKET_NAME: &str = "tlsn-notary-test";
const REGION: &str = "ap-south-1";

#[derive(Parser, Debug)]
#[command(version, about = "TLS Notarization tool for HTTP requests", long_about = None)]
struct Args {
    /// Host of the target server
    #[clap(long, default_value = OPENAI_API_HOST)]
    host: String,

    /// Port of the target server
    #[clap(long, default_value_t = OPENAI_API_PORT)]
    port: u16,

    /// HTTP request method
    #[clap(long, default_value = OPENAI_API_METHOD)]
    method: String,

    /// URI path for the request
    #[clap(long, default_value = OPENAI_API_URI)]
    uri: String,

    /// User agent to use for the request
    #[clap(long, default_value = USER_AGENT)]
    user_agent: String,

    /// Content type for the request
    #[clap(long, default_value = CONTENT_TYPE)]
    content_type: String,

    /// Maximum size of sent data in bytes
    #[clap(long, default_value_t = MAX_SENT_DATA)]
    max_sent_data: usize,

    /// Maximum size of received data in bytes
    #[clap(long, default_value_t = MAX_RECV_DATA)]
    max_recv_data: usize,

    /// Notary host address
    #[clap(long, default_value = NOTARY_HOST)]
    notary_host: String,

    /// Notary port
    #[clap(long, default_value_t = NOTARY_PORT)]
    notary_port: u16,

    /// Enable TLS for notary connection
    #[clap(long, default_value_t = NOTARY_TLS)]
    notary_tls: bool,

    #[command(subcommand)]
    command: Command,
}

#[derive(Subcommand, Debug)]
enum Command {
    /// Make an OpenAI API request
    OpenAI {
        /// API key for OpenAI
        #[clap(long, env = "OPENAI_API_KEY")]
        api_key: String,
        
        /// OpenAI model to use
        #[clap(long, default_value = "gpt-4o-mini")]
        model: String,

        /// Message to send to the model
        #[clap(long, default_value = "Hello! Can you introduce yourself?")]
        message: String,

        // User directory
        #[clap(long)]
        user_dir: PathBuf,

        // Output prefix
        #[clap(long)]
        output_prefix: String,
    },
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    
    let args = Args::parse();
    
    match &args.command {
        Command::OpenAI { api_key, model, message, user_dir, output_prefix } => {
            // Create the request payload for OpenAI
            let request_payload = json!({
                "model": model,
                "messages": [
                    {
                        "role": "user",
                        "content": message
                    }
                ]
            });
            
            // Prepare headers for OpenAI
            let headers = vec![
                ("Content-Type".to_string(), "application/json".to_string()),
                ("Authorization".to_string(), format!("Bearer {}", api_key)),
                ("Accept".to_string(), "application/json".to_string()),
            ];
            
            notarize_request(
                &args, 
                &request_payload, 
                headers,
                api_key.clone(),
                user_dir.clone(),
                output_prefix.clone(),
            ).await
        },
    }
}

async fn notarize_request(
    args: &Args,
    request_payload: &Value,
    headers: Vec<(String, String)>,
    api_key: String,
    user_dir: PathBuf,
    output_prefix: String,
) -> Result<(), Box<dyn std::error::Error>> {
    // Serialize the request payload to JSON
    let json_payload = serde_json::to_string(request_payload)?;
    let bytes = Bytes::from(json_payload);
    
    notarize_request_with_body(args, request_payload, headers, bytes.to_vec(), api_key, user_dir, output_prefix).await
}

async fn notarize_request_with_body(
    args: &Args,
    _request_payload: &Value, // Only used for debug printing
    headers: Vec<(String, String)>,
    body: Vec<u8>,
    api_key: String,
    user_dir: PathBuf,
    output_prefix: String,
) -> Result<(), Box<dyn std::error::Error>> {
    // Build a client to connect to the notary server
    let notary_client = NotaryClient::builder()
        .host(args.notary_host.clone())
        .port(args.notary_port)
        .enable_tls(args.notary_tls)
        .build()
        .unwrap();

    // Send requests for configuration and notarization to the notary server
    let notarization_request = NotarizationRequest::builder()
        .max_sent_data(args.max_sent_data)
        .max_recv_data(args.max_recv_data)
        .build()?;

    let Accepted {
        io: notary_connection,
        id: _session_id,
        ..
    } = notary_client
        .request_notarization(notarization_request)
        .await
        .expect("Could not connect to notary. Make sure it is running.");

    let server_name: &str = args.host.as_str();

    // Set up protocol configuration for prover
    let prover_config = ProverConfig::builder()
        .server_name(server_name)
        .protocol_config(
            ProtocolConfig::builder()
                .max_sent_data(args.max_sent_data)
                .max_recv_data(args.max_recv_data)
                .build()?,
        )
        .build()?;

    // Create a new prover and perform necessary setup
    let prover = Prover::new(prover_config)
        .setup(notary_connection.compat())
        .await?;

    // Open a TCP connection to target server
    let client_socket = tokio::net::TcpStream::connect((args.host.clone(), args.port)).await?;

    // Bind the prover to the server connection
    let (mpc_tls_connection, prover_fut) = prover.connect(client_socket.compat()).await?;
    let mpc_tls_connection = TokioIo::new(mpc_tls_connection.compat());

    // Spawn the prover task to be run concurrently in the background
    let prover_task = tokio::spawn(prover_fut);

    // Attach the hyper HTTP client to the connection
    let (mut request_sender, connection) =
        hyper::client::conn::http1::handshake(mpc_tls_connection).await?;

    // Spawn the HTTP task to be run concurrently in the background
    tokio::spawn(connection);

    let body_bytes = Bytes::from(body);

    let method: hyper::Method = args.method.as_str().try_into()?;

    // Start building the request
    let mut request_builder = Request::builder()
        .method(method)
        .uri(&args.uri)
        .header("Host", &args.host)
        .header("Accept-Encoding", "identity")  // No compression
        .header("Connection", "close")
        .header("User-Agent", &args.user_agent)
        .header("Content-Length", body_bytes.len());

    // Add all headers
    for (name, value) in headers {
        request_builder = request_builder.header(name, value);
    }

    // Build the final request
    let request = request_builder.body(Full::new(body_bytes))?;

    // Send the request and wait for the response
    let response = request_sender.send_request(request).await?;

    // if response.status() != StatusCode::OK {
    //     println!("Error status: {}", response.status());
    // }

    // Collect the full response body
    let body_bytes = response.collect().await?.to_bytes();
    let body_str = String::from_utf8_lossy(&body_bytes);
    
    // Pretty print the response if it's valid JSON
    let parsed_json: serde_json::Value;
    if let Ok(parsed) = serde_json::from_str::<serde_json::Value>(&body_str) {
        parsed_json = parsed;
        // println!("Response: {}", serde_json::to_string_pretty(&parsed_json)?);
    } else {
        // println!("Raw response: {}", body_str);
        parsed_json = serde_json::json!({
            "error": body_str
        });
    }

    // The prover task should be done now, so we can await it
    let prover = prover_task.await??;

    // Prepare for notarization
    let mut prover = prover.start_notarize();

    // Get transcripts
    let sent_transcript = prover.transcript().sent();
    let recv_transcript = prover.transcript().received();

    let private_words_bytes: Vec<Vec<u8>> = api_key
        .split(';')
        .map(|s| s.as_bytes().to_vec())
        .collect();

    let private_word_refs: Vec<&[u8]> = private_words_bytes.iter()
        .map(|v| v.as_slice())
        .collect();

    let (sent_public_ranges, _) = find_ranges(sent_transcript, &private_word_refs);
    let (recv_public_ranges, _) = find_ranges(recv_transcript, &private_word_refs);

    // let sent_public_ranges = RangeSet::from(0..sent_transcript.len());
    // let recv_public_ranges = RangeSet::from(0..recv_transcript.len());

    // Commit to the transcript
    let mut builder = TranscriptCommitConfig::builder(prover.transcript());
    builder.commit_sent(&sent_public_ranges)?;
    builder.commit_recv(&recv_public_ranges)?;

    prover.transcript_commit(builder.build()?);

    // Build an attestation request
    let request_config = RequestConfig::builder().build()?;

    let (attestation, secrets) = prover.finalize(&request_config).await?;

    // Build the presentation
    let mut builder = secrets.transcript_proof_builder();
    builder.reveal_recv(&recv_public_ranges)?;
    builder.reveal_sent(&sent_public_ranges)?;

    let transcript_proof = builder.build()?;
    let provider = CryptoProvider::default();

    let mut builder = attestation.presentation_builder(&provider);
    builder
        .identity_proof(secrets.identity_proof())
        .transcript_proof(transcript_proof);

    let presentation: Presentation = builder.build()?;

    let storage = StorageService::new(BUCKET_NAME, REGION);
    let bucket_path = storage.upload_presentation(&presentation, &user_dir, &output_prefix).await?;

    // Prepare final response
    let response_json = serde_json::json!({
        "attestation_url": bucket_path,
        "llm_response": parsed_json,
    });

    println!("{}", serde_json::to_string(&response_json)?);
    
    Ok(())
}

fn find_ranges(seq: &[u8], sub_seq: &[&[u8]]) -> (RangeSet<usize>, RangeSet<usize>) {
    let mut private_ranges = Vec::new();
    
    // Find all occurrences of each private word
    for s in sub_seq {
        let mut start_idx = 0;
        while let Some(idx) = find_subsequence(&seq[start_idx..], s) {
            let abs_idx = start_idx + idx;
            private_ranges.push(abs_idx..(abs_idx + s.len()));
            start_idx = abs_idx + 1; // Move past the current match to find next occurrence
        }
    }

    // Sort and merge overlapping ranges
    let mut sorted_ranges = private_ranges.clone();
    sorted_ranges.sort_by_key(|r| r.start);
    
    let mut merged_private = Vec::new();
    if !sorted_ranges.is_empty() {
        let mut current = sorted_ranges[0].clone();
        
        for range in sorted_ranges.iter().skip(1) {
            if range.start <= current.end {
                // Ranges overlap, merge them
                current.end = current.end.max(range.end);
            } else {
                // No overlap, push current range and start new one
                merged_private.push(current);
                current = range.clone();
            }
        }
        merged_private.push(current);
    }

    // Find public ranges (gaps between private ranges)
    let mut public_ranges = Vec::new();
    let mut last_end = 0;
    
    for r in &merged_private {
        if r.start > last_end {
            public_ranges.push(last_end..r.start);
        }
        last_end = r.end;
    }
    
    if last_end < seq.len() {
        public_ranges.push(last_end..seq.len());
    }

    (
        RangeSet::from(public_ranges),
        RangeSet::from(merged_private),
    )
}

fn find_subsequence(haystack: &[u8], needle: &[u8]) -> Option<usize> {
    haystack.windows(needle.len())
        .position(|window| window == needle)
}