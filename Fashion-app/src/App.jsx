import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryNavbar from './components/CategoryNavbar';
//import Header from './components/Header'; // Use Header instead of Navbar

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Import CSS
import './styles/global.css';
import './styles/dashboard.css';

function App() {
  return (
    <Router>
      <div className="app">
       <Navbar /> {/* Use Navbar  */}
       <CategoryNavbar /> {/* Add CategoryNavbar */}
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <MainLayout>
                <Home />
              </MainLayout>
            } />
            
            <Route path="/login" element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            } />
            
            <Route path="/register" element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            } />
            
            {/* Dashboard Routes */}
            <Route path="/user/dashboard" element={
              <DashboardLayout role="user">
                <div className="dashboard container">
                  <h1>User Dashboard</h1>
                  <p>User dashboard content</p>
                </div>
              </DashboardLayout>
            } />
            
            <Route path="/admin/dashboard" element={
              <DashboardLayout role="admin">
                <div className="dashboard container">
                  <h1>Admin Dashboard</h1>
                  <p>Admin dashboard content</p>
                </div>
              </DashboardLayout>
            } />
            
            <Route path="/vendor/dashboard" element={
              <DashboardLayout role="vendor">
                <div className="dashboard container">
                  <h1>Vendor Dashboard</h1>
                  <p>Vendor dashboard content</p>
                </div>
              </DashboardLayout>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;