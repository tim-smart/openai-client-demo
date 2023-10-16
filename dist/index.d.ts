import * as effect_Context from 'effect/Context';
import * as effect_Effect from 'effect/Effect';
import * as effect_Runtime from 'effect/Runtime';
import * as effect_Scope from 'effect/Scope';
import * as effect_Data from 'effect/Data';
import * as effect_Brand from 'effect/Brand';
import * as _effect_schema_ParseResult from '@effect/schema/ParseResult';
import * as Http from '@effect/platform-node/HttpClient';
import * as Schema from '@effect/schema/Schema';

interface OpenAIConfig {
    readonly apiKey: string;
    readonly organization?: string;
}
declare const make: (config: OpenAIConfig) => effect_Effect.Effect<Http.client.Client.Default, never, {
    readonly models: effect_Effect.Effect<never, Http.error.HttpClientError | _effect_schema_ParseResult.ParseError, readonly Model[]>;
}>;
interface OpenAI extends effect_Effect.Effect.Success<ReturnType<typeof make>> {
}
declare const OpenAI: effect_Context.Tag<OpenAI, OpenAI>;
declare const ModelId: Schema.BrandSchema<string, string & effect_Brand.Brand<"ModelId">>;
type ModelId = Schema.Schema.To<typeof ModelId>;
declare const Model_base: Schema.Class<{
    readonly object: string;
    readonly id: string;
    readonly created: number;
    readonly owned_by: string;
    readonly root: string;
    readonly parent: string | null;
}, {
    readonly object: string;
    readonly id: string & effect_Brand.Brand<"ModelId">;
    readonly created: Date;
    readonly owned_by: string;
    readonly root: string;
    readonly parent: string | null;
}, Model, effect_Data.Case>;
declare class Model extends Model_base {
}

declare const OpenAIClient_base: {
    new (config: OpenAIConfig): {
        "__#1@#scope": effect_Scope.CloseableScope;
        "__#1@#runtime": effect_Effect.Effect<never, never, effect_Runtime.Runtime<OpenAI>>;
        close(): Promise<void>;
        $effect<E, A>(effect: effect_Effect.Effect<OpenAI, E, A>): Promise<A>;
        $effectFn<F extends (...args: any[]) => effect_Effect.Effect<OpenAI, any, any>>(fn: F): (...args: Parameters<F>) => Promise<effect_Effect.Effect.Success<ReturnType<F>>>;
        $service<I extends OpenAI, S, A_1>(tag: effect_Context.Tag<I, S>, fn: (service: S) => effect_Effect.Effect<OpenAI, unknown, A_1>): () => Promise<A_1>;
        $serviceFn<I_1 extends OpenAI, S_1, F_1 extends (...args: any[]) => effect_Effect.Effect<OpenAI, any, any>>(tag: effect_Context.Tag<I_1, S_1>, fn: (service: S_1) => F_1): (...args: Parameters<F_1>) => Promise<effect_Effect.Effect.Success<ReturnType<F_1>>>;
        [Symbol.asyncDispose](): Promise<void>;
        [Symbol.dispose](): void;
    };
};
declare class OpenAIClient extends OpenAIClient_base {
    constructor(config: OpenAIConfig);
    models: () => Promise<readonly Model[]>;
}

export { Model, ModelId, OpenAIClient, OpenAIConfig };
