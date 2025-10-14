import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

interface HomePageProps {
  userName: string;
}

export default function HomePage({ userName }: HomePageProps) {
  const revenueData = [
    { value: 2100 },
    { value: 1800 },
    { value: 2400 },
    { value: 2000 },
    { value: 2600 },
    { value: 2200 },
    { value: 2800 },
    { value: 3200 },
  ];

  const expensesData = [
    { value: 1600 },
    { value: 1900 },
    { value: 1700 },
    { value: 1500 },
    { value: 2100 },
    { value: 1800 },
    { value: 2000 },
    { value: 1900 },
  ];

  const salesData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 2.5 },
    { value: 4 },
    { value: 3.5 },
    { value: 5 },
    { value: 4.5 },
  ];

  const recentMessages = [
    {
      id: 1,
      name: 'Neha',
      message: 'How can i return package ?',
      status: 'Answered',
      time: '12:45',
      color: 'bg-red-400',
    },
    {
      id: 2,
      name: 'Rishika',
      message: 'Questions about the Product',
      status: 'Pending',
      time: '10:04',
      color: 'bg-teal-500',
    },
    {
      id: 3,
      name: 'Rahul',
      message: 'Discount code',
      status: 'Pending',
      time: 'Yesterday',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-500">Welcome back, {userName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <rect x="2" y="2" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-4">$2400.50</div>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F87171" />
                  <stop offset="100%" stopColor="#BCBBFF" />
                </linearGradient>
              </defs>
              <Bar dataKey="value" fill="url(#revenueGradient)" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Expenses</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <rect x="2" y="2" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-4">$1850.20</div>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={expensesData}>
              <defs>
                <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#BCBBFF" />
                </linearGradient>
              </defs>
              <Bar dataKey="value" fill="url(#expensesGradient)" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Sales</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-4">5678</div>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={salesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
              <Bar dataKey="value" fill="url(#salesGradient)" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recente Messages</h2>
        <div className="space-y-4">
          {recentMessages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${msg.color} rounded-full flex items-center justify-center text-white font-semibold text-lg`}
                >
                  {msg.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{msg.name}</h3>
                  <p className="text-gray-500 text-sm">{msg.message}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    msg.status === 'Answered'
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {msg.status}
                </span>
                <span className="text-gray-400 text-sm min-w-[80px] text-right">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
