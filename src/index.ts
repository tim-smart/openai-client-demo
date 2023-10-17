import * as internal from "./internal/OpenAi"

export interface OpenAIConfig {
  readonly apiKey: string
  readonly organization?: string
}

export interface OpenAIClient extends AsyncDisposable {
  models(): Promise<ReadonlyArray<Model>>
  close(): Promise<void>
}

export const createClient: (config: OpenAIConfig) => OpenAIClient =
  internal.createClient

export interface Model {
  readonly object: string
  readonly id: string
  readonly created: Date
  readonly owned_by: string
  readonly root: string
  readonly parent: string | null
}
