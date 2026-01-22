"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Users, Calendar, Clock, CheckCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface TeamRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
    email: string;
  };
}

const TYPE_LABELS: Record<string, string> = {
  VACATION: "Vacation",
  SICK: "Sick Leave",
  PERSONAL: "Personal",
};

export function ManagerDashboard() {
  const [requests, setRequests] = useState<TeamRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeamRequests() {
      try {
        const response = await fetch("/api/requests/team?limit=50");
        if (!response.ok) {
          throw new Error("Failed to fetch team requests");
        }
        const data = await response.json();
        setRequests(data.requests || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load team requests");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeamRequests();
  }, []);

  // Calculate stats from requests
  const pendingRequests = requests.filter(r => r.status === "PENDING");
  const approvedRequests = requests.filter(r => r.status === "APPROVED");

  // Calculate team members out this week and next week
  const now = new Date();
  const endOfThisWeek = new Date(now);
  endOfThisWeek.setDate(now.getDate() + (7 - now.getDay()));
  const endOfNextWeek = new Date(endOfThisWeek);
  endOfNextWeek.setDate(endOfThisWeek.getDate() + 7);

  const outThisWeek = approvedRequests.filter(r => {
    const start = new Date(r.startDate);
    const end = new Date(r.endDate);
    return start <= endOfThisWeek && end >= now;
  });

  const outNextWeek = approvedRequests.filter(r => {
    const start = new Date(r.startDate);
    const end = new Date(r.endDate);
    return start <= endOfNextWeek && end > endOfThisWeek;
  });

  // Get unique team members who are out
  const uniqueOutThisWeek = new Set(outThisWeek.map(r => r.user.id)).size;
  const uniqueOutNextWeek = new Set(outNextWeek.map(r => r.user.id)).size;

  // Recent requests (last 5)
  const recentRequests = [...requests]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Manager Dashboard</h1>
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Manager Dashboard</h1>
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Manager Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Pending Approvals */}
        <Card className={pendingRequests.length > 0 ? "border-amber-200 bg-amber-50" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-amber-100 shrink-0">
                <Clock className="h-5 w-5 text-amber-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold">{pendingRequests.length}</p>
              </div>
            </div>
            {pendingRequests.length > 0 && (
              <Button asChild size="sm" className="w-full mt-3">
                <Link href="/team-requests">Review Requests</Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Out This Week */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-blue-100 shrink-0">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Out This Week</p>
                <p className="text-2xl font-bold">{uniqueOutThisWeek}</p>
                <p className="text-xs text-muted-foreground">team member{uniqueOutThisWeek !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Out Next Week */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-purple-100 shrink-0">
                <Calendar className="h-5 w-5 text-purple-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Out Next Week</p>
                <p className="text-2xl font-bold">{uniqueOutNextWeek}</p>
                <p className="text-xs text-muted-foreground">team member{uniqueOutNextWeek !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Approved */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-green-100 shrink-0">
                <CheckCircle className="h-5 w-5 text-green-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Approved Requests</p>
                <p className="text-2xl font-bold">{approvedRequests.length}</p>
                <p className="text-xs text-muted-foreground">this year</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <QuickLinkCard
          title="Team Requests"
          description="Review and manage time off requests"
          href="/team-requests"
          icon={Users}
          color="bg-blue-100"
        />
        <QuickLinkCard
          title="Team Calendar"
          description="View team's time off schedule"
          href="/team-calendar"
          icon={Calendar}
          color="bg-purple-100"
        />
      </div>

      {/* Recent Team Requests */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Team Requests</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/team-requests">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {recentRequests.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No requests from your team yet.</p>
          ) : (
            <div className="space-y-3">
              {recentRequests.map((request) => (
                <RecentRequestRow key={request.id} request={request} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function QuickLinkCard({
  title,
  description,
  href,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <Card className="hover:shadow-md transition-shadow group">
      <Link href={href} className="block h-full">
        <CardContent className="p-4 h-full flex flex-col">
          <div className="flex items-start gap-3 flex-1">
            <div className={`rounded-lg p-2 ${color} shrink-0`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-base leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm font-medium text-primary group-hover:translate-x-0.5 transition-transform">
            View
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

function RecentRequestRow({ request }: { request: TeamRequest }) {
  const statusConfig: Record<string, { variant: "default" | "outline" | "secondary" | "destructive"; label: string }> = {
    PENDING: { variant: "outline", label: "Pending" },
    APPROVED: { variant: "default", label: "Approved" },
    REJECTED: { variant: "destructive", label: "Denied" },
    CANCELLED: { variant: "secondary", label: "Cancelled" },
  };

  const config = statusConfig[request.status] || statusConfig.PENDING;

  return (
    <div className="flex items-center justify-between p-3 border rounded-md">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-muted p-2">
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-sm">{request.user.name || request.user.email}</p>
          <p className="text-xs text-muted-foreground">
            {TYPE_LABELS[request.type] || request.type} &middot;{" "}
            {formatDate(new Date(request.startDate))} - {formatDate(new Date(request.endDate))}
          </p>
        </div>
      </div>
      <Badge variant={config.variant}>{config.label}</Badge>
    </div>
  );
}
