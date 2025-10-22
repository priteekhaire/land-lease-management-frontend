// src/components/contracts/ContractPagination.tsx
'use client';
import React from 'react';

type ContractPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const ContractPagination: React.FC<ContractPaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 bg-gray-200 rounded"
    >
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 bg-gray-200 rounded"
    >
      Next
    </button>
  </div>
);

export default ContractPagination;
