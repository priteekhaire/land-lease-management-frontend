// src/components/dashboard/RecentTransaction.tsx
'use client';
import React from 'react';

type Transaction = {
  type: 'income' | 'expense';
  description: string;
  amount: string;
  date: string;
  reference: string;
};

type RecentTransactionProps = {
  transactions: Transaction[];
};

const RecentTransaction: React.FC<RecentTransactionProps> = ({ transactions }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border border-black w-1/2">
    <h3 className="text-lg font-semibold mb-4">Recent Financial Transactions</h3>
    <ul>
      {transactions.map((tx, index) => (
        <li key={index} className="flex justify-between mb-2">
          <div>
            <p className="font-semibold">{tx.description}</p>
            <p className="text-sm text-gray-500">{tx.date} • {tx.reference}</p>
          </div>
          <p className={`font-semibold ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
            {tx.type === 'income' ? '+' : '-'} {tx.amount}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentTransaction;
