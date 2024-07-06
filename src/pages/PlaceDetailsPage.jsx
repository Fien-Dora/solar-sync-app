import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import AnimatedPage from '../components/AnimatedPage';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PlaceDetailsPage = () => {
  const { id } = useParams();

  // Mock data - replace with actual data fetching logic
  const placeData = {
    id: id,
    name: 'Home Solar System',
    location: 'New York, NY',
    capacity: 10,
    panelType: 'Monocrystalline',
    status: 'Active',
    lastUpdate: '2 minutes ago',
    energyToday: 15.2,
    energyThisMonth: 450.5,
    totalEnergy: 5500,
  };

  const chartData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Energy Generated (kWh)',
        data: [0, 0.5, 2.5, 4.8, 5.2, 2.2],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Today\'s Energy Generation',
      },
    },
  };

  return (
    <DashboardLayout>
      <AnimatedPage> 
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold mb-6">{placeData.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">System Information</h2>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.location}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Capacity</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.capacity} kW</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Panel Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.panelType}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      placeData.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {placeData.status}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Energy Statistics</h2>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Energy Today</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.energyToday} kWh</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Energy This Month</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.energyThisMonth} kWh</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Total Energy Generated</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.totalEnergy} kWh</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Last Update</dt>
                  <dd className="mt-1 text-sm text-gray-900">{placeData.lastUpdate}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <Line options={chartOptions} data={chartData} />
          </div>
        </div>
      </AnimatedPage>
    </DashboardLayout>
  );
};

export default PlaceDetailsPage;