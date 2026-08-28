import React, { useEffect, useRef } from 'react';
import PixelIcon from './PixelIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  const projects = [
    {
      id: '01',
      title: 'CODE SAGE',
      tag: 'AI-POWERED ASSISTANT',
      description: 'An intelligent coding assistant built with React and JavaScript to accelerate development workflows, code explanations, and interactive refactoring.',
      tech: ['React', 'JavaScript', 'AI/ML APIs', 'Web Engine'],
      previewSvg: (
        <svg viewBox="0 0 400 240" className="project_svg-art">
          <rect width="400" height="240" fill="#18181b" rx="8" />
          {/* Header bar */}
          <rect x="0" y="0" width="400" height="36" fill="#27272a" />
          <circle cx="20" cy="18" r="5" fill="#ef4444" />
          <circle cx="36" cy="18" r="5" fill="#f59e0b" />
          <circle cx="52" cy="18" r="5" fill="#10b981" />
          {/* Terminal / Code Visual */}
          <rect x="24" y="60" width="160" height="10" rx="3" fill="#ffe32e" />
          <rect x="24" y="80" width="280" height="8" rx="2" fill="#a1a1aa" />
          <rect x="24" y="96" width="220" height="8" rx="2" fill="#a1a1aa" />
          <rect x="24" y="112" width="310" height="8" rx="2" fill="#a1a1aa" />
          <rect x="24" y="140" width="120" height="24" rx="4" fill="#6366f1" />
          <rect x="156" y="140" width="100" height="24" rx="4" fill="#3f3f46" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'PERSONAL PORTFOLIO',
      tag: 'CREATIVE 3D EXPERIENCE',
      description: 'An editorial, interaction-focused digital portfolio with continuous 3D card physics, custom physics cursor, Lenis inertia scrolling, and brutalist typography.',
      tech: ['React', 'GSAP', 'Lenis', '3D CSS'],
      previewSvg: (
        <svg viewBox="0 0 400 240" className="project_svg-art">
          <rect width="400" height="240" fill="#f9f4eb" rx="8" />
          <rect x="40" y="30" width="320" height="30" fill="#000000" rx="2" />
          {/* 3 Floating Cards Representation */}
          <rect x="60" y="80" width="80" height="110" rx="6" fill="#e5daf6" stroke="#000" strokeWidth="1.5" />
          <rect x="160" y="75" width="80" height="110" rx="6" fill="#ffd2f3" stroke="#000" strokeWidth="1.5" />
          <rect x="260" y="85" width="80" height="110" rx="6" fill="#fcdca6" stroke="#000" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'JAVASCRIPT EXPERIMENTS',
      tag: 'BROWSER-BASED SYSTEMS',
      description: 'A curated laboratory of DOM manipulation projects, games like Rock Paper Scissors, tactile audio-visual experiments, and real-time frontend algorithms.',
      tech: ['JavaScript ES6+', 'DOM API', 'Canvas API', 'Game Loops'],
      previewSvg: (
        <svg viewBox="0 0 400 240" className="project_svg-art">
          <rect width="400" height="240" fill="#fef280" rx="8" />
          {/* Game / Play Elements */}
          <rect x="50" y="50" width="90" height="90" rx="8" fill="#000" />
          <text x="95" y="105" fill="#fff" fontSize="28" textAnchor="middle" fontFamily="monospace">✂️</text>
          <rect x="155" y="50" width="90" height="90" rx="8" fill="#000" />
          <text x="200" y="105" fill="#fff" fontSize="28" textAnchor="middle" fontFamily="monospace">📄</text>
          <rect x="260" y="50" width="90" height="90" rx="8" fill="#000" />
          <text x="305" y="105" fill="#fff" fontSize="28" textAnchor="middle" fontFamily="monospace">🪨</text>
          <rect x="50" y="160" width="300" height="36" rx="6" fill="#000" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.project_card');
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          },
          y: 60,
          opacity: 0.2,
          scale: 0.96,
          ease: 'power2.out',
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects_container u-container">
        {/* Section Header */}
        <div className="projects_header">
          <div className="projects_header-left">
            <span className="projects_badge">FEATURED WORK</span>
            <h2 className="projects_headline">SELECTED PROJECTS</h2>
          </div>
          <div className="projects_header-right" aria-hidden="true">
            <PixelIcon name="cross" />
            <span className="projects_header-meta">PORTFOLIO / 2026</span>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="projects_list">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="project_card"
              data-cursor="VIEW PROJECT"
            >
              <div className="project_card-inner">
                {/* Left: Project Metadata & Copy */}
                <div className="project_card-content">
                  <div className="project_card-top">
                    <span className="project_card-num">{proj.id}</span>
                    <span className="project_card-tag">{proj.tag}</span>
                  </div>

                  <h3 className="project_card-title">{proj.title}</h3>
                  <p className="project_card-desc">{proj.description}</p>

                  <div className="project_tech-pills">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="project_tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Visual Art / Interactive Demonstration */}
                <div className="project_card-visual">
                  <div className="project_visual-frame">
                    {proj.previewSvg}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
