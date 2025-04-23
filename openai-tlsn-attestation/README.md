# OpenAI TLSN Attestation

This is a rust crate to generate TLS attestations (https://tlsnotary.org/) for OpenAI API requests. The tls attestations will be uploaded to a S3 bucket inside a folder `[user_dir]` with a filename `\[output_prefix\].presentation.tlsn`.

## Usage

```
cargo run -- \
  --host api.openai.com \
  --port 443 \
  --method POST \
  --uri '/v1/chat/completions' \
  --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
  --content-type 'application/json' \
  --max-sent-data 4096 \
  --max-recv-data 16384 \
  --notary-host notary1.pineappl.xyz \
  --notary-port 443 \
  --notary-tls \
  open-ai \
  --api-key 'openai-api-key' \
  --message 'test message, hello world!' \
  --user-dir 'alwayshungrie' \
  --output-prefix 'testattesation'
```

The program expects an env file with following variables, that are access keys to a S3 role which has access to upload files to a bucket `openai-tlsn-attestation` in `ap-south-1` region (which can be changed in main.rs)

For easability, ensure that all bucket items are publicly readable but only the user with access keys can upload files to the bucket.

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

The program will output a json to stdout

``` 
{
  "attestation_url": "public-s3-url",
  "llm_response": json_response_from_openai
}
```

## Notary Server

A live notary server is running on `notary1.pineappl.xyz` and can be used for testing, agent-playground etc.
The default settings to access this notary server are:

```
host: notary1.pineappl.xyz
port: 443
max-sent-data: 4096
max-recv-data: 16384
```

TLSN protocol requires a trusted third party notary server. The rough steps to run a notary server can be found [here](https://github.com/AlwaysHungrie/constella-refactor/scripts/notary-server-setup.md).

- We can run the notary server as we do locally as mentioned in this [example](https://github.com/tlsnotary/tlsn/blob/main/crates/examples/attestation/README.md) i.e. with tls disabled and on localhost:7047
- We setup a nginx reverse proxy to forward requests to the notary server, make sure the following proxy headers are added to the nginx configuration:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;

# WebSocket support (if needed)
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

## S3 Bucket

The S3 bucket `openai-tlsn-attestation` will be used to store the TLS attestations. To make the attestation_urls returned in the json response publicly readable, use a similar bucket policy as below:

This url can be used to [verify the TLS attestations](https://github.com/alwayshungrie/constella-refactor/openai-tlsn-verifier)

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForSingleObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::openai-tlsn-attestation/*.presentation.tlsn"
        }
    ]
}
```
