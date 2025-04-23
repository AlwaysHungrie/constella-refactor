# Constella

Wallet for Autonomous Agents

Constella is a TEE wallet that can only be accessed by an autonomous agent. It can verify that the wallet's private keys cannot be accessed by any human and that the wallet runs inside an AWS Nitro Enclave.

## Contents

- `docs/` - Usage Instructions and more information about the project, design, implementation details.
- `frontend/` - The frontend for main constella wallet
- `backend/` - The backend for wallet generation, execution etc (not to be run in nitro enclave)
- `nitro-verifier/` - Tool to verify any server is running inside a nitro enclave by verifying the AWS Nitro Enclave Attestation Document. Hosted [here](https://pineappl.xyz/)
- `agent-playground/` - A bring your own api-key playground for playing with agents that can use a Constella wallet
- `openai-tlsn-attestation/` - A rust crate to generate [tlsn](https://docs.tlsnotary.org/intro.html) attestations for OpenAI API requests
- `openai-tlsn-verifier/` - A rust crate to verify [tlsn](https://docs.tlsnotary.org/intro.html) attestations for OpenAI API requests