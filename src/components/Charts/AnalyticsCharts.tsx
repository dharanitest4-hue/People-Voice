import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';

const categoryData = [
  { name: 'Potholes', value: 245, color: '#3b82f6' },
  { name: 'Sanitation', value: 189, color: '#10b981' },
  { name: 'Streetlights', value: 156, color: '#f59e0b' },
  { name: 'Water Supply', value: 123, color: '#ef4444' },
  { name: 'Other', value: 98, color: '#8b5cf6' },
];

const stateData = [
  { name: 'Maharashtra', reports: 1247 },
  { name: 'Karnataka', reports: 892 },
  { name: 'Tamil Nadu', reports: 756 },
  { name: 'Delhi', reports: 634 },
  { name: 'West Bengal', reports: 523 },
  { name: 'Gujarat', reports: 445 },
];

const resolutionData = [
  { month: 'Jan', avgDays: 5.2 },
  { month: 'Feb', avgDays: 4.8 },
  { month: 'Mar', avgDays: 4.1 },
  { month: 'Apr', avgDays: 3.9 },
  { month: 'May', avgDays: 4.2 },
  { month: 'Jun', avgDays: 3.7 },
];

export const CategoryChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Reports by Category</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export const StateChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Reports by State</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={stateData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="reports" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const ResolutionChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Resolution Time</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={resolutionData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="avgDays" stroke="#10b981" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);