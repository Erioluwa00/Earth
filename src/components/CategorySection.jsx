import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';

export const CategorySection = () => {
  const { navigateTo } = useShop();

  const handleCategoryClick = (categoryId) => {
    navigateTo('shop', categoryId);
  };

  return (
    <section className="earth-categories" aria-label="Shop by Category">
      <div className="earth-container">
        <div className="earth-categories__header">
          <div>
            <span className="earth-label">EXPLORE WARDROBE</span>
            <h2 className="earth-title-section">
              Timeless pieces.<br />
              Thoughtfully made.
            </h2>
          </div>
          <button
            className="earth-btn-link"
            onClick={() => navigateTo('shop', 'all')}
          >
            VIEW ALL CATEGORIES <span>→</span>
          </button>
        </div>

        <div className="earth-categories__grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="earth-category-card"
              onClick={() => handleCategoryClick(cat.id)}
              role="button"
              tabIndex={0}
              aria-label={`Browse ${cat.name} Collection`}
            >
              <div className="earth-category-card__image-container">
                <img
                  src={cat.image}
                  alt={`EARTH.NG ${cat.name} Editorial Campaign`}
                  className="earth-category-card__image"
                  loading="lazy"
                />
                <div className="earth-category-card__overlay"></div>
              </div>

              <div className="earth-category-card__content">
                <span className="earth-label earth-label--light" style={{ fontSize: '0.65rem' }}>
                  {cat.count}
                </span>
                <h3 className="earth-category-card__title">
                  {cat.name}
                </h3>
                <span className="earth-category-card__link">
                  SHOP NOW <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
