"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionList() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li key={t._id} className="flex justify-between p-3 border rounded-md">
              <span>
                ₹{t.amount} – {t.description}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(t.date).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
