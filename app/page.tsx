import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlyChart from "../components/MonthlyChart";

export default function Home() {
  return (
    <main className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">💸 Personal Finance Visualizer</h1>
      <TransactionForm />
      <MonthlyChart />
      <TransactionList />
    </main>
  );
}
