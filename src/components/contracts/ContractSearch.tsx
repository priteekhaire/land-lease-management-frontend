// src/components/contracts/ContractSearch.tsx
'use client';
import React from 'react';

type ContractSearchProps = {
  onSearch: (query: string) => void;
};

const ContractSearch: React.FC<ContractSearchProps> = ({ onSearch }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Search contracts..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 w-full border rounded"
    />
  </div>
);

export default ContractSearch;
