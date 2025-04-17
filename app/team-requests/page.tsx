"use client";

import { useState } from "react";
import { Filter, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// Helper function to check roles (can be shared in a utils file later)
const hasRequiredRole = (roles: string[] | undefined): boolean => {
  if (!roles) return false;
  return roles.includes("Manager") || roles.includes("Admin");
};

export default async function TeamRequestsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    const callbackUrl = encodeURIComponent("/team-requests");
    redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  if (!hasRequiredRole(session.user?.roles)) {
    console.warn(`User ${session.user?.email} attempted to access /team-requests without Manager/Admin role.`);
    redirect("/"); // Redirect non-managers/admins to home
  }

  const [filter, setFilter] = useState("pending");
  
  // This would come from an API call
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
  
  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(req => req.status === filter);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Team Time Off Requests</h1>
      
      <div className="flex gap-2">
        <Button 
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'pending' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('pending')}
        >
          Pending
        </Button>
        <Button 
          variant={filter === 'approved' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('approved')}
        >
          Approved
        </Button>
        <Button 
          variant={filter === 'denied' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('denied')}
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
                There are no {filter !== 'all' ? filter : ''} time off requests from your team.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredRequests.map((request) => (
            <TeamRequestCard
              key={request.id}
              id={request.id}
              employeeName={request.employeeName}
              employeeEmail={request.employeeEmail}
              type={request.type}
              startDate={request.startDate}
              endDate={request.endDate}
              status={request.status}
              createdAt={request.createdAt}
            />
          ))
        )}
      </div>
    </div>
  );
}

function TeamRequestCard({
  id,
  employeeName,
  employeeEmail,
  type,
  startDate,
  endDate,
  status,
  createdAt,
}: {
  id: string;
  employeeName: string;
  employeeEmail: string;
  type: string;
  startDate: Date;
  endDate: Date;
  status: string;
  createdAt: Date;
}) {
  const statusVariants: Record<string, { variant: "default" | "outline" | "secondary" | "destructive", label: string }> = {
    pending: { variant: "outline", label: "Pending" },
    approved: { variant: "default", label: "Approved" },
    denied: { variant: "destructive", label: "Denied" },
  };
  
  const statusConfig = statusVariants[status] || statusVariants.pending;
  
  const handleApprove = () => {
    // In a real app, this would call an API to update the request
    alert(`Approved request ${id}`);
  };
  
  const handleDeny = () => {
    // In a real app, this would call an API to update the request
    alert(`Denied request ${id}`);
  };
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <User className="h-10 w-10 text-primary" />
            <div>
              <h3 className="font-medium">{employeeName}</h3>
              <p className="text-sm text-muted-foreground">{employeeEmail}</p>
            </div>
          </div>
          <Badge variant={statusConfig.variant}>
            {statusConfig.label}
          </Badge>
        </div>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium">Request Details</h4>
            <p className="text-sm">
              <span className="font-medium">{type}</span> - {formatDate(startDate)} to {formatDate(endDate)}
            </p>
            <p className="text-xs text-muted-foreground">
              Requested on {formatDate(createdAt)}
            </p>
          </div>
          
          {status === 'pending' && (
            <div className="flex items-center justify-end gap-2">
              <Button
                onClick={handleDeny}
                variant="outline"
                size="sm"
                className="text-red-700 border-red-200 bg-red-100 hover:bg-red-200"
              >
                Deny
              </Button>
              <Button
                onClick={handleApprove}
                variant="outline" 
                size="sm"
                className="text-green-700 border-green-200 bg-green-100 hover:bg-green-200"
              >
                Approve
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 