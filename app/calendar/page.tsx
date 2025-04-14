import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Calendar</h1>
      <p className="text-muted-foreground">
        This page will display a calendar showing your time off requests and approvals.
      </p>
      <Card className="border-dashed">
        <CardContent className="flex h-[500px] items-center justify-center">
          <Alert>
            <AlertDescription>
              Calendar functionality coming soon...
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
} 