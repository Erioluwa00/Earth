import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

export const Contact = () => {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Private Fitting Appointment',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your inquiry has been received. Our concierge will be in touch within 24 hours.');
  };

  return (
    <main className="earth-contact-page" id="contact-main-content">
      {/* Header */}
      <header className="earth-page-hero">
        <div className="earth-page-hero__bg">
          <img src="/images/hero-images2.png" alt="EARTH.NG Client Services & Atelier" />
        </div>
        <div className="earth-page-hero__overlay"></div>
        <div className="earth-container">
          <div className="earth-page-hero__content">
            <span className="earth-label">CLIENT SERVICES &amp; ATELIER</span>
            <h1 className="earth-page-hero__title">
              Connect with EARTH.NG
            </h1>
            <p className="earth-page-hero__lead">
              Our concierge team is available to assist with private fitting appointments, bespoke commissions,
              and global client care from our Lagos studio.
            </p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="earth-contact-section">
        <div className="earth-container">
          <div className="earth-contact-grid">
            {/* Contact Details */}
            <div className="earth-contact-info">
              {/* Studio Card with Visual */}
              <div className="earth-contact-card earth-contact-card--atelier">
                <div className="earth-contact-card__visual">
                  <img src="/images/rack-shirts-wide.jpg" alt="EARTH.NG Victoria Island Studio Rack" />
                  <div className="earth-contact-card__badge">
                    <span className="earth-status-dot"></span>
                    <span>APPOINTMENTS OPEN</span>
                  </div>
                </div>
                <div className="earth-contact-card__body">
                  <span className="earth-label" style={{ color: 'var(--earth-olive)' }}>LAGOS FLAGSHIP ATELIER</span>
                  <h3 className="earth-contact-card__title">
                    Victoria Island Studio
                  </h3>
                  <p className="earth-contact-card__address">
                    14 Ahmadu Bello Way, Victoria Island<br />
                    Lagos, Nigeria
                  </p>
                  <div className="earth-contact-card__hours">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Tuesday – Saturday &bull; 10:00am – 6:00pm WAT</span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="earth-contact-link"
                  >
                    <span>View Location on Map</span>
                    <small>→</small>
                  </a>
                </div>
              </div>

              {/* Digital Concierge Directory Card */}
              <div className="earth-contact-card">
                <div className="earth-contact-card__header">
                  <span className="earth-label">DIRECT INQUIRIES</span>
                  <h3 className="earth-contact-card__title" style={{ marginTop: '4px' }}>
                    Digital Concierge
                  </h3>
                </div>
                <div className="earth-concierge-list">
                  <div className="earth-concierge-item">
                    <div className="earth-concierge-item__info">
                      <span className="earth-concierge-item__role">Client Care &amp; Orders</span>
                      <a href="mailto:concierge@earth.ng" className="earth-concierge-item__email">
                        concierge@earth.ng
                      </a>
                    </div>
                    <span className="earth-concierge-item__tag">General</span>
                  </div>

                  <div className="earth-concierge-item">
                    <div className="earth-concierge-item__info">
                      <span className="earth-concierge-item__role">Press &amp; Editorial</span>
                      <a href="mailto:press@earth.ng" className="earth-concierge-item__email">
                        press@earth.ng
                      </a>
                    </div>
                    <span className="earth-concierge-item__tag">Media</span>
                  </div>

                  <div className="earth-concierge-item">
                    <div className="earth-concierge-item__info">
                      <span className="earth-concierge-item__role">Wholesale &amp; Retail</span>
                      <a href="mailto:atelier@earth.ng" className="earth-concierge-item__email">
                        atelier@earth.ng
                      </a>
                    </div>
                    <span className="earth-concierge-item__tag">Stockists</span>
                  </div>
                </div>
              </div>

              {/* Slow Care Promise Card */}
              <div className="earth-contact-card earth-contact-card--promise">
                <div className="earth-promise-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <span className="earth-label" style={{ color: 'var(--earth-olive)' }}>SLOW FASHION GUARANTEE</span>
                  <h4 style={{ fontFamily: 'var(--earth-font-serif)', fontSize: '1.25rem', marginTop: '4px', marginBottom: '6px' }}>
                    Lifetime Garment Repair
                  </h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--earth-text-secondary)' }}>
                    We provide complimentary lifetime seam stitching and mending for every original EARTH.NG piece.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'var(--earth-ivory-soft)',
                    border: '1px solid var(--earth-olive)',
                    padding: '48px 36px',
                    textAlign: 'center'
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--earth-font-serif)', fontSize: '2rem', marginBottom: '12px' }}>
                    Message Received
                  </h3>
                  <p>
                    Thank you, {formData.name}. Our atelier concierge will respond to {formData.email} promptly.
                  </p>
                  <button
                    className="earth-btn earth-btn--outline"
                    style={{ marginTop: '24px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form className="earth-contact-form" onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--earth-font-serif)', fontSize: '1.85rem' }}>
                    Send an Inquiry
                  </h3>

                  <div className="earth-form-group">
                    <label className="earth-form-label">Your Full Name</label>
                    <input
                      type="text"
                      className="earth-form-input"
                      required
                      placeholder="e.g. Amara Okafor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="earth-form-group">
                    <label className="earth-form-label">Email Address</label>
                    <input
                      type="email"
                      className="earth-form-input"
                      required
                      placeholder="e.g. amara@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="earth-form-group">
                    <label className="earth-form-label">Subject</label>
                    <select
                      className="earth-form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Private Fitting Appointment">Private Fitting Appointment (Lagos)</option>
                      <option value="Sizing & Fit Advice">Sizing &amp; Fit Advice</option>
                      <option value="Order & Shipping Inquiry">Order &amp; Shipping Inquiry</option>
                      <option value="Press & Media">Press &amp; Media Collaboration</option>
                      <option value="Garment Repair / Care">Garment Lifetime Repair</option>
                    </select>
                  </div>

                  <div className="earth-form-group">
                    <label className="earth-form-label">Your Message</label>
                    <textarea
                      className="earth-form-textarea"
                      rows={4}
                      required
                      placeholder="Share your inquiry or preferred appointment dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="earth-btn earth-btn--primary"
                    style={{ width: '100%' }}
                  >
                    SUBMIT INQUIRY <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
