import React, { useState } from 'react';
import { Contract } from '@/types/contract';

type ContractFormProps = {
  initialData?: Partial<Contract>;
  onSubmit: (data: Partial<Contract>) => void;
};

const ContractForm: React.FC<ContractFormProps> = ({ initialData = {}, onSubmit }) => {
  const [tenantName, setTenantName] = useState(initialData.tenantName || '');
  const [propertyName, setPropertyName] = useState(initialData.propertyName || '');
  const [startDate, setStartDate] = useState(initialData.startDate || '');
  const [endDate, setEndDate] = useState(initialData.endDate || '');
  const [rentAmount, setRentAmount] = useState(initialData.rentAmount || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ tenantName, propertyName, startDate, endDate, rentAmount });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-5 border border-gray-100"
    >
      <div>
        <label className="block font-medium mb-1">Tenant Name</label>
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={tenantName}
          onChange={e => setTenantName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Property Name</label>
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={propertyName}
          onChange={e => setPropertyName(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Start Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">End Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Rent Amount (€)</label>
        <input
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={rentAmount}
          onChange={e => setRentAmount(Number(e.target.value))}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all"
      >
        Save Contract
      </button>
    </form>
  );
};

export default ContractForm;
