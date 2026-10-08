import React from 'react';
import { Terminal, Layers, Layout, Gauge, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICES = [
  {
    id: 'fullstack',
    title: 'FULL-STACK APPS',
    description: 'Resilient web apps built with modern React, TypeScript, Node.js, and clean architecture that scales effortlessly.',
    icon: Terminal,
    colorClass: 'pillar-icon--yellow'
  },
  {
    id: 'systems',
    title: 'SYSTEM ARCHITECTURE',
    description: 'Scalable backend microservices, robust REST & GraphQL APIs, fault-tolerant pipelines, and optimized databases.',
    icon: Layers,
    colorClass: 'pillar-icon--blue'
  },
  {
    id: 'uiux',
    title: 'UI/UX & FRONTEND',
    description: 'Pixel-perfect, accessible design systems, fluid micro-interactions, and engaging user experiences that delight users.',
    icon: Layout,
    colorClass: 'pillar-icon--coral'
  },
  {
    id: 'perf',
    title: 'PERF & DEVOPS',
    description: 'Sub-second Core Web Vitals, automated CI/CD pipelines, Docker containerization, and edge cloud deployments.',
    icon: Gauge,
    colorClass: 'pillar-icon--green'
  }
];

export default function WhatIDo() {
  const triggerStampConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 30,
      spread: 60,
      colors: ['#D74738', '#0C5E8A', '#DAC297', '#798C5E']
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
              title="Click me!"
              id="clean-code-stamp-badge"
              aria-label="Clean code equals great products interactive stamp"
            >
              <span className="stamp-badge__text">CLEAN CODE</span>
              <Heart size={20} fill="#ffffff" strokeWidth={1} className="stamp-badge__icon" />
              <span className="stamp-badge__text">GREAT PRODUCTS</span>
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
