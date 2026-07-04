import { useStore } from '../context/StoreContext';
import './Wishlist.css';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Wishlist({ isOpen, onClose }: WishlistProps) {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  return (
    <>
      <div className={`wishlist-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`wishlist-drawer ${isOpen ? 'open' : ''}`}>
        <div className="wishlist-header">
          <h2>Wishlist ({wishlist.length})</h2>
          <button className="wishlist-close" onClick={onClose} aria-label="Close wishlist">
            x
          </button>
        </div>

        <div className="wishlist-items">
          {wishlist.length === 0 ? (
            <div className="wishlist-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p>Your wishlist is empty</p>
            </div>
          ) : (
            wishlist.map(item => (
              <div className="wishlist-item" key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} className="wishlist-item-image" />
                <div className="wishlist-item-details">
                  <p className="wishlist-item-name">{item.product.name}</p>
                  <p className="wishlist-item-category">{item.product.subcategory}</p>
                  <p className="wishlist-item-price">
                    ${item.product.price}
                    {item.product.originalPrice && (
                      <span className="wishlist-item-original-price">${item.product.originalPrice}</span>
                    )}
                  </p>
                  <div className="wishlist-item-actions">
                    <button className="add-to-cart-btn" onClick={() => addToCart(item.product)}>
                      Add to Cart
                    </button>
                    <button className="remove-wishlist-item" onClick={() => toggleWishlist(item.product)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
