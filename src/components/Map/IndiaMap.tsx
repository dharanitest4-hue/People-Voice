import React, { useState } from 'react';
import { Info, Filter, Download } from 'lucide-react';

interface StateData {
  name: string;
  code: string;
  activeReports: number;
  coordinates: { x: number; y: number };
  color: string;
  type: 'state' | 'ut';
  capital: string;
}

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'state' | 'ut'>('all');

  const statesData: StateData[] = [
    // Northern States & UTs
    { name: 'Jammu & Kashmir', code: 'JK', activeReports: 234, coordinates: { x: 180, y: 80 }, color: '#10b981', type: 'ut', capital: 'Srinagar' },
    { name: 'Ladakh', code: 'LA', activeReports: 89, coordinates: { x: 220, y: 60 }, color: '#10b981', type: 'ut', capital: 'Leh' },
    { name: 'Himachal Pradesh', code: 'HP', activeReports: 156, coordinates: { x: 200, y: 110 }, color: '#10b981', type: 'state', capital: 'Shimla' },
    { name: 'Punjab', code: 'PB', activeReports: 298, coordinates: { x: 180, y: 130 }, color: '#10b981', type: 'state', capital: 'Chandigarh' },
    { name: 'Chandigarh', code: 'CH', activeReports: 67, coordinates: { x: 195, y: 135 }, color: '#10b981', type: 'ut', capital: 'Chandigarh' },
    { name: 'Haryana', code: 'HR', activeReports: 387, coordinates: { x: 210, y: 150 }, color: '#10b981', type: 'state', capital: 'Chandigarh' },
    { name: 'Delhi', code: 'DL', activeReports: 634, coordinates: { x: 220, y: 155 }, color: '#ef4444', type: 'ut', capital: 'New Delhi' },
    { name: 'Uttarakhand', code: 'UK', activeReports: 178, coordinates: { x: 240, y: 130 }, color: '#10b981', type: 'state', capital: 'Dehradun' },
    { name: 'Uttar Pradesh', code: 'UP', activeReports: 756, coordinates: { x: 270, y: 170 }, color: '#f59e0b', type: 'state', capital: 'Lucknow' },

    // Western States & UTs
    { name: 'Rajasthan', code: 'RJ', activeReports: 445, coordinates: { x: 180, y: 190 }, color: '#10b981', type: 'state', capital: 'Jaipur' },
    { name: 'Gujarat', code: 'GJ', activeReports: 523, coordinates: { x: 160, y: 230 }, color: '#f59e0b', type: 'state', capital: 'Gandhinagar' },
    { name: 'Dadra & Nagar Haveli and Daman & Diu', code: 'DN', activeReports: 34, coordinates: { x: 150, y: 240 }, color: '#10b981', type: 'ut', capital: 'Daman' },
    { name: 'Maharashtra', code: 'MH', activeReports: 1247, coordinates: { x: 200, y: 260 }, color: '#ef4444', type: 'state', capital: 'Mumbai' },
    { name: 'Goa', code: 'GA', activeReports: 89, coordinates: { x: 180, y: 290 }, color: '#10b981', type: 'state', capital: 'Panaji' },

    // Central States
    { name: 'Madhya Pradesh', code: 'MP', activeReports: 398, coordinates: { x: 220, y: 220 }, color: '#10b981', type: 'state', capital: 'Bhopal' },
    { name: 'Chhattisgarh', code: 'CG', activeReports: 198, coordinates: { x: 280, y: 220 }, color: '#10b981', type: 'state', capital: 'Raipur' },

    // Eastern States
    { name: 'Bihar', code: 'BR', activeReports: 412, coordinates: { x: 300, y: 170 }, color: '#10b981', type: 'state', capital: 'Patna' },
    { name: 'Jharkhand', code: 'JH', activeReports: 223, coordinates: { x: 310, y: 200 }, color: '#10b981', type: 'state', capital: 'Ranchi' },
    { name: 'West Bengal', code: 'WB', activeReports: 589, coordinates: { x: 330, y: 210 }, color: '#f59e0b', type: 'state', capital: 'Kolkata' },
    { name: 'Odisha', code: 'OR', activeReports: 267, coordinates: { x: 300, y: 240 }, color: '#10b981', type: 'state', capital: 'Bhubaneswar' },

    // Northeastern States
    { name: 'Sikkim', code: 'SK', activeReports: 29, coordinates: { x: 340, y: 160 }, color: '#10b981', type: 'state', capital: 'Gangtok' },
    { name: 'Assam', code: 'AS', activeReports: 178, coordinates: { x: 380, y: 170 }, color: '#10b981', type: 'state', capital: 'Dispur' },
    { name: 'Arunachal Pradesh', code: 'AR', activeReports: 78, coordinates: { x: 420, y: 140 }, color: '#10b981', type: 'state', capital: 'Itanagar' },
    { name: 'Nagaland', code: 'NL', activeReports: 43, coordinates: { x: 400, y: 180 }, color: '#10b981', type: 'state', capital: 'Kohima' },
    { name: 'Manipur', code: 'MN', activeReports: 56, coordinates: { x: 390, y: 200 }, color: '#10b981', type: 'state', capital: 'Imphal' },
    { name: 'Mizoram', code: 'MZ', activeReports: 34, coordinates: { x: 380, y: 230 }, color: '#10b981', type: 'state', capital: 'Aizawl' },
    { name: 'Tripura', code: 'TR', activeReports: 45, coordinates: { x: 370, y: 210 }, color: '#10b981', type: 'state', capital: 'Agartala' },
    { name: 'Meghalaya', code: 'ML', activeReports: 67, coordinates: { x: 360, y: 180 }, color: '#10b981', type: 'state', capital: 'Shillong' },

    // Southern States & UTs
    { name: 'Telangana', code: 'TS', activeReports: 334, coordinates: { x: 240, y: 280 }, color: '#10b981', type: 'state', capital: 'Hyderabad' },
    { name: 'Andhra Pradesh', code: 'AP', activeReports: 456, coordinates: { x: 270, y: 310 }, color: '#10b981', type: 'state', capital: 'Amaravati' },
    { name: 'Karnataka', code: 'KA', activeReports: 892, coordinates: { x: 210, y: 320 }, color: '#f59e0b', type: 'state', capital: 'Bengaluru' },
    { name: 'Kerala', code: 'KL', activeReports: 345, coordinates: { x: 200, y: 370 }, color: '#10b981', type: 'state', capital: 'Thiruvananthapuram' },
    { name: 'Tamil Nadu', code: 'TN', activeReports: 678, coordinates: { x: 240, y: 360 }, color: '#f59e0b', type: 'state', capital: 'Chennai' },
    { name: 'Puducherry', code: 'PY', activeReports: 45, coordinates: { x: 250, y: 350 }, color: '#10b981', type: 'ut', capital: 'Puducherry' },

    // Island Territories
    { name: 'Andaman & Nicobar Islands', code: 'AN', activeReports: 23, coordinates: { x: 380, y: 350 }, color: '#10b981', type: 'ut', capital: 'Port Blair' },
    { name: 'Lakshadweep', code: 'LD', activeReports: 12, coordinates: { x: 120, y: 350 }, color: '#10b981', type: 'ut', capital: 'Kavaratti' }
  ];

  const recentReports = [
    { id: 'CR-001', location: 'Bandra, Mumbai, Maharashtra', type: 'Pothole', status: 'acknowledged', time: '2h ago' },
    { id: 'CR-002', location: 'Koramangala, Bengaluru, Karnataka', type: 'Streetlight', status: 'in-progress', time: '4h ago' },
    { id: 'CR-003', location: 'Connaught Place, New Delhi', type: 'Sanitation', status: 'submitted', time: '6h ago' },
    { id: 'CR-004', location: 'Park Street, Kolkata, West Bengal', type: 'Water Supply', status: 'resolved', time: '8h ago' },
    { id: 'CR-005', location: 'Anna Nagar, Chennai, Tamil Nadu', type: 'Traffic Signal', status: 'acknowledged', time: '12h ago' },
    { id: 'CR-006', location: 'Sector 17, Chandigarh', type: 'Streetlight', status: 'in-progress', time: '1d ago' },
    { id: 'CR-007', location: 'Leh, Ladakh', type: 'Road Damage', status: 'submitted', time: '1d ago' },
    { id: 'CR-008', location: 'Shimla, Himachal Pradesh', type: 'Water Supply', status: 'resolved', time: '2d ago' },
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

  const filteredStates = statesData.filter(state => {
    if (filterType === 'all') return true;
    return state.type === filterType;
  });

  const totalReports = statesData.reduce((sum, state) => sum + state.activeReports, 0);
  const stateCount = statesData.filter(s => s.type === 'state').length;
  const utCount = statesData.filter(s => s.type === 'ut').length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live Issue Map of India
          </h1>
          <p className="text-xl text-gray-600">
            Real-time tracking of civic issues across all states and union territories
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-600">
            <span>{stateCount} States</span>
            <span>•</span>
            <span>{utCount} Union Territories</span>
            <span>•</span>
            <span>{totalReports.toLocaleString()} Active Reports</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden">
              {/* Legend */}
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
                    <span>Low Priority (<200 reports)</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-3 h-3 border-2 border-blue-600 rounded"></div>
                      <span>States</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 border-2 border-purple-600 rounded border-dashed"></div>
                      <span>Union Territories</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* India Map SVG */}
              <div className="w-full h-[700px] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg relative">
                <svg viewBox="0 0 500 450" className="w-full h-full">
                  {/* Background */}
                  <rect width="500" height="450" fill="#f8fafc" />
                  
                  {/* Title */}
                  <text x="400" y="30" className="text-lg font-bold fill-gray-800" textAnchor="middle">INDIA</text>
                  <text x="400" y="50" className="text-sm fill-gray-600" textAnchor="middle">States and Union Territories</text>

                  {/* State/UT Shapes */}
                  {filteredStates.map((state) => (
                    <g key={state.code}>
                      {/* State/UT boundary */}
                      <circle
                        cx={state.coordinates.x}
                        cy={state.coordinates.y}
                        r="20"
                        fill={getReportColor(state.activeReports)}
                        fillOpacity="0.7"
                        stroke={state.type === 'state' ? '#2563eb' : '#7c3aed'}
                        strokeWidth={state.type === 'state' ? '2' : '2'}
                        strokeDasharray={state.type === 'ut' ? '4,2' : 'none'}
                        className="hover:fill-opacity-90 transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                        onClick={() => setSelectedState(state)}
                      />
                      
                      {/* State/UT code labels */}
                      <text
                        x={state.coordinates.x}
                        y={state.coordinates.y + 2}
                        textAnchor="middle"
                        className="text-xs font-bold fill-white pointer-events-none"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                      >
                        {state.code}
                      </text>
                      
                      {/* State/UT name labels */}
                      <text
                        x={state.coordinates.x}
                        y={state.coordinates.y + 35}
                        textAnchor="middle"
                        className="text-xs font-medium fill-gray-700 pointer-events-none"
                      >
                        {state.name.length > 15 ? state.name.substring(0, 12) + '...' : state.name}
                      </text>
                    </g>
                  ))}

                  {/* Major cities markers */}
                  <g>
                    <circle cx="200" cy="260" r="3" fill="#1f2937" />
                    <text x="200" y="275" textAnchor="middle" className="text-xs font-medium fill-gray-700">Mumbai</text>
                  </g>
                  <g>
                    <circle cx="220" cy="155" r="3" fill="#1f2937" />
                    <text x="220" y="145" textAnchor="middle" className="text-xs font-medium fill-gray-700">New Delhi</text>
                  </g>
                  <g>
                    <circle cx="210" cy="320" r="3" fill="#1f2937" />
                    <text x="210" y="335" textAnchor="middle" className="text-xs font-medium fill-gray-700">Bengaluru</text>
                  </g>
                  <g>
                    <circle cx="330" cy="210" r="3" fill="#1f2937" />
                    <text x="330" y="225" textAnchor="middle" className="text-xs font-medium fill-gray-700">Kolkata</text>
                  </g>
                  <g>
                    <circle cx="240" cy="360" r="3" fill="#1f2937" />
                    <text x="240" y="375" textAnchor="middle" className="text-xs font-medium fill-gray-700">Chennai</text>
                  </g>
                  <g>
                    <circle cx="240" cy="280" r="3" fill="#1f2937" />
                    <text x="240" y="295" textAnchor="middle" className="text-xs font-medium fill-gray-700">Hyderabad</text>
                  </g>

                  {/* Neighboring countries labels */}
                  <text x="50" y="150" className="text-sm font-medium fill-gray-500" textAnchor="middle">PAKISTAN</text>
                  <text x="450" y="100" className="text-sm font-medium fill-gray-500" textAnchor="middle">CHINA</text>
                  <text x="450" y="250" className="text-sm font-medium fill-gray-500" textAnchor="middle">MYANMAR</text>
                  <text x="300" y="420" className="text-sm font-medium fill-gray-500" textAnchor="middle">SRI LANKA</text>
                  <text x="350" y="120" className="text-sm font-medium fill-gray-500" textAnchor="middle">NEPAL</text>
                  <text x="380" y="160" className="text-sm font-medium fill-gray-500" textAnchor="middle">BHUTAN</text>
                  <text x="400" y="240" className="text-sm font-medium fill-gray-500" textAnchor="middle">BANGLADESH</text>

                  {/* Water bodies */}
                  <text x="50" y="400" className="text-sm font-medium fill-blue-600" textAnchor="middle">ARABIAN SEA</text>
                  <text x="350" y="400" className="text-sm font-medium fill-blue-600" textAnchor="middle">BAY OF BENGAL</text>
                  <text x="250" y="430" className="text-sm font-medium fill-blue-600" textAnchor="middle">INDIAN OCEAN</text>
                </svg>

                {/* Hover tooltip */}
                {hoveredState && (
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 pointer-events-none border border-gray-200 min-w-56">
                    <div className="font-semibold text-gray-900 mb-1">{hoveredState}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      {statesData.find(s => s.name === hoveredState)?.activeReports} active reports
                    </div>
                    <div className="text-xs text-gray-500 mb-1">
                      Type: {statesData.find(s => s.name === hoveredState)?.type === 'state' ? 'State' : 'Union Territory'}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">
                      Capital: {statesData.find(s => s.name === hoveredState)?.capital}
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
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{selectedState.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedState.type === 'state' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {selectedState.type === 'state' ? 'State' : 'Union Territory'}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedState(null)}
                      className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capital:</span>
                      <span className="font-semibold text-gray-900">{selectedState.capital}</span>
                    </div>
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
                      <span className="text-gray-600">Code:</span>
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
            {/* Filter Controls */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-blue-600" />
                Map Filters
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Show</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as 'all' | 'state' | 'ut')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="all">All States & UTs</option>
                    <option value="state">States Only</option>
                    <option value="ut">Union Territories Only</option>
                  </select>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export Data</span>
                </button>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Recent Reports
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
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

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Reports</span>
                  <span className="font-semibold text-gray-900">{totalReports.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">States</span>
                  <span className="font-semibold text-blue-600">{stateCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Union Territories</span>
                  <span className="font-semibold text-purple-600">{utCount}</span>
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

            {/* Top States by Reports */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top States by Reports</h3>
              <div className="space-y-3">
                {statesData
                  .sort((a, b) => b.activeReports - a.activeReports)
                  .slice(0, 5)
                  .map((state, index) => (
                    <div key={state.code} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{state.name}</div>
                          <div className="text-xs text-gray-500">{state.type === 'state' ? 'State' : 'UT'}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{state.activeReports}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;