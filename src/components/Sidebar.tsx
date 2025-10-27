'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaTractor, FaUsers, FaMapMarkerAlt, FaFileContract,
  FaLeaf, FaTools, FaMoneyBillWave, FaChartBar, FaBars, FaTimes, FaLandmark
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, href: '/dashboard' },
    { name: 'Farm Operations', icon: <FaTractor />, href: '/FarmOperations' },
    { name: 'Contacts', icon: <FaUsers />, href: '/contacts' },
    { name: 'Land Parcels', icon: <FaMapMarkerAlt />, href: '/LandParcels' },
    { name: 'Lease Management', icon: <FaFileContract />, href: '/LeaseManagement' },
    { name: 'Contracts', icon: <FaFileContract />, href: '/contracts' },
    { name: 'Crops', icon: <FaLeaf />, href: '/Crops' },
    { name: 'Equipment', icon: <FaTools />, href: '/Equipment' },
    { name: 'Maintenance', icon: <FaTools />, href: '/Maintenance' },
    { name: 'Financial', icon: <FaMoneyBillWave />, href: '/Financial' },
    { name: 'Reports', icon: <FaChartBar />, href: '/Report' },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 260 : 80 }}
      className="bg-[#0b1e34] text-white h-screen fixed left-0 top-0 p-4 flex flex-col justify-between shadow-lg z-50 overflow-y-auto"
    >
      {/* Top Section */}
      <div>
        {/* Logo & Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <FaLandmark className="text-green-500 text-2xl" />
            {isOpen && <h1 className="text-2xl font-bold text-white">LandLease</h1>}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl hover:text-green-400 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-1">
            {menuItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
                      ${isActive
                        ? 'bg-green-500 text-white font-semibold'
                        : 'hover:bg-[#1c2f4a] text-gray-200 hover:text-white'
                      }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm font-medium"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Section (optional footer area) */}
      <div className="mt-auto text-center text-gray-500 text-xs">
        <p>© 2025 LandLease</p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
