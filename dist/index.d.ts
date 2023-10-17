interface OpenAIConfig {
    readonly apiKey: string;
    readonly organization?: string;
}
interface OpenAIClient extends AsyncDisposable {
    models(): Promise<ReadonlyArray<Model>>;
    close(): Promise<void>;
}
declare const createClient: (config: OpenAIConfig) => OpenAIClient;
interface Model {
    readonly object: string;
    readonly id: string;
    readonly created: Date;
    readonly owned_by: string;
    readonly root: string;
    readonly parent: string | null;
}

export { Model, OpenAIClient, OpenAIConfig, createClient };
