import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    openQuickView,
    formatPrice,
    navigateTo
  } = useShop();

  if (!isSearchOpen) return null;

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.color.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectProduct = (product) => {
    setIsSearchOpen(false);
    openQuickView(product);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

  return (
    <div className="earth-search-overlay" role="dialog" aria-modal="true">
      <div className="earth-search-header">
        <span className="earth-label">SEARCH CATALOGUE</span>
        <button
          onClick={() => setIsSearchOpen(false)}
          style={{ fontSize: '1.5rem', color: 'var(--earth-charcoal)' }}
          aria-label="Close search"
        >
          ✕
        </button>
      </div>

      <div className="earth-search-input-wrap">
        <input
          type="text"
          className="earth-search-input"
          placeholder="Type linen, tunic, trouser, brass..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{ fontSize: '1.2rem', color: 'var(--earth-text-muted)', padding: '8px' }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggested Quick Tags */}
      {!searchQuery && (
        <div style={{ maxWidth: '900px', margin: '0 auto 40px', width: '100%' }}>
          <span className="earth-label" style={{ marginBottom: '12px' }}>
            POPULAR SEARCHES
          </span>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
            {['Linen', 'Wide Leg', 'Raffia', 'Charcoal', 'Boubou', 'Terra', 'Suits'].map(
              (tag) => (
                <button
                  key={tag}
                  className="earth-filter-btn"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="earth-search-results">
        {searchQuery && filteredProducts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--earth-text-muted)', fontStyle: 'italic', padding: '40px 0' }}>
            No pieces found matching "{searchQuery}". Try searching for linen, shirts, or sets.
          </p>
        )}

        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => handleSelectProduct(p)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '16px',
              borderBottom: '1px solid var(--earth-border)',
              cursor: 'pointer'
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: '60px', height: '80px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <span className="earth-label" style={{ fontSize: '0.65rem' }}>{p.category}</span>
              <h4 style={{ fontFamily: 'var(--earth-font-serif)', fontSize: '1.2rem' }}>{p.name}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--earth-olive)' }}>{p.material}</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
              {formatPrice(p.price)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
