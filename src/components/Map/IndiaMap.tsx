import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';

interface StateData {
  name: string;
  code: string;
  activeReports: number;
  coordinates: { x: number; y: number };
  color: string;
}

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const statesData: StateData[] = [
    { name: 'Maharashtra', code: 'MH', activeReports: 1247, coordinates: { x: 280, y: 220 }, color: '#ef4444' },
    { name: 'Karnataka', code: 'KA', activeReports: 892, coordinates: { x: 270, y: 280 }, color: '#f59e0b' },
    { name: 'Tamil Nadu', code: 'TN', activeReports: 756, coordinates: { x: 290, y: 320 }, color: '#f59e0b' },
    { name: 'Delhi', code: 'DL', activeReports: 634, coordinates: { x: 250, y: 120 }, color: '#ef4444' },
    { name: 'West Bengal', code: 'WB', activeReports: 523, coordinates: { x: 350, y: 180 }, color: '#f59e0b' },
    { name: 'Gujarat', code: 'GJ', activeReports: 445, coordinates: { x: 210, y: 180 }, color: '#10b981' },
    { name: 'Uttar Pradesh', code: 'UP', activeReports: 387, coordinates: { x: 280, y: 150 }, color: '#10b981' },
    { name: 'Rajasthan', code: 'RJ', activeReports: 298, coordinates: { x: 220, y: 150 }, color: '#10b981' },
  ];

  const recentReports = [
    { id: 'CR-001', location: 'Bandra, Mumbai', type: 'Pothole', status: 'acknowledged', time: '2h ago' },
    { id: 'CR-002', location: 'Koramangala, Bangalore', type: 'Streetlight', status: 'in-progress', time: '4h ago' },
    { id: 'CR-003', location: 'CP, Delhi', type: 'Sanitation', status: 'submitted', time: '6h ago' },
    { id: 'CR-004', location: 'Park Street, Kolkata', type: 'Water Supply', status: 'resolved', time: '8h ago' },
    { id: 'CR-005', location: 'Anna Nagar, Chennai', type: 'Traffic Signal', status: 'acknowledged', time: '12h ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-red-100 text-red-800';
      case 'acknowledged': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Real-time tracking of civic issues across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 h-[600px] relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-sm z-10">
                <h3 className="font-semibold text-gray-900 mb-2">Legend</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>High Priority (500+ reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Medium Priority (100-499 reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Low Priority (&lt;100 reports)</span>
                  </div>
                </div>
              </div>

              {/* 3D Map Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg relative">
                <svg viewBox="0 0 400 350" className="w-full h-full">
                  {/* Simplified India outline */}
                  <path
                    d="M100 50 L120 30 L180 40 L220 60 L280 50 L320 80 L340 120 L350 160 L340 200 L320 240 L290 280 L250 320 L200 340 L150 330 L120 310 L100 280 L90 240 L80 200 L70 160 L80 120 L100 50 Z"
                    fill="#e5e7eb"
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="hover:fill-blue-50 transition-colors cursor-pointer"
                  />
                  
                  {/* State markers */}
                  {statesData.map((state) => (
                    <g key={state.code}>
                      <circle
                        cx={state.coordinates.x}
                        cy={state.coordinates.y}
                        r="8"
                        fill={state.color}
                        className="cursor-pointer hover:r-10 transition-all"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                        onClick={() => setSelectedState(state)}
                      />
                      <text
                        x={state.coordinates.x}
                        y={state.coordinates.y + 20}
                        textAnchor="middle"
                        className="text-xs font-medium fill-gray-700"
                      >
                        {state.code}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Hover tooltip */}
                {hoveredState && (
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 pointer-events-none">
                    <div className="font-semibold text-gray-900">{hoveredState}</div>
                    <div className="text-sm text-gray-600">
                      {statesData.find(s => s.name === hoveredState)?.activeReports} active reports
                    </div>
                  </div>
                )}
              </div>

              {/* Selected State Info */}
              {selectedState && (
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{selectedState.name}</h4>
                    <button 
                      onClick={() => setSelectedState(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Active Reports: <span className="font-medium">{selectedState.activeReports}</span></div>
                    <div>Priority Level: <span className="font-medium">
                      {selectedState.activeReports > 500 ? 'High' : selectedState.activeReports > 100 ? 'Medium' : 'Low'}
                    </span></div>
                  </div>
                  <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Ward Details →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Recent Reports
              </h3>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-medium text-gray-900">{report.id}</div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{report.location}</div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{report.type}</span>
                      <span>{report.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Controls</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Filter by Category
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Filter by Status
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View Heatmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;