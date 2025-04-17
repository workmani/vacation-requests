import { getServerSession } from "next-auth/next";
// Adjust the import path based on your project structure if needed
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
import { redirect } from "next/navigation";

export default async function AdminPage() {
  // 1. Get the session on the server
  const session = await getServerSession(authOptions);

  // 2. Check if user is authenticated
  if (!session) {
    // Redirect to sign-in page, preserving the intended destination
    const callbackUrl = encodeURIComponent("/admin");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  // 3. Check if the user has the required role (case-sensitive)
  if (!session.user?.roles?.includes("Admin")) {
    // Redirect to a generic "Unauthorized" page or the home page
    // We'll redirect to home page for now
    // Consider creating a dedicated /unauthorized page later
    console.warn(`User ${session.user?.email} attempted to access /admin without Admin role.`);
    redirect("/"); 
  }

  // 4. If all checks pass, render the protected content
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, Administrator!</p>
      <p>This page is protected and only visible to users with the "Admin" role.</p>
      {/* Add your admin-specific components and content here */}
    </div>
  );
} 