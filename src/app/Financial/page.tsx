"use client";
import { useRouter } from "next/navigation";

export default function FinancialPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      {/* Title and Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Financial Management</h1>
        <button
          onClick={() => router.push("/Financial/new")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
        >
          + Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <p className="text-gray-500">Total Income</p>
          <p className="text-green-600 text-3xl font-bold mt-2">€5,000.00</p>
          <p className="text-sm text-gray-400 mt-1">+12% from last month</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <p className="text-gray-500">Total Expenses</p>
          <p className="text-red-600 text-3xl font-bold mt-2">€1,500.00</p>
          <p className="text-sm text-gray-400 mt-1">+5% from last month</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <p className="text-gray-500">Lease Payments</p>
          <p className="text-blue-600 text-3xl font-bold mt-2">€425.00</p>
          <p className="text-sm text-gray-400 mt-1">Monthly payments</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <p className="text-gray-500">Net Income</p>
          <p className="text-green-700 text-3xl font-bold mt-2">€3,075.00</p>
          <p className="text-sm text-gray-400 mt-1">This month</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="divide-y text-gray-700">
          <li className="py-3 flex justify-between">
            <span>Crop sale – Wheat</span>
            <span className="text-green-600 font-semibold">+€5,000.00</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Fuel and maintenance</span>
            <span className="text-red-600 font-semibold">-€1,500.00</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Monthly lease payment</span>
            <span className="text-blue-600 font-semibold">-€425.00</span>
          </li>
        </ul>
      </div>

      {/* Breakdown Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Income Breakdown</h3>
          <p className="flex justify-between"><span>Crop Sales</span><span>€5,000.00</span></p>
          <p className="flex justify-between"><span>Lease Income</span><span>€0.00</span></p>
          <p className="flex justify-between"><span>Other Income</span><span>€0.00</span></p>
          <p className="flex justify-between font-semibold border-t mt-3 pt-2"><span>Total Income</span><span>€5,000.00</span></p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Expense Breakdown</h3>
          <p className="flex justify-between"><span>Operating Expenses</span><span>€1,500.00</span></p>
          <p className="flex justify-between"><span>Equipment</span><span>€0.00</span></p>
          <p className="flex justify-between"><span>Other Expenses</span><span>€0.00</span></p>
          <p className="flex justify-between font-semibold border-t mt-3 pt-2"><span>Total Expenses</span><span>€1,500.00</span></p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Lease Payments</h3>
          <p className="flex justify-between"><span>Monthly Payments</span><span>€425.00</span></p>
          <p className="flex justify-between"><span>Tax Payments</span><span>€0.00</span></p>
          <p className="flex justify-between"><span>Water Management</span><span>€0.00</span></p>
          <p className="flex justify-between font-semibold border-t mt-3 pt-2"><span>Total Payments</span><span>€425.00</span></p>
        </div>
      </div>
    </div>
  );
}
