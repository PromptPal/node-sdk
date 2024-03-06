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

/** 
 * the `promptpal.yaml` configuration type
 * ```ts
 * import { Configuration } from "@prompt-pal/node-sdk"
 * import { parse } from "@std/yaml"
 * const config = parse(await Deno.readTextFile("./promptpal.yml")) as Configuration
 * ```
 */
export type Configuration = {
  input: {
    http?: {
      url: string
      token: string
    }
  }
  output: {
    schema: string
    go_types?: {
      prefix: string
      package_name: string
      output: string
    }
    typescript_types?: {
      prefix: string
      output: string
    }
  }
}