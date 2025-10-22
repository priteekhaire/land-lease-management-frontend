// src/app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import DashboardCard from '@/components/dashboard/DashboardCard';
import RecentTransaction from '@/components/dashboard/RecentTransaction';
import UpcomingRenewal from '@/components/dashboard/UpcomingRenewal';
import QuickAction from '@/components/dashboard/QuickAction';
import { FaTractor, FaHome, FaDollarSign, FaTools, FaUser } from 'react-icons/fa';
import ContractSearch from '@/components/contracts/ContractSearch';

// ✅ Types
type Transaction = {
  type: 'income' | 'expense';
  description: string;
  amount: string;
  date: string;
  reference: string;
};

type Renewal = {
  contractId: string;
  tenantName: string;
  propertyName: string;
  endDate: string;
};

const Dashboard: React.FC = () => {
  // Sample transactions
  const [transactions] = useState<Transaction[]>([
    { type: 'income', description: 'Crop sale - Wheat', amount: '5,000.00', date: '15.01.2024', reference: 'INV-2024-001' },
    { type: 'expense', description: 'Fuel and maintenance', amount: '1,500.00', date: '20.01.2024', reference: 'EXP-2024-001' },
    { type: 'expense', description: 'Monthly lease payment', amount: '425.00', date: '25.01.2024', reference: 'LEASE-2024-001' },
  ]);

  // Sample upcoming contract renewals
  const [renewals] = useState<Renewal[]>([
    { contractId: 'LEASE-2024-002', tenantName: 'John Doe', propertyName: 'Farm A', endDate: '15.04.2024' },
    { contractId: 'LEASE-2024-003', tenantName: 'Jane Smith', propertyName: 'Farm B', endDate: '20.05.2024' },
  ]);

  return (
    
    <div className="p-6 space-y-6 ">
      {/* <div>
        <ContractSearch onSearch={(query) => console.log('Searching for:', query)} />
      </div> */}
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <DashboardCard title="Total Farms" value="2" icon={<FaTractor />}  />
        <DashboardCard title="Land Parcels" value="2" icon={<FaHome />} />
        <DashboardCard title="Active Contracts" value="2" icon={<FaDollarSign />} />
        <DashboardCard title="Monthly Revenue" value="5,000.00" change="+12%" icon={<FaDollarSign />} />
        <DashboardCard title="Monthly Expenses" value="1,500.00" change="+5%" icon={<FaTools />} />
        <DashboardCard title="Net Income" value="3,500.00" icon={<FaDollarSign />} />
        <DashboardCard title="Total Contacts" value="2" icon={<FaUser />} />
        <DashboardCard title="Equipment" value="2" icon={<FaTools />} />
      </div>

      {/* Recent Transactions */}
      <RecentTransaction transactions={transactions} />

      {/* Upcoming Contract Renewals */}
      <UpcomingRenewal renewals={renewals} />

      {/* Quick Actions */}
      <QuickAction
        onAddFarm={() => console.log('Add New Farm')}
        onCreateContract={() => console.log('Create Contract')}
        onGenerateReport={() => console.log('Generate Report')}
        onAddContact={() => console.log('Add Contact')}
      />
    </div>
  );
};

export default Dashboard;
