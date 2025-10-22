// src/pages/contracts.tsx
'use client';
import React, { useState, useEffect } from 'react';
import ContractOverview from '@/components/contracts/ContractOverview';
import ContractList from '@/components/contracts/ContractList';
import ContractFilters from '@/components/contracts/ContractFilter';
import ContractSearch from '@/components/contracts/ContractSearch';
import ContractPagination from '@/components/contracts/ContractPagination';
import { Contract } from '@/types/contract';

const ContractsPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Fetch contracts from API
  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch('/api/contracts');
        const data: Contract[] = await response.json();
        setContracts(data);
        setFilteredContracts(data);
        setTotalPages(Math.ceil(data.length / 10));
      } catch (error) {
        console.error('Failed to fetch contracts:', error);
      }
    };

    fetchContracts();
  }, []);

  // Apply filter and search query
  useEffect(() => {
    let updatedContracts = contracts;

    if (filter) {
      updatedContracts = updatedContracts.filter(
        (contract) => contract.status === filter
      );
    }

    if (searchQuery) {
      updatedContracts = updatedContracts.filter(
        (contract) =>
          contract.tenantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contract.propertyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredContracts(updatedContracts);
    setTotalPages(Math.ceil(updatedContracts.length / 10));
  }, [filter, searchQuery, contracts]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Paginate contracts
  const paginatedContracts = filteredContracts.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div className="p-6 space-y-6">
      <ContractOverview />
      <ContractFilters onFilterChange={handleFilterChange} />
      <ContractSearch onSearch={handleSearch} />
      <ContractList contracts={paginatedContracts} />
      <ContractPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ContractsPage;
