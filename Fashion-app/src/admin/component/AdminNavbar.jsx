import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiUsers, FiPackage, FiBarChart2, FiSettings, FiLogOut, FiBell } from 'react-icons/fi';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle admin logout
    navigate('/login');
  };

  const adminMenu = [
    { name: 'Dashboard', icon: <FiBarChart2 />, path: '/admin/dashboard' },
    { name: 'Users', icon: <FiUsers />, path: '/admin/users' },
    { name: 'Products', icon: <FiPackage />, path: '/admin/products' },
    { name: 'Orders', icon: <FiShoppingBag />, path: '/admin/orders' },
    { name: 'Analytics', icon: <FiBarChart2 />, path: '/admin/analytics' },
    { name: 'Settings', icon: <FiSettings />, path: '/admin/settings' },
  ];

  return (
    <nav className="navbar admin-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/admin/dashboard" className="navbar-logo">
          <FiShoppingBag />
          <span>FashionStore</span>
          <span className="admin-badge">Admin</span>
        </Link>

        {/* Admin Navigation */}
        <div className="nav-links">
          {adminMenu.map(item => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Admin Actions */}
        <div className="admin-actions">
          <button className="icon-btn notification-btn">
            <FiBell />
            <span className="notification-count">5</span>
          </button>
          
          <div className="admin-dropdown">
            <div className="admin-info">
              <div className="admin-avatar">A</div>
              <div className="admin-details">
                <span className="admin-name">Admin User</span>
                <span className="admin-role">Super Admin</span>
              </div>
            </div>
            <div className="dropdown-menu">
              <Link to="/admin/profile" className="dropdown-item">
                <FiUsers /> Admin Profile
              </Link>
              <Link to="/admin/settings" className="dropdown-item">
                <FiSettings /> System Settings
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

export default AdminNavbar;