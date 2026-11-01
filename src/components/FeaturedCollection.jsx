import React from 'react';
import { useShop } from '../context/ShopContext';

export const FeaturedCollection = () => {
  const { navigateTo } = useShop();

  return (
    <section className="earth-featured-collection" aria-label="Featured Linen Collection">
      <div className="earth-container">
        <div className="earth-featured-collection__layout">
          {/* Left Editorial Copy & Specs */}
          <div className="earth-featured-collection__info">
            <span className="earth-label">FEATURED CAPSULE</span>

            <h2 className="earth-featured-collection__heading">
              The Linen Collection
            </h2>

            <div className="earth-featured-collection__subtitle">
              Lightweight. Breathable. Timeless.
            </div>

            <p className="earth-featured-collection__desc">
              Our linen pieces are made for comfort and designed to last. Handcrafted from
              pure certified European flax, cut with relaxed architectural precision, and dyed
              exclusively using low-impact earthen pigments.
            </p>

            <div className="earth-featured-collection__specs">
              <div className="earth-spec-item">
                <div className="earth-spec-item__title">100% Organic Flax</div>
                <div className="earth-spec-item__subtitle">Rain-fed & pesticide-free</div>
              </div>
              <div className="earth-spec-item">
                <div className="earth-spec-item__title">Zero Synthetic Dyes</div>
                <div className="earth-spec-item__subtitle">Infused with mineral earth</div>
              </div>
              <div className="earth-spec-item">
                <div className="earth-spec-item__title">Zero Waste Pattern</div>
                <div className="earth-spec-item__subtitle">Geometric boubou cutting</div>
              </div>
              <div className="earth-spec-item">
                <div className="earth-spec-item__title">Fair Wages</div>
                <div className="earth-spec-item__subtitle">Master artisans in Lagos</div>
              </div>
            </div>

            <button
              className="earth-btn earth-btn--primary"
              onClick={() => navigateTo('shop', 'all')}
              id="featured-collection-shop-cta"
            >
              SHOP NOW <span>→</span>
            </button>
          </div>

          {/* Right Large Lifestyle Editorial Image */}
          <div className="earth-featured-collection__visual">
            <img
              src="/images/featured-linen.jpg"
              alt="Model wearing tailored sand beige linen 3-piece suiting set in golden hour light"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
