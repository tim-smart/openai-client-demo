import * as internal from "./internal/OpenAi"
import { Model } from "./internal/OpenAi"

export { Model, ModelId } from "./internal/OpenAi"

export interface OpenAIConfig {
  readonly apiKey: string
  readonly organization?: string
}

export interface OpenAIClient {
  models(): Promise<ReadonlyArray<Model>>
}

export const createClient: (config: OpenAIConfig) => OpenAIClient =
  internal.createClient
