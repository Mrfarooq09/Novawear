import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="products-header">
          <h2>Featured Products</h2>
          <Link to="/featured" className="view-all-link">
            View All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
