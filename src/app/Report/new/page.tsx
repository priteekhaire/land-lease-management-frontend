"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewReportPage() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <div className="flex items-center justify-between mb-6">
        <Link href="/reports" className="text-green-600 hover:underline">
          ← Back to Reports
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-1">Report Form</h1>
      <p className="text-gray-500 mb-8">Create or edit report details for analysis and tracking.</p>

      <form className="space-y-6 bg-white border rounded-xl p-6 shadow-sm">
    
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Basic Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Report Title*</label>
              <input type="text" placeholder="Enter report title" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Report Type*</label>
              <select className="w-full border rounded-lg p-2">
                <option>Select type</option>
                <option>Financial Summary</option>
                <option>Lease Report</option>
                <option>Land Usage</option>
                <option>Crop Rotation</option>
              </select>
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Date Range</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Start Date*</label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">End Date*</label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
          </div>
        </div>

      
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Report Output</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Format*</label>
              <select className="w-full border rounded-lg p-2">
                <option>PDF</option>
                <option>Excel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Notes</label>
              <input type="text" placeholder="Add optional comments" className="w-full border rounded-lg p-2" />
            </div>
          </div>
        </div>

       
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => router.push("/reports")}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Save Report
          </button>
        </div>
      </form>
    </div>
  );
}
