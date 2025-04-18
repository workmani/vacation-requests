import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BalancesPage() {
  // This would come from an API call
  const balances = [
    { type: "Vacation", used: 5, total: 20, color: "bg-blue-100" },
    { type: "Sick Leave", used: 2, total: 10, color: "bg-green-100" },
    { type: "Personal", used: 1, total: 5, color: "bg-amber-100" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Time Off Balances</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Current Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {balances.map((balance) => (
              <BalanceCard
                key={balance.type}
                title={balance.type}
                used={balance.used}
                total={balance.total}
                color={balance.color}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Accrual Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex font-medium text-sm">
              <div className="flex-1">Date</div>
              <div className="flex-1">Type</div>
              <div className="flex-1">Amount</div>
            </div>
            <Separator className="my-2" />
            <AccrualRow date="Jan 1, 2023" type="Vacation" amount="+10 days" />
            <AccrualRow date="Jan 1, 2023" type="Sick Leave" amount="+5 days" />
            <AccrualRow date="Jan 1, 2023" type="Personal" amount="+3 days" />
            <AccrualRow date="Jul 1, 2023" type="Vacation" amount="+10 days" />
            <AccrualRow date="Jul 1, 2023" type="Sick Leave" amount="+5 days" />
            <AccrualRow date="Jul 1, 2023" type="Personal" amount="+2 days" />
          </div>
        </CardContent>
      </Card>
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
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span>{used} used</span>
          <span>{total - used} remaining</span>
        </div>
      </CardContent>
    </Card>
  );
}

function AccrualRow({
  date,
  type,
  amount,
}: {
  date: string;
  type: string;
  amount: string;
}) {
  return (
    <div className="flex items-center py-2 text-sm border-b">
      <div className="flex-1">{date}</div>
      <div className="flex-1">{type}</div>
      <div className="flex-1 font-medium text-green-600">{amount}</div>
    </div>
  );
} 