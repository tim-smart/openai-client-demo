import * as Http from "@effect/platform-node/HttpClient"
import * as Schema from "@effect/schema/Schema"
import * as Context from "effect/Context"
import * as Effect from "effect/Effect"
import { flow, identity } from "effect/Function"
import * as Layer from "effect/Layer"

export interface OpenAIConfig {
  readonly apiKey: string
  readonly organization?: string
}

const make = (config: OpenAIConfig) =>
  Effect.gen(function* (_) {
    const client = (yield* _(Http.client.Client)).pipe(
      Http.client.mapRequest(
        flow(
          Http.request.prependUrl("https://api.openai.com/v1"),
          Http.request.bearerToken(config.apiKey),
          config.organization
            ? Http.request.setHeader("OpenAI-Organization", config.organization)
            : identity,
        ),
      ),
    )

    const models = Http.request.get("/models").pipe(
      client,
      Effect.flatMap(Http.response.schemaBodyJson(ListResult(Model))),
      Effect.map(_ => _.data),
    )

    return { models } as const
  })

export interface OpenAI
  extends Effect.Effect.Success<ReturnType<typeof make>> {}
export const OpenAI = Context.Tag<OpenAI>("openai-demo/OpenAI")
export const OpenAILive = (config: OpenAIConfig) =>
  Layer.effect(OpenAI, make(config)).pipe(Layer.use(Http.client.layer))

// schemas

const DateFromUnixTime = Schema.Int.pipe(
  Schema.transform(
    Schema.DateFromSelf,
    _ => new Date(_ * 1000),
    _ => Math.floor(_.getTime() / 1000),
  ),
)

const ListResult = <I, A>(schema: Schema.Schema<I, A>) =>
  Schema.struct({
    object: Schema.string,
    data: Schema.array(schema),
    has_more: Schema.optional(Schema.boolean).withDefault(() => false),
  })

export const ModelId = Schema.NonEmpty.pipe(Schema.brand("ModelId"))
export type ModelId = Schema.Schema.To<typeof ModelId>

export class Model extends Schema.Class<Model>()({
  id: ModelId,
  object: Schema.string,
  created: DateFromUnixTime,
  owned_by: Schema.string,
  root: Schema.string,
  parent: Schema.nullable(Schema.string),
}) {}
