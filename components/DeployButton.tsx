import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function StartChattingButton() {
  return (
    <Link
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href="/chat"
    >
      <ChatBubbleIcon className="mr-1 pt-1" />
      Start Chatting Now
    </Link>
  );
}
