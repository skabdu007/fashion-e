import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import '../styles/global.css'; // FIXED: Changed "syles" to "styles"

// Mock data - replace with actual API calls
const mockProducts = [
  {
    id: 1,
    name: 'Classic White Shirt',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
    category: 'men',
    rating: 4.5,
    isNew: true,
    isSale: true,
    salePercentage: 20
  },
  {
    id: 2,
    name: 'Floral Summer Dress',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w-400',
    category: 'women',
    rating: 4.8,
    isNew: true,
    isSale: false,
    salePercentage: 0
  },
  {
    id: 3,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    category: 'unisex',
    rating: 4.3,
    isNew: false,
    isSale: true,
    salePercentage: 15
  },
  {
    id: 4,
    name: 'Sports Sneakers',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
    category: 'shoes',
    rating: 4.7,
    isNew: true,
    isSale: true,
    salePercentage: 10
  },
  {
    id: 5,
    name: 'Leather Handbag',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
    category: 'accessories',
    rating: 4.9,
    isNew: false,
    isSale: false,
    salePercentage: 0
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    category: 'women',
    rating: 4.4,
    isNew: false,
    isSale: true,
    salePercentage: 25
  }
];

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    // Simulate API call
    setFeaturedProducts(mockProducts.filter(p => p.isSale));
    setNewArrivals(mockProducts.filter(p => p.isNew));
  }, []);

  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400', count: 120 },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', count: 156 },
    { name: 'Kids', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400', count: 89 },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400', count: 67 },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop By Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.count} Products</p>
                  <button className="btn btn-outline">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <button className="btn btn-outline">View All</button>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <button className="btn btn-outline">View All</button>
          </div>
          <div className="products-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <h2>Summer Sale</h2>
              <p>Up to 50% off on selected items</p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;