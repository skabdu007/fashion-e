import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiPackage, FiDollarSign, FiTrendingUp, FiSettings, FiLogOut, FiBell, FiGrid } from 'react-icons/fi';

const VendorNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle vendor logout
    navigate('/login');
  };

  const vendorMenu = [
    { name: 'Dashboard', icon: <FiGrid />, path: '/vendor/dashboard' },
    { name: 'Products', icon: <FiPackage />, path: '/vendor/products' },
    { name: 'Orders', icon: <FiShoppingBag />, path: '/vendor/orders' },
    { name: 'Sales', icon: <FiDollarSign />, path: '/vendor/sales' },
    { name: 'Analytics', icon: <FiTrendingUp />, path: '/vendor/analytics' },
    { name: 'Store Settings', icon: <FiSettings />, path: '/vendor/settings' },
  ];

  return (
    <nav className="navbar vendor-navbar">
      <div className="navbar-container">
        {/* Logo with Store Name */}
        <Link to="/vendor/dashboard" className="navbar-logo">
          <FiShoppingBag />
          <div className="store-info">
            <span className="store-name">Fashion Store</span>
            <span className="vendor-badge">Vendor</span>
          </div>
        </Link>

        {/* Vendor Navigation */}
        <div className="nav-links">
          {vendorMenu.map(item => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Vendor Actions */}
        <div className="vendor-actions">
          <div className="sales-info">
            <span className="sales-label">Today's Sales</span>
            <span className="sales-amount">$1,234</span>
          </div>
          
          <button className="icon-btn notification-btn">
            <FiBell />
            <span className="notification-count">2</span>
          </button>
          
          <div className="vendor-dropdown">
            <div className="vendor-avatar">
              <FiShoppingBag />
            </div>
            <div className="dropdown-menu">
              <Link to="/vendor/store" className="dropdown-item">
                <FiShoppingBag /> Store Front
              </Link>
              <Link to="/vendor/profile" className="dropdown-item">
                <FiSettings /> Vendor Profile
              </Link>
              <Link to="/vendor/earnings" className="dropdown-item">
                <FiDollarSign /> Earnings
              </Link>
              <button onClick={handleLogout} className="dropdown-item logout">
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VendorNavbar;