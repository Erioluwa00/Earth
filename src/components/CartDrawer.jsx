import React from 'react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    formatPrice,
    openComingSoon
  } = useShop();

  const handleCheckout = () => {
    setIsCartOpen(false);
    openComingSoon(
      'Online Checkout & Payment Gateway',
      'Direct Paystack, Flutterwave, and card checkout integration is currently undergoing final security testing. In the meantime, you can place your order directly with our Lagos atelier team via WhatsApp or concierge.',
      'ORDER VIA ATELIER CONCIERGE',
      'contact',
      'CHECKOUT IN PROGRESS'
    );
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="earth-modal-backdrop"
          onClick={() => setIsCartOpen(false)}
          style={{ zIndex: 1250 }}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`earth-cart-drawer ${
          isCartOpen ? 'earth-cart-drawer--open' : ''
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="earth-cart-drawer__header">
          <h3 className="earth-cart-drawer__title">YOUR BAG</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Shopping Bag"
            style={{ fontSize: '1.25rem', padding: '6px' }}
          >
            ✕
          </button>
        </div>

        <div className="earth-cart-drawer__body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--earth-text-muted)' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>Your shopping bag is currently empty.</p>
              <span className="earth-label" style={{ fontSize: '0.7rem' }}>CHOOSE PIECES WITH INTENTION</span>
            </div>
          ) : (
            <>
              {/* Sustainability Impact Callout */}
              <div className="earth-cart-impact-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 4.24-4.24"></path>
                  <path d="M2 18h8"></path>
                  <path d="M20 18a8 8 0 1 1-16 0c0-4.418 3.582-8 8-8s8 3.582 8 8Z"></path>
                </svg>
                <span>
                  <strong>Conscious Order:</strong> Carbon neutral shipping &amp; 100% plastic-free packaging.
                </span>
              </div>

              {/* Items List */}
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="earth-cart-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="earth-cart-item__img"
                  />
                  <div className="earth-cart-item__info">
                    <h4 className="earth-cart-item__name">{item.product.name}</h4>
                    <div className="earth-cart-item__meta">
                      Size: {item.size} &bull; {item.product.color}
                    </div>
                    <div className="earth-cart-item__price">
                      {formatPrice(item.product.price)}
                    </div>
                    <div className="earth-cart-qty-control">
                      <button
                        className="earth-cart-qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.size, -1)}
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span className="earth-cart-qty-num">{item.quantity}</span>
                      <button
                        className="earth-cart-qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.size, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="earth-cart-item__remove"
                    onClick={() => removeFromCart(item.product.id, item.size)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="earth-cart-drawer__footer">
            <div className="earth-cart-total-row">
              <span className="earth-cart-total-label">SUBTOTAL</span>
              <span className="earth-cart-total-value">
                {formatPrice(cartSubtotal)}
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--earth-text-muted)' }}>
              Taxes and carbon-neutral duties calculated at checkout.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0 6px', fontSize: '0.78rem' }}>
              <span style={{ color: 'var(--earth-text-secondary)' }}>Promo or gift code?</span>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--earth-olive)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.78rem'
                }}
                onClick={() => {
                  setIsCartOpen(false);
                  openComingSoon(
                    'Promotional & Gift Vouchers',
                    'Gift voucher redemption and custom promotional discount codes will be available alongside the launch of our online payment portal.',
                    'CONTACT ATELIER',
                    'contact',
                    'COMING SOON'
                  );
                }}
              >
                Apply code
              </button>
            </div>
            <button
              className="earth-btn earth-btn--primary"
              style={{ width: '100%' }}
              onClick={handleCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};
