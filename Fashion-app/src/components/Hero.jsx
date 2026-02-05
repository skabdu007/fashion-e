import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/global.css';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      title: 'Summer Collection 2024',
      subtitle: 'Discover the hottest trends of the season',
      cta: 'Shop Now',
      ctaLink: '/collection/summer'
    },
    {
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200',
      title: 'Limited Time Offer',
      subtitle: 'Up to 50% off on selected items',
      cta: 'View Deals',
      ctaLink: '/sale'
    },
    {
      image: 'https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?w=1200',
      title: 'New Arrivals',
      subtitle: 'Fresh styles added daily',
      cta: 'Explore',
      ctaLink: '/new'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="container">
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Link to={slide.ctaLink} className="btn btn-primary">
                    {slide.cta}
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Hero Features */}
      <div className="hero-features container">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div className="feature-text">
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <div className="feature-text">
            <h4>30-Day Returns</h4>
            <p>Easy return policy</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">🛡️</div>
          <div className="feature-text">
            <h4>Secure Payment</h4>
            <p>100% secure & safe</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">📞</div>
          <div className="feature-text">
            <h4>24/7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;