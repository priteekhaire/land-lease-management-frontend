'use client';
import React from 'react';

type ContractSearchProps = {
  onSearch: (query: string) => void;
};

const ContractSearch: React.FC<ContractSearchProps> = ({ onSearch }) => (
  <div>
    <input
      type="text"
      placeholder="Search contracts..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
    />
  </div>
);

export default ContractSearch;
