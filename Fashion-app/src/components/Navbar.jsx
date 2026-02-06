import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import '../styles/global.css';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Mock data for cart and wishlist counts
  const cartItems = 3;
  const wishlistItems = 5;

  // Navigation links - NO ICONS in categories
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Kids', path: '/category/kids' },
    { name: 'New Arrivals', path: '/new' },
    { name: 'Sale', path: '/sale' },
    { name: 'Accessories', path: '/category/accessories' },
  ];

  // Check if link is active
  const isActiveLink = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search - you can implement search functionality here
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <FiShoppingBag className="logo-icon" />
          <span className="logo-text">FashionStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
            >
              {link.name}
              {link.name === 'New Arrivals' && <span className="new-badge">New</span>}
              {link.name === 'Sale' && <span className="sale-badge">Sale</span>}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* User Actions */}
        <div className="user-actions">
          {/* Login Link */}
          <Link to="/login" className="auth-link login-link">
            Login
          </Link>
          
          {/* Register Link */}
          <Link to="/register" className="auth-link register-link">
            Register
          </Link>
          
          {/* Wishlist Link */}
          <Link to="/wishlist" className="action-link wishlist-link">
            Wishlist
            {wishlistItems > 0 && (
              <span className="item-count">{wishlistItems}</span>
            )}
          </Link>
          
          {/* Cart Link */}
          <Link to="/cart" className="action-link cart-link">
            Cart
            {cartItems > 0 && (
              <span className="item-count">{cartItems}</span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-user-auth">
                <Link 
                  to="/login" 
                  className="mobile-auth-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <span className="divider">|</span>
                <Link 
                  to="/register" 
                  className="mobile-auth-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
              <button 
                className="close-mobile-menu" 
                onClick={() => setIsMenuOpen(false)}
              >
                <FiX />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`mobile-nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.name === 'New Arrivals' && <span className="mobile-badge new">New</span>}
                  {link.name === 'Sale' && <span className="mobile-badge sale">Sale</span>}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mobile-actions">
              <Link 
                to="/wishlist" 
                className="mobile-action-btn wishlist-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
                {wishlistItems > 0 && (
                  <span className="mobile-item-count">{wishlistItems}</span>
                )}
              </Link>
              
              <Link 
                to="/cart" 
                className="mobile-action-btn cart-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {cartItems > 0 && (
                  <span className="mobile-item-count">{cartItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;