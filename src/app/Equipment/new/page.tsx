"use client";
import { useRouter } from "next/navigation";

export default function AddEquipmentPage() {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
     
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add Equipment</h1>
          <p className="text-gray-500">Enter details for new farm equipment</p>
        </div>
        <button
          onClick={() => router.push("/Equipment")}
          className="border border-green-500 text-green-600 px-5 py-2 rounded-lg hover:bg-green-50"
        >
          ← Back to Equipment
        </button>
      </div>

      <input
        type="text"
        placeholder="🔍 Search equipment templates..."
        className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
      />

   
      <div className="bg-white p-8 rounded-xl shadow-md border max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium">Equipment Name</label>
            <input
              type="text"
              placeholder="e.g., John Deere 6R 175"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Type</label>
            <input
              type="text"
              placeholder="e.g., Tractor"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Serial Number</label>
            <input
              type="text"
              placeholder="JD6R175001"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Purchase Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Purchase Price (€)</label>
            <input
              type="number"
              placeholder="85000"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Current Value (€)</label>
            <input
              type="number"
              placeholder="75000"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-1 font-medium">Notes</label>
          <textarea
            placeholder="Add notes about this equipment..."
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Save Equipment
          </button>
        </div>
      </div>
    </div>
  );
}
