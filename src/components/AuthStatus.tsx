"use client";

import { useSession, signIn, signOut } from "next-auth/react";
// Assuming you have a Button component from shadcn/ui
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
        <Button variant="outline" size="sm" onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500">Not signed in</span>
      {/* Note: We specify 'azure-ad' to hint which provider to use */}
      {/* If you only have one provider, signIn() without args also works */}
      <Button size="sm" onClick={() => signIn("azure-ad")}>Sign in</Button>
    </div>
  );
} 