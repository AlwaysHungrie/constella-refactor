---
sidebar_position: 4
---

# TLSN Notary

## What is TLSN Notary?

TLSN Notary is a free tool that helps you prove what happened during a secure web session. It creates a special proof (called a TLS attestation) showing exactly what was sent and received between you and a server, without exposing your private info. This is useful if you want to show someone what you sent to a service and what you got back, while keeping your data safe.

## How Does It Work?

TLSN Notary acts like a witness to your secure (TLS) session. It records the data exchanged and creates a cryptographic proof. You can share this proof with others, who can check that the session happened as you say, but they can't see your private info.

## What is a Notary Server?

A notary server helps make the proof. It watches the session between you and the server (like an LLM provider) and helps create the attestation. The notary server can't see your secrets or session keys, but it does help make sure the proof is real.

**Your private data is safe:** The notary server never sees your private data or the full details of your session. Only the parts needed to make and check the proof are shared. This means you can keep sensitive information—like parts of your system prompt—hidden from the notary server.

**Selective disclosure:** You can choose which parts of your session to reveal in the attestation. For example, you might want to keep some of the system prompt private, but still let Constella verify that the attestation is real and matches the important parts of the session.

You need to trust that the notary server will follow the rules and not lie about what it saw. For more security, you can use several notary servers and require most of them to agree.

## Using TLSN Notary with LLM Providers

When you talk to an LLM provider, you send a message and get a response. With TLSN Notary, you can make a proof that includes:

- The message you sent
- The response you got
- Any function call in the response, with its input

This proof shows the LLM provider really sent you that response, and the function call is exactly as shown.

## How Constella Uses TLSN Notary

Constella goes further. If the LLM's response includes a function call that Constella knows about, it can automatically run that function with the given input. So you can:

1. Send a request to an LLM provider
2. Get a response with a function call
3. Use TLSN Notary to make a proof
4. Let Constella check and run the function if everything matches

## Summary

TLSN Notary lets you make a secure, verifiable record of your LLM sessions. With Constella, you can also automate actions based on the LLM's response, safely and with proof.

