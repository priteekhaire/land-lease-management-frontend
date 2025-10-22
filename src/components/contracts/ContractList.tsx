// src/components/contracts/ContractList.tsx
import { Contract } from '@/types/contract';

type ContractListProps = {
  contracts: Contract[];
};

const ContractList: React.FC<ContractListProps> = ({ contracts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {contracts.map((contract) => (
      <div key={contract.id} className="border p-4 rounded shadow">
        <h2 className="font-bold">{contract.propertyName}</h2>
        <p>Tenant: {contract.tenantName}</p>
        <p>Start: {contract.startDate}</p>
        <p>End: {contract.endDate}</p>
        <p>Rent: ${contract.rentAmount}</p>
        <p>Status: {contract.status}</p>
      </div>
    ))}
  </div>
);

export default ContractList;
