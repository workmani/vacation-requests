import { auth } from "@/auth"; // Import the v5 auth helper
import { redirect } from "next/navigation";

// Helper function to check if user has admin role
function isAdmin(user: { role?: string; roles?: string[] } | undefined): boolean {
  if (!user) return false;

  // Check single role (from mock auth) - case insensitive
  if (user.role?.toUpperCase() === "ADMIN") return true;

  // Check roles array (from Entra ID) - case insensitive
  if (user.roles?.some(r => r.toUpperCase() === "ADMIN")) return true;

  return false;
}

export default async function AdminPage() {
  // 1. Get the session on the server using the v5 auth() helper
  const session = await auth();

  // 2. Check if user is authenticated
  if (!session?.user) {
    const callbackUrl = encodeURIComponent("/admin");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  // 3. Check if the user has the required role
  if (!isAdmin(session.user)) {
    console.warn(`User ${session.user?.email} attempted to access /admin without Admin role.`);
    redirect("/");
  }

  // 4. If all checks pass, render the protected content
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, Administrator! (User: {session.user.name ?? session.user.email})</p>
      <p>This page is protected and only visible to users with the &quot;Admin&quot; role.</p>
      <pre className="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
} 