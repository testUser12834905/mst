import { SubmitButton } from "@/app/login/submit-button";

const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/chat",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTAxNDEwMTMtNmFkNi00MzdkLWIyNjctNWVhN2MxYTA4MmE0IiwidHlwZSI6ImFwaV90b2tlbiJ9.cq8gsTaKys6vLEwMOKb_y08b250eUHii6uhgNNPb3Ek",
  },
  data: {
    providers: "openai",
    text: "Hello i need your help ! ",
    chatbot_global_action: "Act as an assistant",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
  },
};

const SubmitAiChat = async (
  text: string,
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
      previous_history: [],
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
