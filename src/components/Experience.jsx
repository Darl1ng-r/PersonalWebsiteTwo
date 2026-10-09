import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

const EXPERIENCES = [
  {
    id: 'exp-mena',
    category: 'work',
    role: 'SOFTWARE DEVELOPER & CONTRIBUTOR',
    company: 'MENA.org',
    location: 'Amman, Jordan (Volunteer)',
    period: '2024 — PRESENT',
    current: true,
    badgeText: 'Volunteer & Tech Contributor',
    description: 'Helped develop the organization from the ground up by building the official company website, programming operational dashboards, and designing software architecture plans.',
    highlights: [
      'Engineered and launched the official company website from scratch with modern responsive UI and clean architecture.',
      'Programmed interactive dashboards for data tracking, telemetry, and organizational workflows.',
      'Contributed to designing software plans, feature roadmaps, and technical specifications.',
      'Collaborated closely across teams to empower digital initiatives for the community.'
    ],
    skills: ['Web Development', 'Dashboard Programming', 'Software Planning', 'React', 'JavaScript', 'UI/UX', 'System Design']
  },
  {
    id: 'exp-gdg',
    category: 'work',
    role: 'GDG ON CAMPUS MEMBER & CONTRIBUTOR',
    company: 'Google Developer Groups on Campus',
    location: 'Zarqa University, Jordan',
    period: '2021 — 2026',
    current: false,
    badgeText: 'Developer Community',
    description: 'Active contributor in Google Developer Groups (GDG) on Campus at Zarqa University, taking part in tech workshops, student developer activities, and collaborative builds.',
    highlights: [
      'Engaged with the GDG on Campus community throughout university studies to learn and share modern developer practices.',
      'Participated in coding workshops, Google developer sessions, and tech community gatherings.',
      'Collaborated with fellow student developers on hands-on software experiments and team projects.'
    ],
    skills: ['GDG on Campus', 'Google Technologies', 'Community Leadership', 'Web Technologies', 'Collaboration']
  },
  {
    id: 'exp-zarqa',
    category: 'education',
    role: "BACHELOR'S DEGREE IN SOFTWARE ENGINEERING",
    company: 'Zarqa University',
    location: 'Zarqa, Jordan',
    period: '2021 — 2026',
    current: false,
    badgeText: 'Graduated • GPA 3.0 / 4.0',
    description: 'Completed Bachelor’s degree in Software Engineering at Zarqa University, graduating with a 3.0 / 4.0 GPA with strong foundations in system design, algorithms, and development.',
    highlights: [
      'Graduated with a cumulative GPA of 3.0 / 4.0 with emphasis on full-lifecycle software development.',
      'Mastered Data Structures, Algorithms, Database Systems, Object-Oriented Analysis, and Web Technologies.',
      'Active leadership in campus technical groups while delivering hands-on coursework software projects.'
    ],
    skills: ['Software Engineering', 'Algorithms', 'Data Structures', 'Database Systems', 'System Design', 'Zarqa University']
  }
];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState('exp-mena');

  const filteredExperiences = EXPERIENCES.filter((item) => {
    if (activeFilter === 'work') return item.category === 'work';
    if (activeFilter === 'education') return item.category === 'education';
    return true;
  });

  const triggerOpportunityConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 35,
      spread: 60,
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565', '#BF9177']
    });
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="experience-section" id="experience" aria-label="Work Experience & Journey">
      <div className="main-container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="experience-title-group">
            <h2 className="experience-heading" id="experience-title">
              EXPERIENCE &amp; JOURNEY
            </h2>
            <div className="doodle-sparkle" aria-hidden="true">
              <Sparkles size={32} strokeWidth={2.5} />
            </div>
          </div>

          <div className="experience-header-right">
            <span className="washi-tape washi-tape--experience" id="experience-washi-tape">
              Where ideas turned into code
            </span>

            {/* Interactive Availability Sticker */}
            <button
              className="sticker-badge sticker-badge--opportunity"
              onClick={triggerOpportunityConfetti}
              title="Click to celebrate growth!"
              aria-label="Available for high-impact roles badge"
            >
              <span className="opportunity-pulse-dot" aria-hidden="true" />
              <span>OPEN TO OPPORTUNITIES</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="experience-filter-bar" role="tablist" aria-label="Experience Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`exp-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            id="exp-filter-all"
          >
            <span>All Milestones ({EXPERIENCES.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'work'}
            className={`exp-filter-pill ${activeFilter === 'work' ? 'active' : ''}`}
            onClick={() => setActiveFilter('work')}
            id="exp-filter-work"
          >
            <Briefcase size={16} />
            <span>Work &amp; Volunteer</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'education'}
            className={`exp-filter-pill ${activeFilter === 'education' ? 'active' : ''}`}
            onClick={() => setActiveFilter('education')}
            id="exp-filter-education"
          >
            <GraduationCap size={16} />
            <span>Education &amp; Degree</span>
          </button>
        </div>

        {/* Timeline Cards Grid */}
        <div className="experience-timeline-container" id="experience-timeline">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const IconComponent = exp.category === 'education' ? GraduationCap : Briefcase;

            return (
              <div
                key={exp.id}
                className={`experience-card ${exp.current ? 'experience-card--current' : ''}`}
                id={`exp-card-${exp.id}`}
              >
                {/* Card Top Row: Period badge + Status badge */}
                <div className="exp-card-header">
                  <div className="exp-period-pill">
                    <Calendar size={14} strokeWidth={2.5} />
                    <span>{exp.period}</span>
                    {exp.current && <span className="exp-live-dot" title="Active Role" />}
                  </div>

                  <span className={`sticker-badge ${exp.current ? 'sticker-badge--tulip' : exp.category === 'education' ? 'sticker-badge--greentea' : 'sticker-badge--turquoise'}`}>
                    {exp.badgeText}
                  </span>
                </div>

                {/* Role Title and Company */}
                <div className="exp-role-group">
                  <div className="exp-role-title-row">
                    <div className="exp-role-icon-box" aria-hidden="true">
                      <IconComponent size={22} strokeWidth={2.25} />
                    </div>
                    <div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company-name">{exp.company}</span>
                        <span className="exp-dot-separator">&bull;</span>
                        <span className="exp-location-tag">
                          <MapPin size={13} style={{ display: 'inline', verticalAlign: '-1px' }} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="exp-description">{exp.description}</p>

                {/* Expandable Key Highlights Toggle */}
                <div className="exp-highlights-wrapper">
                  <button
                    type="button"
                    className="exp-toggle-btn"
                    onClick={() => toggleExpand(exp.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights'}</span>
                    <ChevronRight
                      size={16}
                      strokeWidth={2.5}
                      style={{
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>

                  {isExpanded && (
                    <ul className="exp-highlights-list">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="exp-highlight-item">
                          <CheckCircle2 size={16} className="exp-check-icon" strokeWidth={2.5} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Skills Chips */}
                <div className="exp-skills-row" aria-label="Technologies and domains">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="exp-skill-tag">
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
