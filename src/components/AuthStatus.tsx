"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-sm text-gray-500">Loading...</div>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Signed in as {session.user?.email}
        </span>
        <form action={async () => {
          await signOut();
        }}>
          <Button type="submit" variant="outline" size="sm">Sign out</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500">Not signed in</span>
      <form action={async () => {
        await signIn("microsoft-entra-id");
      }}>
        <Button type="submit" size="sm">Sign in</Button>
      </form>
    </div>
  );
} 