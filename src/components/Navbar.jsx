import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const {
    currentPage,
    navigateTo,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    currency,
    setCurrency
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidNavbar = isScrolled || currentPage === 'contact';

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`earth-navbar ${isSolidNavbar ? 'earth-navbar--scrolled' : 'earth-navbar--overlay'
          }`}
        role="banner"
      >
        <div className="earth-container">
          <div className="earth-navbar__inner">
            {/* Mobile Toggle Button */}
            <button
              className="earth-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Left Brand Logo */}
            <div
              className="earth-logo"
              onClick={() => handleNavClick('home')}
              role="button"
              tabIndex={0}
              aria-label="EARTH.NG Home"
            >
              <img
                src="/images/logo.png"
                alt="EARTH.NG"
                className="earth-logo__img"
              />
            </div>

            {/* Center Desktop Navigation */}
            <nav className="earth-nav-links" aria-label="Main Navigation">
              <button
                className={`earth-nav-link ${currentPage === 'home' ? 'earth-nav-link--active' : ''
                  }`}
                onClick={() => handleNavClick('home')}
              >
                HOME
              </button>
              <button
                className={`earth-nav-link ${currentPage === 'shop' ? 'earth-nav-link--active' : ''
                  }`}
                onClick={() => handleNavClick('shop')}
              >
                SHOP
              </button>
              <button
                className={`earth-nav-link ${currentPage === 'collections' ? 'earth-nav-link--active' : ''
                  }`}
                onClick={() => handleNavClick('collections')}
              >
                COLLECTIONS
              </button>
              <button
                className={`earth-nav-link ${currentPage === 'story' ? 'earth-nav-link--active' : ''
                  }`}
                onClick={() => handleNavClick('story')}
              >
                OUR STORY
              </button>
              <button
                className={`earth-nav-link ${currentPage === 'journal' ? 'earth-nav-link--active' : ''
                  }`}
                onClick={() => handleNavClick('journal')}
              >
                JOURNAL
              </button>
            </nav>

            {/* Right Utilities (Currency, Contact, Search, Cart) */}
            <div className="earth-nav-actions">
              <div className="earth-currency-selector-wrap earth-desktop-only">
                <select
                  className="earth-nav-currency-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  aria-label="Select Currency"
                >
                  <option value="NGN">NGN (₦)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>

              <button
                className="earth-nav-action earth-desktop-only"
                onClick={() => handleNavClick('contact')}
              >
                CONTACT
              </button>

              <button
                className="earth-nav-action"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Collection"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="earth-desktop-only">SEARCH</span>
              </button>

              <button
                className="earth-nav-action"
                onClick={() => setIsCartOpen(true)}
                aria-label={`Shopping Bag with ${cartCount} items`}
              >
                <span>BAG</span>
                <span className="earth-cart-count">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`earth-mobile-drawer ${isMobileMenuOpen ? 'earth-mobile-drawer--open' : ''
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="earth-mobile-drawer__header">
          <div
            className="earth-logo"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            aria-label="EARTH.NG Home"
          >
            <img
              src="/images/logo.png"
              alt="EARTH.NG"
              className="earth-logo__img"
            />
          </div>
          <button
            className="earth-mobile-drawer__close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="earth-mobile-drawer__nav">
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('home')}
          >
            <span>HOME</span>
            <small>→</small>
          </div>
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('shop')}
          >
            <span>SHOP</span>
            <small>→</small>
          </div>
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('collections')}
          >
            <span>COLLECTIONS</span>
            <small>→</small>
          </div>
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('story')}
          >
            <span>OUR STORY</span>
            <small>→</small>
          </div>
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('journal')}
          >
            <span>JOURNAL</span>
            <small>→</small>
          </div>
          <div
            className="earth-mobile-nav-item"
            onClick={() => handleNavClick('contact')}
          >
            <span>CONTACT</span>
            <small>→</small>
          </div>
        </nav>

        <div className="earth-mobile-drawer__footer">
          <div style={{ marginBottom: '16px' }}>
            <span className="earth-label" style={{ display: 'block', marginBottom: '8px', fontSize: '0.65rem' }}>
              CURRENCY
            </span>
            <select
              className="earth-nav-currency-select"
              style={{ width: '100%', borderColor: 'var(--earth-border-medium)', color: 'var(--earth-charcoal)' }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              aria-label="Mobile Currency Selector"
            >
              <option value="NGN">NGN (₦)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
          <p className="earth-mobile-drawer__tagline">
            Consciously Designed. Ethically Crafted. Zero Waste.
          </p>
          <div className="earth-footer__legal-links">
            <span style={{ fontSize: '0.75rem', color: 'var(--earth-taupe)' }}>
              Lagos &bull; Worldwide Shipping
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
