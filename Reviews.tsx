import { reviews } from '../data/products';
import './Reviews.css';

export default function Reviews() {
  const displayReviews = reviews.slice(0, 6);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>What Our Customers Say</h2>
          <p>Discover why thousands of fashion enthusiasts trust NovaWear for their luxury needs</p>
        </div>

        <div className="reviews-grid">
          {displayReviews.map((review, index) => (
            <article
              key={review.id}
              className="review-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="review-header">
                <div className="review-avatar">{getInitials(review.author)}</div>
                <div className="review-author-info">
                  <h4>{review.author}</h4>
                  {review.verified && (
                    <span className="review-verified">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>

              <div className="review-stars">{renderStars()}</div>

              <h5 className="review-title">{review.title}</h5>
              <p className="review-content">{review.content}</p>

              <p className="review-date">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </article>
          ))}
        </div>

        <div className="reviews-cta">
          <a href="#" className="reviews-cta-btn">
            View All Reviews
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
