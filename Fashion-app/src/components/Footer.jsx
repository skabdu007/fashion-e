import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-logo">FashionStore</h3>
          <p className="footer-description">
            Discover the latest fashion trends and premium quality clothing for every occasion.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><FiFacebook /></a>
            <a href="#" className="social-link"><FiTwitter /></a>
            <a href="#" className="social-link"><FiInstagram /></a>
            <a href="#" className="social-link"><FiYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/category/men">Men's Clothing</Link></li>
            <li><Link to="/category/women">Women's Clothing</Link></li>
            <li><Link to="/category/kids">Kids' Collection</Link></li>
            <li><Link to="/category/accessories">Accessories</Link></li>
            <li><Link to="/category/shoes">Footwear</Link></li>
            <li><Link to="/new">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FiMapPin />
              <span>123 Fashion Street, Style City, SC 12345</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>+1 (234) 567-8900</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>support@fashionstore.com</span>
            </div>
          </div>
          
          <div className="newsletter">
            <h5>Subscribe to Newsletter</h5>
            <div className="newsletter-input">
              <input type="email" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} FashionStore. All rights reserved.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">📱</span>
              <span className="payment-icon">🛡️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;