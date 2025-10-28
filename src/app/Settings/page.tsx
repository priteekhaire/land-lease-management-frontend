"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [contractRenew, setContractRenew] = useState(true);
  const [paymentRemind, setPaymentRemind] = useState(true);
  const [maintenanceAlert, setMaintenanceAlert] = useState(true);
  const [systemUpdate, setSystemUpdate] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500">Manage your account and system preferences</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          💾 Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border border-black/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">👤 Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input className="w-full border rounded-md p-2 mt-1" defaultValue="Hans Müller" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                className="w-full border rounded-md p-2 mt-1"
                defaultValue="hans.mueller@greenvalleyfarm.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input className="w-full border rounded-md p-2 mt-1" defaultValue="+49 30 12345678" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Farm Operation</label>
              <input className="w-full border rounded-md p-2 mt-1" defaultValue="Green Valley Farm" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-black/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🔔 Notification Settings</h2>
          <div className="space-y-3">
            {[
              { label: "Email Notifications", checked: emailNotif, setter: setEmailNotif },
              { label: "Contract Renewals", checked: contractRenew, setter: setContractRenew },
              { label: "Payment Reminders", checked: paymentRemind, setter: setPaymentRemind },
              { label: "Maintenance Alerts", checked: maintenanceAlert, setter: setMaintenanceAlert },
              { label: "System Updates", checked: systemUpdate, setter: setSystemUpdate },
            ].map(({ label, checked, setter }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-700">{label}</span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setter(e.target.checked)}
                  className="w-5 h-5 accent-green-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-black/20">
          <h2 className="text-xl font-semibold mb-4">🔒 Security Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" className="w-full border rounded-md p-2 mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <input type="password" className="w-full border rounded-md p-2 mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
              <input type="password" className="w-full border rounded-md p-2 mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
              <input type="checkbox" className="w-5 h-5 accent-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-black/20">
          <h2 className="text-xl font-semibold mb-4">⚙️ System Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Default Currency</label>
              <select className="w-full border rounded-md p-2 mt-1">
                <option>Euro (EUR)</option>
                <option>USD ($)</option>
                <option>INR (₹)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date Format</label>
              <select className="w-full border rounded-md p-2 mt-1">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Time Zone</label>
              <select className="w-full border rounded-md p-2 mt-1">
                <option>Europe/Berlin (CET)</option>
                <option>Asia/Kolkata (IST)</option>
                <option>America/New_York (EST)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Auto-save</label>
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="w-5 h-5 accent-green-600"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-black/20 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">💾 Data Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Export Data", desc: "Download your data in various formats", button: "Export All Data" },
              { label: "Backup", desc: "Create a backup of your system", button: "Create Backup" },
              { label: "Import Data", desc: "Import data from external sources", button: "Import Data" },
            ].map(({ label, desc, button }) => (
              <div key={label} className="border border-black/20 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-gray-800">{label}</h3>
                <p className="text-sm text-gray-500 mb-3">{desc}</p>
                <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
                  {button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
