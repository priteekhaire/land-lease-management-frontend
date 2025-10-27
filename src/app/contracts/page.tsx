'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Filter, FileText, Calendar, Euro } from 'lucide-react';

export default function ContractsPage() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const contracts = [
    {
      id: 1,
      title: 'North Field Lease Agreement',
      code: '#CON-2024-001',
      type: 'Lease',
      value: '3,000.00 €',
      terms: 'Monthly',
      notice: '90 days',
      startDate: '01.01.2024',
      endDate: '31.12.2024',
      signedDate: '15.12.2023',
      renewal: 'Annual renewal with 3% increase',
      signedBy: 'Hans Müller',
      status: 'Active',
      created: '15.12.2023',
    },
    {
      id: 2,
      title: 'South Field Lease Agreement',
      code: '#CON-2024-002',
      type: 'Lease',
      value: '2,100.00 €',
      terms: 'Monthly',
      notice: '90 days',
      startDate: '01.01.2024',
      endDate: '31.12.2024',
      signedDate: '15.12.2023',
      renewal: 'Annual renewal with 3% increase',
      signedBy: 'Hans Müller',
      status: 'Active',
      created: '15.12.2023',
    },
  ];

  const filtered = contracts.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Contracts</h1>
        <button
          onClick={() => router.push('/contracts/new')}
          className="bg-green-600 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-700"
        >
          <Plus className="w-5 h-5" /> New Contract
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        Manage lease agreements and contracts
      </p>

      {/* Search and Filter */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search contracts..."
          className="border border-gray-300 rounded-md px-3 py-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Contracts List */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(contract => (
          <div
            key={contract.id}
            className="bg-white border rounded-lg p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="text-purple-500 w-5 h-5" />
                <h2 className="font-semibold text-lg">{contract.title}</h2>
              </div>
              <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                {contract.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{contract.code}</p>
            <div className="text-sm space-y-1">
              <p>Type: {contract.type}</p>
              <p>Value: {contract.value}</p>
              <p>Payment Terms: {contract.terms}</p>
              <p>Termination Notice: {contract.notice}</p>
            </div>

            <div className="mt-4 border-t pt-3 text-sm">
              <p className="font-semibold text-blue-600">Contract Period</p>
              <p>Start Date: {contract.startDate}</p>
              <p>End Date: {contract.endDate}</p>
              <p className="mt-2 text-blue-600">Signed Date: {contract.signedDate}</p>
            </div>

            <div className="mt-3 bg-green-50 p-3 rounded text-sm">
              <p className="text-green-700 font-medium">Renewal Terms</p>
              <p>{contract.renewal}</p>
            </div>

            <p className="text-sm mt-3">Signed by: <b>{contract.signedBy}</b></p>

            <div className="flex items-center gap-3 mt-4">
              <button className="border px-3 py-1.5 rounded-md flex items-center gap-1 text-sm hover:bg-gray-100">
                Download
              </button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-md flex items-center gap-1 text-sm hover:bg-green-700">
                Edit
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Created: {contract.created}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="border rounded-lg p-4 bg-white flex items-center gap-3">
          <FileText className="text-green-500" />
          <div>
            <p className="text-gray-600 text-sm">Total Contracts</p>
            <p className="font-semibold text-lg">2</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-white flex items-center gap-3">
          <Calendar className="text-blue-500" />
          <div>
            <p className="text-gray-600 text-sm">Active Contracts</p>
            <p className="font-semibold text-lg">2</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-white flex items-center gap-3">
          <Euro className="text-purple-500" />
          <div>
            <p className="text-gray-600 text-sm">Total Value</p>
            <p className="font-semibold text-lg">5,100.00 €</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-white flex items-center gap-3">
          <Calendar className="text-orange-500" />
          <div>
            <p className="text-gray-600 text-sm">Expiring Soon</p>
            <p className="font-semibold text-lg">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
