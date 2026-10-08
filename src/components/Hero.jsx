import React from 'react';
import { Globe, Zap, Sparkles, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ name = "MARIANA" }) {
  const triggerSuperpowerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 40,
      spread: 70,
      startVelocity: 35,
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565', '#BF9177']
    });
  };

  return (
    <section className="hero-section" id="hero" aria-label="Hero Introduction">
      <div className="main-container">
        <div className="hero-grid">
          {/* Left Column: Monolithic Typography & Mission Statement */}
          <div className="hero-left">
            <span className="hero-greeting" id="hero-greeting">
              HELLO!
            </span>

            <div className="hero-title-group">
              <div className="hero-title-im">
                <span>I'M</span>
                <span className="hero-sparkle-blue" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
                  </svg>
                </span>
              </div>
              <h1 className="hero-name" id="hero-main-name">
                {name}
              </h1>
            </div>

            <div className="hero-tagline-wrapper">
              <div className="highlighter-strip" id="hero-highlighter-tagline">
                I build digital experiences that connect, scale &amp; convert.
              </div>
            </div>

            <div className="hero-meta-row">
              <div className="hero-location" id="hero-location-badge">
                <Globe size={18} strokeWidth={2.5} />
                <span>BASED IN ANY CITY, ST &bull; WORKING WORLDWIDE</span>
              </div>

              <a href="#contact" className="btn-pill btn-pill--bubinga" id="hero-cta-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composition with Cutout Portrait & Stickers */}
          <div className="hero-visual-wrapper">
            {/* Morphing Organic Blob */}
            <div className="hero-blob-bg" aria-hidden="true" />

            {/* Decorative Halftone Dots */}
            <div className="hero-dot-grid halftone-dots" aria-hidden="true" />

            {/* Plus Icon Accent */}
            <div className="hero-plus-icon" aria-hidden="true">
              <Plus size={20} strokeWidth={3} />
            </div>

            {/* Portrait Frame */}
            <div className="hero-portrait-card">
              <img
                src="/assets/hero_portrait.jpg"
                alt={`${name} - Software Engineer`}
                className="hero-portrait-img"
                id="hero-portrait"
              />
            </div>

            {/* Floating Superpower Badge */}
            <button
              className="hero-floating-sticker"
              onClick={triggerSuperpowerConfetti}
              title="Click for a burst of energy!"
              id="hero-superpower-badge"
              aria-label="Code is my superpower interactive sticker"
            >
              <Zap size={20} strokeWidth={2.5} fill="#ffffff" />
              <span>CODE IS MY SUPERPOWER</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
