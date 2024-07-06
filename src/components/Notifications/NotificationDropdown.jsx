import React from 'react';
import { Bell, X, AlertTriangle, AlertCircle } from 'lucide-react';

const NotificationDropdown = ({ notifications, onClose, onMarkAsRead, onClearAll }) => {
  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden z-20">
      <div className="py-2">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <h3 className="text-lg font-semibold">System Alerts</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        {notifications.length === 0 ? (
          <p className="px-4 py-2 text-gray-500">No new alerts</p>
        ) : (
          <>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-2 hover:bg-gray-50 ${
                  notification.read ? 'opacity-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    {notification.type === 'warning' ? (
                      <AlertTriangle className="text-yellow-500 mr-2" size={20} />
                    ) : (
                      <AlertCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <div>
                      <p className="font-semibold">{notification.title}</p>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => onMarkAsRead(notification.id)}
                      className="text-blue-500 text-sm hover:text-blue-700"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(notification.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
            <div className="border-t px-4 py-2">
              <button
                onClick={onClearAll}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Clear all alerts
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;