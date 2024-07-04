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
      <Link
        className="flex items-center gap-4 rounded-md p-3 hover:bg-muted transition-colors border border-input"
        href={`/chat/${id}`}
      >
        <div className="flex-1 truncate">{message}</div>
      </Link>
    </li>
  );
};

export default ChatListItem;
