import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Eye, Trash2 } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const MyPlacesPage = () => {
  const places = [
    { id: 1, name: 'Home Solar System', status: 'Active', lastUpdate: '2 minutes ago', energyToday: 15.2 },
    { id: 2, name: 'Office Roof Panels', status: 'Inactive', lastUpdate: '1 hour ago', energyToday: 0 },
    { id: 3, name: 'Farm Solar Array', status: 'Active', lastUpdate: '15 minutes ago', energyToday: 45.7 },
  ];

  return (
    <DashboardLayout>
      <AnimatedPage> 
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold mb-6">My Places</h1>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Today</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {places.map((place) => (
                  <tr key={place.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{place.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        place.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {place.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{place.lastUpdate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{place.energyToday} kWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/dashboard/place/${place.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                        <Eye className="inline-block w-5 h-5" />
                      </Link>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="inline-block w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedPage>
    </DashboardLayout>
  );
};

export default MyPlacesPage;