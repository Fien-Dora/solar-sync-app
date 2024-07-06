// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // TODO: Implement authentication logic with Firebase

  const login = (email, password) => {
    // Implement login logic
  };

  const signup = (email, password) => {
    // Implement signup logic
  };

  const logout = () => {
    // Implement logout logic
  };

  const value = {
    user,
    setUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};