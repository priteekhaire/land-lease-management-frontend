"use client";

import { useRouter } from "next/navigation";

export default function NewLeasePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
   
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Create New Lease</h1>
        <button
          onClick={() => router.push("/LeaseManagement")}
          className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          ← Back to Lease Management
        </button>
      </div>

  
      <form className="bg-white shadow-sm rounded-xl p-6 border space-y-5 max-w-3xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lease Title*
          </label>
          <input
            type="text"
            placeholder="Enter lease title"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Land Parcel ID*
          </label>
          <input
            type="text"
            placeholder="Enter land parcel ID"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date*
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date*
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Area (m²)
          </label>
          <input
            type="number"
            placeholder="Enter area"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Harvest Year
          </label>
          <input
            type="text"
            placeholder="Enter harvest year"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => router.push("/leases")}
            className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Save Lease
          </button>
        </div>
      </form>
    </div>
  );
}
