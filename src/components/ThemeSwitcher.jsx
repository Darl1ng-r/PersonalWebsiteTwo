import React from 'react';
import { Palette } from 'lucide-react';

export default function ThemeSwitcher({ currentTheme, setTheme }) {
  return (
    <div className="theme-switcher-pill" role="region" aria-label="Color Palette Switcher">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0 0.5rem', color: 'var(--charcoal)' }}>
        <Palette size={16} strokeWidth={2.5} />
        <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>PALETTE:</span>
      </div>

      <button
        type="button"
        className={`theme-btn-option ${currentTheme === 'new-colors' ? 'active' : ''}`}
        onClick={() => setTheme('new-colors')}
        aria-pressed={currentTheme === 'new-colors'}
        id="theme-btn-new-colors"
      >
        <span className="theme-swatch" style={{ background: '#F39BB3' }} title="Tulip Rose" />
        <span className="theme-swatch" style={{ background: '#A7F3F3' }} title="Tanager Turquoise" />
        <span className="theme-swatch" style={{ background: '#D4D973' }} title="Green Tea" />
        <span className="theme-swatch" style={{ background: '#B26565' }} title="Bubinga" />
        <span>New Colors</span>
      </button>

      <button
        type="button"
        className={`theme-btn-option ${currentTheme === 'earthy' ? 'active' : ''}`}
        onClick={() => setTheme('earthy')}
        aria-pressed={currentTheme === 'earthy'}
        id="theme-btn-earthy"
      >
        <span className="theme-swatch" style={{ background: '#0C5E8A' }} title="Inkwell" />
        <span className="theme-swatch" style={{ background: '#5D9CBD' }} title="Fresh Water" />
        <span className="theme-swatch" style={{ background: '#DAC297' }} title="Harvest" />
        <span>Classic Earthy</span>
      </button>
    </div>
  );
}
