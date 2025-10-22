'use client';
import React from 'react';
import { FaBell, FaCog, FaUserCircle, FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm fixed top-0 left-64 right-0 z-10">
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search farms, parcels, contracts..."
          className="bg-transparent outline-none w-full text-gray-700"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex flex-col text-right">
          <span className="font-medium text-gray-800">Hans Müller</span>
          <span className="text-sm text-gray-500">Green Valley Farm</span>
        </div>

        <FaUserCircle className="text-green-500 text-3xl cursor-pointer" />
        <FaCog className="text-gray-600 text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
