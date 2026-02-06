import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './CategoryNavbar.css';

const CategoryNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Category data with subcategories
  const categories = [
    {
      name: 'Men',
      path: '/category/men',
      subcategories: [
        { name: 'T-Shirts', path: '/category/men/t-shirts' },
        { name: 'Shirts', path: '/category/men/shirts' },
        { name: 'Jeans', path: '/category/men/jeans' },
        { name: 'Trousers', path: '/category/men/trousers' },
        { name: 'Jackets', path: '/category/men/jackets' },
        { name: 'Shoes', path: '/category/men/shoes' },
        { name: 'Accessories', path: '/category/men/accessories' },
      ]
    },
    {
      name: 'Women',
      path: '/category/women',
      subcategories: [
        { name: 'Dresses', path: '/category/women/dresses' },
        { name: 'Tops', path: '/category/women/tops' },
        { name: 'Jeans', path: '/category/women/jeans' },
        { name: 'Skirts', path: '/category/women/skirts' },
        { name: 'Jackets', path: '/category/women/jackets' },
        { name: 'Shoes', path: '/category/women/shoes' },
        { name: 'Bags', path: '/category/women/bags' },
      ]
    },
    {
      name: 'Kids',
      path: '/category/kids',
      subcategories: [
        { name: 'Boys', path: '/category/kids/boys' },
        { name: 'Girls', path: '/category/kids/girls' },
        { name: 'Baby', path: '/category/kids/baby' },
        { name: 'Toys', path: '/category/kids/toys' },
        { name: 'Shoes', path: '/category/kids/shoes' },
      ]
    },
    {
      name: 'Accessories',
      path: '/category/accessories',
      subcategories: [
        { name: 'Watches', path: '/category/accessories/watches' },
        { name: 'Jewelry', path: '/category/accessories/jewelry' },
        { name: 'Sunglasses', path: '/category/accessories/sunglasses' },
        { name: 'Bags', path: '/category/accessories/bags' },
        { name: 'Belts', path: '/category/accessories/belts' },
      ]
    },
    {
      name: 'New Arrivals',
      path: '/new',
      badge: 'New'
    },
    {
      name: 'Sale',
      path: '/sale',
      badge: 'Sale'
    },
  ];

  // Check if a category is active
  const isCategoryActive = (path) => {
    if (path === '/new' || path === '/sale') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Handle dropdown toggle
  const toggleDropdown = (categoryName) => {
    if (activeDropdown === categoryName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(categoryName);
    }
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="category-navbar">
      <div className="category-navbar-container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-category-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle category menu"
        >
          <span>Categories</span>
          {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {/* Desktop Categories */}
        <div className="category-links">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className={`category-item ${activeDropdown === category.name ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown(category.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={category.path} 
                className={`category-link ${isCategoryActive(category.path) ? 'active' : ''}`}
                onClick={closeAllDropdowns}
              >
                {category.name}
                {category.badge && <span className={`category-badge ${category.badge.toLowerCase()}`}>{category.badge}</span>}
                {category.subcategories && (
                  <span className="dropdown-arrow">
                    {activeDropdown === category.name ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                )}
              </Link>

              {/* Desktop Dropdown */}
              {category.subcategories && activeDropdown === category.name && (
                <div className="category-dropdown">
                  <div className="dropdown-content">
                    <div className="dropdown-grid">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.name}
                          to={subcategory.path}
                          className="dropdown-item"
                          onClick={closeAllDropdowns}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="special-offers">
          <Link to="/clearance" className="offer-link clearance">
            Clearance Sale - Up to 70% Off
          </Link>
          <Link to="/free-shipping" className="offer-link shipping">
            Free Shipping on Orders $50+
          </Link>
        </div>
      </div>

      {/* Mobile Category Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-category-menu-overlay" onClick={closeAllDropdowns}>
          <div className="mobile-category-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Categories</h3>
              <button 
                className="close-mobile-category-menu" 
                onClick={closeAllDropdowns}
              >
                <FiChevronUp />
              </button>
            </div>

            <div className="mobile-categories">
              {categories.map((category) => (
                <div key={category.name} className="mobile-category-item">
                  <div className="mobile-category-header">
                    <Link 
                      to={category.path} 
                      className={`mobile-category-link ${isCategoryActive(category.path) ? 'active' : ''}`}
                      onClick={closeAllDropdowns}
                    >
                      {category.name}
                      {category.badge && <span className={`mobile-category-badge ${category.badge.toLowerCase()}`}>{category.badge}</span>}
                    </Link>
                    
                    {category.subcategories && (
                      <button 
                        className="mobile-dropdown-toggle"
                        onClick={() => toggleDropdown(category.name)}
                      >
                        {activeDropdown === category.name ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                    )}
                  </div>

                  {/* Mobile Subcategories */}
                  {category.subcategories && activeDropdown === category.name && (
                    <div className="mobile-subcategories">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.name}
                          to={subcategory.path}
                          className="mobile-subcategory-link"
                          onClick={closeAllDropdowns}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CategoryNavbar;