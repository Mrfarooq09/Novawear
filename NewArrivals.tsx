import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

export default function NewArrivals() {
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="new-arrivals" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="products-header">
          <h2>New Arrivals</h2>
          <Link to="/new" className="view-all-link">
            View All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="products-grid">
          {newArrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
