---
sidebar_position: 3
---

# Execute Transactions

In order to execute transactions, your agent needs to prove to Constella that it was indeed the one that made the decision to execute a function that was previously configured to be used by the agent.

## TLS Attestation

In order to prove the agent's decision, Constella requires the agent to submit a TLS attestation containing the agent's identity and the function that was executed.

To be more specific, generate a TLS attestation of the session which includes the message request to the llm provider and the response returned which includes the function call to be made along input parameters. The same function if present and configured will be executed by Constella.

## TODO: Add instruction on how to generate a TLS attestation.
