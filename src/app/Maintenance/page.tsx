"use client";

import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const router = useRouter();

  const maintenanceData = [
    {
      id: 1,
      title: "John Deere 6R 175",
      type: "Routine",
      date: "15.01.2024",
      nextDue: "15.04.2024",
      cost: "250,00 €",
      performedBy: "Farm Maintenance Team",
      status: "completed",
      description: "Regular oil change and filter replacement",
    },
    {
      id: 2,
      title: "Case IH Axial-Flow 250",
      type: "Repair",
      date: "20.01.2024",
      nextDue: "20.07.2024",
      cost: "850,00 €",
      performedBy: "Case IH Service Center",
      status: "completed",
      description: "Hydraulic system repair and component replacement",
    },
    {
      id: 3,
      title: "John Deere 6R 175",
      type: "Inspection",
      date: "01.02.2024",
      nextDue: "15.02.2024",
      cost: "0,00 €",
      performedBy: "Scheduled",
      status: "pending",
      description: "Pre-season inspection and safety check",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Maintenance Management</h1>
          <p className="text-gray-600 mt-1">
            Track equipment maintenance and service records
          </p>
        </div>
        <button
          onClick={() => router.push("/Maintenance/new")}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Schedule Maintenance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {maintenanceData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 border border-gray-400 transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  item.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-3">{item.type}</p>

            <div className="text-sm space-y-1">
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Next Due:</strong> {item.nextDue}</p>
              <p><strong>Cost:</strong> {item.cost}</p>
              <p><strong>Performed By:</strong> {item.performedBy}</p>
            </div>

            <div className="bg-gray-100 mt-4 p-3 rounded-lg text-gray-700 text-sm border border-gray-400">
              {item.description}
            </div>

            <div className="flex justify-between mt-4">
              <button className="border border-gray-400 text-gray-700 px-4 py-1 rounded-lg hover:bg-gray-100 transition">
                👁️ View
              </button>
              <button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition">
                ✏️ Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-5 text-center border border-gray-400">
          <p className="text-gray-500">Total Records</p>
          <p className="text-2xl font-bold text-gray-800">3</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 text-center border border-gray-400">
          <p className="text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 text-center border border-gray-400">
          <p className="text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-red-600">1</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 text-center border border-gray-400">
          <p className="text-gray-500">Total Cost</p>
          <p className="text-2xl font-bold text-blue-600">1.100,00 €</p>
        </div>
      </div>
    </div>
  );
}
