import React from 'react';
import { MOSAIC_ITEMS } from '../data/journal';
import { useShop } from '../context/ShopContext';

export const EditorialMosaic = () => {
  const { navigateTo } = useShop();

  return (
    <section className="earth-mosaic-section" aria-label="Visual Narrative">
      <div className="earth-container">
        <div className="earth-mosaic-section__header">
          <span className="earth-label">VISUAL NARRATIVE</span>
          <h2 className="earth-title-section" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
            Echoes of the Land
          </h2>
          <p>
            An unhurried visual chronicle of raw textures, natural light, and conscious atelier processes.
          </p>
        </div>

        <div className="earth-mosaic-grid">
          {MOSAIC_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`earth-mosaic-item earth-mosaic-item--${index + 1}`}
              onClick={() => navigateTo('journal')}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="earth-mosaic-item__overlay">
                <span className="earth-mosaic-item__tag">{item.tag}</span>
                <h4 className="earth-mosaic-item__title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
