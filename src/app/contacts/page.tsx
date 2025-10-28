"use client";

import { useRouter } from "next/navigation";
import { FaFilter, FaPlus } from "react-icons/fa";

export default function ContactsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">👥 Contacts</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your contacts and stakeholders
          </p>
        </div>

        <button
          onClick={() => router.push("/contacts/add")}
          className="mt-4 sm:mt-0 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium shadow-sm transition-all"
        >
          <FaPlus /> Add Contact
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search contacts..."
          className="flex-1 border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-lg hover:bg-gray-50 transition">
          <FaFilter className="text-gray-600" /> Filter
        </button>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "Hans Müller",
            company: "Green Valley Farm",
            address: "Berlin 10115",
            email: "hans.mueller@greenvalleyfarm.com",
            status: "Active",
          },
          {
            name: "Maria Schmidt",
            company: "Mountain View Agriculture",
            address: "München 80331",
            email: "maria.schmidt@mountainviewag.com",
            status: "Active",
          },
        ].map((contact, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {contact.name}
              </h2>
              <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">
                {contact.status}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-1">{contact.company}</p>
            <p className="text-gray-500 text-sm">📍 {contact.address}</p>
            <p className="text-gray-500 text-sm mb-3">📧 {contact.email}</p>

            <div className="mt-4 flex justify-between">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                View
              </button>
              <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        {[
          { label: "Total Contacts", value: 2 },
          { label: "Property Owners", value: 2 },
          { label: "Contract Partners", value: 2 },
          { label: "Farm Members", value: 2 },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-sm text-gray-500">{item.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
