import React from 'react';
import { CategoryChart, StateChart, ResolutionChart } from '../components/Charts/AnalyticsCharts';
import { TrendingUp, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const Analytics: React.FC = () => {
  const kpis = [
    { label: 'Total Reports', value: '4,811', change: '+12%', icon: AlertCircle, color: 'blue' },
    { label: 'Resolved Issues', value: '3,247', change: '+18%', icon: CheckCircle, color: 'green' },
    { label: 'Avg. Resolution', value: '4.2 days', change: '-8%', icon: Clock, color: 'yellow' },
    { label: 'Citizen Satisfaction', value: '87%', change: '+5%', icon: TrendingUp, color: 'purple' },
  ];

  const trendingIssues = [
    { issue: 'Pothole repairs after monsoon', reports: 145, trend: 'up' },
    { issue: 'Streetlight maintenance', reports: 89, trend: 'up' },
    { issue: 'Garbage collection delays', reports: 67, trend: 'down' },
    { issue: 'Water supply interruptions', reports: 54, trend: 'stable' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Insights and trends from civic issue reporting data
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClasses(kpi.color)} bg-opacity-10`}>
                  <kpi.icon className={`h-6 w-6 ${getColorClasses(kpi.color)} text-opacity-100`} />
                </div>
                <span className={`text-sm font-medium ${kpi.change.startsWith('+') ? 'text-green-600' : kpi.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
              <div className="text-sm text-gray-600">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CategoryChart />
          <StateChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ResolutionChart />
          </div>
          
          {/* Trending Issues */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Trending Issues
            </h3>
            <div className="space-y-4">
              {trendingIssues.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-medium text-gray-900">{item.issue}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.trend === 'up' ? 'bg-red-100 text-red-800' :
                      item.trend === 'down' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.trend}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{item.reports} reports this week</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;