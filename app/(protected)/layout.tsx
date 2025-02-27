import AllChatsButton from "@/components/AllChatButton";
import AuthButton from "@/components/AuthButton";
import StartChattingButton from "@/components/DeployButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="w-full">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 mb-5">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex space-x-2">
            <StartChattingButton />
            <AllChatsButton />
          </div>
          <AuthButton />
        </div>
      </nav>

      <div className="w-full flex justify-center">
        <div className="w-3/4 flex">{children}</div>
      </div>
    </div>
  );
}
