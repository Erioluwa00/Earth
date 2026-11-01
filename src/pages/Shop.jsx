import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const Shop = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    openQuickView,
    formatPrice,
    openComingSoon
  } = useShop();

  const [sortBy, setSortBy] = useState('featured');

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0; // featured default
  });

  return (
    <main className="earth-shop-page" id="shop-main-content">
      {/* Header */}
      <header className="earth-page-hero">
        <div className="earth-page-hero__bg">
          <img src="/images/hero-images2.png" alt="EARTH.NG Conscious Wardrobe" />
        </div>
        <div className="earth-page-hero__overlay"></div>
        <div className="earth-container">
          <div className="earth-page-hero__content">
            <span className="earth-label">THE CONSCIOUS WARDROBE</span>
            <h1 className="earth-page-hero__title">
              {selectedCategory === 'all'
                ? 'All Garments & Accessories'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'Collection'}
            </h1>
            <p className="earth-page-hero__lead">
              Handcrafted in limited batches from 100% organic linen, nettle fibers, and wild palm straw.
              Made to sustain the planet.
            </p>
          </div>
        </div>
      </header>

      <div className="earth-container">
        {/* Filter and Sort Toolbar */}
        <div className="earth-shop-toolbar">
          <div className="earth-filter-tabs">
            <button
              className={`earth-filter-btn ${
                selectedCategory === 'all' ? 'earth-filter-btn--active' : ''
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              ALL ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`earth-filter-btn ${
                  selectedCategory === cat.id ? 'earth-filter-btn--active' : ''
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="earth-shop-toolbar-actions">
            <div className="earth-shop-sort">
              <label htmlFor="shop-sort-select">SORT BY:</label>
              <select
                id="shop-sort-select"
                className="earth-shop-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Releases</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <section className="earth-products-grid" aria-label="Product list">
          {sortedProducts.map((product) => (
            <article
              key={product.id}
              className="earth-product-card"
              onClick={() => openQuickView(product)}
            >
              <div className="earth-product-card__image-wrap">
                {product.tag && (
                  <span className="earth-badge earth-product-card__badge">
                    {product.tag}
                  </span>
                )}
                <button
                  type="button"
                  className="earth-product-card__wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openComingSoon(
                      'Client Wishlist & Saved Capsules',
                      `Adding "${product.name}" to your conscious wardrobe wishlist will be available with client accounts in our upcoming update.`,
                      'VIEW ALL PIECES',
                      'shop',
                      'SAVED CAPSULES'
                    );
                  }}
                  title="Save to wishlist"
                  aria-label={`Save ${product.name} to wishlist`}
                >
                  ♡
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="earth-product-card__img earth-product-card__img--main"
                  loading="lazy"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  className="earth-product-card__img earth-product-card__img--hover"
                  loading="lazy"
                />
                <div className="earth-product-card__quick-view">
                  QUICK VIEW &bull; SELECT SIZE
                </div>
              </div>

              <div className="earth-product-card__meta">
                <span className="earth-product-card__material">
                  {product.material}
                </span>
                <h3 className="earth-product-card__title">
                  {product.name}
                </h3>
                <div className="earth-product-card__price-row">
                  <span className="earth-product-card__price">
                    {formatPrice(product.price)}
                  </span>
                  <span className="earth-product-card__color-tag">
                    {product.color}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};
