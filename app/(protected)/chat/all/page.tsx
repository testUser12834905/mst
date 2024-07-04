import ChatListItem from "@/components/ChatListItem";
import { ChatMessage } from "@/utils/edenai/chat";
import { createClient } from "@/utils/supabase/server";
import React from "react";

type Props = {};

const AllChatsPage = async (props: Props) => {
  const supabase = createClient();
  const { data: chats } = await supabase.from("chats").select("*");

  if (!chats) {
    return <p>Error...</p>;
  }

  return (
    <ul className="flex flex-col space-y-3">
      {chats.map((chat) => {
        let messages: ChatMessage[] | undefined;
        try {
          messages = JSON.parse(chat["text"]);
        } catch (error) {}

        return (
          <>
            {messages ? (
              <ChatListItem id={chat["id"]} message={messages?.[0].message} />
            ) : (
              <></>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default AllChatsPage;
