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
    'madhya-pradesh': { name: 'Madhya Pradesh', reports: 334, resolved: 234, pending: 100 },
    'andhra-pradesh': { name: 'Andhra Pradesh', reports: 278, resolved: 195, pending: 83 },
    'telangana': { name: 'Telangana', reports: 245, resolved: 172, pending: 73 },
    'kerala': { name: 'Kerala', reports: 198, resolved: 156, pending: 42 },
    'odisha': { name: 'Odisha', reports: 167, resolved: 118, pending: 49 },
    'bihar': { name: 'Bihar', reports: 234, resolved: 145, pending: 89 },
    'jharkhand': { name: 'Jharkhand', reports: 123, resolved: 87, pending: 36 },
    'assam': { name: 'Assam', reports: 145, resolved: 98, pending: 47 },
    'punjab': { name: 'Punjab', reports: 189, resolved: 134, pending: 55 },
    'haryana': { name: 'Haryana', reports: 156, resolved: 112, pending: 44 },
    'himachal-pradesh': { name: 'Himachal Pradesh', reports: 89, resolved: 67, pending: 22 },
    'uttarakhand': { name: 'Uttarakhand', reports: 78, resolved: 56, pending: 22 },
    'goa': { name: 'Goa', reports: 45, resolved: 38, pending: 7 },
    'jammu-kashmir': { name: 'Jammu & Kashmir', reports: 67, resolved: 45, pending: 22 },
    'ladakh': { name: 'Ladakh', reports: 23, resolved: 18, pending: 5 },
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

  const getActivityColor = (reports: number) => {
    if (reports > 500) return '#ef4444'; // red
    if (reports > 200) return '#f59e0b'; // yellow
    return '#22c55e'; // green
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

              {/* India Map SVG */}
              <div className="relative bg-blue-50 rounded-lg p-4 min-h-[600px]">
                <svg viewBox="0 0 1000 800" className="w-full h-full">
                  {/* India outline and states */}
                  
                  {/* Jammu & Kashmir */}
                  <path
                    d="M280 80 L320 70 L360 85 L380 110 L370 140 L340 150 L300 145 L270 120 Z"
                    fill={hoveredState === 'jammu-kashmir' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('jammu-kashmir')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('jammu-kashmir')}
                  />
                  
                  {/* Ladakh */}
                  <path
                    d="M380 85 L420 75 L460 90 L480 120 L470 150 L440 160 L400 155 L380 130 Z"
                    fill={hoveredState === 'ladakh' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('ladakh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('ladakh')}
                  />

                  {/* Punjab */}
                  <path
                    d="M280 150 L320 145 L340 160 L335 180 L315 190 L285 185 L270 170 Z"
                    fill={hoveredState === 'punjab' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('punjab')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('punjab')}
                  />

                  {/* Haryana */}
                  <path
                    d="M320 160 L360 155 L380 170 L375 190 L355 200 L335 195 L320 180 Z"
                    fill={hoveredState === 'haryana' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('haryana')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('haryana')}
                  />

                  {/* Delhi */}
                  <circle
                    cx="350"
                    cy="180"
                    r="8"
                    fill={hoveredState === 'delhi' ? '#dbeafe' : '#fef3c7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('delhi')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('delhi')}
                  />

                  {/* Himachal Pradesh */}
                  <path
                    d="M300 120 L340 115 L370 130 L365 150 L340 155 L310 150 L295 135 Z"
                    fill={hoveredState === 'himachal-pradesh' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('himachal-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('himachal-pradesh')}
                  />

                  {/* Uttarakhand */}
                  <path
                    d="M380 155 L420 150 L440 165 L435 185 L415 195 L395 190 L380 175 Z"
                    fill={hoveredState === 'uttarakhand' ? '#dbeafe' : '#f3f4f6'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('uttarakhand')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('uttarakhand')}
                  />

                  {/* Rajasthan */}
                  <path
                    d="M180 200 L280 190 L320 210 L340 250 L320 300 L280 320 L220 310 L180 280 L160 240 Z"
                    fill={hoveredState === 'rajasthan' ? '#dbeafe' : '#fef3c7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('rajasthan')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('rajasthan')}
                  />

                  {/* Gujarat */}
                  <path
                    d="M120 280 L180 270 L220 290 L240 330 L220 380 L180 400 L140 390 L120 350 L110 320 Z"
                    fill={hoveredState === 'gujarat' ? '#dbeafe' : '#dcfce7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('gujarat')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('gujarat')}
                  />

                  {/* Uttar Pradesh */}
                  <path
                    d="M380 200 L480 195 L520 210 L540 240 L530 280 L500 300 L460 295 L420 285 L380 270 L360 240 Z"
                    fill={hoveredState === 'uttar-pradesh' ? '#dbeafe' : '#dcfce7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('uttar-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('uttar-pradesh')}
                  />

                  {/* Madhya Pradesh */}
                  <path
                    d="M280 320 L380 310 L460 320 L480 350 L470 390 L440 410 L380 405 L320 400 L280 380 L260 350 Z"
                    fill={hoveredState === 'madhya-pradesh' ? '#dbeafe' : '#fdf2f8'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('madhya-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('madhya-pradesh')}
                  />

                  {/* Maharashtra */}
                  <path
                    d="M240 400 L320 395 L380 410 L400 450 L380 490 L340 500 L280 495 L240 470 L220 440 Z"
                    fill={hoveredState === 'maharashtra' ? '#dbeafe' : '#e0e7ff'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('maharashtra')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('maharashtra')}
                  />

                  {/* Karnataka */}
                  <path
                    d="M280 500 L340 495 L380 510 L400 540 L380 580 L340 590 L300 585 L280 560 L270 530 Z"
                    fill={hoveredState === 'karnataka' ? '#dbeafe' : '#f0fdf4'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('karnataka')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('karnataka')}
                  />

                  {/* Tamil Nadu */}
                  <path
                    d="M380 580 L420 575 L450 590 L470 620 L460 660 L430 680 L400 675 L380 650 L370 620 Z"
                    fill={hoveredState === 'tamil-nadu' ? '#dbeafe' : '#f3e8ff'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('tamil-nadu')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('tamil-nadu')}
                  />

                  {/* Kerala */}
                  <path
                    d="M300 590 L340 585 L360 600 L370 630 L360 660 L340 670 L320 665 L300 650 L290 620 Z"
                    fill={hoveredState === 'kerala' ? '#dbeafe' : '#ecfdf5'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('kerala')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('kerala')}
                  />

                  {/* Andhra Pradesh */}
                  <path
                    d="M400 450 L460 445 L500 460 L520 490 L510 530 L480 550 L440 545 L400 530 L390 490 Z"
                    fill={hoveredState === 'andhra-pradesh' ? '#dbeafe' : '#dcfce7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('andhra-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('andhra-pradesh')}
                  />

                  {/* Telangana */}
                  <path
                    d="M440 410 L480 405 L500 420 L495 450 L480 465 L460 460 L440 445 L435 425 Z"
                    fill={hoveredState === 'telangana' ? '#dbeafe' : '#fef3c7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('telangana')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('telangana')}
                  />

                  {/* Odisha */}
                  <path
                    d="M520 350 L580 345 L600 370 L595 410 L570 430 L540 425 L520 400 L515 375 Z"
                    fill={hoveredState === 'odisha' ? '#dbeafe' : '#fdf2f8'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('odisha')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('odisha')}
                  />

                  {/* West Bengal */}
                  <path
                    d="M580 280 L620 275 L640 300 L635 340 L610 360 L580 355 L570 330 L575 305 Z"
                    fill={hoveredState === 'west-bengal' ? '#dbeafe' : '#e0f2fe'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('west-bengal')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('west-bengal')}
                  />

                  {/* Bihar */}
                  <path
                    d="M520 240 L580 235 L600 250 L595 280 L570 295 L540 290 L520 275 L515 255 Z"
                    fill={hoveredState === 'bihar' ? '#dbeafe' : '#fef7cd'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('bihar')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('bihar')}
                  />

                  {/* Jharkhand */}
                  <path
                    d="M540 300 L580 295 L600 310 L595 340 L570 355 L540 350 L525 335 L530 315 Z"
                    fill={hoveredState === 'jharkhand' ? '#dbeafe' : '#f0fdf4'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('jharkhand')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('jharkhand')}
                  />

                  {/* Assam */}
                  <path
                    d="M640 250 L720 245 L740 270 L735 300 L710 315 L680 310 L660 295 L645 275 Z"
                    fill={hoveredState === 'assam' ? '#dbeafe' : '#ecfdf5'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('assam')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('assam')}
                  />

                  {/* Goa */}
                  <circle
                    cx="220"
                    cy="520"
                    r="6"
                    fill={hoveredState === 'goa' ? '#dbeafe' : '#fef3c7'}
                    stroke="#9ca3af"
                    strokeWidth="1"
                    className="cursor-pointer transition-colors hover:fill-blue-100"
                    onMouseEnter={() => setHoveredState('goa')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('goa')}
                  />

                  {/* City markers with activity indicators */}
                  
                  {/* Mumbai */}
                  <circle
                    cx="240"
                    cy="470"
                    r="8"
                    fill={getActivityColor(stateData['maharashtra']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('maharashtra')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('maharashtra')}
                  />
                  <text x="250" y="475" className="text-xs fill-gray-700 font-medium">Mumbai</text>

                  {/* Delhi */}
                  <circle
                    cx="350"
                    cy="180"
                    r="6"
                    fill={getActivityColor(stateData['delhi']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('delhi')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('delhi')}
                  />
                  <text x="360" y="185" className="text-xs fill-gray-700 font-medium">Delhi</text>

                  {/* Bangalore */}
                  <circle
                    cx="340"
                    cy="550"
                    r="6"
                    fill={getActivityColor(stateData['karnataka']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('karnataka')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('karnataka')}
                  />
                  <text x="350" y="555" className="text-xs fill-gray-700 font-medium">Bangalore</text>

                  {/* Chennai */}
                  <circle
                    cx="430"
                    cy="620"
                    r="6"
                    fill={getActivityColor(stateData['tamil-nadu']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('tamil-nadu')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('tamil-nadu')}
                  />
                  <text x="440" y="625" className="text-xs fill-gray-700 font-medium">Chennai</text>

                  {/* Kolkata */}
                  <circle
                    cx="600"
                    cy="320"
                    r="5"
                    fill={getActivityColor(stateData['west-bengal']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('west-bengal')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('west-bengal')}
                  />
                  <text x="610" y="325" className="text-xs fill-gray-700 font-medium">Kolkata</text>

                  {/* Hyderabad */}
                  <circle
                    cx="460"
                    cy="430"
                    r="5"
                    fill={getActivityColor(stateData['telangana']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('telangana')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('telangana')}
                  />
                  <text x="470" y="435" className="text-xs fill-gray-700 font-medium">Hyderabad</text>

                  {/* Ahmedabad */}
                  <circle
                    cx="180"
                    cy="320"
                    r="5"
                    fill={getActivityColor(stateData['gujarat']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('gujarat')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('gujarat')}
                  />
                  <text x="190" y="325" className="text-xs fill-gray-700 font-medium">Ahmedabad</text>

                  {/* Jaipur */}
                  <circle
                    cx="280"
                    cy="250"
                    r="5"
                    fill={getActivityColor(stateData['rajasthan']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('rajasthan')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('rajasthan')}
                  />
                  <text x="290" y="255" className="text-xs fill-gray-700 font-medium">Jaipur</text>

                  {/* Lucknow */}
                  <circle
                    cx="450"
                    cy="240"
                    r="5"
                    fill={getActivityColor(stateData['uttar-pradesh']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('uttar-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('uttar-pradesh')}
                  />
                  <text x="460" y="245" className="text-xs fill-gray-700 font-medium">Lucknow</text>

                  {/* Bhopal */}
                  <circle
                    cx="380"
                    cy="360"
                    r="4"
                    fill={getActivityColor(stateData['madhya-pradesh']?.reports || 0)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onMouseEnter={() => setHoveredState('madhya-pradesh')}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState('madhya-pradesh')}
                  />
                  <text x="390" y="365" className="text-xs fill-gray-700 font-medium">Bhopal</text>
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
            Click on any state or city marker to view detailed statistics. 
            Hover over markers to see quick information about report activity.
            Marker colors indicate activity levels: red (high), yellow (medium), green (low).
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;