"use client";

import { useRouter } from "next/navigation";
import { Search, Filter, MapPin, Droplets, Zap, Trees } from "lucide-react";

export default function LandParcelsPage() {
  const router = useRouter();

  const handleAddParcel = () => {
    router.push("/LandParcels/new");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Land Parcels</h1>
        <p className="text-gray-500">
          Manage your land parcels and property details
        </p>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <div className="flex items-center gap-3 w-full md:w-auto flex-grow md:flex-grow-0">
          <div className="flex items-center bg-white border border-gray-400 rounded-lg px-3 py-2 w-full md:w-96 shadow-sm">
            <Search className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search parcels..."
              className="outline-none w-full text-sm text-gray-600"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-400 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-100 transition">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Filter</span>
          </button>
        </div>

        <button
          onClick={handleAddParcel}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow-sm transition"
        >
          + Add Parcel
        </button>
      </div>

      {/* Parcel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* North Field */}
        <div className="bg-white border border-gray-400 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">North Field</h2>
                <p className="text-sm text-gray-500">123/45/1</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p><strong>Area:</strong> 5,000.00 m²</p>
            <p><strong>Soil Type:</strong> Loamy Sand</p>
            <p>
              <strong>Soil Quality:</strong>{" "}
              <span className="border border-gray-400 rounded-full px-2 py-0.5 text-xs">
                good
              </span>
            </p>
            <p><strong>Drainage:</strong> good</p>
          </div>

          <div className="border-t border-gray-300 pt-3 mb-3">
            <p className="font-semibold mb-2">Infrastructure</p>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1 text-blue-600">
                <Droplets className="w-4 h-4" /> Water
              </span>
              <span className="flex items-center gap-1 text-yellow-500">
                <Zap className="w-4 h-4" /> Electricity
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <Trees className="w-4 h-4" /> Farm Road A
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-700 space-y-1 mb-3">
            <p>
              <strong>Slope:</strong> 2.5% <strong>Elevation:</strong> 45m
            </p>
            <p>
              <strong>Agricultural Value:</strong> 85.5 <strong>Field:</strong>{" "}
              Nordfeld
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg p-3 mb-3">
            Excellent soil quality, well-drained, suitable for wheat and barley.
          </div>

          <div className="bg-blue-50 border border-blue-200 text-sm rounded-lg p-3 mb-3">
            <p><strong>Valid From:</strong> 01.01.2024</p>
            <p><strong>Valid To:</strong> 31.12.2024</p>
          </div>

          <div className="flex justify-between items-center">
            <button className="border border-gray-400 text-gray-700 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition">
              👁️ View
            </button>
            <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-700 transition">
              ✏️ Edit
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">Created: 15.01.2024</p>
        </div>

        {/* South Field */}
        <div className="bg-white border border-gray-400 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">South Field</h2>
                <p className="text-sm text-gray-500">123/45/2</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p><strong>Area:</strong> 3,500.00 m²</p>
            <p><strong>Soil Type:</strong> Clay Loam</p>
            <p>
              <strong>Soil Quality:</strong>{" "}
              <span className="border border-gray-400 rounded-full px-2 py-0.5 text-xs">
                excellent
              </span>
            </p>
            <p><strong>Drainage:</strong> moderate</p>
          </div>

          <div className="border-t border-gray-300 pt-3 mb-3">
            <p className="font-semibold mb-2">Infrastructure</p>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1 text-blue-600">
                <Droplets className="w-4 h-4" /> Water
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Zap className="w-4 h-4" /> Electricity
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <Trees className="w-4 h-4" /> Farm Road B
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-700 space-y-1 mb-3">
            <p>
              <strong>Slope:</strong> 1.8% <strong>Elevation:</strong> 42m
            </p>
            <p>
              <strong>Agricultural Value:</strong> 78 <strong>Field:</strong>{" "}
              Südfeld
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg p-3 mb-3">
            High-quality clay loam soil, ideal for corn and sugar beet
            cultivation.
          </div>

          <div className="bg-blue-50 border border-blue-200 text-sm rounded-lg p-3 mb-3">
            <p><strong>Valid From:</strong> 01.01.2024</p>
            <p><strong>Valid To:</strong> 31.12.2024</p>
          </div>

          <div className="flex justify-between items-center">
            <button className="border border-gray-400 text-gray-700 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition">
              👁️ View
            </button>
            <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-700 transition">
              ✏️ Edit
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">Created: 15.01.2024</p>
        </div>
      </div>
    </div>
  );
}
