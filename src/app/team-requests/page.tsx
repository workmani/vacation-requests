import { auth } from "@/auth"; // Use v5 auth helper
import { redirect } from "next/navigation";
import TeamRequestsClient from "@/components/TeamRequestsClient";

// Mock data fetch function (replace with your actual data fetching)
async function getTeamRequests() {
  // In a real app, fetch data from your API/database using the session user ID
  // Example: const requests = await prisma.timeOffRequest.findMany({ where: { ... } });
  const requests = [
    {
      id: "req-010",
      employeeName: "Jane Smith",
      employeeEmail: "jane.smith@example.com",
      type: "Vacation",
      startDate: new Date("2023-07-15"),
      endDate: new Date("2023-07-22"),
      status: "pending",
      createdAt: new Date("2023-06-01"),
    },
    {
      id: "req-011",
      employeeName: "Bob Johnson",
      employeeEmail: "bob.johnson@example.com",
      type: "Sick Leave",
      startDate: new Date("2023-06-20"),
      endDate: new Date("2023-06-21"),
      status: "pending",
      createdAt: new Date("2023-06-19"),
    },
    {
      id: "req-012",
      employeeName: "Alice Williams",
      employeeEmail: "alice.williams@example.com",
      type: "Personal",
      startDate: new Date("2023-08-10"),
      endDate: new Date("2023-08-10"),
      status: "approved",
      createdAt: new Date("2023-07-20"),
    },
    {
      id: "req-013",
      employeeName: "Tom Davis",
      employeeEmail: "tom.davis@example.com",
      type: "Vacation",
      startDate: new Date("2023-09-05"),
      endDate: new Date("2023-09-15"),
      status: "denied",
      createdAt: new Date("2023-08-01"),
    },
  ];
  return requests;
}

// Helper function to check roles (keep or move to utils)
const hasRequiredRole = (roles: string[] | undefined): boolean => {
  if (!roles) return false;
  return roles.includes("Manager") || roles.includes("Admin");
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
  if (!hasRequiredRole(session.user?.roles)) {
    console.warn(`User ${session.user?.email} attempted to access /team-requests without Manager/Admin role.`);
    redirect("/"); 
  }

  // Fetch initial data on the server
  const initialRequests = await getTeamRequests();

  // --- Render Client Component --- 
  return <TeamRequestsClient initialRequests={initialRequests} />;
} 