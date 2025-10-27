'use client';

import { useRouter } from 'next/navigation';

const maintenanceRecords = [
  {
    id: 1,
    startDate: '15.01.2024',
    endDate: '15.04.2024',
    performedBy: 'Farm Maintenance Team',
    description: 'Regular oil change and component replacement',
    status: 'Scheduled',
    action: 'Edit',
  },
  {
    id: 2,
    startDate: '20.01.2024',
    endDate: '20.02.2024',
    performedBy: 'Case IH Service Center',
    description: 'Hydraulic system repair and component replacement',
    status: 'Scheduled',
    action: 'Edit',
  },
  {
    id: 3,
    startDate: '15.02.2024',
    endDate: '15.03.2024',
    performedBy: '',
    description: 'Pre-season inspection and testing of equipment',
    status: 'Maintenance Due Soon',
    action: 'View',
  },
];

export default function MaintenancePage() {
  const router = useRouter();

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Maintenance</h1>
        <button
          onClick={() => router.push('/maintenance/new')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Schedule Maintenance
        </button>
      </div>

      <div className="grid gap-4">
        {maintenanceRecords.map((record) => (
          <div
            key={record.id}
            className="bg-white border rounded-lg p-4 shadow-sm space-y-2"
          >
            <div className="flex justify-between text-sm text-gray-600">
              <span>Start Date: {record.startDate}</span>
              <span>End Date: {record.endDate}</span>
            </div>
            <p className="text-gray-800">{record.description}</p>
            <p className="text-sm text-gray-500">
              Performed By:{' '}
              {record.performedBy ? record.performedBy : 'Not specified'}
            </p>
            <div className="flex justify-between items-center pt-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  record.status === 'Scheduled'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {record.status}
              </span>
              <button className="text-sm text-green-700 hover:underline">
                {record.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-1">
        <p>Total Records: 3</p>
        <p>Completed: 2</p>
        <p>Pending: 1</p>
        <p>Total Cost: €1,100.00</p>
      </div>
    </div>
  );
}