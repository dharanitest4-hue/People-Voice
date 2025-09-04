import React, { useState } from 'react';
import { MapPin, AlertCircle, CheckCircle, Clock, Eye } from 'lucide-react';

interface StateData {
  name: string;
  reports: number;
  resolved: number;
  pending: number;
}

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const stateData: Record<string, StateData> = {
    'maharashtra': { name: 'Maharashtra', reports: 1247, resolved: 892, pending: 355 },
    'karnataka': { name: 'Karnataka', reports: 892, resolved: 634, pending: 258 },
    'tamil-nadu': { name: 'Tamil Nadu', reports: 756, resolved: 523, pending: 233 },
    'delhi': { name: 'Delhi', reports: 634, resolved: 445, pending: 189 },
    'west-bengal': { name: 'West Bengal', reports: 523, resolved: 367, pending: 156 },
    'gujarat': { name: 'Gujarat', reports: 445, resolved: 312, pending: 133 },
    'rajasthan': { name: 'Rajasthan', reports: 389, resolved: 267, pending: 122 },
    'uttar-pradesh': { name: 'Uttar Pradesh', reports: 567, resolved: 398, pending: 169 },
  };

  const recentReports = [
    { id: 'CR-001847', location: 'Mumbai, Maharashtra', issue: 'Pothole on main road', status: 'submitted', time: '2 hours ago' },
    { id: 'CR-001846', location: 'Bangalore, Karnataka', issue: 'Broken streetlight', status: 'in-progress', time: '4 hours ago' },
    { id: 'CR-001845', location: 'Delhi', issue: 'Garbage overflow', status: 'acknowledged', time: '6 hours ago' },
    { id: 'CR-001844', location: 'Chennai, Tamil Nadu', issue: 'Water supply issue', status: 'resolved', time: '1 day ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'text-red-600 bg-red-100';
      case 'acknowledged': return 'text-yellow-600 bg-yellow-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return AlertCircle;
      case 'acknowledged': return Eye;
      case 'in-progress': return Clock;
      case 'resolved': return CheckCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live Issue Map
          </h1>
          <p className="text-xl text-gray-600">
            Real-time view of civic issues across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">India - Civic Issues Map</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">High Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600">Medium Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Low Activity</span>
                  </div>
                </div>
              </div>

              {/* Simplified India Map */}
              <div className="relative bg-blue-50 rounded-lg p-8 min-h-[500px] flex items-center justify-center">
                <svg viewBox="0 0 800 600" className="w-full h-full max-w-2xl">
                  {/* Simplified India outline */}
                  <path
                    d="M200 100 L600 100 L650 150 L680 200 L700 300 L680 400 L650 450 L600 500 L400 520 L300 500 L250 450 L200 400 L180 300 L200 200 Z"
                    fill="#e5e7eb"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    className="transition-colors"
                  />
                  
                  {/* State markers */}
                  <g>
                    {/* Maharashtra - Mumbai */}
                    <circle
                      cx="300"
                      cy="350"
                      r="8"
                      fill="#ef4444"
                      className="cursor-pointer hover:r-10 transition-all"
                      onMouseEnter={() => setHoveredState('maharashtra')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('maharashtra')}
                    />
                    <text x="315" y="355" className="text-xs fill-gray-700 font-medium">Mumbai</text>
                    
                    {/* Karnataka - Bangalore */}
                    <circle
                      cx="350"
                      cy="400"
                      r="6"
                      fill="#f59e0b"
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredState('karnataka')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('karnataka')}
                    />
                    <text x="365" y="405" className="text-xs fill-gray-700 font-medium">Bangalore</text>
                    
                    {/* Delhi */}
                    <circle
                      cx="350"
                      cy="200"
                      r="6"
                      fill="#f59e0b"
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredState('delhi')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('delhi')}
                    />
                    <text x="365" y="205" className="text-xs fill-gray-700 font-medium">Delhi</text>
                    
                    {/* Tamil Nadu - Chennai */}
                    <circle
                      cx="420"
                      cy="450"
                      r="6"
                      fill="#f59e0b"
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredState('tamil-nadu')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('tamil-nadu')}
                    />
                    <text x="435" y="455" className="text-xs fill-gray-700 font-medium">Chennai</text>
                    
                    {/* West Bengal - Kolkata */}
                    <circle
                      cx="500"
                      cy="280"
                      r="5"
                      fill="#22c55e"
                      className="cursor-pointer hover:r-7 transition-all"
                      onMouseEnter={() => setHoveredState('west-bengal')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('west-bengal')}
                    />
                    <text x="515" y="285" className="text-xs fill-gray-700 font-medium">Kolkata</text>
                    
                    {/* Gujarat - Ahmedabad */}
                    <circle
                      cx="250"
                      cy="280"
                      r="5"
                      fill="#22c55e"
                      className="cursor-pointer hover:r-7 transition-all"
                      onMouseEnter={() => setHoveredState('gujarat')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('gujarat')}
                    />
                    <text x="265" y="285" className="text-xs fill-gray-700 font-medium">Ahmedabad</text>
                  </g>
                </svg>

                {/* Hover tooltip */}
                {hoveredState && stateData[hoveredState] && (
                  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-10">
                    <h4 className="font-semibold text-gray-900 mb-2">{stateData[hoveredState].name}</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Reports:</span>
                        <span className="font-medium">{stateData[hoveredState].reports}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resolved:</span>
                        <span className="font-medium text-green-600">{stateData[hoveredState].resolved}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pending:</span>
                        <span className="font-medium text-orange-600">{stateData[hoveredState].pending}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Legend */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Activity Levels</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">High (500+ reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Medium (200-499 reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Low (0-199 reports)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* State Details */}
            {selectedState && stateData[selectedState] && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {stateData[selectedState].name} Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Total Reports</span>
                    <span className="font-semibold text-blue-600">{stateData[selectedState].reports}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Resolved</span>
                    <span className="font-semibold text-green-600">{stateData[selectedState].resolved}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Pending</span>
                    <span className="font-semibold text-orange-600">{stateData[selectedState].pending}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Resolution Rate: <span className="font-medium text-green-600">
                      {Math.round((stateData[selectedState].resolved / stateData[selectedState].reports) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Reports */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Recent Reports
              </h3>
              <div className="space-y-4">
                {recentReports.map((report) => {
                  const StatusIcon = getStatusIcon(report.status);
                  return (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-medium text-blue-600">{report.id}</div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                          <StatusIcon className="h-3 w-3 inline mr-1" />
                          {report.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-900 mb-1">{report.issue}</div>
                      <div className="text-xs text-gray-500 mb-2">{report.location}</div>
                      <div className="text-xs text-gray-400">{report.time}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Reports</span>
                  <span className="font-semibold text-blue-600">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Resolved Today</span>
                  <span className="font-semibold text-green-600">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">In Progress</span>
                  <span className="font-semibold text-orange-600">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Use the Map</h3>
          <p className="text-gray-600">
            Click on any city marker to view detailed statistics for that state. 
            Hover over markers to see quick information about report activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;