import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                NOVA<span>WEAR</span>
              </Link>
              <p>
                Redefining luxury fashion with timeless elegance and modern sophistication.
                Our curated collections embody the finest craftsmanship for the discerning individual.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Shop</h4>
              <div className="footer-links">
                <Link to="/men" className="footer-link">Men's Collection</Link>
                <Link to="/women" className="footer-link">Women's Collection</Link>
                <Link to="/new" className="footer-link">New Arrivals</Link>
                <Link to="/sale" className="footer-link">Sale</Link>
                <Link to="/gifts" className="footer-link">Gift Cards</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <div className="footer-links">
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/careers" className="footer-link">Careers</Link>
                <Link to="/press" className="footer-link">Press</Link>
                <Link to="/sustainability" className="footer-link">Sustainability</Link>
                <Link to="/stores" className="footer-link">Store Locator</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <div className="footer-links">
                <Link to="/contact" className="footer-link">Contact Us</Link>
                <Link to="/faq" className="footer-link">FAQ</Link>
                <Link to="/shipping" className="footer-link">Shipping & Returns</Link>
                <Link to="/size-guide" className="footer-link">Size Guide</Link>
                <Link to="/track-order" className="footer-link">Track Order</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="footer-contact-text">
                    123 Rodeo Drive<br />
                    Beverly Hills, CA 90210
                  </span>
                </div>
                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="footer-contact-text">+1 (888) NOVA-LUX</span>
                </div>
                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="footer-contact-text">concierge@novawear.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              {currentYear} NovaWear. All rights reserved. Crafted with excellence.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
            <div className="footer-payment">
              <svg className="footer-payment-icon" viewBox="0 0 50 30" fill="currentColor">
                <rect width="50" height="30" rx="4" fill="#1a1a1a" />
                <text x="25" y="20" textAnchor="middle" fontSize="12" fill="white">VISA</text>
              </svg>
              <svg className="footer-payment-icon" viewBox="0 0 50 30" fill="currentColor">
                <rect width="50" height="30" rx="4" fill="#1a1a1a" />
                <circle cx="20" cy="15" r="8" fill="#eb001b" />
                <circle cx="30" cy="15" r="8" fill="#f79e1b" />
              </svg>
              <svg className="footer-payment-icon" viewBox="0 0 50 30" fill="currentColor">
                <rect width="50" height="30" rx="4" fill="#1a1a1a" />
                <text x="25" y="20" textAnchor="middle" fontSize="10" fill="white">AMEX</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
