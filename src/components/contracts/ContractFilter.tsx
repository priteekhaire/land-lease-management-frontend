import React from "react";

interface ContractFilterProps {
  status: string; // ✅ added this
  onChange: (newStatus: string) => void;
}

const ContractFilter: React.FC<ContractFilterProps> = ({ status, onChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label htmlFor="status" className="font-medium">
        Filter by Status:
      </label>
      <select
        id="status"
        value={status}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default ContractFilter;
