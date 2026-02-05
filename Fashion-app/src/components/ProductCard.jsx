import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye, FiStar } from 'react-icons/fi';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    rating,
    isNew,
    isSale,
    salePercentage
  } = product;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="product-image" />
        </Link>
        
        {/* Badges */}
        <div className="product-badges">
          {isNew && <span className="badge new">New</span>}
          {isSale && <span className="badge sale">{salePercentage}% OFF</span>}
        </div>
        
        {/* Quick Actions */}
        <div className="product-actions">
          <button 
            className={`action-btn wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <FiHeart />
          </button>
          <button className="action-btn quickview-btn">
            <FiEye />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <Link to={`/product/${id}`} className="product-name">
          {name}
        </Link>
        
        <Link to={`/category/${category}`} className="product-category">
          {category}
        </Link>
        
        {/* Rating */}
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`star ${i < rating ? 'filled' : ''}`}
            />
          ))}
          <span className="rating-count">({rating})</span>
        </div>
        
        {/* Price */}
        <div className="product-price">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="btn btn-primary add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;