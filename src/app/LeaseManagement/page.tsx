"use client";

import { useRouter } from "next/navigation";

export default function LeaseManagementPage() {
  const router = useRouter();

  const handleNewLease = () => {
    router.push("/leases/new");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Lease Management</h1>
        <p className="text-gray-500 text-sm">
          Manage land lease agreements and usage
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex items-center w-full sm:w-1/2 border border-gray-400 rounded-lg bg-white shadow-sm px-4 py-2">
          <input
            type="text"
            placeholder="Search leases..."
            className="w-full outline-none text-gray-700"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="border border-gray-400 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
            Filter
          </button>
          <button
            onClick={() => router.push("/LeaseManagement/new")}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg"
          >
            + New Lease
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Lease #1</h2>
              <p className="text-sm text-gray-500">Land Parcel #1</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Active
            </span>
          </div>

          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p>
              <strong>Contract Period:</strong> 01.01.2024 - 31.12.2024
            </p>
            <p>
              <strong>Harvest Year:</strong> 2024 - 2024
            </p>
            <p>
              <strong>Area:</strong> 5,000 m²
            </p>
          </div>

          <div className="bg-green-50 border border-gray-400 rounded-lg p-3 mb-3 text-sm">
            <p className="font-semibold mb-2">Financial Details</p>
            <p>Lease Payment: 250,00 €</p>
            <p>Tax: 50,00 €</p>
            <p>Water: 25,00 €</p>
            <p className="font-semibold text-green-700">Total: 325,00 €</p>
          </div>

          <div className="bg-blue-50 border border-gray-400 rounded-lg p-3 mb-3 text-sm">
            <p className="font-semibold mb-2 text-blue-700">Area Breakdown</p>
            <p>Section Area: 5,000 m²</p>
            <p>Geometry Area: 5,000 m²</p>
            <p>Usage Area: 5,000 m²</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Agricultural Value: <strong>250</strong>
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button className="border border-gray-400 px-4 py-1.5 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">
              👁️ View
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm">
              ✏️ Edit
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2">Created: 01.01.2024</p>
        </div>

        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Lease #2</h2>
              <p className="text-sm text-gray-500">Land Parcel #2</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Active
            </span>
          </div>

          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p>
              <strong>Contract Period:</strong> 01.01.2024 - 31.12.2024
            </p>
            <p>
              <strong>Harvest Year:</strong> 2024 - 2024
            </p>
            <p>
              <strong>Area:</strong> 3,500 m²
            </p>
          </div>

          <div className="bg-green-50 border border-gray-400 rounded-lg p-3 mb-3 text-sm">
            <p className="font-semibold mb-2">Financial Details</p>
            <p>Lease Payment: 175,00 €</p>
            <p>Tax: 35,00 €</p>
            <p>Water: 17,50 €</p>
            <p className="font-semibold text-green-700">Total: 227,50 €</p>
          </div>

          <div className="bg-blue-50 border border-gray-400 rounded-lg p-3 mb-3 text-sm">
            <p className="font-semibold mb-2 text-blue-700">Area Breakdown</p>
            <p>Section Area: 3,500 m²</p>
            <p>Geometry Area: 3,500 m²</p>
            <p>Usage Area: 3,500 m²</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Agricultural Value: <strong>175</strong>
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button className="border border-gray-400 px-4 py-1.5 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">
              👁️ View
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm">
              ✏️ Edit
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2">Created: 01.01.2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-4 text-center">
          <p className="text-sm text-gray-500">Total Leases</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">2</p>
        </div>
        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-4 text-center">
          <p className="text-sm text-gray-500">Total Area</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">
            8,500.00 m²
          </p>
        </div>
        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-4 text-center">
          <p className="text-sm text-gray-500">Total Payments</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">552,50 €</p>
        </div>
        <div className="bg-white border border-gray-400 rounded-xl shadow-sm p-4 text-center">
          <p className="text-sm text-gray-500">Active Leases</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">2</p>
        </div>
      </div>
    </div>
  );
}
