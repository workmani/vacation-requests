import { CalendarClock, CalendarPlus, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default async function Home() {

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard 
          title="Request Time Off" 
          description="Submit a new time off request" 
          href="/requests/new"
          icon={CalendarPlus}
          color="bg-blue-100"
        />
        <DashboardCard 
          title="My Requests" 
          description="View your time off request history" 
          href="/requests"
          icon={CalendarClock}
          color="bg-green-100"
        />
        <DashboardCard 
          title="Time Off Balance" 
          description="Check your remaining vacation days" 
          href="/balances"
          icon={Clock}
          color="bg-amber-100"
        />
        <DashboardCard 
          title="My Calendar" 
          description="View your time off schedule" 
          href="/calendar"
          icon={Calendar}
          color="bg-purple-100"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Time Off</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <UpcomingTimeOff
            name="Summer Vacation"
            startDate="July 15, 2023"
            endDate="July 22, 2023"
            status="Approved"
            statusColor="text-green-600"
          />
          <UpcomingTimeOff
            name="Doctor's Appointment"
            startDate="August 3, 2023"
            endDate="August 3, 2023"
            status="Pending"
            statusColor="text-amber-600"
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Time Off Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <BalanceCard
              title="Vacation"
              used={5}
              total={20}
              color="bg-blue-100"
            />
            <BalanceCard
              title="Sick Leave"
              used={2}
              total={10}
              color="bg-green-100"
            />
            <BalanceCard
              title="Personal"
              used={1}
              total={5}
              color="bg-amber-100"
            />
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4 mt-8">
        <Button asChild>
          <Link href="/test">
            View Database Test
          </Link>
        </Button>
        {/* Other links */}
      </div>
    </div>
  );
}

function DashboardCard({
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
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
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

function UpcomingTimeOff({
  name,
  startDate,
  endDate,
  status,
  statusColor,
}: {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md">
      <div className="flex items-center gap-4">
        <Calendar className="h-10 w-10 text-primary" />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <span className={`font-medium ${statusColor}`}>{status}</span>
    </div>
  );
}

function BalanceCard({
  title,
  used,
  total,
  color,
}: {
  title: string;
  used: number;
  total: number;
  color: string;
}) {
  const percentage = (used / total) * 100;
  
  return (
    <Card>
      <CardContent className="pt-4">
        <h3 className="font-medium">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-muted">
            <div
              className={`h-2 rounded-full ${color}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-sm">
            {used}/{total} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
