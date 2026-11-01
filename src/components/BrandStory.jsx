import React from 'react';
import { useShop } from '../context/ShopContext';

export const BrandStory = () => {
  const { navigateTo } = useShop();

  return (
    <section className="earth-brand-story" aria-label="Brand Story">
      {/* Background Image */}
      <div className="earth-brand-story__bg">
        <img
          src="/images/brand-story.jpg"
          alt="Cinematic African landscape with model in flowing natural earth robe at sunset"
          loading="lazy"
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="earth-brand-story__overlay"></div>

      {/* Editorial Story Content */}
      <div className="earth-brand-story__content">
        <span className="earth-label earth-label--light">
          THE MANIFESTO
        </span>

        <h2 className="earth-brand-story__heading">
          More than fashion.<br />
          It's a way of living.
        </h2>

        <p className="earth-brand-story__text">
          EARTH.NG was born from a desire to create thoughtful clothing that respects
          both people and the planet. We believe true luxury lies in restraint,
          unhurried craftsmanship, and leaving the earth better than we found it.
        </p>

        <button
          className="earth-btn earth-btn--white"
          onClick={() => navigateTo('story')}
          id="brand-story-cta"
        >
          READ OUR STORY <span>→</span>
        </button>
      </div>
    </section>
  );
};
