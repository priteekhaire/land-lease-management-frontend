"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Filter, FileText, Calendar, Euro, Download, Edit3 } from "lucide-react";

export default function ContractsPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const contracts = [
    {
      id: 1,
      title: "North Field Lease Agreement",
      code: "#CON-2024-001",
      type: "Lease",
      value: "3,000.00 €",
      terms: "Monthly",
      notice: "90 days",
      startDate: "01.01.2024",
      endDate: "31.12.2024",
      signedDate: "15.12.2023",
      renewal: "Annual renewal with 3% increase",
      signedBy: "Hans Müller",
      status: "Active",
      created: "15.12.2023",
    },
    {
      id: 2,
      title: "South Field Lease Agreement",
      code: "#CON-2024-002",
      type: "Lease",
      value: "2,100.00 €",
      terms: "Monthly",
      notice: "90 days",
      startDate: "01.01.2024",
      endDate: "31.12.2024",
      signedDate: "15.12.2023",
      renewal: "Annual renewal with 3% increase",
      signedBy: "Hans Müller",
      status: "Active",
      created: "15.12.2023",
    },
  ];

  const filtered = contracts.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📄 Contracts</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your lease agreements and contracts efficiently
          </p>
        </div>
        <button
          onClick={() => router.push("/contracts/new")}
          className="mt-4 sm:mt-0 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" /> New Contract
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search contracts..."
          className="flex-1 border border-gray-400 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="flex items-center justify-center gap-2 border border-gray-400 bg-white px-4 py-2 rounded-lg hover:bg-gray-50 transition">
          <Filter className="w-4 h-4 text-gray-600" /> Filter
        </button>
      </div>

      {/* Contracts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((contract) => (
          <div
            key={contract.id}
            className="bg-white border border-gray-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            {/* Title + Status */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <FileText className="text-green-600 w-5 h-5" />
                <h2 className="font-semibold text-lg text-gray-800">
                  {contract.title}
                </h2>
              </div>
              <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                {contract.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-3">{contract.code}</p>

            {/* Details */}
            <div className="text-sm text-gray-700 space-y-1">
              <p>💼 Type: {contract.type}</p>
              <p>💰 Value: {contract.value}</p>
              <p>📆 Payment Terms: {contract.terms}</p>
              <p>⏳ Notice Period: {contract.notice}</p>
            </div>

            {/* Dates */}
            <div className="mt-4 border-t border-gray-400 pt-3 text-sm">
              <p className="font-semibold text-blue-600 mb-1">
                Contract Duration
              </p>
              <p>Start: {contract.startDate}</p>
              <p>End: {contract.endDate}</p>
              <p className="mt-1 text-blue-600">
                Signed: {contract.signedDate}
              </p>
            </div>

            {/* Renewal Info */}
            <div className="mt-3 bg-green-50 p-3 rounded-lg text-sm border border-gray-400">
              <p className="text-green-700 font-medium">🔄 Renewal Terms</p>
              <p className="text-gray-700">{contract.renewal}</p>
            </div>

            <p className="text-sm mt-3 text-gray-600">
              Signed by: <b>{contract.signedBy}</b>
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button className="border border-gray-400 px-3 py-1.5 rounded-md flex items-center gap-1 text-sm text-gray-700 hover:bg-gray-100 transition">
                <Download className="w-4 h-4" /> Download
              </button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-md flex items-center gap-1 text-sm hover:bg-green-700 transition">
                <Edit3 className="w-4 h-4" /> Edit
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Created: {contract.created}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          {
            label: "Total Contracts",
            value: "2",
            icon: <FileText className="text-green-600" />,
          },
          {
            label: "Active Contracts",
            value: "2",
            icon: <Calendar className="text-blue-600" />,
          },
          {
            label: "Total Value",
            value: "5,100.00 €",
            icon: <Euro className="text-purple-600" />,
          },
          {
            label: "Expiring Soon",
            value: "2",
            icon: <Calendar className="text-orange-500" />,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-400 rounded-xl p-5 flex items-center gap-3 shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-xl font-semibold text-gray-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
