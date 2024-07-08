export type ErrorResponse = {
  code: number;
  error: string;
};

export type APIRunPromptPayload<V extends object> = {
  variables: V;
  userId?: string;
};

export type APIRunPromptResponse = {
  id: string;
  message: string;
  tokenCount: number;
};

export interface StreamEvents<C extends object> {
  onData(chunk: C): Promise<C>;
  onEnd(chunk?: C): Promise<C>;
}

/**
 * the `promptpal.yaml` configuration type
 * ```ts
 * import { type Configuration } from "@prompt-pal/node-sdk"
 * import { parse } from "@std/yaml"
 * const config = parse(await Deno.readTextFile("./promptpal.yml")) as Configuration
 * ```
 */
export type Configuration = {
  input: {
    http?: {
      url: string;
      token: string;
    };
  };
  output: {
    schema: string;
    go_types?: {
      prefix: string;
      package_name: string;
      output: string;
    };
    typescript_types?: {
      prefix: string;
      output: string;
    };
  };
};

export type RuntimeOptions = {
  /**
   * runtime cache for the PromptPal Node.js SDK
   *
   * @default Map struct
   * if `null`, the cache is disabled
   * you also can use any implementation that implements the `Cache` interface
   */
  cache?: Cache | null;
  defaultTimeout?: number;
};

/**
 * cache interface
 * default is a `Map`
 */
export interface Cache {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
  has(key: string): boolean;
  delete(key: string): void;
  clear(): void;
}
