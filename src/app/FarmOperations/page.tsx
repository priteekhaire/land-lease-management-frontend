"use client";

import { useRouter } from "next/navigation";

export default function FarmsPage() {
  const router = useRouter();

  const farms = [
    {
      id: 1,
      name: "Green Valley Farm",
      code: "GVF001",
      area: 250.5,
      type: "Family Farm",
      phone: "+49 30 12345678",
      email: "info@greenvalleyfarm.com",
      website: "https://greenvalleyfarm.com",
      status: "Active",
      breakdown: {
        arable: 180,
        grassland: 50,
        forest: 20.5,
      },
    },
    {
      id: 2,
      name: "Mountain View Agriculture",
      code: "MVA002",
      area: 450,
      type: "Corporate Farm",
      phone: "+49 89 87654321",
      email: "contact@mountainviewag.com",
      website: "https://mountainviewag.com",
      status: "Active",
      breakdown: {
        arable: 320,
        grassland: 80,
        forest: 50,
      },
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Farm Operations</h1>
        <button
          onClick={() => router.push("/FarmOperations/new")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add Farm
        </button>
      </div>
      <p className="text-gray-500 mb-6">
        Manage your farm operations and properties
      </p>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search farms..."
          className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          Filter
        </button>
      </div>

      {/* Farm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farms.map((farm) => (
          <div
            key={farm.id}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{farm.name}</h2>
                <p className="text-gray-500 text-sm">{farm.code}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {farm.status}
              </span>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Total Area:</span> {farm.area} ha
              </p>
              <p>
                <span className="font-medium">Type:</span> {farm.type}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {farm.phone}
              </p>
              <p>
                <span className="font-medium">Email:</span> {farm.email}
              </p>
              <a
                href={farm.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                Website
              </a>
            </div>

            {/* Area Breakdown */}
            <div className="mt-4 border-t pt-3 text-sm text-gray-600">
              <p className="font-medium mb-1">Area Breakdown</p>
              <div className="flex flex-wrap gap-2">
                <span>Arable: {farm.breakdown.arable} ha</span>
                <span>Grassland: {farm.breakdown.grassland} ha</span>
                <span>Forest: {farm.breakdown.forest} ha</span>
                <span className="text-gray-500">
                  Total: {farm.area} ha
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
