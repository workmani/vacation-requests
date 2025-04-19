import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Helper function to check roles for better readability
const hasRequiredRole = (roles: string[] | undefined): boolean => {
  if (!roles) return false;
  return roles.includes("Manager") || roles.includes("Admin");
};

export default async function TeamCalendarPage() {
  const session = await auth();

  if (!session?.user) {
    const callbackUrl = encodeURIComponent("/team-calendar");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  if (!hasRequiredRole(session.user?.roles)) {
    console.warn(`User ${session.user?.email} attempted to access /team-calendar without Manager/Admin role.`);
    redirect("/"); // Redirect non-managers/admins to home
  }

  // Render manager-specific content
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Team Calendar</h1>
      <p className="text-muted-foreground">
        View your team&apos;s time off schedule to help with planning and availability.
      </p>
      
      <Card className="border-dashed">
        <CardContent className="flex h-[600px] items-center justify-center">
          <Alert>
            <AlertDescription>
              Team calendar functionality coming soon...
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-blue-400"></div>
            <span className="text-sm">Vacation</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-400"></div>
            <span className="text-sm">Sick Leave</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-amber-400"></div>
            <span className="text-sm">Personal</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-red-400"></div>
            <span className="text-sm">Holiday</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 