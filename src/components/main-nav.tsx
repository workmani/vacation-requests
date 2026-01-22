"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calendar, Clock, FileText, Home, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";

// Helper to check roles (supports both single role string and roles array)
function hasRole(session: ReturnType<typeof useSession>["data"], ...roleNames: string[]) {
  const user = session?.user;
  if (!user) return false;

  // Check single role (from mock auth)
  if (user.role && roleNames.some(r => r.toUpperCase() === user.role?.toUpperCase())) {
    return true;
  }

  // Check roles array (from Entra ID)
  if (user.roles && user.roles.some(r => roleNames.some(rn => rn.toUpperCase() === r.toUpperCase()))) {
    return true;
  }

  return false;
}

export function MainNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const isManager = hasRole(session, "Manager", "MANAGER");
  const isAdmin = hasRole(session, "Admin", "ADMIN");
  // For POC: Managers (who are not also admins) cannot create requests
  const isManagerOnly = isManager && !isAdmin;

  // For POC: Managers only see Dashboard + Manager section
  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    // Only show these for employees and admins (not manager-only users)
    ...(!isManagerOnly ? [
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
    ] : []),
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