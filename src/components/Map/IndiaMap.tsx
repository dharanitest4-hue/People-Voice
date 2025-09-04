import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface StateData {
  name: string;
  code: string;
  activeReports: number;
  coordinates: { x: number; y: number };
  color: string;
  path: string;
}

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const statesData: StateData[] = [
    { 
      name: 'Jammu & Kashmir', 
      code: 'JK', 
      activeReports: 234, 
      coordinates: { x: 180, y: 60 }, 
      color: '#10b981',
      path: 'M160,40 L200,35 L220,50 L210,70 L190,75 L170,65 Z'
    },
    { 
      name: 'Himachal Pradesh', 
      code: 'HP', 
      activeReports: 156, 
      coordinates: { x: 200, y: 80 }, 
      color: '#10b981',
      path: 'M180,70 L220,65 L240,80 L230,95 L200,90 L185,85 Z'
    },
    { 
      name: 'Punjab', 
      code: 'PB', 
      activeReports: 298, 
      coordinates: { x: 180, y: 100 }, 
      color: '#10b981',
      path: 'M160,90 L190,85 L200,100 L185,115 L165,110 Z'
    },
    { 
      name: 'Haryana', 
      code: 'HR', 
      activeReports: 387, 
      coordinates: { x: 200, y: 120 }, 
      color: '#10b981',
      path: 'M185,105 L215,100 L225,120 L210,135 L190,130 Z'
    },
    { 
      name: 'Delhi', 
      code: 'DL', 
      activeReports: 634, 
      coordinates: { x: 210, y: 125 }, 
      color: '#ef4444',
      path: 'M205,120 L215,120 L215,130 L205,130 Z'
    },
    { 
      name: 'Uttar Pradesh', 
      code: 'UP', 
      activeReports: 756, 
      coordinates: { x: 250, y: 140 }, 
      color: '#f59e0b',
      path: 'M210,125 L290,120 L300,160 L280,170 L220,165 L205,145 Z'
    },
    { 
      name: 'Rajasthan', 
      code: 'RJ', 
      activeReports: 445, 
      coordinates: { x: 180, y: 160 }, 
      color: '#10b981',
      path: 'M140,130 L210,125 L205,180 L170,190 L150,170 Z'
    },
    { 
      name: 'Gujarat', 
      code: 'GJ', 
      activeReports: 523, 
      coordinates: { x: 160, y: 200 }, 
      color: '#f59e0b',
      path: 'M130,180 L180,175 L185,220 L155,235 L135,215 Z'
    },
    { 
      name: 'Madhya Pradesh', 
      code: 'MP', 
      activeReports: 398, 
      coordinates: { x: 220, y: 190 }, 
      color: '#10b981',
      path: 'M180,175 L270,170 L275,210 L240,220 L190,215 Z'
    },
    { 
      name: 'Maharashtra', 
      code: 'MH', 
      activeReports: 1247, 
      coordinates: { x: 200, y: 230 }, 
      color: '#ef4444',
      path: 'M155,210 L240,205 L250,250 L210,265 L170,255 Z'
    },
    { 
      name: 'Goa', 
      code: 'GA', 
      activeReports: 89, 
      coordinates: { x: 180, y: 260 }, 
      color: '#10b981',
      path: 'M170,250 L185,250 L185,265 L170,265 Z'
    },
    { 
      name: 'Karnataka', 
      code: 'KA', 
      activeReports: 892, 
      coordinates: { x: 210, y: 290 }, 
      color: '#f59e0b',
      path: 'M185,265 L250,260 L260,310 L220,320 L195,305 Z'
    },
    { 
      name: 'Kerala', 
      code: 'KL', 
      activeReports: 345, 
      coordinates: { x: 200, y: 340 }, 
      color: '#10b981',
      path: 'M190,320 L210,315 L215,360 L195,365 Z'
    },
    { 
      name: 'Tamil Nadu', 
      code: 'TN', 
      activeReports: 678, 
      coordinates: { x: 240, y: 330 }, 
      color: '#f59e0b',
      path: 'M215,315 L270,310 L280,350 L250,365 L220,355 Z'
    },
    { 
      name: 'Andhra Pradesh', 
      code: 'AP', 
      activeReports: 456, 
      coordinates: { x: 250, y: 280 }, 
      color: '#10b981',
      path: 'M250,250 L290,245 L300,290 L270,300 L245,285 Z'
    },
    { 
      name: 'Telangana', 
      code: 'TS', 
      activeReports: 334, 
      coordinates: { x: 240, y: 250 }, 
      color: '#10b981',
      path: 'M225,235 L265,230 L270,260 L245,265 L230,250 Z'
    },
    { 
      name: 'Odisha', 
      code: 'OR', 
      activeReports: 267, 
      coordinates: { x: 290, y: 210 }, 
      color: '#10b981',
      path: 'M270,190 L310,185 L320,220 L300,235 L280,225 Z'
    },
    { 
      name: 'Chhattisgarh', 
      code: 'CG', 
      activeReports: 198, 
      coordinates: { x: 260, y: 190 }, 
      color: '#10b981',
      path: 'M240,175 L280,170 L285,200 L265,210 L245,200 Z'
    },
    { 
      name: 'Jharkhand', 
      code: 'JH', 
      activeReports: 223, 
      coordinates: { x: 290, y: 170 }, 
      color: '#10b981',
      path: 'M275,155 L310,150 L320,180 L300,190 L280,185 Z'
    },
    { 
      name: 'West Bengal', 
      code: 'WB', 
      activeReports: 589, 
      coordinates: { x: 320, y: 180 }, 
      color: '#f59e0b',
      path: 'M310,160 L350,155 L360,200 L340,210 L320,195 Z'
    },
    { 
      name: 'Bihar', 
      code: 'BR', 
      activeReports: 412, 
      coordinates: { x: 290, y: 140 }, 
      color: '#10b981',
      path: 'M270,125 L320,120 L330,150 L310,160 L280,155 Z'
    },
    { 
      name: 'Assam', 
      code: 'AS', 
      activeReports: 178, 
      coordinates: { x: 360, y: 140 }, 
      color: '#10b981',
      path: 'M340,125 L390,120 L400,155 L370,160 L350,145 Z'
    },
    { 
      name: 'Meghalaya', 
      code: 'ML', 
      activeReports: 67, 
      coordinates: { x: 360, y: 160 }, 
      color: '#10b981',
      path: 'M350,150 L375,148 L380,165 L365,170 Z'
    },
    { 
      name: 'Tripura', 
      code: 'TR', 
      activeReports: 45, 
      coordinates: { x: 370, y: 180 }, 
      color: '#10b981',
      path: 'M365,170 L380,168 L385,185 L370,190 Z'
    },
    { 
      name: 'Mizoram', 
      code: 'MZ', 
      activeReports: 34, 
      coordinates: { x: 365, y: 200 }, 
      color: '#10b981',
      path: 'M360,190 L375,188 L380,205 L365,210 Z'
    },
    { 
      name: 'Manipur', 
      code: 'MN', 
      activeReports: 56, 
      coordinates: { x: 375, y: 160 }, 
      color: '#10b981',
      path: 'M370,150 L385,148 L390,165 L375,170 Z'
    },
    { 
      name: 'Nagaland', 
      code: 'NL', 
      activeReports: 43, 
      coordinates: { x: 380, y: 140 }, 
      color: '#10b981',
      path: 'M375,130 L395,128 L400,145 L385,150 Z'
    },
    { 
      name: 'Arunachal Pradesh', 
      code: 'AR', 
      activeReports: 78, 
      coordinates: { x: 400, y: 120 }, 
      color: '#10b981',
      path: 'M385,105 L420,100 L430,135 L405,140 L390,125 Z'
    },
    { 
      name: 'Sikkim', 
      code: 'SK', 
      activeReports: 29, 
      coordinates: { x: 340, y: 130 }, 
      color: '#10b981',
      path: 'M335,125 L350,123 L355,135 L340,140 Z'
    }
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

  const getReportColor = (reports: number) => {
    if (reports > 500) return '#ef4444'; // Red for high
    if (reports > 200) return '#f59e0b'; // Orange for medium
    return '#10b981'; // Green for low
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
            <div className="bg-white rounded-xl shadow-sm p-6 h-[700px] relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-sm z-10 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Legend</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>High Priority (500+ reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span>Medium Priority (200-499 reports)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>Low Priority (&lt;200 reports)</span>
                  </div>
                </div>
              </div>

              {/* India Map with States */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg relative">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  {/* State boundaries */}
                  {statesData.map((state) => (
                    <g key={state.code}>
                      <path
                        d={state.path}
                        fill={getReportColor(state.activeReports)}
                        fillOpacity="0.7"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="hover:fill-opacity-90 transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                        onClick={() => setSelectedState(state)}
                      />
                      
                      {/* State labels */}
                      <text
                        x={state.coordinates.x}
                        y={state.coordinates.y}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-800 pointer-events-none"
                        style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                      >
                        {state.code}
                      </text>
                      
                      {/* Report count indicators */}
                      <circle
                        cx={state.coordinates.x}
                        cy={state.coordinates.y + 15}
                        r="3"
                        fill={getReportColor(state.activeReports)}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                        onClick={() => setSelectedState(state)}
                      />
                    </g>
                  ))}

                  {/* Major cities markers */}
                  <g>
                    <circle cx="200" cy="230" r="4" fill="#1f2937" />
                    <text x="200" y="245" textAnchor="middle" className="text-xs font-medium fill-gray-700">Mumbai</text>
                  </g>
                  <g>
                    <circle cx="210" cy="125" r="4" fill="#1f2937" />
                    <text x="210" y="115" textAnchor="middle" className="text-xs font-medium fill-gray-700">Delhi</text>
                  </g>
                  <g>
                    <circle cx="210" cy="290" r="4" fill="#1f2937" />
                    <text x="210" y="305" textAnchor="middle" className="text-xs font-medium fill-gray-700">Bangalore</text>
                  </g>
                  <g>
                    <circle cx="320" cy="180" r="4" fill="#1f2937" />
                    <text x="320" y="195" textAnchor="middle" className="text-xs font-medium fill-gray-700">Kolkata</text>
                  </g>
                  <g>
                    <circle cx="240" cy="330" r="4" fill="#1f2937" />
                    <text x="240" y="345" textAnchor="middle" className="text-xs font-medium fill-gray-700">Chennai</text>
                  </g>
                </svg>

                {/* Hover tooltip */}
                {hoveredState && (
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 pointer-events-none border border-gray-200 min-w-48">
                    <div className="font-semibold text-gray-900 mb-1">{hoveredState}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      {statesData.find(s => s.name === hoveredState)?.activeReports} active reports
                    </div>
                    <div className="text-xs text-gray-500">
                      Priority: {(() => {
                        const reports = statesData.find(s => s.name === hoveredState)?.activeReports || 0;
                        return reports > 500 ? 'High' : reports > 200 ? 'Medium' : 'Low';
                      })()}
                    </div>
                  </div>
                )}
              </div>

              {/* Selected State Info */}
              {selectedState && (
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-6 max-w-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg">{selectedState.name}</h4>
                    <button 
                      onClick={() => setSelectedState(null)}
                      className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Reports:</span>
                      <span className="font-semibold text-gray-900">{selectedState.activeReports}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Priority Level:</span>
                      <span className={`font-semibold ${
                        selectedState.activeReports > 500 ? 'text-red-600' : 
                        selectedState.activeReports > 200 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {selectedState.activeReports > 500 ? 'High' : selectedState.activeReports > 200 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">State Code:</span>
                      <span className="font-semibold text-gray-900">{selectedState.code}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      View Detailed Reports
                    </button>
                  </div>
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
                      <div className="text-sm font-medium text-blue-600">{report.id}</div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-900 mb-1 font-medium">{report.location}</div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{report.type}</span>
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
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Export Data
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Reports</span>
                  <span className="font-semibold text-gray-900">8,924</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Resolved Today</span>
                  <span className="font-semibold text-green-600">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending</span>
                  <span className="font-semibold text-yellow-600">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">High Priority</span>
                  <span className="font-semibold text-red-600">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;