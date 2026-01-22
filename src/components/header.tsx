"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

// Check if mock auth is enabled (client-side)
const useMockAuth = process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true";

const MOCK_ROLES = [
  { value: "EMPLOYEE", label: "Employee" },
  { value: "MANAGER", label: "Manager" },
  { value: "ADMIN", label: "Admin" },
] as const;

export function Header() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const user = session?.user;
  const roles = user?.roles ?? [];
  const currentRole = user?.role ?? "ADMIN";

  const [mockRole, setMockRole] = useState<string>(currentRole);

  // Keep mockRole in sync with session role
  useEffect(() => {
    setMockRole(currentRole);
  }, [currentRole]);

  // Auto sign-in for mock auth mode
  useEffect(() => {
    if (useMockAuth && status === "unauthenticated") {
      signIn("credentials", { redirect: false });
    }
  }, [status]);

  const handleRoleSwitch = async (newRole: string) => {
    try {
      const response = await fetch("/api/mock-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        setMockRole(newRole);
        // Update session and refresh
        await update();
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to switch role:", error);
    }
  };

  // Display role - prefer single role for mock, array for Entra
  const displayRole = useMockAuth
    ? mockRole
    : (roles.length > 0 ? roles.join(", ") : currentRole);

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Vacation Request App - POC</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {status === "loading" && (
            <div className="text-sm text-gray-500">Loading...</div>
          )}

          {status === "authenticated" && user && (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User avatar"} />
                    <AvatarFallback>
                      {user.name
                        ? `${user.name.charAt(0)}${user.name.split(' ')[1]?.charAt(0) ?? ''}`
                        : user.email?.charAt(0).toUpperCase() ?? 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{user.name ?? user.email}</span>
                    {displayRole && (
                       <span className="text-xs text-muted-foreground">{displayRole}</span>
                    )}
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>

                {/* Mock Auth Role Switcher */}
                {useMockAuth && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <Users className="mr-2 h-4 w-4" />
                        Switch Role
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={mockRole} onValueChange={handleRoleSwitch}>
                          {MOCK_ROLES.map((role) => (
                            <DropdownMenuRadioItem key={role.value} value={role.value}>
                              {role.label}
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {status === "unauthenticated" && !useMockAuth && (
            <Button size="sm" onClick={() => signIn("azure-ad")}>Sign in</Button>
          )}
        </div>
      </div>
    </header>
  );
}
