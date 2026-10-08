import React, { useState } from 'react';
import { Mail, Globe, MapPin, Copy, Check, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "mariana.engineer@domain.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);

    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#0C5E8A', '#798C5E', '#DAC297']
    });
  };

  const handleThankYouClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 45,
      spread: 75,
      colors: ['#D74738', '#0C5E8A', '#5D9CBD', '#798C5E', '#DAC297']
    });
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Section">
      <div className="contact-split-grid">
        {/* Left Side: Call to Action Callout */}
        <div className="contact-left">
          <div className="contact-headline-group">
            <h2 className="contact-main-text" id="contact-heading">
              LET'S BUILD
              <span className="contact-marker-text">
                SOMETHING GREAT!
              </span>
            </h2>

            {/* Squiggly SVG Underline */}
            <svg width="220" height="24" viewBox="0 0 220 24" fill="none" style={{ marginTop: '0.25rem' }}>
              <path d="M4 14C35 4 75 22 110 12C145 2 185 20 216 10" stroke="var(--charcoal)" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ maxWidth: '480px' }}>
            <p className="contact-sub-invitation">
              Have a project or engineering role in mind?<br />
              Let's build reliable, elegant software together.
            </p>
          </div>

          {/* Hand drawn arrow pointing to the contact box */}
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="var(--charcoal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 20C30 18 50 25 70 20" />
              <path d="M55 10L72 20L58 32" />
            </svg>
            <span style={{ fontFamily: 'var(--font-marker)', fontSize: '1.4rem', color: 'var(--charcoal)', transform: 'rotate(-4deg)' }}>
              reach out anytime!
            </span>
          </div>
        </div>

        {/* Right Side: Contact Details Card */}
        <div className="contact-right-panel">
          <div>
            <span className="sticker-badge" style={{ backgroundColor: '#ffffff', color: 'var(--charcoal)' }}>
              CONTACT ME
            </span>
          </div>

          <div className="contact-info-list">
            {/* Email with Quick Copy */}
            <div
              className="contact-item-row"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
              title="Click to copy email"
            >
              <div className="contact-icon-pill">
                <Mail size={18} />
              </div>
              <span style={{ letterSpacing: '0.02em', flexGrow: 1 }}>{emailAddress}</span>
              <button
                className="sticker-badge"
                style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', backgroundColor: copied ? 'var(--nourish)' : '#ffffff', color: copied ? '#ffffff' : 'var(--charcoal)' }}
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Website */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-row"
            >
              <div className="contact-icon-pill">
                <Globe size={18} />
              </div>
              <span>www.marianacodes.dev</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-row"
            >
              <div className="contact-icon-pill">
                <GithubIcon size={18} />
              </div>
              <span>github.com/mariana-dev</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-row"
            >
              <div className="contact-icon-pill">
                <LinkedinIcon size={18} />
              </div>
              <span>linkedin.com/in/mariana-engineer</span>
            </a>

            {/* Location */}
            <div className="contact-item-row">
              <div className="contact-icon-pill">
                <MapPin size={18} />
              </div>
              <span>Remote / Worldwide</span>
            </div>
          </div>

          {/* Floating "THANK YOU!" Sticker Badge */}
          <button
            className="thank-you-sticker"
            onClick={handleThankYouClick}
            title="Click to share the love!"
            id="thank-you-sticker-badge"
            aria-label="Thank you interactive sticker"
          >
            <span className="thank-you-text">THANK YOU!</span>
            <Heart size={22} fill="var(--marker-red)" stroke="var(--marker-red)" />
          </button>
        </div>
      </div>
    </section>
  );
}
