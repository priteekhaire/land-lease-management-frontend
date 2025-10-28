"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ArrowDownRight, Euro, Plus, FileText, BarChart } from "lucide-react";

export default function FinancialPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BarChart className="text-green-600 w-7 h-7" /> Financial Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Track income, expenses, and payments for your farm
          </p>
        </div>
        <button
          onClick={() => router.push("/Financial/new")}
          className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Income"
          amount="€5,000.00"
          trend="+12% from last month"
          color="text-green-600"
          icon={<ArrowUpRight className="w-5 h-5 text-green-600" />}
        />
        <SummaryCard
          title="Total Expenses"
          amount="€1,500.00"
          trend="+5% from last month"
          color="text-red-600"
          icon={<ArrowDownRight className="w-5 h-5 text-red-600" />}
        />
        <SummaryCard
          title="Lease Payments"
          amount="€425.00"
          trend="Monthly payments"
          color="text-blue-600"
          icon={<Euro className="w-5 h-5 text-blue-600" />}
        />
        <SummaryCard
          title="Net Income"
          amount="€3,075.00"
          trend="This month"
          color="text-green-700"
          icon={<FileText className="w-5 h-5 text-green-700" />}
        />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-400 rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
        <ul className="divide-y text-gray-700">
          <li className="py-3 flex justify-between">
            <span>Crop Sale – Wheat</span>
            <span className="text-green-600 font-semibold">+€5,000.00</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Fuel and Maintenance</span>
            <span className="text-red-600 font-semibold">-€1,500.00</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Monthly Lease Payment</span>
            <span className="text-blue-600 font-semibold">-€425.00</span>
          </li>
        </ul>
      </div>

      {/* Breakdown Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BreakdownCard
          title="Income Breakdown"
          color="text-green-700"
          data={[
            { label: "Crop Sales", value: "€5,000.00" },
            { label: "Lease Income", value: "€0.00" },
            { label: "Other Income", value: "€0.00" },
          ]}
          total="€5,000.00"
        />

        <BreakdownCard
          title="Expense Breakdown"
          color="text-red-700"
          data={[
            { label: "Operating Expenses", value: "€1,500.00" },
            { label: "Equipment", value: "€0.00" },
            { label: "Other Expenses", value: "€0.00" },
          ]}
          total="€1,500.00"
        />

        <BreakdownCard
          title="Lease Payments"
          color="text-blue-700"
          data={[
            { label: "Monthly Payments", value: "€425.00" },
            { label: "Tax Payments", value: "€0.00" },
            { label: "Water Management", value: "€0.00" },
          ]}
          total="€425.00"
        />
      </div>
    </div>
  );
}

/* --- Components --- */

function SummaryCard({
  title,
  amount,
  trend,
  color,
  icon,
}: {
  title: string;
  amount: string;
  trend: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center">
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <p className="text-gray-500">{title}</p>
      <p className={`text-3xl font-bold mt-1 ${color}`}>{amount}</p>
      <p className="text-sm text-gray-400 mt-1">{trend}</p>
    </div>
  );
}

function BreakdownCard({
  title,
  color,
  data,
  total,
}: {
  title: string;
  color: string;
  data: { label: string; value: string }[];
  total: string;
}) {
  return (
    <div className="bg-white border border-gray-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
      <h3 className={`font-semibold text-lg mb-4 ${color}`}>{title}</h3>
      {data.map((item, idx) => (
        <p key={idx} className="flex justify-between text-sm text-gray-700 mb-1">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </p>
      ))}
      <p className="flex justify-between font-semibold border-t border-gray-300 mt-3 pt-2 text-gray-800">
        <span>Total</span>
        <span>{total}</span>
      </p>
    </div>
  );
}
