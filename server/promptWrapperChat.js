// Defaults
import { ChatPromptWrapper } from "node-llama-cpp";

// Modify accordance to model prompt
class KaalamanAIPromptWrapper extends ChatPromptWrapper {
  constructor() {
    super();
    // Wrapper name
    this.wrapperName = "KaalamanAIWrapper";
  }

  // Wrap the prompt with appropriate prefixes
  wrapPrompt(prompt, { systemPrompt, promptIndex }) {
    if (promptIndex === 0) {
      return "SYSTEM: " + systemPrompt + "USER: " + prompt + "\nASSISTANT:";
    } else {
      return "USER: " + prompt + "\nASSISTANT:";
    }
  }

  getStopStrings() {
    return ["USER:"];
  }

  getDefaultStopString() {
    return "USER:";
  }
}

export default KaalamanAIPromptWrapper;
