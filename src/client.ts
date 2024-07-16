import BaseClient from "./base";
import {
  APIRunPromptPayload,
  APIRunPromptResponse,
  ErrorResponse,
  RuntimeOptions,
  Cache,
  StreamEvents,
} from "./types";

/**
 * The client for the PromptPal JS SDK.
 */
class PromptPalClient extends BaseClient {
  /**
   * create a PromptPal client
   *
   * ```ts
   * const client = new PromptPal('http://127.0.0.1:7788', process.env.PROMPTPAL_TOKEN)
   * ```
   * @param endpoint PromptPal server entry point {@link endpoint}
   * @param token API token that generated by PromptPal project {@link token}
   */
  constructor(endpoint: string, token: string, options: RuntimeOptions = {}) {
    super(endpoint, token, options)
  }

  /**
   * execute a prompt
   *
   * ```ts
   * const res = client.execute<PPPrompts, PPPromptEchoVariables>(
   *  PPPrompts.Echo,
   *  { text: 'hello world' }
   * )
   * ```
   *
   * @param prompt prompt hash id
   * @param variables variables
   * @param userId optional user id
   * @param config config. just signal for now
   */
  async execute<P extends string, V extends object>(
    prompt: P,
    variables: V,
    userId?: string,
    config?: {
      signal?: AbortSignal;
    },
  ): Promise<APIRunPromptResponse> {
    const cacheKey = this.getCacheKey(prompt, variables);
    if (this.cache?.has(cacheKey)) {
      return JSON.parse(this.cache.get(cacheKey)!) as APIRunPromptResponse;
    }

    const signal = config?.signal ?? AbortSignal.timeout(this.defaultTimeout);
    const result = await this.httpPost<
      APIRunPromptResponse,
      APIRunPromptPayload<V>
    >(
      PromptPalClient.executePath.replace("{pid}", prompt),
      {
        variables,
        userId,
      },
      signal,
    );
    this.cache?.set(cacheKey, JSON.stringify(result));
    return result;
  }

  /**
   * execute a prompt
   *
   * ```ts
   * const res = client.executeStream<PPPrompts, PPPromptEchoVariables>(
   *  PPPrompts.Echo,
   *  { text: 'hello world' },
   *  '123',
   *  {
   *    onData: console.log
   *   })
   * ```
   *
   * @param prompt prompt hash id
   * @param variables variables
   * @param userId optional user id
   * @param config config. just signal for now
   */
  async executeStream<P extends string, V extends object>(
    prompt: P,
    variables: V,
    userId?: string,
    config?: {
      onData: (chunk: APIRunPromptResponse) => Promise<any>
      onEnd: (chunk?: APIRunPromptResponse) => Promise<any>
      onError?: (err?: APIRunPromptResponse) => Promise<any>
      signal?: AbortSignal;
    },
  ): Promise<APIRunPromptResponse> {
    const cacheKey = this.getCacheKey(prompt, variables);
    if (this.cache?.has(cacheKey)) {
      return JSON.parse(this.cache.get(cacheKey)!) as APIRunPromptResponse;
    }

    const signal = config?.signal ?? AbortSignal.timeout(this.defaultTimeout);

    const finalResult = await this.httpPostStream<APIRunPromptPayload<V>>(
      PromptPalClient.executePath.replace("{pid}", prompt) + "/stream",
      {
        variables,
        userId,
      },
      {
        onData: config?.onData ?? ((_) => Promise.resolve()),
        onEnd: config?.onEnd ?? ((_) => Promise.resolve()),
        onError: config?.onError,
      },
      signal,
    )

    this.cache?.set(cacheKey, JSON.stringify(finalResult))
    return finalResult
  }
}

export default PromptPalClient
