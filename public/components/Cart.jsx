import React from 'react';
import '../styles/Cart.css';

const Cart = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity, total }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout
    alert('Proceeding to checkout...');
  };

  return (
    <>
      {isOpen && (
        <div className="cart-overlay" onClick={handleOverlayClick}>
          <div className="cart-sidebar">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button className="close-cart" onClick={onClose}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some amazing hair oils to get started!</p>
                <button className="continue-shopping" onClick={onClose}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/80x80?text=Hair+Oil';
                          }}
                        />
                      </div>
                      
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">${item.price.toFixed(2)}</p>
                        
                        <div className="cart-item-quantity">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="cart-item-total">
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          className="remove-item"
                          onClick={() => onRemove(item.id)}
                          aria-label="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="cart-subtotal">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="cart-shipping">
                    <span>Shipping:</span>
                    <span>{total >= 50 ? 'Free' : '$5.99'}</span>
                  </div>
                  
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>${total >= 50 ? total.toFixed(2) : (total + 5.99).toFixed(2)}</span>
                  </div>
                  
                  {total < 50 && (
                    <div className="free-shipping-notice">
                      <p>Add ${(50 - total).toFixed(2)} more for free shipping!</p>
                    </div>
                  )}
                </div>

                <div className="cart-actions">
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                  <button className="continue-shopping-btn" onClick={onClose}>
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

