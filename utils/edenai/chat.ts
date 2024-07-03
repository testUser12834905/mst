import { SubmitButton } from "@/app/login/submit-button";

export type ChatResponse = {
  status: string;
  generated_text: string;
  message: ChatMessage[];
  cost: number;
};

export type ChatMessage = {
  role: "user" | "system";
  message: string;
};

const SubmitAiChat = async (
  text: string,
  history?: ChatMessage[],
  providers: string = "openai/gpt-3.5-turbo",
) => {
  return fetch("https://api.edenai.run/v2/text/chat", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.EDEN_AI_API}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      providers: providers,
      text: text,
      chatbot_global_action: "Act as an assistant",
      previous_history: history ?? [],
      temperature: 0.0,
      max_tokens: 150,
    }),
  }).then((res) => res.json());
};

export default SubmitAiChat;

export const data = {
  providers: "openai",
  text: "Hello i need your help ! ",
  chatbot_global_action: "Act as an assistant",
  previous_history: [],
  temperature: 0.0,
  max_tokens: 150,
};
