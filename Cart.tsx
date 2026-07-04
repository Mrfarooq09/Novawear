import { useStore } from '../context/StoreContext';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useStore();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            x
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={`${item.product.id}-${item.size}-${item.color}`}>
                <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.product.name}</p>
                  <p className="cart-item-meta">
                    {item.size && <span>Size: {item.size}</span>}
                    {item.color && <span> | Color: {item.color}</span>}
                  </p>
                  <p className="cart-item-price">${item.product.price}</p>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="cart-subtotal">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="continue-shopping" onClick={onClose}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
