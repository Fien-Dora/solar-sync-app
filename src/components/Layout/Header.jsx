import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNotifications } from '../../context/NotificationContext';
import { Bell, Settings, LogOut } from 'lucide-react';
import NotificationDropdown from '../Notifications/NotificationDropdown';

const Header = () => {
  const { user, logout } = useAuth();
  const { notifications, markAsRead, clearAll } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <header className="bg-white shadow-md z-20 w-full fixed top-0 left-0 right-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/dashboard" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h1 className="text-2xl font-bold text-gray-800 ml-4">Power Monitor</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="text-gray-600 hover:text-gray-800 cursor-pointer relative"
            >
              <Bell size={24} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <NotificationDropdown
                notifications={notifications}
                onClose={() => setShowNotifications(false)}
                onMarkAsRead={markAsRead}
                onClearAll={clearAll}
              />
            )}
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <Settings size={24} />
          </button>
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center focus:outline-none"
            >
              <img
                src={(user && user.photoURL) || "/api/placeholder/32/32"}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-gray-700">{(user && (user.displayName || user.email)) || 'Guest'}</span>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={18} className="inline mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
