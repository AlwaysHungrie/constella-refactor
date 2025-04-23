use std::time::Duration;

use tlsn_core::{
    presentation::{Presentation, PresentationOutput},
    signing::VerifyingKey,
    CryptoProvider
};

use clap::Parser;
use reqwest::Client;

#[derive(Parser, Debug)]
#[command(version, about = "Verify a TLS Notarization", long_about = None)]
struct Args {
    /// Attestation URL of the presentation
    #[clap(long)]
    attestation_url: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();

    verify_presentation(&args.attestation_url).await
}

async fn fetch_presentation(attestation_url: String) -> Result<Presentation, Box<dyn std::error::Error>> {
  let client = Client::new();

  // Download the file using the presigned URL
  let presentation_bytes = client
      .get(attestation_url)
      .send()
      .await?
      .bytes()
      .await?;

  // Deserialize the presentation
  let presentation: Presentation = bincode::deserialize(&presentation_bytes)?;
  Ok(presentation)
}

async fn verify_presentation(attestation_url: &str) -> Result<(), Box<dyn std::error::Error>> {
    // Read the presentation from disk.
    let presentation = fetch_presentation(attestation_url.to_string()).await?;

    // let mut root_store = RootCertStore::empty();
    // root_store.unwrap(); 

    let provider = CryptoProvider {
      ..Default::default()
    };

    let VerifyingKey {
        alg,
        data: key_data,
    } = presentation.verifying_key();

    // println!(
    //     "Verifying presentation with {alg} key: {}\n\n**Ask yourself, do you trust this key?**\n",
    //     hex::encode(key_data)
    // );

    let presentation = presentation.clone();
    // Verify the presentation.
    let PresentationOutput {
        server_name,
        connection_info,
        transcript,
        ..
    } = presentation.verify(&provider).unwrap();

    // The time at which the connection was started.
    let time = chrono::DateTime::UNIX_EPOCH + Duration::from_secs(connection_info.time);
    let server_name = server_name.unwrap();
    let mut partial_transcript = transcript.unwrap();
    // Set the unauthenticated bytes so they are distinguishable.
    partial_transcript.set_unauthed(b'X');

    let sent = String::from_utf8_lossy(partial_transcript.sent_unsafe());
    let recv = String::from_utf8_lossy(partial_transcript.received_unsafe());

    let response_json = serde_json::json!({
        "server_name": server_name,
        "alg": alg,
        "key": hex::encode(key_data),
        "time": time.timestamp(),
        "sent": sent,
        "recv": recv,
    });

    println!("{}", serde_json::to_string(&response_json)?);

    Ok(())
}
