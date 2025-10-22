// src/components/contracts/ContractForm.tsx
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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label className="block font-medium">Tenant Name</label>
        <input className="border p-2 w-full" value={tenantName} onChange={e => setTenantName(e.target.value)} required />
      </div>
      <div>
        <label className="block font-medium">Property Name</label>
        <input className="border p-2 w-full" value={propertyName} onChange={e => setPropertyName(e.target.value)} required />
      </div>
      <div className="flex space-x-4">
        <div>
          <label className="block font-medium">Start Date</label>
          <input type="date" className="border p-2" value={startDate} onChange={e => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label className="block font-medium">End Date</label>
          <input type="date" className="border p-2" value={endDate} onChange={e => setEndDate(e.target.value)} required />
        </div>
      </div>
      <div>
        <label className="block font-medium">Rent Amount</label>
        <input type="number" className="border p-2 w-full" value={rentAmount} onChange={e => setRentAmount(Number(e.target.value))} required />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
    </form>
  );
};

export default ContractForm;
