import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiUser, FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import '../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/category/men' },
    { name: 'Women', path: '/category/women' },
    { name: 'Kids', path: '/category/kids' },
    { name: 'New Arrivals', path: '/new' },
    { name: 'Sale', path: '/sale' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <FiShoppingBag className="logo-icon" />
          <span>FashionStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button className="icon-btn">
            <FiUser />
          </button>
          <button className="icon-btn">
            <FiHeart />
            <span className="badge">3</span>
          </button>
          <button className="icon-btn">
            <FiShoppingBag />
            <span className="badge">2</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;