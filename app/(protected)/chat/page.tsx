import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { Textarea } from "@/components/ui/textarea";
import SubmitAiChat, { ChatResponse, data } from "@/utils/edenai/chat";
import React from "react";
import { redirect } from "next/navigation";
import ChatButton from "../../../components/chat-button";
import ChatForm from "@/components/chat-form";

const Chat = async () => {
  async function sendMessage(formData: FormData) {
    "use server";
    const chatMessage = formData.get("chat");

    if (!chatMessage) return;

    const provider = "openai/gpt-3.5-turbo";
    const d = (await SubmitAiChat(
      chatMessage as string,
      undefined,
      provider,
    )) as {
      [provider: string]: ChatResponse;
    };

    const supabase = createClient();
    const res = await supabase
      .from("chats")
      .upsert({ text: JSON.stringify(d[provider].message) })
      .select();

    const id = res.data?.[0].id;
    redirect(`chat/${id}`);
  }

  return (
    <>
      <ChatForm sendMessage={sendMessage} />
    </>
  );
};

export default Chat;
