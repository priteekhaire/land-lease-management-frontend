// src/components/contracts/ContractCard.tsx

import React from 'react';
import { Contract } from '@/types/contract';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard: React.FC<ContractCardProps> = ({ contract }) => (
  <div className="border rounded p-4 shadow-sm bg-white">
    <h2 className="font-bold text-lg">{contract.propertyName}</h2>
    <p>Tenant: {contract.tenantName}</p>
    <p>Duration: {contract.startDate} to {contract.endDate}</p>
    <p>Rent: ${contract.rentAmount}</p>
    <p>Status: <span className={`font-semibold ${contract.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{contract.status}</span></p>
  </div>
);

export default ContractCard;
