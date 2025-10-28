"use client";
import { useRouter } from "next/navigation";
import { Wrench, Plus, Eye, Edit3, Filter, DollarSign, Tractor } from "lucide-react";

export default function EquipmentPage() {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Tractor className="text-green-600" /> Equipment Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your farm machinery and maintenance schedules
          </p>
        </div>

        <button
          onClick={() => router.push("/Equipment/new")}
          className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" /> Add Equipment
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search equipment..."
          className="flex-1 border border-gray-400 bg-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
        />
        <button className="border border-gray-400 bg-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <Filter className="w-4 h-4 text-gray-600" /> Filter
        </button>
      </div>

      {/* Equipment Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Equipment Card */}
        <div className="bg-white border border-gray-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <Wrench className="text-green-600 w-5 h-5" />
              John Deere 6R 175
            </h2>
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-3">John Deere 6R Series</p>

          <div className="text-sm space-y-1 mb-4">
            <p><span className="font-medium text-gray-700">Type:</span> Tractor</p>
            <p><span className="font-medium text-gray-700">Serial Number:</span> JD6R175001</p>
            <p><span className="font-medium text-gray-700">Purchase Date:</span> 15.03.2023</p>
          </div>

          <div className="bg-green-50 border border-gray-300 p-3 rounded-lg mb-4">
            <p className="font-semibold text-gray-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-600" /> Financial Info
            </p>
            <p>Purchase Price: <span className="font-medium">€85,000</span></p>
            <p>Current Value: <span className="font-medium">€75,000</span></p>
            <p className="text-red-600">Depreciation: €10,000</p>
            <p>Age: 2 years</p>
          </div>

          <div className="flex justify-between items-center">
            <button className="text-gray-700 border border-gray-400 px-4 py-2 rounded-lg flex items-center gap-1 text-sm hover:bg-gray-100 transition">
              <Eye className="w-4 h-4" /> View
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm hover:bg-green-700 transition">
              <Edit3 className="w-4 h-4" /> Edit
            </button>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <SummaryCard label="Total Equipment" value="2" color="text-gray-800" icon={<Wrench className="text-gray-600 w-5 h-5" />} />
        <SummaryCard label="Active Equipment" value="2" color="text-green-600" icon={<Tractor className="text-green-600 w-5 h-5" />} />
        <SummaryCard label="Total Value" value="€175,000" color="text-blue-600" icon={<DollarSign className="text-blue-600 w-5 h-5" />} />
        <SummaryCard label="Maintenance Due" value="2" color="text-red-600" icon={<Edit3 className="text-red-600 w-5 h-5" />} />
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-400 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}
