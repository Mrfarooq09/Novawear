import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-decoration" />

      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          <h2>Join the NovaWear Family</h2>
          <p>
            Subscribe to our newsletter for exclusive access to new collections,
            special offers, and style inspiration delivered directly to your inbox.
          </p>

          {!isSubscribed ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="newsletter-success">
              Thank you for subscribing! Welcome to the NovaWear family.
            </div>
          )}

          <div className="newsletter-benefits">
            <div className="newsletter-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Exclusive Offers</span>
            </div>
            <div className="newsletter-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Early Access</span>
            </div>
            <div className="newsletter-benefit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Style Tips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
