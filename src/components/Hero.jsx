import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useShop } from '../context/ShopContext';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero1.jpg',
    tag: 'SUSTAINABLE FASHION',
    titleLine1: 'Made to sustain',
    titleLine2: 'the planet.',
    subtitle: '100% Organic European Flax & Zero-Waste Atelier Craftsmanship in Lagos',
    primaryCta: 'SHOP COLLECTIONS',
    primaryAction: 'shop',
    secondaryCta: 'OUR MANIFESTO',
    secondaryAction: 'story',
  },
  {
    id: 2,
    image: '/images/hero2.jpg',
    tag: 'NEW SEASON CAPSULE',
    titleLine1: 'Rooted in raw',
    titleLine2: 'elegance.',
    subtitle: 'Earthy Mineral Pigments & Timeless Tailoring Handcrafted with Purpose',
    primaryCta: 'EXPLORE CAPSULE',
    primaryAction: 'collections',
    secondaryCta: 'DISCOVER SHIRTS',
    secondaryAction: 'shop',
  },
  {
    id: 3,
    image: '/images/hero3.jpg',
    tag: 'LAGOS ATELIER EDITION',
    titleLine1: 'Unhurried quiet',
    titleLine2: 'luxury.',
    subtitle: 'Fluid Architectural Silhouettes Crafted For Mindful Living',
    primaryCta: 'OUR STORY',
    primaryAction: 'story',
    secondaryCta: 'SHOP ALL PIECES',
    secondaryAction: 'shop',
  }
];

export const Hero = () => {
  const { navigateTo } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay timer (faster rotation)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('earth-promise-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section
      className="earth-hero"
      id="earth-hero-section"
      aria-label="Editorial Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Cross-fade & Subtle Ken Burns */}
      <div className="earth-hero__slider-bg">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`earth-hero__slide ${
              index === currentSlide ? 'earth-hero__slide--active' : ''
            }`}
          >
            <img
              src={slide.image}
              alt={`EARTH.NG Editorial ${slide.titleLine1} ${slide.titleLine2}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Subtle Cinematic Overlay */}
      <div className="earth-hero__overlay"></div>

      {/* Main Content with Entrance Animation */}
      <div className="earth-hero__content">
        <div className="earth-hero__inner" key={currentSlide}>
          <span className="earth-label earth-label--light earth-hero__badge">
            {active.tag}
          </span>

          <h1 className="earth-hero__heading">
            <span>{active.titleLine1}</span>
            <span>{active.titleLine2}</span>
          </h1>

          <p className="earth-hero__subtitle">
            {active.subtitle}
          </p>

          <div className="earth-hero__actions">
            <button
              className="earth-btn earth-btn--white"
              onClick={() => navigateTo(active.primaryAction)}
              id={`hero-primary-cta-${active.id}`}
            >
              {active.primaryCta}
            </button>
            <button
              className="earth-btn earth-btn--outline-light"
              onClick={() => navigateTo(active.secondaryAction)}
              id={`hero-secondary-cta-${active.id}`}
            >
              {active.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Slider Controls */}
      <div className="earth-hero__controls">
        {/* Slide Counter & Indicators */}
        <div className="earth-hero__pagination">
          <span className="earth-hero__counter-active">
            0{currentSlide + 1}
          </span>
          <div className="earth-hero__bars">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                className={`earth-hero__bar ${
                  index === currentSlide ? 'earth-hero__bar--active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className="earth-hero__bar-progress"
                  style={{
                    animationDuration: '3.5s',
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                />
              </button>
            ))}
          </div>
          <span className="earth-hero__counter-total">
            0{HERO_SLIDES.length}
          </span>
        </div>

        {/* Minimalist Arrow Nav */}
        <div className="earth-hero__arrows">
          <button
            className="earth-hero__arrow-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
            id="hero-prev-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="earth-hero__arrow-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
            id="hero-next-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div
        className="earth-hero__scroll"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
      >
        <span>SCROLL DOWN</span>
        <div className="earth-hero__scroll-line"></div>
      </div>
    </section>
  );
};
