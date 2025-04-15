"use client";

import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function RequestsPage() {
  const [filter, setFilter] = useState("all");
  
  // This would come from an API call
  const requests = [
    {
      id: "req-001",
      type: "Vacation",
      startDate: new Date("2023-07-15"),
      endDate: new Date("2023-07-22"),
      status: "approved",
      createdAt: new Date("2023-06-01"),
    },
    {
      id: "req-002",
      type: "Sick Leave",
      startDate: new Date("2023-08-10"),
      endDate: new Date("2023-08-10"),
      status: "approved",
      createdAt: new Date("2023-08-09"),
    },
    {
      id: "req-003",
      type: "Personal",
      startDate: new Date("2023-09-05"),
      endDate: new Date("2023-09-05"),
      status: "denied",
      createdAt: new Date("2023-08-20"),
    },
    {
      id: "req-004",
      type: "Vacation",
      startDate: new Date("2023-12-20"),
      endDate: new Date("2023-12-31"),
      status: "pending",
      createdAt: new Date("2023-10-15"),
    },
  ];
  
  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(req => req.status === filter);

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
                Try changing your filter or create a new request.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              id={request.id}
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
  const statusVariants: Record<string, { variant: "default" | "outline" | "secondary" | "destructive", label: string }> = {
    pending: { variant: "outline", label: "Pending" },
    approved: { variant: "default", label: "Approved" },
    denied: { variant: "destructive", label: "Denied" },
  };
  
  const statusConfig = statusVariants[status] || statusVariants.pending;
  
  return (
    <Card className="hover:shadow-sm transition-shadow">
      <CardContent className="p-0">
        <Link
          href={`/requests/${id}`}
          className="flex items-center justify-between p-4"
        >
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
          <Badge variant={statusConfig.variant}>
            {statusConfig.label}
          </Badge>
        </Link>
      </CardContent>
    </Card>
  );
} 