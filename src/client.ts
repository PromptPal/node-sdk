import { APIRunPromptPayload, APIRunPromptResponse, ErrorResponse } from "./types"

/**
 * The client for the PromptPal JS SDK.
 */
class PromptPalClient {
  /** execute path. defined by PromptPal: https://github.com/PromptPal/PromptPal/blob/master/routes/app.go#L84 */
  static readonly executePath = '/api/v1/public/prompts/run/{pid}'
  /** endpoint of the PromptPal server. should a valid host */
  private endpoint: string
  /** API token that generated by PromptPal project. should be pair with the endpoint */
  private token: string

  /**
   * create a PromptPal client
   * 
   * ```ts
   * const client = new PromptPal('http://127.0.0.1:8964', process.env.PROMPTPAL_TOKEN)
   * ```
   * @param endpoint PromptPal server entry point {@link endpoint}
   * @param token API token that generated by PromptPal project {@link token}
   */
  constructor(endpoint: string, token: string) {
    this.endpoint = endpoint
    this.token = token
  }

  protected httpPost<R, V extends object>(url: string, data: V, signal?: AbortSignal): Promise<R> {
    if (!this.token) {
      throw new Error('PromptPal: No token found')
    }

    const requestURL = url.startsWith('http') ? url : `${this.endpoint}${url}`

    return fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `API ${this.token}`
      },
      body: JSON.stringify(data),
      signal,
    }).then(async response => {
      if (!response.ok) {
        const errMsg: ErrorResponse = await response.json()
        throw new Error(`${errMsg.code}: ${errMsg.error}`)
      }
      return response.json() as R
    })
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
  execute<P extends string, V extends object>(
    prompt: P,
    variables: V,
    userId?: string,
    config?: {
      signal?: AbortSignal
    }
  ): Promise<APIRunPromptResponse> {
    const signal = config?.signal ?? AbortSignal.timeout(10_000)
    return this.httpPost<APIRunPromptResponse, APIRunPromptPayload<V>>(
      PromptPalClient.executePath.replace('{pid}', prompt),
      {
        variables,
        userId
      },
      signal
    )
  }
}

export default PromptPalClient