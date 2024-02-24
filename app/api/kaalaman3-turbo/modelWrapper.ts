// Defaults
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";

// Components
import KaalamanAIPromptWrapper from "../promptWrapperChat";
const wrapper: KaalamanAIPromptWrapper = new KaalamanAIPromptWrapper();

// 3-turbo
const models = {
  orca: "orca-mini-3b-gguf2-q4_0.gguf",
  falcon: "gpt4all-falcon-newbpe-q4_0.gguf",
};

// Model Path and new Model define
const model = new LlamaModel({
  modelPath: path.join(process.cwd(), "model", models.orca),
  gpuLayers: 1000,
});

// New Chat Session
const context = new LlamaContext({ model });
const session = new LlamaChatSession({
  context,
  promptWrapper: wrapper,
});

export default session;
