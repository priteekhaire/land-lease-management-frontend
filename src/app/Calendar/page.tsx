"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import { useState } from "react";

export default function CalendarPage() {
  const router = useRouter();
  const [currentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  const calendarCells = [];
  for (let i = 0; i < startDay; i++) calendarCells.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarCells.push(i);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📅 Calendar</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your farm operations schedule and events
          </p>
        </div>
        <button
          onClick={() => router.push("/Calendar/new")}
          className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium shadow-sm transition-all"
        >
          + Add Event
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {monthName} {year}
        </h2>

        <div className="grid grid-cols-7 gap-2 text-center text-gray-700 font-semibold">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 border-b bg-gray-50">
              {day}
            </div>
          ))}

          {calendarCells.map((day, i) => (
            <div
              key={i}
              className={`h-24 border rounded-lg flex items-start justify-start p-2 text-gray-700 text-sm transition-all ${
                day
                  ? "bg-white hover:bg-green-50 hover:border-green-300"
                  : "bg-gray-50 opacity-60"
              }`}
            >
              {day && (
                <span className="font-semibold text-gray-800">{day}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-green-600" /> Upcoming Events
        </h2>

        <div className="space-y-4">
          {[
            {
              title: "Lease Payment Due",
              desc: "Monthly lease payment for North Field",
              date: "2025-10-05",
              time: "09:00",
              tag: "Payment",
              color: "bg-red-100 text-red-600",
            },
            {
              title: "Equipment Maintenance",
              desc: "Tractor 6R 175 routine maintenance",
              date: "2025-10-10",
              time: "10:00",
              tag: "Maintenance",
              color: "bg-orange-100 text-orange-700",
            },
            {
              title: "Contract Renewal Meeting",
              desc: "Discuss contract renewal with John Doe",
              date: "2025-10-15",
              time: "14:00",
              tag: "Meeting",
              color: "bg-blue-100 text-blue-700",
            },
            {
              title: "Harvest Planning",
              desc: "Plan harvest schedule for upcoming season",
              date: "2025-10-20",
              time: "08:00",
              tag: "Planning",
              color: "bg-green-100 text-green-700",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md transition bg-gray-50 hover:bg-white"
            >
              <div className="flex items-start gap-3">
                <div className="bg-white p-3 rounded-lg border">
                  <CalendarDays className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">{event.desc}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span>{event.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {event.time}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${event.color}`}
              >
                {event.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Payments", value: 3, icon: "💰", color: "border-green-400" },
          { label: "Maintenance", value: 2, icon: "🧰", color: "border-orange-400" },
          { label: "Meetings", value: 1, icon: "👥", color: "border-blue-400" },
          { label: "Planning", value: 1, icon: "📍", color: "border-purple-400" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-white border-2 ${item.color} rounded-xl p-5 text-center shadow-sm hover:shadow-md transition`}
          >
            <div className="text-3xl">{item.icon}</div>
            <h4 className="font-semibold text-gray-700 mt-2">{item.label}</h4>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
