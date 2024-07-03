"use client";
import { Textarea } from "@/components/ui/textarea";
import ChatButton from "./chat-button";
import { useState } from "react";

type Props = {
  sendMessage: (formDate: FormData) => Promise<void>;
};

const ChatForm = ({ sendMessage }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<undefined | string>(undefined);

  const handleSubmission = async (formData: FormData) => {
    await sendMessage(formData);
    setMessage("");
    setIsSubmitting(false);
  };
  return (
    <form action={handleSubmission} method="POST">
      <Textarea
        name="chat"
        className="w-full"
        disabled={isSubmitting}
        value={message}
        style={{ resize: "none" }}
        onChange={(e) => {
          // @ts-ignore
          setMessage(e.target.value);
        }}
        placeholder="Type your message here."
      />
      <ChatButton isSubmitted={isSubmitting} setIsSubmitted={setIsSubmitting} />
    </form>
  );
};

export default ChatForm;
