# OpenAI TLSN Attestation

This is a rust crate to verify TLS attestations (https://tlsnotary.org/) for OpenAI API requests, like the attestations made by [openai-tlsn-attestation](https://github.com/alwayshungrie/constella-refactor/openai-tlsn-attestation).

## Usage

```
cargo run -- \
  --attestation-url "https://tlsn-notary-test.s3.amazonaws.com/alwayshungrie/testattesation.presentation.tlsn"
```

After successfull verification, a json response will be printed to stdout.

```
{
  "alg": 1,
  "key": "037b48f19c139b6888fb5e383a4d72c2335186fd5858e7ae743ab4bf8e071b06e7",
  "recv": "HTTP response",
  "sent": "HTTP resquest",
  "server_name": "api.openai.com",
  "time": 1745449853
}
```

---

Checkout [openai-tlsn-attestation](https://github.com/alwayshungrie/constella-refactor/openai-tlsn-attestation) to create TLS attestations.