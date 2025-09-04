import React from 'react';
import { MapPin } from 'lucide-react';

interface IndiaMapProps {
  className?: string;
}

export const IndiaMap: React.FC<IndiaMapProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 ${className}`}>
      <div className="text-center">
        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-2">India Map Component</h3>
        <p className="text-gray-500">Map functionality will be implemented here</p>
      </div>
    </div>
  );
};

export default IndiaMap;