// src/components/contracts/ContractOverview.tsx
'use client';
import React from 'react';

const ContractOverview: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold">Contract Overview</h2>
    <p>Total Contracts: 120</p>
    <p>Active Contracts: 80</p>
    <p>Expired Contracts: 20</p>
    <p>Pending Contracts: 20</p>
  </div>
);

export default ContractOverview;
