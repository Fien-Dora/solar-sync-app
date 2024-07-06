import React, { createContext, useState, useContext, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [
      { ...notification, id: Date.now(), read: false, timestamp: new Date() },
      ...prev
    ]);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  // This effect would typically be replaced by real-time data monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate checking system status
      const temperature = Math.random() * 100;
      const powerOutput = Math.random() * 5000;

      if (temperature > 80) {
        addNotification({
          type: 'warning',
          title: 'High Temperature Alert',
          message: `System temperature is high: ${temperature.toFixed(1)}°C`,
        });
      }

      if (powerOutput < 100) {
        addNotification({
          type: 'error',
          title: 'Low Power Output',
          message: `Power output is critically low: ${powerOutput.toFixed(1)}W`,
        });
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAsRead, clearAll }}
    >
      {children}
    </NotificationContext.Provider>
  );
};