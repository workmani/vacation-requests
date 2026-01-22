"use client";

import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { EmployeeDashboard } from "@/components/EmployeeDashboard";
import { ManagerDashboard } from "@/components/ManagerDashboard";

// Helper to check if user is manager-only (not admin)
function isManagerOnly(session: ReturnType<typeof useSession>["data"]) {
  const user = session?.user;
  if (!user) return false;

  const checkRole = (role: string) => role.toUpperCase();

  const isManager =
    (user.role && checkRole(user.role) === "MANAGER") ||
    (user.roles?.some(r => checkRole(r) === "MANAGER"));

  const isAdmin =
    (user.role && checkRole(user.role) === "ADMIN") ||
    (user.roles?.some(r => checkRole(r) === "ADMIN"));

  return isManager && !isAdmin;
}

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Show manager dashboard for manager-only users
  if (isManagerOnly(session)) {
    return <ManagerDashboard />;
  }

  // Show employee dashboard for employees and admins
  return <EmployeeDashboard />;
}
