import Link from "next/link";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

type Props = {
  id: number;
  message: string | undefined;
};

const ChatListItem = ({ id, message }: Props) => {
  return (
    <li id={String(id)}>
      <Link href={`/chat/${id}`}>{message}</Link>
    </li>
  );
};

export default ChatListItem;
