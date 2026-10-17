import React from 'react';
import { Terminal, Layers, Layout, Gauge, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICES = [
  {
    id: 'fullstack',
    title: 'FULL-STACK APPS',
    description: 'Resilient web apps built with modern React, TypeScript, Node.js, and clean architecture that scales effortlessly.',
    icon: Terminal,
    colorClass: 'pillar-icon--1'
  },
  {
    id: 'systems',
    title: 'SYSTEM ARCHITECTURE',
    description: 'Scalable backend microservices, robust REST & GraphQL APIs, fault-tolerant pipelines, and optimized databases.',
    icon: Layers,
    colorClass: 'pillar-icon--2'
  },
  {
    id: 'uiux',
    title: 'UI/UX & FRONTEND',
    description: 'Pixel-perfect, accessible design systems, fluid micro-interactions, and engaging user experiences that delight users.',
    icon: Layout,
    colorClass: 'pillar-icon--3'
  },
  {
    id: 'perf',
    title: 'PERF & DEVOPS',
    description: 'Sub-second Core Web Vitals, automated CI/CD pipelines, Docker containerization, and edge cloud deployments.',
    icon: Gauge,
    colorClass: 'pillar-icon--4'
  }
];

export default function WhatIDo() {
  const triggerStampConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 35,
      spread: 65,
      colors: ['#F39BB3', '#A7F3F3', '#D4D973', '#B26565', '#8AA68F']
    });
  };

  return (
    <section className="what-i-do-section" id="services" aria-label="What I Do">
      <div className="main-container">
        <div className="what-i-do-layout">
          {/* Left Title & Floating Stamp */}
          <div className="what-i-do-sidebar">
            <h2 className="section-eyebrow-title" id="what-i-do-title">
              WHAT<br />I DO
            </h2>

            {/* Circular Stamp Badge */}
            <button
              className="stamp-badge"
              onClick={triggerStampConfetti}
              title="Click for a burst of energy!"
              id="performance-stamp-badge"
              aria-label="Designed to scale and high performance interactive stamp"
            >
              <svg viewBox="0 0 140 140" className="stamp-badge__svg" aria-hidden="true">
                <defs>
                  {/* Top arc from 9 o'clock to 3 o'clock */}
                  <path id="stamp-top-arc" d="M 23,70 A 47,47 0 0,1 117,70" fill="none" />
                  {/* Bottom arc from 3 o'clock to 9 o'clock */}
                  <path id="stamp-bottom-arc" d="M 117,70 A 47,47 0 0,1 23,70" fill="none" />
                </defs>
                <text className="stamp-badge__svg-text">
                  <textPath href="#stamp-top-arc" startOffset="50%" textAnchor="middle">
                    DESIGNED TO SCALE
                  </textPath>
                </text>
                <text className="stamp-badge__svg-text">
                  <textPath href="#stamp-bottom-arc" startOffset="50%" textAnchor="middle">
                    HIGH PERFORMANCE
                  </textPath>
                </text>
                <text x="21" y="70" textAnchor="middle" className="stamp-badge__star" aria-hidden="true">✦</text>
                <text x="119" y="70" textAnchor="middle" className="stamp-badge__star" aria-hidden="true">✦</text>
              </svg>
              <div className="stamp-badge__center-icon">
                <Cpu size={24} strokeWidth={2.2} />
              </div>
            </button>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="pillars-grid" id="pillars-container">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="pillar-card" id={`pillar-${service.id}`}>
                  <div className={`pillar-icon-circle ${service.colorClass}`} aria-hidden="true">
                    <IconComponent size={28} strokeWidth={2.25} />
                  </div>
                  <h3 className="pillar-title">{service.title}</h3>
                  <p className="pillar-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
