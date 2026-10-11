import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--oatmilk, #F6EAD4)',
            padding: '2rem',
            fontFamily: 'var(--font-body, system-ui, sans-serif)',
            color: 'var(--charcoal, #1E2328)'
          }}
        >
          <div
            style={{
              maxWidth: '520px',
              width: '100%',
              backgroundColor: '#ffffff',
              border: '2px solid #1E2328',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '6px 6px 0px #1E2328',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--tulip-rose-light, #FCE8EE)',
                border: '2px solid #1E2328',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: '#B26565'
              }}
            >
              <AlertTriangle size={28} strokeWidth={2.5} />
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display, system-ui, sans-serif)',
                fontSize: '1.8rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                margin: '0 0 0.75rem'
              }}
            >
              Something went unexpected
            </h1>

            <p style={{ color: '#4D555E', lineHeight: 1.6, fontSize: '0.95rem', margin: '0 0 1.75rem' }}>
              We encountered a client-side glitch while rendering this section. A quick refresh will restore the experience.
            </p>

            <button
              onClick={this.handleReload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'var(--tanager-turquoise, #A7F3F3)',
                color: '#1E2328',
                border: '2px solid #1E2328',
                borderRadius: '9999px',
                padding: '0.65rem 1.5rem',
                fontFamily: 'var(--font-body, system-ui, sans-serif)',
                fontWeight: 800,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                boxShadow: '3px 3px 0px #1E2328',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-2px, -2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
            >
              <RefreshCw size={16} strokeWidth={2.5} />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
