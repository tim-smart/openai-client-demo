import * as effect_Data from 'effect/Data';
import * as effect_Brand from 'effect/Brand';
import * as Schema from '@effect/schema/Schema';

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

interface OpenAIConfig {
    readonly apiKey: string;
    readonly organization?: string;
}
interface OpenAIClient {
    models(): Promise<ReadonlyArray<Model>>;
}
declare const createClient: (config: OpenAIConfig) => OpenAIClient;

export { Model, ModelId, OpenAIClient, OpenAIConfig, createClient };
