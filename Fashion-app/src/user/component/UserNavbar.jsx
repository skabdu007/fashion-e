import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiUser, FiBell, FiLogOut, FiHome, FiPackage, FiHeart, FiSettings } from 'react-icons/fi';

const UserNavbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  const userMenu = [
    { name: 'Dashboard', icon: <FiHome />, path: '/user/dashboard' },
    { name: 'My Orders', icon: <FiPackage />, path: '/user/orders' },
    { name: 'Wishlist', icon: <FiHeart />, path: '/user/wishlist' },
    { name: 'Profile', icon: <FiUser />, path: '/user/profile' },
    { name: 'Settings', icon: <FiSettings />, path: '/user/settings' },
  ];

  return (
    <nav className="navbar user-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/user/dashboard" className="navbar-logo">
          <FiShoppingBag />
          <span>FashionStore</span>
          <span className="user-badge">User</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          {userMenu.map(item => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="user-actions">
          <button className="icon-btn notification-btn">
            <FiBell />
            <span className="notification-count">3</span>
          </button>
          
          <div className="user-dropdown">
            <button className="user-avatar">
              <FiUser />
            </button>
            <div className="dropdown-menu">
              <Link to="/user/profile" className="dropdown-item">
                <FiUser /> My Profile
              </Link>
              <Link to="/user/settings" className="dropdown-item">
                <FiSettings /> Settings
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

export default UserNavbar;