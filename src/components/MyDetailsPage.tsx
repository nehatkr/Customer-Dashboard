import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, Users } from 'lucide-react';

export default function MyDetailsPage() {
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 3800 },
    { month: 'Mar', revenue: 5100 },
    { month: 'Apr', revenue: 4600 },
    { month: 'May', revenue: 6200 },
    { month: 'Jun', revenue: 5800 },
  ];

  const categoryData = [
    { category: 'Electronics', sales: 4500 },
    { category: 'Clothing', sales: 3200 },
    { category: 'Home & Garden', sales: 2800 },
    { category: 'Sports', sales: 3600 },
    { category: 'Books', sales: 1900 },
    { category: 'Toys', sales: 2400 },
  ];

  const regionData = [
    { name: 'North America', value: 35, color: '#BCBBFF' },
    { name: 'Europe', value: 28, color: '#B37ABA' },
    { name: 'Asia', value: 25, color: '#916486' },
    { name: 'Others', value: 12, color: '#E5E5FF' },
  ];

  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$54,280',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Orders',
      value: '1,429',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
    {
      title: 'Active Users',
      value: '3,245',
      change: '+15.3%',
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      title: 'Growth Rate',
      value: '23.8%',
      change: '+4.1%',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Detail Analysis</h1>
        <p className="text-gray-500">Comprehensive insights and data visualization</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Revenue Trend</h2>
            <p className="text-gray-500 text-sm">Monthly revenue over the last 6 months</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#916486"
                strokeWidth={3}
                dot={{ fill: '#916486', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Region Distribution</h2>
            <p className="text-gray-500 text-sm">Sales by geographical region</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {regionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {regionData.map((region, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: region.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{region.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{region.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Sales by Category</h2>
          <p className="text-gray-500 text-sm">Product category performance comparison</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="category" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            />
            <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? '#BCBBFF' : '#B37ABA'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
