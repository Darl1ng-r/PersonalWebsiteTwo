# Rama Mazen — Personal Portfolio & Engineering Showcase

A personal portfolio website and engineering showcase for **Rama Mazen**, Software Engineer & Systems Architect. Built with modern React and Vite, featuring an editorial hand-drawn neobrutalist aesthetic, interactive project showcases, cloud & systems certifications, and production-grade performance.

---

## 🌟 Highlights & Features

- **Distinctive Editorial Aesthetic**: Bespoke warm color palette (`#F6EAD4` feather canvas, `#0C5E8A` cerulean accents, `#E76A3C` persimmon highlights), halftone dots, washi tape badges, and organic borders.
- **Interactive Project Showcase**: 4-column desktop layout featuring:
  - **Anti-Money Laundering System** (FastAPI, Neo4j graph topology, Kafka, Isolation Forest anomaly scoring)
  - **ThroughLines** (Cognitive trajectory and belief tracking laboratory)
  - **Argus** (Directed argument mapping engine with Cytoscape.js)
  - **Jordan IT Jobs Portal** (Tech market intelligence scraper and analytics dashboard)
- **Verified Credentials & Certifications**: Collapsible interactive showcase of 7 AWS and systems engineering certifications.
- **Micro-Interactions**: Interactive superpower confetti effect, accessible modal views with full keyboard navigation (Esc, space, enter), and smooth scroll anchors.
- **Performance & Asset Optimization**: 100% next-gen WebP imagery with high-density displays, lightweight SVG icons, and zero heavy UI frameworks.
- **Production Hardened**: Full Content Security Policy (CSP), HSTS, Open Graph / Twitter Card metadata, semantic HTML5, and schema.org JSON-LD structured data.

---

## 🛠️ Tech Stack

- **Core Framework**: React 19 (`react`, `react-dom`)
- **Bundler & Tooling**: Vite 8
- **Linter**: Oxlint
- **Icons**: Lucide React
- **Animations / Effects**: Canvas Confetti
- **Deployment Platform**: Netlify (configured via `netlify.toml` and `_headers`)

---

## 📂 Project Structure

```
├── public/
│   ├── assets/               # WebP project artwork and hero portrait
│   ├── _headers              # Netlify security and caching headers
│   ├── _redirects            # SPA client-side routing fallback
│   ├── favicon.svg           # Branded spark favicon
│   ├── robots.txt            # Search engine crawl directives
│   └── sitemap.xml           # XML sitemap
├── src/
│   ├── components/
│   │   ├── Certifications.jsx # Interactive certifications & credentials
│   │   ├── Contact.jsx        # Contact info & social links
│   │   ├── ErrorBoundary.jsx  # React UI error boundary
│   │   ├── Experience.jsx     # Career timeline & roles
│   │   ├── Footer.jsx         # Footer and back-to-top navigation
│   │   ├── Hero.jsx           # Introduction, portrait & superpower CTA
│   │   ├── Icons.jsx          # Custom SVG icon set
│   │   ├── Navbar.jsx         # Responsive navigation bar
│   │   ├── SelectedWork.jsx   # Projects grid & detail modal
│   │   └── WhatIDo.jsx        # Core specializations & skills
│   ├── App.jsx                # Root application layout
│   ├── index.css              # Design tokens, variables & typography
│   └── main.jsx               # Application entry point
├── index.html                 # HTML shell with meta tags & JSON-LD
├── netlify.toml               # Netlify build & redirect configuration
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed
- npm or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Darl1ng-r/PersonalWebsiteTwo.git
cd PersonalWebsiteTwo

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
The optimized static bundle will be emitted to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

This project includes a native GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployments:

1. **Enable GitHub Pages**:
   - In your repository on GitHub, go to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Build and deployment > Source**, select: **GitHub Actions**.
2. **Push to main**:
   - Every push to `main` will automatically build and deploy the portfolio to:
   - 👉 **`https://darl1ng-r.github.io/PersonalWebsiteTwo/`**

---

## 👤 Author

**Rama Mazen**
- GitHub: [@Darl1ng-r](https://github.com/Darl1ng-r)
- Live Portfolio: [darl1ng-r.github.io/PersonalWebsiteTwo](https://darl1ng-r.github.io/PersonalWebsiteTwo/)
