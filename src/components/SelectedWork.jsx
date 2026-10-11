import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECTS = [
  {
    id: 'aml-system',
    name: 'ANTI-MONEY LAUNDERING SYSTEM',
    category: 'Enterprise AML & Compliance Platform',
    tags: ['Python', 'FastAPI', 'Neo4j', 'PostgreSQL', 'Redis', 'Kafka'],
    image: '/assets/project_aml_sentinel.webp',
    description: 'An enterprise-grade Anti-Money Laundering (AML) transaction monitoring and regulatory compliance platform. Combines real-time deterministic rule evaluation (<50ms latency), behavioral machine learning anomaly scoring (Isolation Forest), Neo4j graph topology intelligence for detecting circular fund loops and money mule networks, and automated FinCEN SAR regulatory filing.',
    liveUrl: 'https://github.com/Darl1ng-r/aml_system',
    codeUrl: 'https://github.com/Darl1ng-r/aml_system'
  },
  {
    id: 'throughlines',
    name: 'THROUGHLINES',
    category: 'Epistemic Reasoning & Belief Tracking',
    tags: ['React 18', 'Vite', 'Supabase', 'PostgreSQL', 'Recharts'],
    image: '/assets/project_throughlines.webp',
    description: 'An epistemic reasoning laboratory designed to capture cognitive trajectories and belief evolution over time. Features subjective conviction tracking with 0–100% certainty curves, structured epistemic shift attribution (counter-arguments, empirical data, value shifts), offline-first IndexedDB persistence, and Supabase PostgreSQL synchronization.',
    liveUrl: 'https://github.com/Darl1ng-r/ThroughLines',
    codeUrl: 'https://github.com/Darl1ng-r/ThroughLines'
  },
  {
    id: 'argus',
    name: 'ARGUS',
    category: 'Directed Argument Mapping Platform',
    tags: ['React 18', 'Cytoscape.js', 'TypeScript', 'Express', 'Prisma'],
    image: '/assets/project_argus.webp',
    description: 'A visual debate mapping engine transforming chaotic linear comment threads into structured directed graphs. Maps atomic claim nodes and evaluates logical relationship edges (Supports, Refutes, Clarifies, Requires Evidence), computing graph topology to reveal unrebutted dead ends, central hub claims, and true points of convergence.',
    liveUrl: 'https://github.com/Darl1ng-r/Argus',
    codeUrl: 'https://github.com/Darl1ng-r/Argus'
  },
  {
    id: 'jordan-it-jobs',
    name: 'JORDAN IT JOBS PORTAL',
    category: 'Tech Market Intelligence & Scraper',
    tags: ['Python', 'Streamlit', 'BeautifulSoup4', 'Plotly', 'Pandas'],
    image: '/assets/project_jordan_jobs.webp',
    description: 'An automated market intelligence portal and job scraper monitoring the tech employment landscape across Jordan. Tracks software engineering vacancies, role domain salary distributions, skill demand trends (Frontend, Backend, DevOps, AI), and remote/hybrid opportunities with interactive analytical dashboards and scheduled scrapers.',
    liveUrl: 'https://github.com/Darl1ng-r/jordan-it-jobs-portal',
    codeUrl: 'https://github.com/Darl1ng-r/jordan-it-jobs-portal'
  }
];

export default function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const openProjectModal = (project) => {
    setActiveModalProject(project);
  };

  const closeProjectModal = () => {
    setActiveModalProject(null);
  };

  return (
    <section className="selected-work-section" id="work" aria-label="Selected Work">
      <div className="main-container">
        {/* Header with Title and Washi Tape Sticker */}
        <div className="selected-work-header">
          <div className="selected-work-title-wrap">
            <h2 className="selected-work-title" id="selected-work-heading">
              SELECTED WORK
            </h2>
            <div className="doodle-sparkle" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
              </svg>
            </div>
          </div>

          <div>
            <span className="washi-tape" id="washi-tape-badge">
              Featured Open-Source Projects
            </span>
          </div>
        </div>

        {/* Projects Grid: 4 Projects Next to Each Other */}
        <div className="projects-grid" id="projects-container">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card"
              id={`project-card-${project.id}`}
              onClick={() => openProjectModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(project);
                }
              }}
            >
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="188"
                />
              </div>

              <div className="project-info-row">
                <div className="project-text-group">
                  <h3 className="project-name" title={project.name}>{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-actions">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-round-icon"
                    aria-label={`Open GitHub repository for ${project.name}`}
                    onClick={(e) => e.stopPropagation()}
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <button
                    className="btn-round-arrow"
                    aria-label={`View details for ${project.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    title="View Project Details"
                  >
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {activeModalProject && (
        <div
          className="modal-backdrop"
          onClick={closeProjectModal}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(30, 35, 40, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 1000
          }}
        >
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--feather)',
              border: 'var(--border-solid)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '680px',
              width: '100%',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              animation: 'modalSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ position: 'relative', borderBottom: 'var(--border-solid)' }}>
              <img
                src={activeModalProject.image}
                alt={activeModalProject.name}
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                decoding="async"
              />
              <button
                onClick={closeProjectModal}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--feather)',
                  border: 'var(--border-solid)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase' }}>
                  {activeModalProject.name}
                </h3>
                <span className="sticker-badge sticker-badge--yellow">
                  {activeModalProject.category}
                </span>
              </div>

              <p style={{ marginTop: '1rem', color: 'var(--charcoal-subtle)', lineHeight: 1.6, fontSize: '1rem' }}>
                {activeModalProject.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                {activeModalProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--oatmilk)',
                      border: 'var(--border-solid)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      fontWeight: 800
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a
                  href={activeModalProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill--inkwell"
                  style={{ textDecoration: 'none' }}
                >
                  <GithubIcon size={18} /> View on GitHub
                </a>
                {activeModalProject.liveUrl && activeModalProject.liveUrl !== activeModalProject.codeUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill--feather"
                    style={{ textDecoration: 'none' }}
                  >
                    <ExternalLink size={18} strokeWidth={2.5} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
