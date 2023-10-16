import { Model, OpenAI, OpenAILive } from "./internal/OpenAi"
import { RuntimeClass } from "./internal/RuntimeClass"

export { OpenAIConfig, Model, ModelId } from "./internal/OpenAi"

export class OpenAIClient extends RuntimeClass(OpenAILive) {
  models: () => Promise<readonly Model[]> = this.$service(OpenAI, _ => _.models)
}
