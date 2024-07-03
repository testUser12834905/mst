"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { SetStateAction, useState } from "react";

type Props = {
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<SetStateAction<boolean>>;
};

const ChatButton = ({ isSubmitted, setIsSubmitted }: Props) => {
  const onClick = () => {
    console.log("Button clicked!");
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1);
  };

  return (
    <Button
      type="submit"
      className="mt-2"
      onClick={onClick}
      disabled={isSubmitted}
    >
      {isSubmitted && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      Send message
    </Button>
  );
};

export default ChatButton;
