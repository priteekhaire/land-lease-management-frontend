// src/components/contracts/ContractFilters.tsx
'use client';
import React from 'react';

type ContractFiltersProps = {
  onFilterChange: (filter: string) => void;
};

const ContractFilters: React.FC<ContractFiltersProps> = ({ onFilterChange }) => (
  <div className="flex space-x-4 mb-6">
    <select onChange={(e) => onFilterChange(e.target.value)} className="p-2 border rounded">
      <option value="">All Statuses</option>
      <option value="active">Active</option>
      <option value="expired">Expired</option>
      <option value="pending">Pending</option>
    </select>
  </div>
);

export default ContractFilters;
