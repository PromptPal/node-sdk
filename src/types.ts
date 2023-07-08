export type ErrorResponse = {
  code: number
  error: string
}

export type APIRunPromptPayload<V extends object> = {
  variables: V
  userId?: string
}

export type APIRunPromptResponse = {
  id: string
  message: string
  tokenCount: number
}