import React from 'react';
import { Asterisk, Sparkles, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const handleSmileyClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      origin: { x, y },
      particleCount: 25,
      spread: 60,
      colors: ['#0C5E8A', '#5D9CBD', '#798C5E', '#DAC297', '#D74738']
    });
  };

  return (
    <header className="top-nav" role="banner">
      <div className="main-container">
        <div className="top-nav__content">
          {/* Left: Role Tag with Asterisk icon */}
          <div className="top-nav__left">
            <div className="role-tag" id="nav-role-badge">
              <Asterisk size={22} strokeWidth={2.75} className="doodle-sparkle" />
              <span>SOFTWARE ENGINEER &amp; ARCHITECT</span>
            </div>
          </div>

          {/* Center: Creative Portfolio Pill */}
          <div className="top-nav__center">
            <span className="sticker-badge sticker-badge--rotate-left" id="nav-portfolio-pill">
              ENGINEERING PORTFOLIO
            </span>
          </div>

          {/* Right: Purpose Smiley Stamp */}
          <div className="top-nav__right">
            <button
              className="purpose-badge"
              onClick={handleSmileyClick}
              title="Click for a spark of joy!"
              id="nav-purpose-badge"
              aria-label="Code with purpose stamp"
            >
              <span className="top">CODE</span>
              <Smile size={16} strokeWidth={2.5} style={{ margin: '2px 0' }} />
              <span className="bottom">with purpose</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
