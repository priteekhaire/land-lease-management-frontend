"use client";
import { useRouter } from "next/navigation";

export default function NewTransactionPage() {
  const router = useRouter();

  return (
    <div className="p-6 space-y-8">
      <button
        onClick={() => router.push("/Financial")}
        className="text-gray-600 hover:text-gray-900 flex items-center"
      >
        ← Back to Financials
      </button>

      <h1 className="text-2xl font-bold">Add Financial Transaction</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-8">
     
        <section>
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">
            Transaction Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Transaction Title *</label>
              <input
                type="text"
                placeholder="Enter transaction title"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Transaction Code *</label>
              <input
                type="text"
                placeholder="Enter unique code"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Transaction Type *</label>
              <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none">
                <option>Income</option>
                <option>Expense</option>
                <option>Lease Payment</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Transaction Date *</label>
              <input
                type="date"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Amount (€) *</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                placeholder="e.g. crop sales, maintenance"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>
        </section>

     
        <section>
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Notes</h2>
          <textarea
            placeholder="Enter any additional details about this transaction..."
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            rows={4}
          ></textarea>
        </section>

        
        <div className="flex justify-end gap-4">
          <button
            onClick={() => router.push("/financial")}
            className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Save Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
