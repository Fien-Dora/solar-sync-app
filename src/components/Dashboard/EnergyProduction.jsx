// src/components/Dashboard/EnergyProduction.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const EnergyProduction = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Energy Produced',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Energy Production</h2>
      <Line data={data} />
    </div>
  );
};

export default EnergyProduction;