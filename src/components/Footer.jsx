import React from 'react';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const { navigateTo, currency, setCurrency, openComingSoon } = useShop();

  const handleLinkClick = (page, category = 'all') => {
    navigateTo(page, category);
  };

  const handleInfoModal = (title) => {
    const descriptions = {
      'FAQs': 'Our comprehensive FAQ repository covering fabric sourcing, Lagos atelier visits, tailored garment sizing, and international delivery will launch shortly.',
      'Shipping & Returns': 'Our automated carbon-neutral shipping tracking and return management portal is currently being integrated for seamless order updates.',
      'Size Guide': 'Our interactive atelier measurement tables and drape estimator are being finalized to assist you in choosing the perfect fit.',
      'Care Guide': 'Archival wash and preservation guides for unbleached organic flax and mineral clay dyes will be published with our next release.',
      'Privacy Policy': 'Our transparent sustainability and customer data privacy charter is currently being updated for 2026 digital compliance.',
      'Terms & Conditions': 'Our official atelier terms of service, bespoke order terms, and client guarantees will be published shortly.'
    };
    openComingSoon(
      title,
      descriptions[title] || `The ${title} section is currently being prepared by our atelier team and will be released in an upcoming update.`,
      'TALK TO CONCIERGE',
      'contact',
      'COMING SOON'
    );
  };

  return (
    <footer className="earth-footer" role="contentinfo">
      <div className="earth-container">
        <div className="earth-footer__top">
          {/* Brand Col */}
          <div className="earth-footer__brand">
            <div
              className="earth-footer__logo"
              onClick={() => handleLinkClick('home')}
              role="button"
              tabIndex={0}
              aria-label="EARTH.NG Home"
            >
              <img
                src="/images/logo.png"
                alt="EARTH.NG"
                className="earth-footer__logo-img"
              />
            </div>
            <p className="earth-footer__tagline">
              Consciously designed.<br />
              Ethically crafted.<br />
              Made to sustain the planet.
            </p>
            <div style={{ marginTop: '12px' }}>
              <select
                className="earth-footer__currency-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Currency Selector"
              >
                <option value="NGN">NGN (₦)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
          </div>

          {/* Column 1: SHOP */}
          <div className="earth-footer__col">
            <h4 className="earth-footer__col-title">SHOP</h4>
            <ul className="earth-footer__links">
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('shop', 'all')}>
                  All Products
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('shop', 'shirts')}>
                  Shirts
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('shop', 'bottoms')}>
                  Bottoms
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('shop', 'sets')}>
                  Sets
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('shop', 'accessories')}>
                  Accessories
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div className="earth-footer__col">
            <h4 className="earth-footer__col-title">COMPANY</h4>
            <ul className="earth-footer__links">
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('story')}>
                  Our Story
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('story')}>
                  Sustainability
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('journal')}>
                  Journal
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleLinkClick('contact')}>
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div className="earth-footer__col">
            <h4 className="earth-footer__col-title">HELP</h4>
            <ul className="earth-footer__links">
              <li>
                <span className="earth-footer__link" onClick={() => handleInfoModal('FAQs')}>
                  FAQs
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleInfoModal('Shipping & Returns')}>
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleInfoModal('Size Guide')}>
                  Size Guide
                </span>
              </li>
              <li>
                <span className="earth-footer__link" onClick={() => handleInfoModal('Care Guide')}>
                  Care Guide
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div className="earth-footer__col">
            <h4 className="earth-footer__col-title">FOLLOW</h4>
            <ul className="earth-footer__links">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="earth-footer__link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="earth-footer__link"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@earth.ng"
                  className="earth-footer__link"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="earth-footer__bottom">
          <div>
            © 2026 EARTH.NG. All rights reserved.
          </div>
          <div className="earth-footer__legal-links">
            <span style={{ cursor: 'pointer' }} onClick={() => handleInfoModal('Privacy Policy')}>
              Privacy Policy
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleInfoModal('Terms & Conditions')}>
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
