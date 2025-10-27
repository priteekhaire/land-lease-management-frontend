import { Contract } from '@/types/contract';
import ContractCard from './ContractCard';

type ContractListProps = {
  contracts: Contract[];
};

const ContractList: React.FC<ContractListProps> = ({ contracts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {contracts.length === 0 ? (
      <p className="text-gray-500 col-span-full text-center">
        No contracts found.
      </p>
    ) : (
      contracts.map((contract) => (
        <ContractCard key={contract.id} contract={contract} />
      ))
    )}
  </div>
);

export default ContractList;
