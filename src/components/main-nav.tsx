"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calendar, Clock, FileText, Home, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";

export function MainNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const roles = session?.user?.roles ?? [];
  const isManager = roles.includes("Manager");
  const isAdmin = roles.includes("Admin");

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/requests",
      label: "My Requests",
      icon: FileText,
      active: pathname === "/requests" || pathname.startsWith("/requests/"),
    },
    {
      href: "/calendar",
      label: "Calendar",
      icon: Calendar,
      active: pathname === "/calendar",
    },
    {
      href: "/balances",
      label: "Time Off Balances",
      icon: Clock,
      active: pathname === "/balances",
    },
  ];

  const managerRoutes = [
    {
      href: "/team-requests",
      label: "Team Requests",
      icon: Users,
      active: pathname === "/team-requests",
    },
    {
      href: "/team-calendar",
      label: "Team Calendar",
      icon: Calendar,
      active: pathname === "/team-calendar",
    },
  ];

  const adminRoutes = [
    {
      href: "/admin",
      label: "Admin Settings",
      icon: ShieldCheck,
      active: pathname === "/admin" || pathname.startsWith("/admin/"),
    },
  ];

  if (status === "loading") {
    return <nav className="flex flex-col space-y-1">{/* Loading Skeleton */}</nav>;
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <nav className="flex flex-col space-y-1">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={route.active ? "default" : "ghost"}
          className={cn(
            "justify-start",
            route.active ? "font-medium" : "font-normal"
          )}
          asChild
        >
          <Link href={route.href}>
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </Link>
        </Button>
      ))}
      
      {(isManager || isAdmin) && (
        <>
          <Separator className="my-2" />
          <div className="px-3 py-2">
            <h2 className="mb-2 text-xs font-semibold text-muted-foreground">Manager</h2>
            {managerRoutes.map((route) => (
              <Button
                key={route.href}
                variant={route.active ? "default" : "ghost"}
                className={cn(
                  "justify-start w-full",
                  route.active ? "font-medium" : "font-normal"
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </>
      )}

      {isAdmin && (
        <>
          <Separator className="my-2" />
          <div className="px-3 py-2">
            <h2 className="mb-2 text-xs font-semibold text-muted-foreground">Admin</h2>
            {adminRoutes.map((route) => (
              <Button
                key={route.href}
                variant={route.active ? "default" : "ghost"}
                className={cn(
                  "justify-start w-full",
                  route.active ? "font-medium" : "font-normal"
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </>
      )}
    </nav>
  );
} 