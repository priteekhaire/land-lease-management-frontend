"use client";

import { useRouter } from "next/navigation";
import { MapPin, Leaf, Plus, Phone, Mail, Globe, Filter } from "lucide-react";

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
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Leaf className="text-green-600 w-7 h-7" /> Farm Operations
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your farm operations, properties, and areas
          </p>
        </div>
        <button
          onClick={() => router.push("/FarmOperations/new")}
          className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Add Farm
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search farms..."
          className="flex-1 border border-gray-400 bg-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
        />
        <button className="border border-gray-400 bg-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <Filter className="w-4 h-4 text-gray-600" /> Filter
        </button>
      </div>

      {/* Farm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farms.map((farm) => (
          <div
            key={farm.id}
            className="bg-white border border-gray-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {farm.name}
                </h2>
                <p className="text-sm text-gray-500">{farm.code}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {farm.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Total Area:</span> {farm.area} ha
              </p>
              <p>
                <span className="font-medium">Type:</span> {farm.type}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                {farm.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                {farm.email}
              </p>
              <a
                href={farm.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 underline"
              >
                <Globe className="w-4 h-4" /> Visit Website
              </a>
            </div>

            {/* Breakdown */}
            <div className="mt-5 border-t border-gray-300 pt-4 text-sm text-gray-700">
              <p className="font-medium mb-2 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-green-600" /> Area Breakdown
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-50 border border-gray-300 rounded-md px-3 py-1">
                  Arable: <span className="font-semibold">{farm.breakdown.arable} ha</span>
                </span>
                <span className="bg-green-50 border border-gray-300 rounded-md px-3 py-1">
                  Grassland: <span className="font-semibold">{farm.breakdown.grassland} ha</span>
                </span>
                <span className="bg-green-50 border border-gray-300 rounded-md px-3 py-1">
                  Forest: <span className="font-semibold">{farm.breakdown.forest} ha</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <SummaryCard label="Total Farms" value="2" />
        <SummaryCard label="Active Farms" value="2" color="text-green-600" />
        <SummaryCard label="Total Area" value="700.5 ha" color="text-blue-600" />
        <SummaryCard label="Average Farm Size" value="350 ha" color="text-yellow-600" />
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color = "text-gray-800",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="bg-white border border-gray-400 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}
