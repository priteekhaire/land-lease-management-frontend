"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Filter, Plus, Edit3, Eye } from "lucide-react";

export default function CropManagementPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const crops = [
    {
      name: "Wheat",
      code: "WHT",
      scientific: "Triticum aestivum",
      category: "Cereal",
      description: "Common wheat for bread production",
      status: "Active",
      created: "01.01.2024",
    },
    {
      name: "Barley",
      code: "BAR",
      scientific: "Hordeum vulgare",
      category: "Cereal",
      description: "Barley for feed and malting",
      status: "Active",
      created: "01.01.2024",
    },
    {
      name: "Corn",
      code: "CORN",
      scientific: "Zea mays",
      category: "Cereal",
      description: "Maize for feed and industrial use",
      status: "Active",
      created: "01.01.2024",
    },
  ];

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Leaf className="text-green-600" /> Crop Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your crop catalog and rotation planning efficiently
          </p>
        </div>

        <button
          onClick={() => router.push("/Crops/new")}
          className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" /> Add Crop
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search crops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-400 bg-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
        />
        <button className="border border-gray-400 bg-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <Filter className="w-4 h-4 text-gray-600" /> Filter
        </button>
      </div>

      {/* Crop Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {filteredCrops.map((crop) => (
          <div
            key={crop.code}
            className="bg-white p-6 rounded-2xl border border-gray-400 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {crop.name}
              </h2>
              <span className="text-green-700 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                {crop.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 italic mb-1">
              {crop.scientific}
            </p>
            <p className="text-gray-600 text-sm mb-3">{crop.description}</p>

            <div className="bg-green-50 border border-gray-300 p-3 rounded-lg mb-3 text-sm">
              <p>
                <span className="font-medium text-gray-700">Code:</span>{" "}
                {crop.code}
              </p>
              <p>
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {crop.category}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="px-3 py-1.5 border border-gray-400 rounded-lg text-gray-700 text-sm flex items-center gap-1 hover:bg-gray-100 transition">
                <Eye className="w-4 h-4" /> View
              </button>
              <button className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg flex items-center gap-1 hover:bg-green-700 transition">
                <Edit3 className="w-4 h-4" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <SummaryCard label="Total Crops" value="3" color="bg-green-50 border border-gray-400" />
        <SummaryCard label="Cereals" value="3" color="bg-yellow-50 border border-gray-400" />
        <SummaryCard label="Vegetables" value="0" color="bg-orange-50 border border-gray-400" />
        <SummaryCard label="Forage" value="0" color="bg-blue-50 border border-gray-400" />
      </div>

      {/* Crop Rotation Planning */}
      <div className="bg-white p-6 rounded-2xl border border-gray-400 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Crop Rotation Planning
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <RotationBox
            title="Current Season"
            color="bg-green-50 border border-gray-400"
            data={{ Wheat: "45 ha", Barley: "30 ha", Corn: "25 ha" }}
          />
          <RotationBox
            title="Next Season"
            color="bg-blue-50 border border-gray-400"
            data={{ Potatoes: "40 ha", "Sugar Beet": "35 ha", Rapeseed: "25 ha" }}
          />
          <RotationBox
            title="Following Season"
            color="bg-purple-50 border border-gray-400"
            data={{ Alfalfa: "50 ha", Grass: "30 ha", Wheat: "20 ha" }}
          />
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition ${color}`}>
      <p className="text-gray-700 font-medium mb-2">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function RotationBox({
  title,
  color,
  data,
}: {
  title: string;
  color: string;
  data: Record<string, string>;
}) {
  return (
    <div className={`p-5 rounded-2xl ${color}`}>
      <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        {Object.entries(data).map(([crop, area]) => (
          <li key={crop}>
            {crop}: <span className="font-medium">{area}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
