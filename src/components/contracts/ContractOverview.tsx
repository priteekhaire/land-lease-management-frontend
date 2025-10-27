'use client';
import React from 'react';

const ContractOverview: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div>
      <p className="text-gray-600 text-sm">Total Contracts</p>
      <h3 className="text-lg font-semibold">2</h3>
    </div>
    <div>
      <p className="text-gray-600 text-sm">Active Contracts</p>
      <h3 className="text-lg font-semibold text-green-600">2</h3>
    </div>
    <div>
      <p className="text-gray-600 text-sm">Total Value</p>
      <h3 className="text-lg font-semibold">€5,100</h3>
    </div>
    <div>
      <p className="text-gray-600 text-sm">Expiring Soon</p>
      <h3 className="text-lg font-semibold text-orange-500">2</h3>
    </div>
  </div>
);

export default ContractOverview;
