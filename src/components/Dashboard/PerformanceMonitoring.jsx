// src/components/Dashboard/PerformanceMonitoring.jsx
import React from 'react';

const PerformanceMonitoring = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Performance Monitoring</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-500">Active</p>
          <p className="text-2xl font-bold">360 kWh</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Today's Energy</p>
          <p className="text-2xl font-bold">220 kWh</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Total Panels</p>
          <p className="text-2xl font-bold">75</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;