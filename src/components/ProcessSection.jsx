import React, { useEffect, useRef } from 'react';
import PixelIcon from './PixelIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToTarget } from '../hooks/useLenis';
import '../styles/process.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const titleMyRef = useRef(null);
  const titleProcessRef = useRef(null);
  const mediaBadgeRef = useRef(null);
  const subtextRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleMy = titleMyRef.current;
    const titleProcess = titleProcessRef.current;
    const mediaBadge = mediaBadgeRef.current;
    const subtext = subtextRef.current;
    const steps = stepsRef.current;

    if (!section || !titleMy || !titleProcess || !mediaBadge) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1.2,
        },
      });

      // Typography entrance
      tl.from(titleMy, {
        y: 80,
        opacity: 0,
        ease: 'power2.out',
      }, 0);

      tl.from(titleProcess, {
        y: 110,
        opacity: 0,
        ease: 'power2.out',
      }, 0.1);

      // Pixel Art Mountain & Yellow CTA badge popping into place
      tl.fromTo(
        mediaBadge,
        {
          scale: 0.4,
          opacity: 0,
          rotate: -8,
          x: 40,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          x: 0,
          ease: 'back.out(1.8)',
        },
        0.2
      );

      // Subtext and 4 Steps
      if (subtext) {
        tl.from(subtext, {
          y: 40,
          opacity: 0,
          ease: 'power1.out',
        }, 0.25);
      }

      if (steps) {
        tl.from(steps, {
          y: 30,
          opacity: 0,
          ease: 'power1.out',
        }, 0.35);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="process-section">
      <div className="process_container u-container">
        {/* Left Side Badge */}
        <div className="process_side-badge process_side-badge--left" aria-hidden="true">
          <PixelIcon name="cross" />
          <span>PROCESS</span>
        </div>

        {/* Right Side Badge */}
        <div className="process_side-badge process_side-badge--right" aria-hidden="true">
          <span>PROCESS</span>
          <PixelIcon name="cross" />
        </div>

        {/* Main Center Typography & Mountain Pop-in */}
        <div className="process_inner">
          <div className="process_title-wrap">
            <div className="process_title-row-1">
              <span ref={titleMyRef} className="process_title-text">
                MY
              </span>

              {/* Mountain Landscape Pixel Art + Yellow CTA Button */}
              <div ref={mediaBadgeRef} className="process_media-badge">
                <div className="process_mountain-thumb">
                  <svg viewBox="0 0 160 90" className="process_mountain-svg">
                    <defs>
                      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38b6ff" />
                        <stop offset="100%" stopColor="#c1e8ff" />
                      </linearGradient>
                    </defs>
                    {/* Sky */}
                    <rect width="160" height="90" fill="url(#skyGrad)" />
                    {/* Clouds */}
                    <rect x="20" y="25" width="40" height="12" rx="4" fill="#ffffff" opacity="0.8" />
                    <rect x="110" y="35" width="35" height="10" rx="3" fill="#ffffff" opacity="0.8" />
                    {/* Pixel Mountains */}
                    <path d="M 50 90 L 75 30 L 95 30 L 120 90 Z" fill="#6d5843" />
                    <path d="M 75 30 L 85 18 L 95 30 Z" fill="#4a7c59" />
                    <path d="M 82 18 L 88 10 L 92 18 Z" fill="#2d5a27" />
                    {/* Greenery / Peak */}
                    <rect x="80" y="10" width="8" height="6" fill="#1b4332" />
                    <rect x="70" y="45" width="10" height="8" fill="#52b788" />
                    <rect x="100" y="55" width="12" height="10" fill="#2d6a4f" />
                  </svg>
                </div>

                <a
                  href="#projects"
                  className="process_cta-button"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#projects');
                  }}
                  data-cursor="EXPLORE"
                >
                  <PixelIcon name="arrow-enter" style={{ width: '12px', height: '12px' }} />
                  <span>EXPLORE PROCESS</span>
                </a>
              </div>
            </div>

            <div className="process_title-row-2">
              <span ref={titleProcessRef} className="process_title-text">
                PROCESS
              </span>
            </div>
          </div>

          {/* Supporting Text */}
          <p ref={subtextRef} className="process_description">
            Four steps to building better digital experiences.
          </p>

          {/* 4 Steps Row */}
          <div ref={stepsRef} className="process_steps-row">
            <div className="process_step-item">
              <span className="process_step-num">01</span>
              <span className="process_step-name">DEFINE</span>
            </div>
            <div className="process_step-item">
              <span className="process_step-num">02</span>
              <span className="process_step-name">DESIGN</span>
            </div>
            <div className="process_step-item">
              <span className="process_step-num">03</span>
              <span className="process_step-name">BUILD</span>
            </div>
            <div className="process_step-item">
              <span className="process_step-num">04</span>
              <span className="process_step-name">RUN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
