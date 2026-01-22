import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TeamCalendarClient from "@/components/TeamCalendarClient";

// Helper function to check roles (supports both single role and roles array)
const hasRequiredRole = (user: { role?: string; roles?: string[] } | undefined): boolean => {
  if (!user) return false;

  // Check single role (from mock auth) - case insensitive
  if (user.role) {
    const upperRole = user.role.toUpperCase();
    if (upperRole === "MANAGER" || upperRole === "ADMIN") return true;
  }

  // Check roles array (from Entra ID) - case insensitive
  if (user.roles) {
    return user.roles.some(r => {
      const upperRole = r.toUpperCase();
      return upperRole === "MANAGER" || upperRole === "ADMIN";
    });
  }

  return false;
};

export default async function TeamCalendarPage() {
  const session = await auth();

  if (!session?.user) {
    const callbackUrl = encodeURIComponent("/team-calendar");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  if (!hasRequiredRole(session.user)) {
    console.warn(`User ${session.user?.email} attempted to access /team-calendar without Manager/Admin role.`);
    redirect("/");
  }

  return <TeamCalendarClient />;
} 