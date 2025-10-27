'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewContractPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    type: '',
    value: '',
    terms: '',
    notice: '',
    startDate: '',
    endDate: '',
    renewal: '',
    signedBy: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Contract saved successfully!');
    router.push('/contracts');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => router.push('/contracts')}
        className="mb-4 text-sm text-gray-600 hover:underline"
      >
        ← Back to Contracts
      </button>

      <h1 className="text-2xl font-bold mb-6">New Contract</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Value (€)</label>
            <input
              name="value"
              value={form.value}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Terms
            </label>
            <input
              name="terms"
              value={form.terms}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Renewal Terms</label>
          <input
            name="renewal"
            value={form.renewal}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Signed By</label>
          <input
            name="signedBy"
            value={form.signedBy}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Save Contract
        </button>
      </form>
    </div>
  );
}
