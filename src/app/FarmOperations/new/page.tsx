"use client";

import { useRouter } from "next/navigation";

export default function NewFarmPage() {
  const router = useRouter();

  return (
    <div className="p-8">
      {/* Back button */}
      <button
        onClick={() => router.push("/farms")}
        className="text-sm text-green-600 hover:underline mb-4"
      >
        ← Back to Farms
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Farm Operations Form</h1>
      <p className="text-gray-500 mb-8">
        Create or edit farm operation details including basic information,
        geographic data, and contact details.
      </p>

      <form className="space-y-8">
        {/* Basic Information */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Farm Name*</label>
              <input
                type="text"
                placeholder="Enter farm name"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Farm Code*</label>
              <input
                type="text"
                placeholder="Enter unique farm code"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Farm Type*</label>
              <select className="mt-1 w-full border rounded-lg p-2">
                <option>Family Farm</option>
                <option>Corporate Farm</option>
                <option>Cooperative</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Current Harvest Year*
              </label>
              <input
                type="number"
                value={2025}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              placeholder="Enter farm description"
              className="mt-1 w-full border rounded-lg p-2"
              rows={3}
            />
          </div>
        </section>

        {/* Geographic Information */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Geographic Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Center Point X (Longitude)
              </label>
              <input
                type="text"
                placeholder="Enter X coordinate"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Center Point Y (Latitude)
              </label>
              <input
                type="text"
                placeholder="Enter Y coordinate"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Coordinate System
              </label>
              <input
                type="text"
                value="UTM"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Coordinate System Date
              </label>
              <input
                type="text"
                value="27-10-2025"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Coordinate Unit
              </label>
              <input
                type="text"
                value="Meters"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Delta X</label>
              <input
                type="text"
                placeholder="Enter delta X"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Delta Y</label>
              <input
                type="text"
                placeholder="Enter delta Y"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Coordinate System Confirmed
              </label>
              <input
                type="checkbox"
                className="mt-2 h-4 w-4 accent-green-600"
              />
            </div>
          </div>
        </section>

        {/* Area Information */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Area Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Total Area (hectares)
              </label>
              <input
                type="text"
                placeholder="Enter total area"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Arable Area (hectares)
              </label>
              <input
                type="text"
                placeholder="Enter arable area"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Grassland Area (hectares)
              </label>
              <input
                type="text"
                placeholder="Enter grassland area"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Forest Area (hectares)
              </label>
              <input
                type="text"
                placeholder="Enter forest area"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Website</label>
              <input
                type="text"
                placeholder="https://example.com"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="+1 (555) 123-4567"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="text"
                placeholder="farm@example.com"
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/farms")}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save Farm
          </button>
        </div>
      </form>
    </div>
  );
}
