"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MonthlyChart() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => {
        const monthly: Record<string, number> = {};
        data.forEach((t: any) => {
          const month = new Date(t.date).toLocaleString("default", {
            month: "short",
            year: "numeric",
          });
          monthly[month] = (monthly[month] || 0) + t.amount;
        });
        setChartData(Object.entries(monthly).map(([month, total]) => ({ month, total })));
      });
  }, []);

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
