import { APIRunPromptPayload, APIRunPromptResponse, ErrorResponse } from "./types";

class PromptPalClient {
  static executePath = '/api/v1/public/prompts/run/{pid}'
  private endpoint: string;
  private token: string;
  // TODO: add http client

  constructor(endpoint: string, token: string) {
    this.endpoint = endpoint;
    this.token = token;
  }

  protected httpPost<R, V extends object>(url: string, data: V, signal?: AbortSignal) {
    if (!this.token) {
      throw new Error('PromptPal: No token found')
    }

    const requestURL = url.startsWith('http') ? url : `${this.endpoint}${url}`;

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


  async execute<P extends string, V extends object>(prompt: P, variables: V, userId?: string) {
    const signal = AbortSignal.timeout(10_000)
    return this.httpPost<APIRunPromptResponse, APIRunPromptPayload<V>>(
      PromptPalClient.executePath.replace('{pid}', prompt),
      {
        variables,
        userId
      },
      signal)
  }
}

export default PromptPalClient