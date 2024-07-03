import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { Textarea } from "@/components/ui/textarea";
import SubmitAiChat, { data } from "@/utils/edenai/chat";
import React from "react";

const Chat = async () => {
  async function sendMessage(formDate: FormData) {
    "use server";
    const d = await SubmitAiChat(data);
    console.log(d);

    const supabase = createClient();
    const res = await supabase
      .from("chats")
      .upsert({ text: "sample text upsert" })
      .select();

    console.log(res);
    // SUBMIT MESSAGE
    // GET RESPONSE
    // SEND response to UI??
  }

  const supabase = createClient();
  const { data: chat } = await supabase.from("chats").select("*").eq("id", "1");

  if (!chat) {
    return <p>Error...</p>;
  }

  // console.log(chat);
  return (
    <div className="w-full mt-6">
      <h1 className="text-9xl font-extrabold">ChiiGPT</h1>

      {chat[0]["text"]}
      <form action={sendMessage} method="POST">
        <Textarea
          className="w-full"
          disabled={false}
          style={{ resize: "none" }}
          placeholder="Type your message here."
        />
        <Button type="submit" className="mt-2">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default Chat;
