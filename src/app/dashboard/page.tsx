"use client";

import { TrendingUp, TrendingDown, FileText, MapPin, Users, Tractor, Calendar } from "lucide-react";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  const cards = [
    { title: "Total Farms", value: "2", subtitle: "Active farm operations", icon: <FileText size={20} /> },
    { title: "Land Parcels", value: "2", subtitle: "Managed land parcels", icon: <MapPin size={20} /> },
    { title: "Active Contracts", value: "2", subtitle: "Current lease agreements", icon: <FileText size={20} /> },
    { title: "Monthly Revenue", value: "5.000,00 €", subtitle: "+12% from last month", color: "text-green-600", icon: <TrendingUp size={20} /> },
    { title: "Monthly Expenses", value: "1.500,00 €", subtitle: "+5% from last month", color: "text-red-600", icon: <TrendingDown size={20} /> },
    { title: "Net Income", value: "3.500,00 €", subtitle: "This month", color: "text-green-600", icon: <FileText size={20} /> },
    { title: "Total Contacts", value: "2", subtitle: "Registered contacts", icon: <Users size={20} /> },
    { title: "Equipment", value: "2", subtitle: "Active equipment", icon: <Tractor size={20} /> },
  ];

  const recentTransactions = [
    { title: "Crop sale - Wheat", date: "15.01.2024", id: "INV-2024-001", amount: "+5.000,00 €", type: "income", color: "text-green-600" },
    { title: "Fuel and maintenance", date: "20.01.2024", id: "EXP-2024-001", amount: "-1.500,00 €", type: "expense", color: "text-red-600" },
    { title: "Monthly lease payment", date: "25.01.2024", id: "LEASE-2024-001", amount: "-425,00 €", type: "lease payment", color: "text-red-500" },
  ];

  const quickActions = [
    { title: "Add New Farm", subtitle: "Register a new farm operation", color: "bg-green-50", icon: "➕" },
    { title: "Create Contract", subtitle: "Set up a new lease agreement", color: "bg-purple-50", icon: "📄" },
    { title: "Generate Report", subtitle: "Create financial or usage reports", color: "bg-blue-50", icon: "📊" },
    { title: "Add Contact", subtitle: "Register new stakeholder", color: "bg-orange-50", icon: "👤" },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome back! Here's what's happening with your land and lease management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {cards.map((card, i) => (
            <div key={i} className="bg-white border border-black/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">{card.title}</h2>
                {card.icon}
              </div>
              <div className={`text-2xl font-bold ${card.color || ""}`}>{card.value}</div>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-black/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Recent Financial Transactions</h2>
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-3 hover:bg-gray-50">
                <div>
                  <div className="font-semibold">{tx.title}</div>
                  <div className="text-sm text-gray-500">{tx.date} • {tx.id}</div>
                </div>
                <div className={`font-bold ${tx.color}`}>{tx.amount}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-black/20 rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <Calendar className="text-gray-400 mb-2" size={40} />
            <h2 className="text-xl font-bold mb-2">Upcoming Contract Renewals</h2>
            <p className="text-gray-500">No contracts expiring in the next 90 days</p>
          </div>
        </div>

        <div className="bg-white border border-black/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {quickActions.map((action, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl border border-black/20 ${action.color} hover:bg-gray-100 cursor-pointer transition-all`}
              >
                <div className="text-3xl mb-2">{action.icon}</div>
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
