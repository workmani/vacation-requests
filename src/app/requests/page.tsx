"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Calendar, Filter, Loader2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Helper to check if user is manager-only (not admin)
function isManagerOnly(session: ReturnType<typeof useSession>["data"]) {
  const user = session?.user;
  if (!user) return false;

  const checkRole = (role: string) => role.toUpperCase();

  // Check if user is a manager
  const isManager =
    (user.role && checkRole(user.role) === "MANAGER") ||
    (user.roles?.some(r => checkRole(r) === "MANAGER"));

  // Check if user is also an admin
  const isAdmin =
    (user.role && checkRole(user.role) === "ADMIN") ||
    (user.roles?.some(r => checkRole(r) === "ADMIN"));

  return isManager && !isAdmin;
}

interface TimeOffRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
  notes?: string;
}

// Map database enum values to display labels
const TYPE_LABELS: Record<string, string> = {
  VACATION: "Vacation",
  SICK: "Sick Leave",
  PERSONAL: "Personal",
};

export default function RequestsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [filter, setFilter] = useState("all");
  const [requests, setRequests] = useState<TimeOffRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect managers (who are not admins) away from this page
  useEffect(() => {
    if (status === "authenticated" && isManagerOnly(session)) {
      router.replace("/team-requests");
    }
  }, [status, session, router]);

  useEffect(() => {
    async function fetchRequests() {
      // Don't fetch if user is a manager-only (they'll be redirected)
      if (status === "authenticated" && isManagerOnly(session)) {
        return;
      }

      try {
        const response = await fetch("/api/requests");
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        const data = await response.json();
        setRequests(data.requests || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load requests");
      } finally {
        setIsLoading(false);
      }
    }

    if (status === "authenticated") {
      fetchRequests();
    }
  }, [status, session]);

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => req.status.toLowerCase() === filter);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Requests</h1>
          <Button asChild>
            <Link href="/requests/new">New Request</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Requests</h1>
          <Button asChild>
            <Link href="/requests/new">New Request</Link>
          </Button>
        </div>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-8 text-center">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Requests</h1>
        <Button asChild>
          <Link href="/requests/new">New Request</Link>
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          variant={filter === "approved" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("approved")}
        >
          Approved
        </Button>
        <Button
          variant={filter === "rejected" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("rejected")}
        >
          Denied
        </Button>
      </div>

      <div className="space-y-4">
        {filteredRequests.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Filter className="h-10 w-10 text-muted-foreground" />
              <h3 className="mt-2 text-lg font-semibold">No requests found</h3>
              <p className="text-sm text-muted-foreground">
                {requests.length === 0
                  ? "You haven't submitted any time off requests yet."
                  : "Try changing your filter or create a new request."}
              </p>
              {requests.length === 0 && (
                <Button asChild className="mt-4">
                  <Link href="/requests/new">Create Your First Request</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              id={request.id}
              type={TYPE_LABELS[request.type] || request.type}
              startDate={new Date(request.startDate)}
              endDate={new Date(request.endDate)}
              status={request.status.toLowerCase()}
              createdAt={new Date(request.createdAt)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function RequestCard({
  id,
  type,
  startDate,
  endDate,
  status,
  createdAt,
}: {
  id: string;
  type: string;
  startDate: Date;
  endDate: Date;
  status: string;
  createdAt: Date;
}) {
  const statusVariants: Record<
    string,
    { variant: "default" | "outline" | "secondary" | "destructive"; label: string }
  > = {
    pending: { variant: "outline", label: "Pending" },
    approved: { variant: "default", label: "Approved" },
    rejected: { variant: "destructive", label: "Denied" },
    cancelled: { variant: "secondary", label: "Cancelled" },
  };

  const statusConfig = statusVariants[status] || statusVariants.pending;

  return (
    <Card className="hover:shadow-sm transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Calendar className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="font-medium">{type}</h3>
              <p className="text-sm text-muted-foreground">
                {formatDate(startDate)} - {formatDate(endDate)}
              </p>
              <p className="text-xs text-muted-foreground">
                Requested on {formatDate(createdAt)}
              </p>
            </div>
          </div>
          <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
