"use client";

import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
          <p className="text-gray-500">Generate and manage reports for your farm operations</p>
        </div>
        <Link
    href="/Report/new"
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
  >
    + Create Report
  </Link>

      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Reports", value: "24", icon: "📄" },
          { title: "This Month", value: "8", icon: "📅" },
          { title: "Downloads", value: "156", icon: "⬇️" },
          { title: "Templates", value: "4", icon: "📊" },
        ].map((item, i) => (
          <div key={i} className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-xl font-semibold">{item.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            title: "Lease Agreement Report",
            type: "Lease Report",
            desc: "Comprehensive lease agreement summary with financial details",
            date: "2024-01-15",
          },
          {
            title: "Financial Summary",
            type: "Financial Summary",
            desc: "Monthly financial summary with income and expense breakdown",
            date: "2024-01-20",
          },
          {
            title: "Land Usage Report",
            type: "Land Usage",
            desc: "Current land usage and lease status overview",
            date: "2024-01-10",
          },
          {
            title: "Crop Rotation Plan",
            type: "Crop Report",
            desc: "Annual crop rotation planning and yield projections",
            date: "2024-01-05",
          },
        ].map((report, i) => (
          <div key={i} className="bg-white border rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
              <p className="text-sm text-gray-500">{report.type}</p>
              <p className="mt-2 text-gray-600">{report.desc}</p>
              <p className="mt-3 text-sm text-gray-400">Last Generated: {report.date}</p>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                📊 Generate
              </button>
              <button className="bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200">
                ⬇️ Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Recent Reports</h2>
        <div className="space-y-3">
          {[
            {
              title: "Financial Summary - January 2024",
              date: "2024-01-20",
              size: "2.3 MB",
            },
            {
              title: "Lease Agreement Report - Q4 2023",
              date: "2024-01-15",
              size: "1.8 MB",
            },
            {
              title: "Land Usage Report - December 2023",
              date: "2024-01-10",
              size: "3.1 MB",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-4 flex justify-between items-center shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-400">
                  {item.date} • {item.size}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-100 border px-3 py-1.5 rounded hover:bg-gray-200">
                  ⬇️
                </button>
                <button className="bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Overview */}
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Financial Overview</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span>Total Revenue</span> <span className="text-green-600 font-medium">€45,000</span>
            </p>
            <p className="flex justify-between">
              <span>Total Expenses</span> <span className="text-red-600 font-medium">€28,500</span>
            </p>
            <p className="flex justify-between">
              <span>Net Income</span> <span className="text-blue-600 font-medium">€16,500</span>
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-green-600 h-2 rounded-full w-[70%]" />
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Land Usage Distribution</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span>Arable Land</span> <span>180 ha (72%)</span>
            </p>
            <p className="flex justify-between">
              <span>Grassland</span> <span>50 ha (20%)</span>
            </p>
            <p className="flex justify-between">
              <span>Forest</span> <span>20.5 ha (8%)</span>
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-blue-600 h-2 rounded-full w-[72%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
