use std::any;

use clap::Parser;
use serde_json;

use http_body_util::{BodyExt, Full};
use hyper::{body::Bytes, Request};
use hyper_util::rt::TokioIo;
use tokio_util::compat::{FuturesAsyncReadCompatExt, TokioAsyncReadCompatExt};

use notary_client::{Accepted, NotarizationRequest, NotaryClient, NotaryConnection};
use tlsn_common::config::ProtocolConfig;
use tlsn_core::{request::RequestConfig, transcript::TranscriptCommitConfig, CryptoProvider, presentation::Presentation};
use tlsn_prover::{state::Setup, Prover, ProverConfig};
use rangeset::RangeSet;

const NOTARY_HOST: &str = "notary.pineappl.xyz";
const NOTARY_PORT: u16 = 443;
const NOTARY_TLS: bool = true;
const MAX_SENT_DATA: usize = 16384; // 16KB
const MAX_RECV_DATA: usize = 16384; // 16KB

const SERVER_PORT: u16 = 443;
const METHOD: &str = "POST";
const USER_AGENT: &str = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";

#[derive(Parser, Debug)]
#[command(version, about = "TLS Notarization tool for HTTP requests", long_about = None)]
struct Args {
    /// Host of the target server
    #[clap(long, default_value = NOTARY_HOST)]
    notary_host: String,

    /// Port of the target server
    #[clap(long, default_value_t = NOTARY_PORT)]
    notary_port: u16,

    /// Enable TLS
    #[clap(long, default_value_t = NOTARY_TLS)]
    notary_tls: bool,

    /// Maximum size of sent data in bytes
    #[clap(long, default_value_t = MAX_SENT_DATA)]
    max_sent_data: usize,

    /// Maximum size of received data in bytes
    #[clap(long, default_value_t = MAX_RECV_DATA)]
    max_recv_data: usize,

    /// Server host
    #[clap(long)]
    server_host: String,

    /// Server port
    #[clap(long, default_value_t = SERVER_PORT)]
    server_port: u16,

    /// HTTP request method
    #[clap(long, default_value = METHOD)]
    method: String,

    /// URI path for the request
    #[clap(long)]
    uri: String,

    /// User agent
    #[clap(long, default_value = USER_AGENT)]
    user_agent: String,

    /// Headers for the request
    #[clap(long = "header")]
    headers: Vec<String>,

    /// Body of the request as JSON
    #[clap(long)]
    body_json: String,
}

struct Header {
    name: String,
    value: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    let args = Args::parse();
    notarize_request(&args).await?;
    Ok(())
}

async fn notarize_request(args: &Args) -> Result<(), Box<dyn std::error::Error>> {
    let body: serde_json::Value = serde_json::from_str(&args.body_json).unwrap();
    let body_str = serde_json::to_string(&body)?;
    println!("Body: {}", &body_str);
    
    let body_bytes = Bytes::from(body_str);

    let headers = args.headers
        .iter()
        .map(|h| Header { 
            name: h.split_whitespace().next().unwrap().to_string(), 
            value: h.split_whitespace().skip(1).collect::<Vec<_>>().join(" ") 
        }).collect::<Vec<_>>();

    let notary_client = NotaryClient::builder()
        .host(args.notary_host.clone())
        .port(args.notary_port)
        .enable_tls(args.notary_tls)
        .build()
        .unwrap();

    println!("Notary client built");

    // Send requests for configuration and notarization to the notary server
    let notarization_request = NotarizationRequest::builder()
        .max_sent_data(args.max_sent_data)
        .max_recv_data(args.max_recv_data)
        .build()?;

    println!("Notarization request built {:?} {:?} ", args.max_sent_data, args.max_recv_data);
    let Accepted {
        io: notary_connection,
        id: _session_id,
        ..
    } = notary_client
        .request_notarization(notarization_request)
        .await
        .expect("Could not connect to notary. Make sure it is running.");

    let prover_config = ProverConfig::builder()
        .server_name(args.server_host.as_str())
        .protocol_config(
            ProtocolConfig::builder()
                .max_sent_data(args.max_sent_data)
                .max_recv_data(args.max_recv_data)
                .build()?,
        )
        .build()?;

    println!("Prover config built {:?} {:?} ", args.max_sent_data, args.max_recv_data);
    // Create a new prover and perform necessary setup
    let prover = Prover::new(prover_config)
        .setup(notary_connection.compat())
        .await?;

    println!("Prover setup complete");

    // Open a TCP connection to target server
    let client_socket = tokio::net::TcpStream::connect((args.server_host.clone(), args.server_port)).await?;

    // Bind the prover to the server connection
    let (mpc_tls_connection, prover_fut) = prover.connect(client_socket.compat()).await?;
    let mpc_tls_connection = TokioIo::new(mpc_tls_connection.compat());

    println!("MPC TLS connection established");

    // Spawn the prover task to be run concurrently in the background
    let prover_task = tokio::spawn(prover_fut);

    // Attach the hyper HTTP client to the connection
    let (mut request_sender, connection) =
        hyper::client::conn::http1::handshake::<_, Full<Bytes>>(mpc_tls_connection).await?;

    // Spawn the HTTP task to be run concurrently in the background
    tokio::spawn(connection);

    let method: hyper::Method = args.method.as_str().try_into()?;

    // Start building the request
    let mut request_builder = Request::builder()
        .method(method)
        .uri(&args.uri)
        .header("Host", &args.server_host)
        .header("Accept-Encoding", "identity")  // No compression
        .header("Connection", "close")
        .header("User-Agent", &args.user_agent)
        .header("Content-Length", body_bytes.len());

    // Add all headers
    for header in headers {
        request_builder = request_builder.header(header.name, header.value);
    }

    // Build the final request
    let request = request_builder.body(Full::new(body_bytes))?;

    // Send the request and wait for the response
    let response = request_sender.send_request(request).await?;
    let body_bytes = response.collect().await?.to_bytes();
    let body_str = String::from_utf8_lossy(&body_bytes);

    let parsed_json: serde_json::Value;
    if let Ok(parsed) = serde_json::from_str::<serde_json::Value>(&body_str) {
        parsed_json = parsed;
        println!("Response: {}", serde_json::to_string_pretty(&parsed_json)?);
    } else {
        println!("Raw response: {}", body_str);
        parsed_json = serde_json::json!({
            "error": body_str
        });
    }

    Ok(())
}
