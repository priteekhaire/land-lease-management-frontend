'use client';
import { useRouter } from 'next/navigation';
import { FaFilter, FaPlus } from 'react-icons/fa';

export default function ContactsPage() {
  const router = useRouter();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-gray-500 mt-1">
            Manage your contacts and stakeholders
          </p>
        </div>

        <button
          onClick={() => router.push('/contacts/add')}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          <FaPlus /> Add Contact
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search contacts..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
          <FaFilter /> Filter
        </button>
      </div>

      {/* Example Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="border rounded-xl p-4 shadow-sm bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Hans Müller</h2>
            <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-2">Green Valley Farm</p>
          <p className="text-gray-500 text-sm">📍 Berlin 10115</p>
          <p className="text-gray-500 text-sm">📧 hans.mueller@greenvalleyfarm.com</p>

          <div className="mt-4 flex justify-between">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              View
            </button>
            <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Edit
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-xl p-4 shadow-sm bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Maria Schmidt</h2>
            <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-2">Mountain View Agriculture</p>
          <p className="text-gray-500 text-sm">📍 München 80331</p>
          <p className="text-gray-500 text-sm">📧 maria.schmidt@mountainviewag.com</p>

          <div className="mt-4 flex justify-between">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              View
            </button>
            <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="border rounded-xl bg-white p-4 text-center shadow-sm">
          <h3 className="text-sm text-gray-500">Total Contacts</h3>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="border rounded-xl bg-white p-4 text-center shadow-sm">
          <h3 className="text-sm text-gray-500">Property Owners</h3>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="border rounded-xl bg-white p-4 text-center shadow-sm">
          <h3 className="text-sm text-gray-500">Contract Partners</h3>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="border rounded-xl bg-white p-4 text-center shadow-sm">
          <h3 className="text-sm text-gray-500">Farm Members</h3>
          <p className="text-xl font-bold">2</p>
        </div>
      </div>
    </div>
  );
}
