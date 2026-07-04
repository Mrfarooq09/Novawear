import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import './Navbar.css';
import Cart from './Cart';
import Wishlist from './Wishlist';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const { cartCount, wishlistCount } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShowSearch(false);
    setShowCart(false);
    setShowWishlist(false);
  }, [location]);

  const searchResults = products.filter(
    p =>
      searchQuery.length > 0 &&
      (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: "Men's", href: '/men' },
    { label: "Women's", href: '/women' },
    { label: 'New Arrivals', href: '/new' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NOVA<span>WEAR</span>
          </Link>

          <div className="navbar-nav">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button className="nav-icon-btn" onClick={() => setShowSearch(true)} aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button className="nav-icon-btn" onClick={() => setShowWishlist(true)} aria-label="Wishlist">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
            </button>

            <button className="nav-icon-btn" onClick={() => setShowCart(true)} aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div className="search-overlay" onClick={() => setShowSearch(false)}>
          <button className="search-close" aria-label="Close search">x</button>
          <div className="search-container" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.slice(0, 5).map(product => (
                  <Link to={`/product/${product.id}`} className="search-result-item" key={product.id}>
                    <img src={product.image} alt={product.name} className="search-result-image" />
                    <div className="search-result-info">
                      <h4>{product.name}</h4>
                      <p>{product.subcategory}</p>
                      <p className="search-result-price">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <div className="search-results">
                <div className="search-no-results">No products found for "{searchQuery}"</div>
              </div>
            )}
          </div>
        </div>
      )}

      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
      <Wishlist isOpen={showWishlist} onClose={() => setShowWishlist(false)} />

      <div style={{ height: '80px' }} />
    </>
  );
}
