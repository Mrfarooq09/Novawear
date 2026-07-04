import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist } = useStore();
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id));

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={i < fullStars ? '' : 'empty'} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <Link to={`/product/${product.id}`}>
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />

          <div className="product-badges">
            {product.isNew && <span className="product-badge new">New</span>}
            {discount > 0 && <span className="product-badge sale">-{discount}%</span>}
          </div>

          <div className="product-actions">
            <button
              className={`product-action-btn ${isWishlisted ? 'active' : ''}`}
              onClick={handleWishlistToggle}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <svg viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          <div className="add-to-cart-overlay">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="product-info">
          <p className="product-category">{product.subcategory}</p>
          <h3 className="product-name">{product.name}</h3>

          <div className="product-rating">
            <div className="product-stars">{renderStars(product.rating)}</div>
            <span className="product-reviews">({product.reviewCount})</span>
          </div>

          <div className="product-price">
            <span className="product-current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="product-original-price">${product.originalPrice}</span>
            )}
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="product-colors">
              {product.colors.slice(0, 4).map((color, i) => (
                <span
                  key={i}
                  className="product-color"
                  style={{ backgroundColor: color }}
                  aria-label={`Color option ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
