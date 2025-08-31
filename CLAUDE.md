# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commit Rules

You must follow the Conventional Commits rules, ensuring that the scope and module are included.

For example:

```md
fix(home): add price link on home page
feat(ai): add AI module
refactor(cell): update cell module for better maintenance
perf(parser): improve parser performance by over 30%
```

## Commands

### Build and Test

```bash
# Build TypeScript to JavaScript
npm run build

# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npx vitest run src/client.test.ts
```

## Architecture

This is the PromptPal Node.js SDK - a TypeScript client library for interacting with the PromptPal service API.

### Core Components

- **BaseClient** (`src/base.ts`): Base HTTP client handling authentication, request/response logic, and streaming support. Implements caching and temporary token management.

- **PromptPalClient** (`src/client.ts`): Main client class extending BaseClient, providing `execute()` and `executeStream()` methods for running prompts with variables.

- **Types** (`src/types.ts`): TypeScript type definitions for API payloads, responses, and runtime options.

### Key Implementation Details

- Supports both regular and streaming prompt execution
- Built-in response caching using configurable Cache interface
- Handles Server-Sent Events (SSE) for streaming responses
- Compatible with Node.js (>=18), Deno, and Bun runtime environments
- Uses MSW (Mock Service Worker) for testing HTTP interactions

### Project Structure

- Source code in `src/` directory, compiled to `dist/`
- Tests use Vitest framework with MSW for mocking
- Published to npm as `@prompt-pal/node-sdk` and JSR registry