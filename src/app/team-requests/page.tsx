import { auth } from "@/auth"; // Use v5 auth helper
import { redirect } from "next/navigation";
import TeamRequestsClient from "@/components/TeamRequestsClient";

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

// This is now an async Server Component
export default async function TeamRequestsPage() {
  // --- Server-Side Logic ---
  const session = await auth(); // Get session using v5 helper

  if (!session?.user) { // Check for session and user
    const callbackUrl = encodeURIComponent("/team-requests");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  // Check roles from the session user
  if (!hasRequiredRole(session.user)) {
    console.warn(`User ${session.user?.email} attempted to access /team-requests without Manager/Admin role.`);
    redirect("/");
  }

  // --- Render Client Component (fetches its own data) ---
  return <TeamRequestsClient />;
} 