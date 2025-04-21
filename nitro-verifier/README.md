# Nitro Verifier

Website:[https://pineappl.xyz/](https://pineappl.xyz/)
Server:[https://nitro-verifier.pineappl.xyz/](https://nitro-verifier.pineappl.xyz/)

This tool checks the nitro enclave attestation document i.e. an attestation certificate that is generated any server that is running inside a nitro enabled instance and using [nitriding](https://github.com/brave/nitriding-daemon) to communicate over https. 

A nitro enclave attestation contains
 - the PCR values (a signature) of the code running inside the enclave
 - signed by publicly published AWS Nitro Attestation PKI ([https://aws-nitro-enclaves.amazonaws.com/AWS_NitroEnclaves_Root-G1.zip](https://aws-nitro-enclaves.amazonaws.com/AWS_NitroEnclaves_Root-G1.zip))
  
More information about the attestation document can be found [here](https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html)

"Attestation Document" recieved from Constella backend by visiting [https://api.constella.one/api/verify?devmode=true](https://api.constella.one/api/verify?devmode=true) can be verified using this tool. Verification of the certificate means that:
 - Constella backend is running inside a nitro enclave
 - Code running inside the enclave is the exact same code as published on this repository


## Rust Crate

The rust crate contains a function `verify_js` that verifies the attestation document. It compiles to a wasm file that can then be used in a browser or node environment.

### Compile to WebAssembly

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
cargo build --target wasm32-unknown-unknown --release

# Build for nodejs
wasm-bindgen target/wasm32-unknown-unknown/release/nitro_attestation_verifier.wasm --out-dir ../verifier-js --nodejs

# Build for browser
wasm-bindgen target/wasm32-unknown-unknown/release/nitro_attestation_verifier.wasm --out-dir ../verifier-js --web

# The verifier-js folder can be directly referenced by the browser or node project
```

### verify_js

`verify_js` expects 5 arguments:

1. `attestation_doc`: The attestation document to verify i.e. value of `code_attestation` in the response from the wallet server `/api/v1/config`.
2. `nonce`: This is always 0 for the time being (@TODO: fix this).
3. `pcrs`: The 3 pcr values returned by nitro-cli describe-enclave when enclave image is built. It can be found with the `nitro-cli describe-enclave` command if you are building the image yourself (recommended) or is on the main README page.
4. `timestamp`: The current time. This is provided in case we want to validate an outdated attestation document as each attestation document is valid for about 3 hours only since the time of issue.
5. `aws_trusted_root`: The root certificate obtained from aws. It can also be found on the main README page.