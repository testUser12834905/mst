import { DropdownMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AllChatsButton() {
  return (
    <Link
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href="/chat/all"
    >
      <DropdownMenuIcon className="mr-1 pt-1" />
      All Chats
    </Link>
  );
}
