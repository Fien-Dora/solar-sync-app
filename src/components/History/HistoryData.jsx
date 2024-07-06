import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryData = ({ data }) => {
  const [viewType, setViewType] = useState('graph');

  const chartData = {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        label: 'Power Generated (W)',
        data: data.map(item => item.powerGenerated),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Power Output (W)',
        data: data.map(item => item.powerOutput),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Battery Voltage (V)',
        data: data.map(item => item.batteryVoltage),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temperature),
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'System Performance History',
      },
    },
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setViewType('graph')}
          className={`px-4 py-2 mr-2 rounded ${viewType === 'graph' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Graph
        </button>
        <button
          onClick={() => setViewType('table')}
          className={`px-4 py-2 rounded ${viewType === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Table
        </button>
      </div>
      {viewType === 'graph' ? (
        <Line options={options} data={chartData} />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Power Generated (W)</th>
                <th className="px-4 py-2">Power Output (W)</th>
                <th className="px-4 py-2">Battery Voltage (V)</th>
                <th className="px-4 py-2">Temperature (°C)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-2">{item.timestamp}</td>
                  <td className="px-4 py-2">{item.powerGenerated}</td>
                  <td className="px-4 py-2">{item.powerOutput}</td>
                  <td className="px-4 py-2">{item.batteryVoltage}</td>
                  <td className="px-4 py-2">{item.temperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HistoryData;