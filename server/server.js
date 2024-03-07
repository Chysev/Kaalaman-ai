import path from "path";
import Fastify from "fastify";
import cors from "@fastify/cors";
import KaalamanAIPromptWrapper from "./promptWrapperChat.js";
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  LlamaChatPromptWrapper,
} from "node-llama-cpp";

// Initialize
const wrapper = new KaalamanAIPromptWrapper();
const fastify = Fastify({
  logger: true,
});

// Cross Origin
fastify.register(cors);

// Models
const Models = {
  llama2_7B_Chat: "llama-2-7b-chat.Q8_0.gguf",
  codellama_7B_Chat: "codellama-7b.Q8_0.gguf",
  mistral: "mistral-7b-openorca.gguf2.Q4_0.gguf",
  orca: "orca-mini-3b-gguf2-q4_0.gguf",
};

// Model Path and new Model define
const model = new LlamaModel({
  modelPath: path.join(process.cwd(), "models", Models.llama2_7B_Chat),
});

// New Chat Session
const context = new LlamaContext({ model });
const session = new LlamaChatSession({
  context,
  promptWrapper: new LlamaChatPromptWrapper(), // If you are using Llama models change this into LlamaChatPromptWrapper
});

fastify.post("/api/kaalaman-turbo", async function handler(request, reply) {
  try {
    const req = request.body.userInput;
    const userInput = req;

    if (!userInput || !req) return;

    const KaalamanAIResponse = await session.prompt(userInput);

    await reply.code(200).send({ KaalamanAIResponse });
  } catch (error) {
    console.error("Error: " + error);
  }
});

try {
  fastify.listen({ port: 3001 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
