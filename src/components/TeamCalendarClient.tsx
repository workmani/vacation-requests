"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  addMonths,
  subMonths,
  isWithinInterval,
  isSameDay,
} from "date-fns";

interface TeamRequest {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  notes?: string;
  user: {
    id: string;
    name: string | null;
    email: string;
  };
}

const getRequestColor = (type: string, status: string) => {
  const normalizedStatus = status.toUpperCase();
  if (normalizedStatus === "PENDING") return "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (normalizedStatus === "REJECTED") return "bg-gray-100 text-gray-500 border-gray-200";

  switch (type.toUpperCase()) {
    case "VACATION":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "SICK":
      return "bg-red-100 text-red-800 border-red-200";
    case "PERSONAL":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const TYPE_LABELS: Record<string, string> = {
  VACATION: "Vacation",
  SICK: "Sick Leave",
  PERSONAL: "Personal",
};

export default function TeamCalendarClient() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [requests, setRequests] = useState<TeamRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRequests() {
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
    }

    fetchRequests();
  }, []);

  const getRequestsForDate = (date: Date) => {
    return (requests || []).filter((request) => {
      // Only show approved requests on calendar (pending ones are in Team Requests)
      if (request.status.toUpperCase() !== "APPROVED") return false;

      const startDate = new Date(request.startDate);
      const endDate = new Date(request.endDate);
      return (
        isWithinInterval(date, {
          start: startDate,
          end: endDate,
        }) ||
        isSameDay(date, startDate) ||
        isSameDay(date, endDate)
      );
    });
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const selectedDateRequests = selectedDate ? getRequestsForDate(selectedDate) : [];

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Team Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View your team&apos;s approved time off schedule
          </p>
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
        <div>
          <h1 className="text-3xl font-bold">Team Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View your team&apos;s approved time off schedule
          </p>
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
      <div>
        <h1 className="text-3xl font-bold">Team Calendar</h1>
        <p className="text-muted-foreground mt-2">
          View your team&apos;s approved time off schedule
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <h2 className="text-xl font-semibold">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={() => setCurrentDate(new Date())}
              >
                Today
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-px bg-muted rounded-lg overflow-hidden">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="bg-background p-2 text-center text-sm font-medium text-muted-foreground"
                >
                  {day}
                </div>
              ))}
              {calendarDays.map((day) => {
                const dayRequests = getRequestsForDate(day);
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isSelected = selectedDate && isSameDay(day, selectedDate);

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      relative bg-background p-2 min-h-[80px] text-left transition-colors
                      hover:bg-muted/50
                      ${!isCurrentMonth ? "text-muted-foreground" : ""}
                      ${isSelected ? "bg-muted" : ""}
                    `}
                  >
                    {isToday(day) && (
                      <div className="absolute inset-0 ring-2 ring-primary ring-inset pointer-events-none" />
                    )}
                    <span
                      className={`
                        text-sm font-medium
                        ${isToday(day) ? "text-primary font-bold" : ""}
                      `}
                    >
                      {format(day, "d")}
                    </span>
                    <div className="mt-1 space-y-1">
                      {dayRequests.slice(0, 2).map((request) => (
                        <div
                          key={request.id}
                          className={`text-xs px-1 py-0.5 rounded border truncate ${getRequestColor(
                            request.type,
                            request.status
                          )}`}
                          title={request.user.name || request.user.email}
                        >
                          {request.user.name?.split(" ")[0] || request.user.email.split("@")[0]}
                        </div>
                      ))}
                      {dayRequests.length > 2 && (
                        <div className="text-xs text-muted-foreground px-1">
                          +{dayRequests.length - 2} more
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">
              {selectedDate
                ? format(selectedDate, "MMMM d, yyyy")
                : "Select a date"}
            </h2>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              selectedDateRequests.length > 0 ? (
                <div className="space-y-3">
                  {selectedDateRequests.map((request) => (
                    <div
                      key={request.id}
                      className={`p-3 rounded-lg border ${getRequestColor(
                        request.type,
                        request.status
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{request.user.name || request.user.email}</span>
                      </div>
                      <p className="text-sm">{TYPE_LABELS[request.type] || request.type}</p>
                      {request.notes && <p className="text-sm text-muted-foreground mt-1">{request.notes}</p>}
                      <p className="text-xs mt-2">
                        {format(new Date(request.startDate), "MMM d")} -{" "}
                        {format(new Date(request.endDate), "MMM d")}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No team members have approved time off on this date.
                </p>
              )
            ) : (
              <p className="text-muted-foreground text-sm">
                Click on a date to view team availability.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Legend</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200" />
              <span className="text-sm">Vacation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-100 border border-red-200" />
              <span className="text-sm">Sick Leave</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200" />
              <span className="text-sm">Personal</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
