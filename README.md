# Constella

Wallet for Autonomous Agents

Constella is a TEE wallet that can only be accessed by an autonomous agent. It can verify that the wallet's private keys cannot be accessed by any human and that the wallet runs inside an AWS Nitro Enclave.

## Contents

- `docs/` - Usage Instructions and more information about the project, design, implementation details.
- `frontend/` - The frontend for main constella wallet
- `backend/` - The backend for wallet generation, execution etc (not to be run in nitro enclave)