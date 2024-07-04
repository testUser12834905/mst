import Link from "next/link";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

type Props = {
  id: number;
  message: string | undefined;
};

const ChatListItem = ({ id, message }: Props) => {
  const hostDomain = "https://mst-lime.vercel.app";
  const _Link = () => {
    return (
      <>
        {process.env.NODE_ENV === "production" ? (
          <LinkPreview url={`${hostDomain}/chat/${id}`}>{message}</LinkPreview>
        ) : (
          <Link href={`/chat/${id}`}>{message}</Link>
        )}
      </>
    );
  };

  return (
    <li id={String(id)}>
      <_Link />
    </li>
  );
};

export default ChatListItem;
