// src/components/dashboard/DashboardCard.tsx
'use client';
import React from 'react';

type DashboardCardProps = {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, change, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
    <div className="text-2xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xl">{value}</p>
      {change && <p className="text-sm text-green-600">{change}</p>}
    </div>
  </div>
);

export default DashboardCard;
