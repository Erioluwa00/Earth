import React from 'react';
import { useShop } from '../context/ShopContext';

export const BrandPromise = () => {
  const { navigateTo } = useShop();

  return (
    <section className="earth-promise" id="earth-promise-section" aria-label="Our Promise">
      <div className="earth-container">
        <div className="earth-promise__grid">
          {/* Left Text Column */}
          <div className="earth-promise__text-side">
            <span className="earth-label">OUR PROMISE</span>

            <h2 className="earth-promise__subheading">
              Consciously designed.<br />
              Ethically crafted.
            </h2>

            <p className="earth-promise__paragraph">
              We create pieces with intention, using natural materials, thoughtful processes
              and sustainable practices — for people who care about what they wear and the
              world we live in.
            </p>

            <button
              className="earth-btn-link"
              onClick={() => navigateTo('story')}
              id="promise-learn-more-btn"
            >
              LEARN MORE <span>→</span>
            </button>
          </div>

          {/* Right Macro Textile Image Column */}
          <div className="earth-promise__image-side">
            <div className="earth-promise__image-wrapper">
              <img
                src="/images/linen-texture.jpg"
                alt="Tactile macro close-up of unbleached organic natural linen weave fibers"
                loading="lazy"
              />
              <div className="earth-promise__image-tag">
                100% ORGANIC FRENCH FLAX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
