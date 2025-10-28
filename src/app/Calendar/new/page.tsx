"use client";

import { useRouter } from "next/navigation";

export default function NewEventPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Event</h1>
        <button
          onClick={() => router.push("/Calendar")}
          className="text-sm text-gray-600 border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          ← Back to Calendar
        </button>
      </div>

      <form className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Title</label>
          <input
            type="text"
            placeholder="Enter event title"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            placeholder="Enter event description"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Time</label>
            <input
              type="time"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Type</label>
          <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option>Payment</option>
            <option>Maintenance</option>
            <option>Meeting</option>
            <option>Planning</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
        >
          Save Event
        </button>
      </form>
    </div>
  );
}
