"use client";

import { useState, useEffect } from "react";
import { Filter, User, Loader2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the type for a request from the API
interface TeamRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
  notes?: string;
  user: {
    id: string;
    name: string | null;
    email: string;
  };
}

// Map database enum values to display labels
const TYPE_LABELS: Record<string, string> = {
  VACATION: "Vacation",
  SICK: "Sick Leave",
  PERSONAL: "Personal",
};

export default function TeamRequestsClient() {
  const [filter, setFilter] = useState("pending");
  const [requests, setRequests] = useState<TeamRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = async () => {
    try {
      const response = await fetch("/api/requests/team");
      if (!response.ok) {
        throw new Error("Failed to fetch team requests");
      }
      const data = await response.json();
      setRequests(data.requests || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load requests");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const filteredRequests = filter === 'all'
    ? (requests || [])
    : (requests || []).filter(req => req.status.toLowerCase() === filter);

  const handleAction = async (requestId: string, action: "APPROVED" | "REJECTED") => {
    try {
      const response = await fetch(`/api/requests/${requestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: action }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || `Failed to ${action.toLowerCase()} request`);
      }

      // Refresh the list after action
      await fetchRequests();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Action failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Team Time Off Requests</h1>
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Team Time Off Requests</h1>
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
      <h1 className="text-3xl font-bold">Team Time Off Requests</h1>

      <div className="flex gap-2">
        {/* Filter Buttons */}
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
        {/* Request List */}
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
              request={request}
              onApprove={() => handleAction(request.id, "APPROVED")}
              onDeny={() => handleAction(request.id, "REJECTED")}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface TeamRequestCardProps {
  request: TeamRequest;
  onApprove: () => void;
  onDeny: () => void;
}

function TeamRequestCard({ request, onApprove, onDeny }: TeamRequestCardProps) {
  const { type, startDate, endDate, status, createdAt, user } = request;
  const normalizedStatus = status.toLowerCase();

  const statusVariants: Record<string, { variant: "default" | "outline" | "secondary" | "destructive", label: string }> = {
    pending: { variant: "outline", label: "Pending" },
    approved: { variant: "default", label: "Approved" },
    rejected: { variant: "destructive", label: "Denied" },
  };

  const statusConfig = statusVariants[normalizedStatus] || statusVariants.pending;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <User className="h-10 w-10 text-primary" />
            <div>
              <h3 className="font-medium">{user.name || "Unknown"}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
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
              <span className="font-medium">{TYPE_LABELS[type] || type}</span> - {formatDate(new Date(startDate))} to {formatDate(new Date(endDate))}
            </p>
            <p className="text-xs text-muted-foreground">
              Requested on {formatDate(new Date(createdAt))}
            </p>
          </div>

          {normalizedStatus === 'pending' && (
            <div className="flex items-center justify-end gap-2">
              <Button
                onClick={onDeny}
                variant="outline"
                size="sm"
                className="text-red-700 border-red-200 bg-red-100 hover:bg-red-200"
              >
                Deny
              </Button>
              <Button
                onClick={onApprove}
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