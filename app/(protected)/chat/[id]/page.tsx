import { createClient } from "@/utils/supabase/server";
import SubmitAiChat, { ChatMessage, ChatResponse } from "@/utils/edenai/chat";
import React from "react";
import { cn } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import ChatForm from "../../../../components/chat-form";

const ChatId = async ({ params: { id } }: { params: { id: string } }) => {
  const supabase = createClient();
  const { data: chat } = await supabase.from("chats").select("*").eq("id", id);

  if (!chat) {
    return <p>Error...</p>;
  }

  const messages: ChatMessage[] = JSON.parse(chat[0]["text"]);

  async function sendMessage(formData: FormData) {
    "use server";

    const history = messages;
    const chatMessage = formData.get("chat");

    console.log("caht is: ", chat);

    if (!chatMessage) return;

    const provider = "openai/gpt-3.5-turbo";
    const d = (await SubmitAiChat(
      chatMessage as string,
      history,
      provider,
    )) as {
      [provider: string]: ChatResponse;
    };

    console.log(d[provider]);

    const supabase = createClient();
    const res = await supabase
      .from("chats")
      .update({ text: JSON.stringify([...messages, ...d[provider].message]) })
      .eq("id", id);

    console.log(res);

    revalidatePath(`/chat/${id}`);
    //
    //
    // SUBMIT MESSAGE
    // GET RESPONSE
    // SEND response to UI??
  }

  return (
    <>
      {/* {chat[0]["text"]} */}
      {messages.map((message) => {
        return (
          <>
            <p
              className={cn(
                "p-2 my-1 border-[2px] bg-opacity-10",
                message.role === "user"
                  ? "border-blue-500 bg-blue-800"
                  : "border-green-500 bg-green-800",
              )}
            >
              {message.message}
            </p>
          </>
        );
      })}
      <ChatForm sendMessage={sendMessage} />
    </>
  );
};

export default ChatId;
