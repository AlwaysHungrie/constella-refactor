// This example demonstrates how to use the Prover to acquire an attestation for
// an HTTP request sent to OpenAI's API. The attestation and secrets are saved to
// disk.

use std::path::PathBuf;

use http_body_util::{BodyExt, Full};
use hyper::{body::Bytes, Request, StatusCode};
use hyper_util::rt::TokioIo;
use tokio_util::compat::{FuturesAsyncReadCompatExt, TokioAsyncReadCompatExt};

use notary_client::{Accepted, NotarizationRequest, NotaryClient};
use tlsn_common::config::ProtocolConfig;
use tlsn_core::{request::RequestConfig, transcript::TranscriptCommitConfig, CryptoProvider, presentation::Presentation};
use tlsn_prover::{Prover, ProverConfig};
use rangeset::RangeSet;

use clap::{Parser, Subcommand};
use serde_json::{json, Value};

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

    /// Output path for the presentation file
    #[clap(long, default_value = "presentation.tlsn")]
    presentation_path: PathBuf,

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
    },
    
    /// Make a custom HTTP request with a JSON payload
    CustomJson {
        /// Authorization header value (e.g., "Bearer YOUR_TOKEN")
        #[clap(long)]
        authorization: Option<String>,
        
        /// Raw JSON payload as a string
        #[clap(long)]
        payload: String,
        
        /// Additional headers in format "Key: Value"
        #[clap(long)]
        headers: Vec<String>,
    },
    
    /// Make a custom HTTP request with form data
    CustomForm {
        /// Authorization header value (e.g., "Bearer YOUR_TOKEN")
        #[clap(long)]
        authorization: Option<String>,
        
        /// Form fields in format "key=value"
        #[clap(long)]
        fields: Vec<String>,
        
        /// Additional headers in format "Key: Value"
        #[clap(long)]
        headers: Vec<String>,
    },
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    
    let args = Args::parse();
    
    match &args.command {
        Command::OpenAI { api_key, model, message } => {
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
                headers
            ).await
        },
        
        Command::CustomJson { authorization, payload, headers } => {
            // Parse the JSON payload
            let request_payload: Value = serde_json::from_str(payload)
                .map_err(|e| format!("Invalid JSON payload: {}", e))?;
            
            // Prepare headers
            let mut header_map = vec![
                ("Content-Type".to_string(), args.content_type.clone()),
                ("Accept".to_string(), "application/json".to_string()),
            ];
            
            // Add authorization if provided
            if let Some(auth) = authorization {
                header_map.push(("Authorization".to_string(), auth.clone()));
            }
            
            // Add custom headers
            for header in headers {
                if let Some((key, value)) = header.split_once(':') {
                    header_map.push((key.trim().to_string(), value.trim().to_string()));
                } else {
                    eprintln!("Warning: Ignoring malformed header: {}", header);
                }
            }
            
            notarize_request(
                &args,
                &request_payload,
                header_map
            ).await
        },
        
        Command::CustomForm { authorization, fields, headers } => {
            // Prepare form data
            let mut form_data = String::new();
            for (i, field) in fields.iter().enumerate() {
                if i > 0 {
                    form_data.push('&');
                }
                form_data.push_str(field);
            }
            
            // Create a placeholder JSON value since we're sending form data
            let placeholder = json!({});
            
            // Prepare headers
            let mut header_map = vec![
                ("Content-Type".to_string(), "application/x-www-form-urlencoded".to_string()),
            ];
            
            // Add authorization if provided
            if let Some(auth) = authorization {
                header_map.push(("Authorization".to_string(), auth.clone()));
            }
            
            // Add custom headers
            for header in headers {
                if let Some((key, value)) = header.split_once(':') {
                    header_map.push((key.trim().to_string(), value.trim().to_string()));
                } else {
                    eprintln!("Warning: Ignoring malformed header: {}", header);
                }
            }
            
            // Use the form data as the request body instead of JSON
            notarize_request_with_body(
                &args,
                &placeholder, // Ignored in this case
                header_map,
                form_data.into_bytes()
            ).await
        },
    }
}

async fn notarize_request(
    args: &Args,
    request_payload: &Value,
    headers: Vec<(String, String)>,
) -> Result<(), Box<dyn std::error::Error>> {
    // Serialize the request payload to JSON
    let json_payload = serde_json::to_string(request_payload)?;
    let bytes = Bytes::from(json_payload);
    
    notarize_request_with_body(args, request_payload, headers, bytes.to_vec()).await
}

async fn notarize_request_with_body(
    args: &Args,
    _request_payload: &Value, // Only used for debug printing
    headers: Vec<(String, String)>,
    body: Vec<u8>,
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
        id: session_id,
        ..
    } = notary_client
        .request_notarization(notarization_request)
        .await
        .expect("Could not connect to notary. Make sure it is running.");

    println!("Notarization session started with ID: {}", session_id);

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

    println!("Starting an MPC TLS connection with {}", args.host);

    // Send the request and wait for the response
    let response = request_sender.send_request(request).await?;

    println!("Got a response: {}", response.status());

    if response.status() != StatusCode::OK {
        println!("Error status: {}", response.status());
    }

    // Collect the full response body
    let body_bytes = response.collect().await?.to_bytes();
    let body_str = String::from_utf8_lossy(&body_bytes);
    
    // Pretty print the response if it's valid JSON
    if let Ok(parsed_json) = serde_json::from_str::<serde_json::Value>(&body_str) {
        println!("Response: {}", serde_json::to_string_pretty(&parsed_json)?);
    } else {
        println!("Raw response: {}", body_str);
    }

    // The prover task should be done now, so we can await it
    let prover = prover_task.await??;

    // Prepare for notarization
    let mut prover = prover.start_notarize();

    // Get transcripts
    let sent_transcript = prover.transcript().sent();
    let recv_transcript = prover.transcript().received();

    // let sent_public_ranges = RangeSet::from([(0..sent_transcript.len())]);
    // let recv_public_ranges = RangeSet::from([(0..recv_transcript.len())]);

    let sent_public_ranges = RangeSet::from(0..sent_transcript.len());
    let recv_public_ranges = RangeSet::from(0..recv_transcript.len());

    // Commit to the transcript
    let mut builder = TranscriptCommitConfig::builder(prover.transcript());
    builder.commit_sent(&sent_public_ranges)?;
    builder.commit_recv(&recv_public_ranges)?;

    prover.transcript_commit(builder.build()?);

    // Build an attestation request
    let request_config = RequestConfig::builder().build()?;

    let (attestation, secrets) = prover.finalize(&request_config).await?;

    println!("Notarization complete!");

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

    // Write the presentation to disk
    std::fs::write(&args.presentation_path, bincode::serialize(&presentation)?)?;

    println!("Presentation built successfully!");
    println!("The presentation has been written to `{}`.", args.presentation_path.display());
    
    Ok(())
}