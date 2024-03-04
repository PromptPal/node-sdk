# PromptPal Node.js SDK [![Publish](https://github.com/PromptPal/node-sdk/actions/workflows/publish.yaml/badge.svg)](https://github.com/PromptPal/node-sdk/actions/workflows/publish.yaml) [![codecov](https://codecov.io/gh/PromptPal/node-sdk/graph/badge.svg?token=X64BHIHS97)](https://codecov.io/gh/PromptPal/node-sdk)

PromptPal is a software application designed to facilitate the collection, storage, modification, and enhancement of prompts.

PromptPal is a versatile service that can be deployed both on-premises and in cloud-native environments, allowing you to set up your own server on your machines.

The Node.js SDK is a powerful tool that enables seamless integration with the PromptPal service, providing a convenient way for developers to interact with its features.

## Installation

The PromptPal JS SDK is all environment compatible, including Node.js, Deno and Bun. To install the SDK, use the following command:

```bash
npm install @prompt-pal/node-sdk
yarn add @prompt-pal/node-sdk
pnpm install @prompt-pal/node-sdk
deno add @prompt-pal/node-sdk
```

## Usage

#### Prerequirements

* Set up a PromptPal admin panel.
* Download the PromptPal CLI and use the `promptpal init` and `promptpal g` commands to generate prompt metadata.

#### SDK Usage

Before using the SDK, make sure to define the endpoint and token. The endpoint refers to the location where your server is deployed (e.g., the service name in a Kubernetes cluster). The token is obtained from the PromptPal admin panel. Please refer to the main repository for more details.

```ts
const endpoint = "http://localhost:7788"
const token = "d6e9a6b170784fdfb4ef54417a32f391"
```

```ts
import PromptPal from '@prompt-pal/node-sdk'

const client = new PromptPal(endpoint, token)

const res = client.execute<PPPrompts, PPPromptEchoVariables>(
  PPPrompts.Echo,
  { text: 'hello world' }
)

console.log(res)
```
## Used By

This project is utilized by the following projects:

- ClippingKK

## Support

For support, email to annatar.he@gmail.com.

