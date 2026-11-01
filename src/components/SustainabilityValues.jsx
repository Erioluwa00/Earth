import React from 'react';

export const SustainabilityValues = () => {
  const values = [
    {
      id: 'materials',
      title: 'SUSTAINABLE MATERIALS',
      desc: 'Natural, organic and recycled fabrics sourced directly from certified regeneratively farmed crops.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 4.24-4.24"></path>
          <path d="M2 18h8"></path>
          <path d="M20 18a8 8 0 1 1-16 0c0-4.418 3.582-8 8-8s8 3.582 8 8Z"></path>
        </svg>
      )
    },
    {
      id: 'production',
      title: 'ETHICAL PRODUCTION',
      desc: 'Fair wages. Safe conditions. Human-first processes that honor African tailoring traditions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'zerowaste',
      title: 'ZERO WASTE',
      desc: 'We reduce waste at every step of our process through tessellated geometric pattern drafting.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6"></path>
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
        </svg>
      )
    },
    {
      id: 'packaging',
      title: 'CONSCIOUS PACKAGING',
      desc: 'Minimal, recyclable and environmentally friendly unbleached paper and biodegradable seals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <path d="m3.3 7 8.7 5 8.7-5"></path>
          <path d="M12 22V12"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="earth-values" aria-label="Our Sustainability Pillars">
      <div className="earth-container">
        <div className="earth-values__header">
          <span className="earth-label">OUR VALUES</span>
          <h2 className="earth-title-section" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            Rooted in respect for the earth
          </h2>
          <p style={{ maxWidth: '520px', margin: '0 auto' }}>
            We rethink every stitch, fold, and delivery box to ensure our footprint remains light on the land.
          </p>
        </div>

        <div className="earth-values__grid">
          {values.map((val) => (
            <div key={val.id} className="earth-value-card">
              <div className="earth-value-card__icon">
                {val.icon}
              </div>
              <h3 className="earth-value-card__title">
                {val.title}
              </h3>
              <p className="earth-value-card__desc">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
