'use client';
import { useContracts } from '@/hooks/useContracts';
import ContractList from '@/components/contracts/ContractList';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContractsPage() {
  const { data: contracts, isLoading } = useContracts();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredContracts = contracts?.filter(contract =>
    contract.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Contracts</h1>
        <button
          onClick={() => router.push('/contracts/new')}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          + New Contract
        </button>
      </div>

      <input
        type="text"
        placeholder="Search contracts..."
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading ? (
        <p>Loading contracts...</p>
      ) : (
        <ContractList contracts={filteredContracts || []} />
      )}
    </div>
  );
}
