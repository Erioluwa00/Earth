import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      showToast('Thank you for subscribing to EARTH.NG Journal.');
      setEmail('');
    }
  };

  return (
    <section className="earth-newsletter" aria-label="Newsletter Subscription">
      <div className="earth-container">
        <div className="earth-newsletter__container">
          <span className="earth-label">THE NEWSLETTER</span>

          <h2 className="earth-title-section" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            Stay in the loop.
          </h2>

          <p style={{ maxWidth: '480px' }}>
            Get updates on new collections, stories and conscious creations delivered with quiet intention.
          </p>

          {isSubmitted ? (
            <div
              style={{
                marginTop: '20px',
                padding: '16px 24px',
                backgroundColor: 'var(--earth-ivory)',
                border: '1px solid var(--earth-olive)',
                color: 'var(--earth-charcoal)',
                fontSize: 'var(--earth-text-sm)',
                letterSpacing: '0.04em'
              }}
            >
              ✓ You are now subscribed. Welcome to the world of EARTH.NG.
            </div>
          ) : (
            <form className="earth-newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="earth-newsletter__input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address for newsletter"
              />
              <button
                type="submit"
                className="earth-newsletter__btn"
                id="newsletter-subscribe-btn"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
