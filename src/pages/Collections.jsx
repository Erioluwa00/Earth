import React from 'react';
import { useShop } from '../context/ShopContext';
import { COLLECTIONS } from '../data/collections';

export const Collections = () => {
  const { navigateTo } = useShop();

  return (
    <main className="earth-collections-page" id="collections-main-content">
      {/* Page Header */}
      <header className="earth-page-hero">
        <div className="earth-page-hero__bg">
          <img src="/images/hero-images1.png" alt="EARTH.NG Curated Lookbooks" />
        </div>
        <div className="earth-page-hero__overlay"></div>
        <div className="earth-container">
          <div className="earth-page-hero__content">
            <span className="earth-label">EDITORIAL CAPSULES</span>
            <h1 className="earth-page-hero__title">
              Curated Lookbooks
            </h1>
            <p className="earth-page-hero__lead">
              Our collections are conceived as timeless permanent chapters, not fleeting seasonal trends.
              Each garment is designed to harmonize with previous and future releases.
            </p>
          </div>
        </div>
      </header>

      {/* Collection Blocks */}
      <div>
        {COLLECTIONS.map((col) => (
          <section key={col.id} className="earth-collection-block" aria-label={col.title}>
            <div className="earth-container">
              <div className="earth-collection-header">
                <div>
                  <span className="earth-label" style={{ color: 'var(--earth-olive)' }}>
                    {col.season}
                  </span>
                  <h2 className="earth-title-section" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)' }}>
                    {col.title}
                  </h2>
                  <p style={{ fontStyle: 'italic', color: 'var(--earth-text-secondary)', marginTop: '6px' }}>
                    {col.subtitle}
                  </p>
                </div>
                <button
                  className="earth-btn earth-btn--outline"
                  onClick={() => navigateTo('shop', 'all')}
                >
                  SHOP THIS CAPSULE <span>→</span>
                </button>
              </div>

              {/* Grid with Hero and Lookbook Strip */}
              <div className="earth-collection-gallery">
                {/* Main Hero Shot */}
                <div className="earth-collection-hero-image">
                  <img
                    src={col.heroImage}
                    alt={col.title}
                    loading="lazy"
                  />
                </div>

                {/* Narrative & Metrics */}
                <div className="earth-collection-narrative">
                  <blockquote className="earth-collection-quote">
                    "{col.quote}"
                  </blockquote>

                  <p className="earth-collection-ethos">
                    {col.ethos}
                  </p>

                  {/* Stats Grid */}
                  <div className="earth-collection-stats">
                    {col.stats.map((stat, i) => (
                      <div key={i} className="earth-collection-stat-item">
                        <div className="earth-collection-stat-value">
                          {stat.value}
                        </div>
                        <div className="earth-collection-stat-label">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lookbook Gallery Strip */}
              <div className="earth-lookbook-strip">
                {col.lookbookImages.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="earth-lookbook-strip__item">
                    <img
                      src={imgSrc}
                      alt={`${col.title} look ${imgIndex + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};
