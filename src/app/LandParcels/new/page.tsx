"use client";

import { useRouter } from "next/navigation";

export default function NewLandParcelPage() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/LandParcels");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Land parcel saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
     
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Land Parcel
          </h1>
          <p className="text-gray-500">
            Enter land parcel details including location, soil information, and
            infrastructure.
          </p>
        </div>

        <button
          onClick={handleCancel}
          className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          ← Back to Land Parcels
        </button>
      </div>

   
      <form
        onSubmit={handleSave}
        className="bg-white border rounded-xl shadow-sm p-6 space-y-6 max-w-3xl mx-auto"
      >
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Parcel Name *
              </label>
              <input
                type="text"
                placeholder="Enter parcel name"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Parcel Code
              </label>
              <input
                type="text"
                placeholder="Enter parcel code"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Land Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Area (m²) *
              </label>
              <input
                type="number"
                placeholder="Enter area"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Soil Type
              </label>
              <input
                type="text"
                placeholder="e.g. Loamy Sand"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Soil Quality
              </label>
              <select className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Good</option>
                <option>Excellent</option>
                <option>Moderate</option>
                <option>Poor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Drainage
              </label>
              <select className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Good</option>
                <option>Moderate</option>
                <option>Poor</option>
              </select>
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="water" className="w-4 h-4" />
              <label htmlFor="water" className="text-gray-700">
                Water Supply
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="electricity" className="w-4 h-4" />
              <label htmlFor="electricity" className="text-gray-700">
                Electricity
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="road" className="w-4 h-4" />
              <label htmlFor="road" className="text-gray-700">
                Farm Road Access
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Additional Notes
          </h2>
          <textarea
            placeholder="Enter any additional notes..."
            rows={3}
            className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

      
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save Parcel
          </button>
        </div>
      </form>
    </div>
  );
}
