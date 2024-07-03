import React from "react";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mt-6">
      <h1 className="text-9xl font-extrabold">
        Ch<span className="inline-block translate-y-8">**</span>GPT
      </h1>
      {children}
    </div>
  );
}
