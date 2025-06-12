---
sidebar_position: 2
---

# Configure Transactions

By default, your agent cannot be make any transactions. 

Constella can execute any AWS lambda function on behalf of your agent. Whenever a function is executed, its output if it contains a valid transaction will be signed with the agent's private key and executed. Please note that the agent's private key never leaves the Constella system.

## Adding a Lambda Function

Only publicly available code can be executed by Constella in order to prevent agents from behaving maliciously.

To add a lambda function against an agent, visit the [Constella](https://constella.one) website and register your agent again with the same identity attributes but this time add a github repository URL containing the lambda function.

1. Domain
2. System Prompt
3. Github Repository URL