import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal = () => {
  const { quickViewProduct, closeQuickView, addToCart, formatPrice, openComingSoon } = useShop();
  const [selectedSize, setSelectedSize] = useState(
    quickViewProduct ? quickViewProduct.sizes[0] : ''
  );

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize || quickViewProduct.sizes[0]);
    closeQuickView();
  };

  return (
    <div className="earth-modal-backdrop" onClick={closeQuickView} role="dialog" aria-modal="true">
      <div
        className="earth-quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="earth-modal-close"
          onClick={closeQuickView}
          aria-label="Close product preview"
        >
          ✕
        </button>

        <div className="earth-quickview-grid">
          {/* Image visual */}
          <div className="earth-quickview-visual">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
            />
          </div>

          {/* Details */}
          <div className="earth-quickview-details">
            <div>
              <span className="earth-label" style={{ color: 'var(--earth-olive)' }}>
                {quickViewProduct.material}
              </span>
              <h2 className="earth-quickview-details__title">
                {quickViewProduct.name}
              </h2>
              <div className="earth-quickview-details__price">
                {formatPrice(quickViewProduct.price)}
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--earth-text-secondary)' }}>
              {quickViewProduct.description}
            </p>

            {/* Size selector */}
            <div className="earth-size-selector">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="earth-label" style={{ marginBottom: 0 }}>SELECT SIZE</span>
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.72rem',
                    textDecoration: 'underline',
                    color: 'var(--earth-text-secondary)',
                    cursor: 'pointer',
                    letterSpacing: '0.05em'
                  }}
                  onClick={() =>
                    openComingSoon(
                      'Garment Sizing & Fit Guide',
                      'Our interactive atelier measurement tables and drape estimator are currently being finalized. For personalized sizing advice right now, our atelier concierge is at your service.',
                      'CONSULT CONCIERGE',
                      'contact',
                      'SIZE GUIDE'
                    )
                  }
                >
                  Size Guide ↗
                </button>
              </div>
              <div className="earth-size-options">
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`earth-size-btn ${
                      selectedSize === size ? 'earth-size-btn--active' : ''
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sustainable credentials */}
            <ul className="earth-sustainable-bullets">
              {quickViewProduct.sustainability.map((point, idx) => (
                <li key={idx}>
                  <span>🌿</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              className="earth-btn earth-btn--primary"
              style={{ width: '100%', marginTop: '8px' }}
              onClick={handleAdd}
            >
              ADD TO BAG &bull; {formatPrice(quickViewProduct.price)}
            </button>

            <button
              type="button"
              style={{
                width: '100%',
                marginTop: '10px',
                background: 'transparent',
                border: '1px solid var(--earth-border-medium)',
                color: 'var(--earth-charcoal)',
                padding: '10px',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onClick={() =>
                openComingSoon(
                  'Client Wishlist & Saved Capsules',
                  'Saving pieces to your personal conscious wardrobe wishlist will be available with client accounts in our upcoming update.',
                  'EXPLORE ALL PIECES',
                  'shop',
                  'COMING SOON'
                )
              }
            >
              <span>♡</span> SAVE TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
