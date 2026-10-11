import React, { useState } from 'react';
import { CheckCircle2, Cloud, Terminal, Cpu, Sparkles, BookOpen, Layers } from 'lucide-react';

const CERTIFICATIONS = [
  {
    id: 'aws-arch',
    title: 'Architecting Solutions on AWS',
    issuer: 'Amazon Web Services',
    organization: 'AWS',
    category: 'aws',
    credentialType: 'Cloud Architecture',
    badgeColor: '#DAC297',
    badgeTextColor: '#1E2328',
    description: 'Advanced design principles for building secure, resilient, high-performing, and cost-optimized architectures using the AWS Well-Architected Framework.',
    skills: ['AWS Well-Architected', 'High Availability', 'VPC & Networking', 'Microservices', 'IAM & Security'],
    icon: Cloud
  },
  {
    id: 'aws-migration',
    title: 'AWS Migration to the AWS Cloud',
    issuer: 'Amazon Web Services',
    organization: 'AWS',
    category: 'aws',
    credentialType: 'Cloud Migration',
    badgeColor: '#DAC297',
    badgeTextColor: '#1E2328',
    description: 'Enterprise workload migration strategies (6 Rs), Cloud Adoption Framework (CAF), discovery with AWS Migration Evaluator, and database migration with AWS DMS.',
    skills: ['Cloud Migration', 'AWS DMS', 'CAF Framework', 'Hybrid Cloud', 'Cutover Strategy'],
    icon: Layers
  },
  {
    id: 'aws-essentials',
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    organization: 'AWS',
    category: 'aws',
    credentialType: 'Cloud Fundamentals',
    badgeColor: '#DAC297',
    badgeTextColor: '#1E2328',
    description: 'Foundational AWS cloud infrastructure, compute (EC2, ECS, Lambda), managed storage (S3, EBS), relational and NoSQL databases (RDS, DynamoDB), and IAM security.',
    skills: ['AWS IAM', 'EC2 & Compute', 'S3 Storage', 'RDS & DynamoDB', 'Networking'],
    icon: Cloud
  },
  {
    id: 'duke-cloud',
    title: 'Cloud Computing Foundations',
    issuer: 'Duke University',
    organization: 'Duke University',
    category: 'duke',
    credentialType: 'Academic Specialization',
    badgeColor: '#0C5E8A',
    badgeTextColor: '#ffffff',
    description: 'Rigorous engineering foundations covering cloud computing architecture, virtualization, microservices, containerization, serverless computing, and distributed systems.',
    skills: ['Cloud Computing', 'Virtualization', 'Microservices', 'Distributed Systems', 'DevOps'],
    icon: BookOpen
  },
  {
    id: 'google-config-mgmt',
    title: 'Configuration Management and the Cloud',
    issuer: 'Google',
    organization: 'Google',
    category: 'google',
    credentialType: 'IT Automation & DevOps',
    badgeColor: '#5D9CBD',
    badgeTextColor: '#ffffff',
    description: 'Managing fleets of physical and virtual machines, infrastructure as code (IaC), configuration automation with Puppet, and deployment workflows in the cloud at scale.',
    skills: ['Configuration as Code', 'Puppet & Automation', 'Fleet Management', 'CI/CD Pipelines', 'Cloud Scaling'],
    icon: Cpu
  },
  {
    id: 'google-python-os',
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Google',
    organization: 'Google',
    category: 'google',
    credentialType: 'Systems Automation',
    badgeColor: '#5D9CBD',
    badgeTextColor: '#ffffff',
    description: 'Interpreting and manipulating system resources, regular expressions, bash shell integration, subprocess execution, file I/O operations, and automated test-driven scripting.',
    skills: ['OS Interaction', 'Bash & Shell', 'Subprocess & Regex', 'File Systems', 'Automated Testing'],
    icon: Terminal
  },
  {
    id: 'google-crash-python',
    title: 'Crash Course on Python',
    issuer: 'Google',
    organization: 'Google',
    category: 'google',
    credentialType: 'Programming & Logic',
    badgeColor: '#5D9CBD',
    badgeTextColor: '#ffffff',
    description: 'Comprehensive Python programming foundations, object-oriented design (OOP), data structures (dictionaries, lists, sets, tuples), and algorithmic automation routines.',
    skills: ['Python 3', 'Data Structures', 'OOP Architecture', 'Algorithm Design', 'Scripting'],
    icon: Terminal
  }
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (activeFilter === 'aws') return cert.category === 'aws';
    if (activeFilter === 'google') return cert.category === 'google';
    if (activeFilter === 'duke') return cert.category === 'duke';
    return true;
  });

  return (
    <section className="certifications-section" id="certifications" aria-label="Professional Certifications">
      <div className="main-container">
        {/* Section Header */}
        <div className="certifications-header">
          <div className="certifications-title-group">
            <h2 className="certifications-heading" id="certifications-title">
              CERTIFICATIONS
            </h2>
            <div className="doodle-sparkle" aria-hidden="true">
              <Sparkles size={32} strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <span className="washi-tape washi-tape--certs" id="washi-tape-certs">
              Verified Cloud &amp; Systems Credentials
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="experience-filter-bar" role="tablist" aria-label="Filter certifications by provider">
          <button
            type="button"
            className={`exp-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
            id="cert-filter-all"
          >
            <span>ALL ({CERTIFICATIONS.length})</span>
          </button>

          <button
            type="button"
            className={`exp-filter-pill ${activeFilter === 'aws' ? 'active' : ''}`}
            onClick={() => setActiveFilter('aws')}
            role="tab"
            aria-selected={activeFilter === 'aws'}
            id="cert-filter-aws"
          >
            <span>AWS (3)</span>
          </button>

          <button
            type="button"
            className={`exp-filter-pill ${activeFilter === 'google' ? 'active' : ''}`}
            onClick={() => setActiveFilter('google')}
            role="tab"
            aria-selected={activeFilter === 'google'}
            id="cert-filter-google"
          >
            <span>GOOGLE (3)</span>
          </button>

          <button
            type="button"
            className={`exp-filter-pill ${activeFilter === 'duke' ? 'active' : ''}`}
            onClick={() => setActiveFilter('duke')}
            role="tab"
            aria-selected={activeFilter === 'duke'}
            id="cert-filter-duke"
          >
            <span>DUKE UNIVERSITY (1)</span>
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid" id="certifications-container">
          {filteredCerts.map((cert) => {
            const IconComp = cert.icon;
            return (
              <div key={cert.id} className="certification-card" id={`cert-card-${cert.id}`}>
                {/* Header row: Issuer Badge & Verified Seal */}
                <div className="cert-card-top">
                  <span
                    className="cert-org-pill"
                    style={{
                      backgroundColor: cert.badgeColor,
                      color: cert.badgeTextColor
                    }}
                  >
                    <IconComp size={14} strokeWidth={2.5} />
                    <span>{cert.organization}</span>
                  </span>

                  <span className="cert-verified-badge" title="Verified Professional Credential">
                    <CheckCircle2 size={14} strokeWidth={2.5} />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title and Credential Type */}
                <div className="cert-card-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta-row">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-type-pill">{cert.credentialType}</span>
                  </div>
                  <p className="cert-desc">{cert.description}</p>
                </div>

                {/* Skills Footer */}
                <div className="cert-skills-wrap">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">
                      {skill}
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
