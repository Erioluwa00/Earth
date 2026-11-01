import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';

export const Journal = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <main className="earth-journal-page" id="journal-main-content">
      {/* Page Header */}
      <header className="earth-page-hero">
        <div className="earth-page-hero__bg">
          <img src="/images/hero-images1.png" alt="Essays on Slow Living & Craft" />
        </div>
        <div className="earth-page-hero__overlay"></div>
        <div className="earth-container">
          <div className="earth-page-hero__content">
            <span className="earth-label">THE JOURNAL</span>
            <h1 className="earth-page-hero__title">
              Essays on Slow Living &amp; Craft
            </h1>
            <p className="earth-page-hero__lead">
              A curated publication exploring material botany, circular fashion philosophy,
              artisan profiles, and intentional design.
            </p>
          </div>
        </div>
      </header>

      {/* Article Grid */}
      <section className="earth-journal-feed">
        <div className="earth-container">
          <div className="earth-journal-grid">
            {JOURNAL_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="earth-journal-card"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="earth-journal-card__image">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />
                </div>

                <div className="earth-journal-card__meta">
                  <span>{article.category}</span>
                  <span>&bull;</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="earth-journal-card__title">
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--earth-text-secondary)' }}>
                  {article.excerpt}
                </p>

                <span className="earth-btn-link">
                  READ ESSAY <span>→</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="earth-modal-backdrop"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="earth-quickview-modal"
            style={{ maxWidth: '800px', padding: '48px 36px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="earth-modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              ✕
            </button>

            <span className="earth-label" style={{ color: 'var(--earth-olive)' }}>
              {selectedArticle.category} &bull; {selectedArticle.date}
            </span>

            <h2
              style={{
                fontFamily: 'var(--earth-font-serif)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                margin: '16px 0 24px',
                lineHeight: 1.15
              }}
            >
              {selectedArticle.title}
            </h2>

            <div style={{ height: '320px', overflow: 'hidden', marginBottom: '28px' }}>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.9',
                color: 'var(--earth-text-primary)',
                whiteSpace: 'pre-line'
              }}
            >
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
