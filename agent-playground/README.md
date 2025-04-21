# Agent Playground

Agent Playground is a testing environment to create and interact with agents that can use a Constella wallet.
Each user will be allocated a unqiue domain and need to create a wallet on Constella with the same `domain` and a `system prompt`. Users can then create agents that can use the wallet they created by specifying the same `system prompt`, `domain` and `wallet address` along with their own [openai api key](https://platform.openai.com/api-keys).

The agents created and messages sent are not stored anywhere, when the tab is refreshed the agents will need to be recreated.