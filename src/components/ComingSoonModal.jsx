import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';

export const ComingSoonModal = () => {
  const { comingSoonModal, closeComingSoon, navigateTo } = useShop();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeComingSoon();
      }
    };
    if (comingSoonModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [comingSoonModal, closeComingSoon]);

  if (!comingSoonModal) return null;

  const handleAction = () => {
    const targetPage = comingSoonModal.actionPage || 'contact';
    closeComingSoon();
    navigateTo(targetPage);
  };

  return (
    <div
      className="earth-comingsoon-backdrop"
      onClick={closeComingSoon}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <div
        className="earth-comingsoon-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="earth-modal-close"
          onClick={closeComingSoon}
          aria-label="Close Announcement"
        >
          ✕
        </button>

        {/* Status Badge */}
        <div className="earth-comingsoon-badge">
          <span>🌿</span>
          <span>{comingSoonModal.badge || 'ATELIER IN PROGRESS'}</span>
        </div>

        {/* Artistic Craft Icon */}
        <div className="earth-comingsoon-icon-wrap" aria-hidden="true">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>

        {/* Title & Message */}
        <h2 id="coming-soon-title" className="earth-comingsoon-title">
          {comingSoonModal.title}
        </h2>

        <p className="earth-comingsoon-desc">
          {comingSoonModal.message}
        </p>

        {/* Actions */}
        <div className="earth-comingsoon-actions">
          <button
            className="earth-btn earth-btn--primary earth-comingsoon-primary-btn"
            onClick={handleAction}
          >
            {comingSoonModal.actionText || 'TALK TO ATELIER CONCIERGE'} <span>→</span>
          </button>
          <button
            className="earth-comingsoon-secondary-btn"
            onClick={closeComingSoon}
          >
            CONTINUE BROWSING
          </button>
        </div>
      </div>
    </div>
  );
};
