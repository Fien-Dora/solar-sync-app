// src/components/Dashboard/SolarPanelPoints.jsx
import React from 'react';

const SolarPanelPoints = () => {
  const panels = [
    { name: 'Canadian Solar', capacity: '298.3 kWh', status: 'Active' },
    { name: 'SunPower', capacity: '370.5 kWh', status: 'Active' },
    { name: 'LG Solar', capacity: '112.7 kWh', status: 'Inactive' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Solar Panel Points</h2>
      <ul className="space-y-4">
        {panels.map((panel, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{panel.name}</p>
              <p className="text-sm text-gray-500">Capacity: {panel.capacity}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-sm ${
              panel.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}>
              {panel.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolarPanelPoints;