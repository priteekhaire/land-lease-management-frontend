"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewMaintenancePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    equipment: "",
    type: "",
    date: "",
    nextDue: "",
    cost: "",
    performedBy: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Maintenance scheduled successfully!");
    router.push("/maintenance");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Schedule Maintenance</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Equipment</label>
            <input
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="e.g., John Deere 6R 175"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Type</label>
            <input
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Routine, Repair, or Inspection"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-600">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Next Due</label>
              <input
                type="date"
                name="nextDue"
                value={formData.nextDue}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Cost (€)</label>
            <input
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="e.g., 250"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Performed By</label>
            <input
              name="performedBy"
              value={formData.performedBy}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="e.g., Farm Maintenance Team"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Maintenance details..."
            ></textarea>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => router.push("/Maintenance")}
              className="border border-gray-400 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              ← Back to Maintenance
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save Maintenance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
