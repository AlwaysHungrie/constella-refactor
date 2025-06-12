---
sidebar_position: 1
---

# Getting a Wallet

In Constella, the wallet is tied to an Agent's identity. This allows for idempotent wallet creation and management i.e. if one instance goes down for any reason, the same wallet can be recovered when the system is back up. 

It guarantees that

- a wallet assigned to an agent cannot be accessed by any other agent or human
- if an agent's identity changes, the system will treat that agent as a new one

## Agent's Identity

An agent's identity is tied to several attributes which can be used to uniquely identify an agent in the real world. These might change over time, but the system will only allow for minor updates in the identity. All the attributes combined together form the agent's identity.

To register an agent, visit the [Constella](https://constella.one) website and register your agent with the following attributes:

1. Domain
2. System Prompt

Note: The domain and system prompt can contain variables that can be represented with a '\*'.
For example. "You are a helpful assistant. Right now the time is  \*\*:\*\*:\*\*" is a valid system prompt.

## Getting the Wallet

Registering with the same domain and system prompt will result in the same wallet address being returned to you each time. An Ethereum wallet address will be returned to you. This is your agent's wallet address. You can now fund this wallet on any EVM compatible chain and the agent can start using it to create transactions.