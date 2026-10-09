import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Copy, Check, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "rama.tubeh.04@gmail.com";
  const phoneNumber = "(+962) 8228 6589";
  const phoneTel = "+96282286589";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);

    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565']
    });
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);

    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565']
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
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565', '#BF9177']
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
              Have an engineering opportunity or project in mind?<br />
              Let's connect and build reliable, elegant software.
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
              CONTACT RAMA
            </span>
          </div>

          <div className="contact-info-list">
            {/* Phone Number with Call & Copy */}
            <div
              className="contact-item-row"
              style={{ cursor: 'pointer' }}
              title="Click to copy phone number"
            >
              <div className="contact-icon-pill">
                <Phone size={18} />
              </div>
              <a
                href={`tel:${phoneTel}`}
                style={{ letterSpacing: '0.02em', flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
              >
                {phoneNumber}
              </a>
              <button
                className="sticker-badge"
                onClick={handleCopyPhone}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  backgroundColor: copiedPhone ? 'var(--bubinga)' : '#ffffff',
                  color: copiedPhone ? '#ffffff' : 'var(--charcoal)'
                }}
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

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
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  backgroundColor: copiedEmail ? 'var(--bubinga)' : '#ffffff',
                  color: copiedEmail ? '#ffffff' : 'var(--charcoal)'
                }}
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/Darl1ng-r"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-row"
            >
              <div className="contact-icon-pill">
                <GithubIcon size={18} />
              </div>
              <span>github.com/Darl1ng-r</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rama-mazen-02406b382/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-row"
            >
              <div className="contact-icon-pill">
                <LinkedinIcon size={18} />
              </div>
              <span>linkedin.com/in/rama-mazen</span>
            </a>

            {/* Location */}
            <div className="contact-item-row">
              <div className="contact-icon-pill">
                <MapPin size={18} />
              </div>
              <span>Amman, Jordan &bull; Worldwide</span>
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
            <Heart size={22} fill="var(--bubinga)" stroke="var(--bubinga)" />
          </button>
        </div>
      </div>
    </section>
  );
}
