# Nitro Verifier

This tool checks the nitro enclave attestation document i.e. an attestation certificate that is generated any server that is running inside a nitro enabled instance and using [nitriding](https://github.com/brave/nitriding-daemon) to communicate over https. 

A nitro enclave attestation contains
 - the PCR values (a signature) of the code running inside the enclave
 - signed by publicly published AWS Nitro Attestation PKI ([https://aws-nitro-enclaves.amazonaws.com/AWS_NitroEnclaves_Root-G1.zip](https://aws-nitro-enclaves.amazonaws.com/AWS_NitroEnclaves_Root-G1.zip))
  
More information about the attestation document can be found [here](https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html)

"Attestation Document" recieved from Constella backend by visiting [https://api.constella.one/api/verify?devmode=true](https://api.constella.one/api/verify?devmode=true) can be verified using this tool. Verification of the certificate means that:
 - Constella backend is running inside a nitro enclave
 - Code running inside the enclave is the exact same code as published on this repository


## Rust Crate

