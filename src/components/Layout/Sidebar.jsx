import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Map, PlusCircle } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 text-white w-64 h-full flex flex-col pt-20"> {/* Changed this line */}
      <div className="flex-grow overflow-y-auto"> {/* Added this wrapper */}
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center py-2 px-4 rounded-lg ${
                  isActive('/dashboard') ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Home className="mr-3" />
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/history"
                className={`flex items-center py-2 px-4 rounded-lg ${
                  isActive('/dashboard/history') ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <BarChart2 className="mr-3" />
                History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-places"
                className={`flex items-center py-2 px-4 rounded-lg ${
                  isActive('/dashboard/my-places') ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Map className="mr-3" />
                My Places
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/add-place"
                className={`flex items-center py-2 px-4 rounded-lg ${
                  isActive('/dashboard/add-place') ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <PlusCircle className="mr-3" />
                Add New Place
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;