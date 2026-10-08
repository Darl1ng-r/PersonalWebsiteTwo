import React from 'react';
import { Sparkles, Sun } from 'lucide-react';

export default function Footer() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-strip" role="contentinfo">
      <div className="main-container">
        <div className="footer-content">
          {/* Left Status Bar */}
          <div className="footer-left-status">
            <span>PASSIONATE ABOUT ENGINEERING. FOCUSED ON RESULTS.</span>
            <span className="footer-divider-sparkle" aria-hidden="true">
              <Sparkles size={16} strokeWidth={2.5} />
            </span>
            <span>AVAILABLE FOR FULL-TIME &amp; CONTRACT</span>
          </div>

          {/* Right Action Button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-pill"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
            id="footer-work-together-btn"
          >
            <Sun size={18} strokeWidth={2.5} style={{ animation: 'spin 12s linear infinite' }} />
            <span>LET'S WORK TOGETHER!</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
