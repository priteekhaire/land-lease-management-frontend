// src/components/dashboard/UpcomingRenewal.tsx
'use client';
import React from 'react';

type Renewal = {
  contractId: string;
  tenantName: string;
  propertyName: string;
  endDate: string;
};

type UpcomingRenewalProps = {
  renewals: Renewal[];
};

const UpcomingRenewal: React.FC<UpcomingRenewalProps> = ({ renewals }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Upcoming Contract Renewals</h3>
    <ul>
      {renewals.map((renewal, index) => (
        <li key={index} className="flex justify-between mb-2">
          <div>
            <p className="font-semibold">{renewal.tenantName}</p>
            <p className="text-sm text-gray-500">{renewal.propertyName}</p>
          </div>
          <p className="text-sm text-gray-500">{renewal.endDate}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingRenewal;
