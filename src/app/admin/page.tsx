import { auth } from "@/auth"; // Import the v5 auth helper
import { redirect } from "next/navigation";

export default async function AdminPage() {
  // 1. Get the session on the server using the v5 auth() helper
  const session = await auth();

  // 2. Check if user is authenticated
  if (!session?.user) { // Check session and session.user
    // Redirect to sign-in page, preserving the intended destination
    const callbackUrl = encodeURIComponent("/admin");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  // 3. Check if the user has the required role (case-sensitive)
  // Access roles via session.user (ensure type is extended in next-auth.d.ts)
  if (!(session.user as any)?.roles?.includes("Admin")) { 
    // Redirect to a generic "Unauthorized" page or the home page
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