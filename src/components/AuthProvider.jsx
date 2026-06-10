import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('qorakol_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (username, password) => {
    if (username === 'qorakol' && password === '12345') {
      const userData = { username, role: 'super_admin' };
      setUser(userData);
      localStorage.setItem('qorakol_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('qorakol_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
