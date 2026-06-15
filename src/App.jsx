import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { LanguageProvider } from './components/LanguageProvider';
import Login from './pages/Login';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Education from './pages/Education';
import Technical from './pages/Technical';
import Finance from './pages/Finance';
import Gifts from './pages/Gifts';
import HR from './pages/HR';
import Partners from './pages/Partners';
import Teachers from './pages/Teachers';

import ManagementPage from './pages/ManagementPage';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Home />} />
        <Route path="sales" element={<Sales />} />
        <Route path="education" element={<Education />} />
        <Route path="technical" element={<Technical />} />
        <Route path="finance" element={<Finance />} />
        <Route path="gifts" element={<Gifts />} />
        <Route path="hr" element={<HR />} />
        <Route path="partners" element={<Partners />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="management/:section" element={<ManagementPage />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;