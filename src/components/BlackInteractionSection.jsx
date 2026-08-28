import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/black-interaction.css';

gsap.registerPlugin(ScrollTrigger);

export default function BlackInteractionSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ticksRef = useRef(null);
  const circlesRef = useRef(null);

  // Generate 70 technical ticks
  const ticksCount = 68;
  const ticks = Array.from({ length: ticksCount });

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const ticksContainer = ticksRef.current;
    const circles = circlesRef.current;

    if (!section || !text || !ticksContainer || !circles) return;

    const ctx = gsap.context(() => {
      // Scroll-driven entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      tl.from(text, {
        y: 60,
        opacity: 0,
        ease: 'power2.out',
      }, 0);

      tl.from(ticksContainer, {
        opacity: 0,
        scaleX: 0.9,
        transformOrigin: 'right center',
        ease: 'power2.out',
      }, 0.1);

      tl.from(circles.children, {
        y: 40,
        opacity: 0,
        scale: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.7)',
      }, 0.2);
    }, section);

    return () => ctx.revert();
  }, []);

  const handleCircleClick = (e) => {
    const el = e.currentTarget;
    gsap.fromTo(
      el,
      { scale: 0.85 },
      { scale: 1.15, duration: 0.4, ease: 'elastic.out(1.4, 0.4)', onComplete: () => {
        gsap.to(el, { scale: 1, duration: 0.2 });
      }}
    );
  };

  return (
    <section id="interaction" ref={sectionRef} className="black-section">
      <div className="black-section_container u-container">
        {/* Top Row: Left Headline + Right Technical Ticks */}
        <div className="black-section_top">
          <div ref={textRef} className="black-section_copy">
            <h2 className="black-section_headline">
              EIN KLICK MIT WIRKUNG
            </h2>
            <p className="black-section_subtext">
              Great websites don't just look good — they feel good too. Small movements, thoughtful transitions, subtle reactions: That turns every click into a memorable experience.
            </p>
          </div>

          <div ref={ticksRef} className="black-section_ticks-col">
            <div className="black-section_ticks-labels">
              <span className="black-section_tick-label">STANDARD</span>
              <span className="black-section_tick-label">GEFÜHL</span>
            </div>

            <div className="black-section_ticks-line" aria-hidden="true">
              {ticks.map((_, i) => (
                <span
                  key={i}
                  className={`black-section_tick-mark ${i % 5 === 0 ? 'is-major' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Tactile Pulse Circles matching screenshot 7 */}
        <div className="black-section_bottom">
          <div ref={circlesRef} className="black-section_circles-grid" data-cursor="CLICK">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="pulse-circle"
                onClick={handleCircleClick}
                role="button"
                tabIndex={0}
                aria-label={`Interactive Tactile Sphere ${item}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCircleClick(e);
                  }
                }}
              >
                <div className="pulse-circle_inner" />
                <div className="pulse-circle_glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
