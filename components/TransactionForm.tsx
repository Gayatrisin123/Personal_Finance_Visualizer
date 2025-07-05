"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!amount || !description || !date) return alert("All fields required");

    await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify({ amount: +amount, description, date }),
    });
    setAmount("");
    setDescription("");
    setDate("");
    location.reload(); // simple reload
  }

  return (
    <Card className="p-6">
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="col-span-1 md:col-span-3 text-right">
            <Button type="submit">Add Transaction</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
