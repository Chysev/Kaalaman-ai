// Defaults
import { ChatPromptWrapper } from "node-llama-cpp";

class KaalamanAIPromptWrapper extends ChatPromptWrapper {
  // Wrapper name
  public readonly wrapperName: string = "KaalamanAIWrapper";
  // Wrap the prompt with appropriate prefixes
  public wrapPrompt(
    prompt: string,
    { systemPrompt, promptIndex }: { systemPrompt: string; promptIndex: number }
  ) {
    if (promptIndex === 0) {
      return "SYSTEM: " + systemPrompt + "USER: " + prompt + "\nKAALAMAN-AI:";
    } else {
      return "USER: " + prompt + "\nKAALAMAN-AI:";
    }
  }

  public getStopStrings(): string[] {
    return ["USER:"];
  }

  public getDefaultStopString(): string {
    return "USER:";
  }
}

export default KaalamanAIPromptWrapper;
