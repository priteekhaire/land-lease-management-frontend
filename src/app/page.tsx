// src/app/contracts/page.tsx
'use client';
import React, { useState } from 'react';
import { useContracts } from '@/hooks/useContracts';
import ContractList from '@/components/contracts/ContractList';
import ContractFilter from '@/components/contracts/ContractFilter';

export default function ContractsPage() {
  const { data: contracts = [], isLoading } = useContracts();
  const [statusFilter, setStatusFilter] = useState('');

  const filteredContracts = statusFilter
    ? contracts.filter(c => c.status === statusFilter)
    : contracts;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contracts</h1>
      <ContractFilter status={statusFilter} onChange={setStatusFilter} />
      <ContractList contracts={filteredContracts} />
    </div>
  );
}
