'use client';
import React from 'react';
import { FaPlus, FaFileContract, FaChartBar, FaUserPlus } from 'react-icons/fa';

type QuickActionProps = {
  onAddFarm: () => void;
  onCreateContract: () => void;
  onGenerateReport: () => void;
  onAddContact: () => void;
};

const QuickAction: React.FC<QuickActionProps> = ({
  onAddFarm,
  onCreateContract,
  onGenerateReport,
  onAddContact,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>

    <div className="flex flex-wrap justify-between gap-4">
      <button
        onClick={onAddFarm}
        className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 p-4 rounded-xl shadow-sm border border-gray-300 transition w-[23%]"
      >
        <FaPlus className="text-blue-600 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">Add New Farm</span>
      </button>

      <button
        onClick={onCreateContract}
        className="flex flex-col items-center justify-center bg-gray-50 hover:bg-green-50 p-4 rounded-xl shadow-sm border border-gray-300 transition w-[23%]"
      >
        <FaFileContract className="text-green-600 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">Create Contract</span>
      </button>

      <button
        onClick={onGenerateReport}
        className="flex flex-col items-center justify-center bg-gray-50 hover:bg-yellow-50 p-4 rounded-xl shadow-sm border border-gray-300 transition w-[23%]"
      >
        <FaChartBar className="text-yellow-600 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">Generate Report</span>
      </button>

      <button
        onClick={onAddContact}
        className="flex flex-col items-center justify-center bg-gray-50 hover:bg-purple-50 p-4 rounded-xl shadow-sm border border-gray-300 transition w-[23%]"
      >
        <FaUserPlus className="text-purple-600 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">Add Contact</span>
      </button>
    </div>
  </div>
);

export default QuickAction;
