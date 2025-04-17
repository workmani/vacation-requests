"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const roles = user?.roles ?? [];

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Vacation Request App</span>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name ?? user.email}</span>
                    {roles.length > 0 && (
                       <span className="text-xs text-muted-foreground">{roles.join(', ')}</span>
                    )}
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {status === "unauthenticated" && (
            <Button size="sm" onClick={() => signIn("azure-ad")}>Sign in</Button>
          )}
        </div>
      </div>
    </header>
  );
} 