// Defaults
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

// Components
import KaalamanAIPromptWrapper from "../promptWrapperChat";
const wrapper: KaalamanAIPromptWrapper = new KaalamanAIPromptWrapper();

// 4-turbo
const models = {
  mistral: "mistral-7b-openorca.Q4_0.gguf",
  dolphin: "dolphin-2.1-mistral-7b.Q2_K.gguf",
  llama: "codellama-7b.Q8_0.gguf",
};

// Model Path and new Model define
const model = new LlamaModel({
  modelPath: path.join(process.cwd(), "model", models.mistral),
  gpuLayers: 1000,
});

// New Chat Session
const context = new LlamaContext({ model });
const session = new LlamaChatSession({
  context,
  promptWrapper: wrapper,
});

export default session;
