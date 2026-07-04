import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">New Collection 2026</div>

        <h1>
          Redefine Your
          <span>Luxury Style</span>
        </h1>

        <p className="hero-description">
          Discover an exquisite collection of premium fashion meticulously crafted for
          those who appreciate the finer things in life. Elevate your wardrobe with
          timeless pieces that embody elegance and sophistication.
        </p>

        <div className="hero-buttons">
          <Link to="/new" className="hero-btn hero-btn-primary">
            Shop Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/collections" className="hero-btn hero-btn-secondary">
            Explore Collections
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">150+</div>
            <div className="hero-stat-label">Designer Brands</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">50K+</div>
            <div className="hero-stat-label">Happy Customers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">4.9</div>
            <div className="hero-stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="hero-ring" />
      </div>
    </section>
  );
}
