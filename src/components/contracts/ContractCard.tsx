import React from 'react';
import { Contract } from '@/types/contract';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard: React.FC<ContractCardProps> = ({ contract }) => (
  <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all">
    <h2 className="font-bold text-lg text-gray-800 mb-1">{contract.propertyName}</h2>
    <p className="text-gray-600 text-sm mb-1">Tenant: {contract.tenantName}</p>
    <p className="text-gray-600 text-sm mb-1">
      Duration: {contract.startDate} → {contract.endDate}
    </p>
    <p className="text-gray-600 text-sm mb-1">Rent: €{contract.rentAmount}</p>
    <p className="text-gray-600 text-sm">
      Status:{' '}
      <span
        className={`font-semibold ${
          contract.status === 'active' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {contract.status}
      </span>
    </p>
  </div>
);

export default ContractCard;
