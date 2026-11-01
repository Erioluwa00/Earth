import React from 'react';
import { useShop } from '../context/ShopContext';

export const OurStory = () => {
  const { navigateTo } = useShop();

  return (
    <main className="earth-story-page" id="story-main-content">
      {/* Hero */}
      <header className="earth-page-hero">
        <div className="earth-page-hero__bg">
          <img src="/images/hero-images2.png" alt="Crafted in Harmony with Nature" />
        </div>
        <div className="earth-page-hero__overlay"></div>
        <div className="earth-container">
          <div className="earth-page-hero__content">
            <span className="earth-label">OUR STORY &amp; MANIFESTO</span>
            <h1 className="earth-page-hero__title">
              Crafted in Harmony with Nature
            </h1>
            <p className="earth-page-hero__lead">
              Founded in Lagos, EARTH.NG is an African slow fashion house dedicated to circularity,
              heritage craft, and natural earth fibers.
            </p>
          </div>
        </div>
      </header>

      {/* Manifesto Section */}
      <section className="earth-story-manifesto">
        <div className="earth-container">
          <div className="earth-story-grid">
            <div>
              <blockquote className="earth-story-quote">
                "We do not inherit the earth from our ancestors; we borrow it from our children."
              </blockquote>
            </div>

            <div className="earth-story-paragraphs">
              <p>
                In a fashion ecosystem consumed by frantic trend cycles and disposable garments,
                EARTH.NG exists as a sanctuary of quiet luxury. We believe true sophistication
                does not shout — it whispers through tactile weaves, impeccable drape, and ethical purity.
              </p>
              <p>
                Every piece in our collection begins in small artisan studios across West Africa.
                We merge ancestral West African drapery with contemporary architectural silhouettes,
                proving that African fashion is a global pioneer in sustainable innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="earth-story-pillars" aria-label="Our Three Pillars">
        <div className="earth-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="earth-label">HOW WE WORK</span>
            <h2 className="earth-title-section" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              The Pillars of EARTH.NG
            </h2>
          </div>

          <div className="earth-pillars-grid">
            <div className="earth-pillar-card">
              <span className="earth-pillar-card__number">01</span>
              <h3 className="earth-pillar-card__title">100% Biodegradable Fibers</h3>
              <p>
                We exclusively utilize pure unbleached European flax, organic rain-fed cotton,
                wild Himalayan nettle, and palm raffia. If returned to the earth, our garments
                naturally compost in 6 months without synthetic microplastic residue.
              </p>
            </div>

            <div className="earth-pillar-card">
              <span className="earth-pillar-card__number">02</span>
              <h3 className="earth-pillar-card__title">Zero Waste Pattern Cutting</h3>
              <p>
                Inspired by traditional boubou construction, our ateliers draft patterns using
                geometric interlocking systems that maximize every square inch of fabric bolt,
                reducing atelier cutting waste to less than 1%.
              </p>
            </div>

            <div className="earth-pillar-card">
              <span className="earth-pillar-card__number">03</span>
              <h3 className="earth-pillar-card__title">Fair Trade Artisanship</h3>
              <p>
                We pay 3.5x living wage standards to our master pattern-makers, tailors,
                and female weaving cooperatives in Nigeria and Ghana. We create enduring careers,
                not temporary factory jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Banner */}
      <section
        style={{
          position: 'relative',
          padding: '120px 0',
          background: 'var(--earth-charcoal)',
          color: 'var(--earth-ivory)',
          textAlign: 'center'
        }}
      >
        <div className="earth-container-narrow">
          <span className="earth-label earth-label--light" style={{ marginBottom: '16px' }}>
            JOIN THE MOVEMENT
          </span>
          <h2
            style={{
              fontFamily: 'var(--earth-font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--earth-ivory)',
              marginBottom: '24px'
            }}
          >
            Invest in pieces designed to last a lifetime.
          </h2>
          <button
            className="earth-btn earth-btn--white"
            onClick={() => navigateTo('shop')}
          >
            EXPLORE THE COLLECTION <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
};
