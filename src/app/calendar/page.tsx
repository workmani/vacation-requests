"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

// Mock data for time off requests
const mockTimeOffRequests = [
  {
    id: "1",
    startDate: new Date(2025, 5, 15), // June 15
    endDate: new Date(2025, 5, 20), // June 20
    type: "VACATION",
    status: "APPROVED",
    reason: "Summer vacation",
  },
  {
    id: "2",
    startDate: new Date(2025, 5, 25), // June 25
    endDate: new Date(2025, 5, 25), // June 25
    type: "SICK",
    status: "APPROVED",
    reason: "Doctor's appointment",
  },
  {
    id: "3",
    startDate: new Date(2025, 6, 4), // July 4
    endDate: new Date(2025, 6, 5), // July 5
    type: "VACATION",
    status: "PENDING",
    reason: "Independence Day extended weekend",
  },
];

const getRequestsForDate = (date: Date) => {
  return mockTimeOffRequests.filter((request) => {
    return (
      isWithinInterval(date, {
        start: request.startDate,
        end: request.endDate,
      }) ||
      isSameDay(date, request.startDate) ||
      isSameDay(date, request.endDate)
    );
  });
};

const getRequestColor = (type: string, status: string) => {
  if (status === "PENDING") return "bg-yellow-100 text-yellow-800 border-yellow-200";
  
  switch (type) {
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

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const selectedDateRequests = selectedDate ? getRequestsForDate(selectedDate) : [];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">My Calendar</h1>
        <p className="text-muted-foreground mt-2">
          View your approved and pending time off requests
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
                          className={`text-xs px-1 py-0.5 rounded border ${getRequestColor(
                            request.type,
                            request.status
                          )}`}
                        >
                          {request.type.slice(0, 3)}
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
                        <span className="font-medium">{request.type}</span>
                        <span className="text-sm">{request.status}</span>
                      </div>
                      <p className="text-sm">{request.reason}</p>
                      <p className="text-xs mt-2">
                        {format(request.startDate, "MMM d")} -{" "}
                        {format(request.endDate, "MMM d")}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No time off scheduled for this date.
                </p>
              )
            ) : (
              <p className="text-muted-foreground text-sm">
                Click on a date to view details.
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
              <span className="text-sm">Vacation (Approved)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-100 border border-red-200" />
              <span className="text-sm">Sick Leave (Approved)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200" />
              <span className="text-sm">Personal (Approved)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-100 border border-yellow-200" />
              <span className="text-sm">Pending Approval</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 