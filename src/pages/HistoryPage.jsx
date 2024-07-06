import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import HistoryData from '../components/History/HistoryData';
import AnimatedPage from '../components/AnimatedPage';

const HistoryPage = () => {
  const [selectedPlace, setSelectedPlace] = useState('All Places');
  const [timeRange, setTimeRange] = useState('Last Week');
  const [historyData, setHistoryData] = useState([]);

  const places = ['All Places', 'Place 1', 'Place 2', 'Place 3'];
  const timeRanges = ['Last 24 Hours', 'Last Week', 'Last Month', 'Last Year'];

  useEffect(() => {
    // Fetch data based on selectedPlace and timeRange
    // This is a mock function. Replace with actual API call.
    const fetchData = async () => {
      // Simulating API call
      const mockData = Array.from({ length: 24 }, (_, i) => ({
        timestamp: new Date(Date.now() - i * 3600000).toISOString(),
        powerGenerated: Math.random() * 1000,
        powerOutput: Math.random() * 800,
        batteryVoltage: 12 + Math.random() * 2,
        temperature: 20 + Math.random() * 10,
      }));
      setHistoryData(mockData);
    };

    fetchData();
  }, [selectedPlace, timeRange]);

  return (
    <DashboardLayout>
      <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">System Performance History</h1>
        <div className="mb-6 flex flex-wrap items-center space-x-4">
          <select
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {timeRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <HistoryData data={historyData} />
        </div>
      </div>
      </AnimatedPage>
    </DashboardLayout>
  );
};

export default HistoryPage;