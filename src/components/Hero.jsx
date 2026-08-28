import React, { useEffect, useRef } from 'react';
import PixelIcon from './PixelIcon';
import HeroCard from './HeroCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroScrollRef = useRef(null);
  const heroPinRef = useRef(null);
  const titleRef = useRef(null);
  const cardAiRef = useRef(null);
  const cardWebRef = useRef(null);
  const cardBuildRef = useRef(null);
  const descRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const heroScroll = heroScrollRef.current;
    const heroPin = heroPinRef.current;
    const title = titleRef.current;
    const cardAi = cardAiRef.current;
    const cardWeb = cardWebRef.current;
    const cardBuild = cardBuildRef.current;
    const desc = descRef.current;
    const meta = metaRef.current;

    if (!heroScroll || !heroPin || !title || !cardAi || !cardWeb || !cardBuild) return;

    const ctx = gsap.context(() => {
      // Main Master Timeline for Hero Pinned Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroScroll,
          start: 'top top',
          end: 'bottom bottom',
          pin: heroPin,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Giant Headline physically travels upward behind header and out of viewport
      tl.to(
        title,
        {
          y: -window.innerHeight * 0.6,
          ease: 'power1.inOut',
        },
        0
      );

      // 2. Card 1: AI / ML (Lavender) - starts slightly left, separates, tilts forward to become foreground dominant, then exits
      tl.fromTo(
        cardAi,
        {
          xPercent: -75,
          yPercent: 0,
          z: 20,
          rotateZ: -2,
          rotateY: 4,
          rotateX: 2,
          scale: 1,
        },
        {
          xPercent: -60,
          yPercent: -6,
          z: 45,
          rotateZ: -8,
          rotateY: 12,
          rotateX: 5,
          scale: 1.03,
          ease: 'power1.out',
        },
        0
      );

      tl.to(
        cardAi,
        {
          xPercent: -42,
          yPercent: 22,
          z: 90,
          rotateZ: -6,
          rotateY: 10,
          rotateX: 4,
          scale: 1.08,
          ease: 'power1.inOut',
        },
        0.35
      );

      tl.to(
        cardAi,
        {
          yPercent: 240,
          z: 30,
          rotateZ: -2,
          rotateY: 2,
          scale: 0.96,
          opacity: 0.05,
          ease: 'power1.in',
        },
        0.72
      );

      // 3. Card 2: WEB (Pink) - starts center, shifts independently, gets layered behind AI/ML
      tl.fromTo(
        cardWeb,
        {
          xPercent: 0,
          yPercent: 0,
          z: 0,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
        },
        {
          xPercent: 6,
          yPercent: -4,
          z: -15,
          rotateZ: 4,
          rotateY: -6,
          rotateX: 2,
          scale: 0.98,
          ease: 'power1.out',
        },
        0
      );

      tl.to(
        cardWeb,
        {
          xPercent: 12,
          yPercent: 10,
          z: -25,
          rotateZ: 3,
          rotateY: -8,
          scale: 0.96,
          ease: 'power1.inOut',
        },
        0.35
      );

      tl.to(
        cardWeb,
        {
          yPercent: 260,
          z: -40,
          rotateZ: 1,
          scale: 0.92,
          opacity: 0.05,
          ease: 'power1.in',
        },
        0.72
      );

      // 4. Card 3: BUILD (Yellow/Peach) - starts right, shifts upward/right into top corner of stack, then drifts down
      tl.fromTo(
        cardBuild,
        {
          xPercent: 75,
          yPercent: 0,
          z: -20,
          rotateZ: 2,
          rotateY: -4,
          rotateX: 1,
          scale: 1,
        },
        {
          xPercent: 65,
          yPercent: -12,
          z: -35,
          rotateZ: 9,
          rotateY: -15,
          rotateX: 4,
          scale: 0.96,
          ease: 'power1.out',
        },
        0
      );

      tl.to(
        cardBuild,
        {
          xPercent: 55,
          yPercent: -6,
          z: -45,
          rotateZ: 8,
          rotateY: -14,
          scale: 0.94,
          ease: 'power1.inOut',
        },
        0.35
      );

      tl.to(
        cardBuild,
        {
          yPercent: 280,
          z: -60,
          rotateZ: 3,
          scale: 0.88,
          opacity: 0.05,
          ease: 'power1.in',
        },
        0.72
      );


      // 5. Description remains stable and drifts upward gently at the end of the scene
      if (desc) {
        tl.to(
          desc,
          {
            yPercent: -40,
            opacity: 0.2,
            ease: 'power1.in',
          },
          0.65
        );
      }

      // 6. Meta remains anchored then fades
      if (meta) {
        tl.to(
          meta,
          {
            yPercent: -30,
            opacity: 0.2,
            ease: 'power1.in',
          },
          0.65
        );
      }
    }, heroScroll);

    return () => ctx.revert();
  }, []);

  const aiItems = [
    'Machine Learning',
    'Artificial Intelligence',
    'Python & PyTorch',
    'Data & LLM Models',
    'Intelligent Applications',
  ];

  const webItems = [
    'HTML & Semantic Web',
    'CSS & Spatial UI',
    'JavaScript ES6+',
    'React Framework',
    'Interactive 3D UI',
  ];

  const buildItems = [
    'Full Stack Projects',
    'REST APIs',
    'Git & GitHub',
    'Cloud Deployment',
    'Creative Experiments',
  ];

  return (
    <section id="hero" ref={heroScrollRef} className="hero-scroll">
      <div ref={heroPinRef} className="hero-pin">
        <div className="hero_container u-container">
          <div className="hero_inner">
            {/* Top Technical Divider matching reference */}
            <div className="hero_divider" aria-hidden="true">
              <div className="hero_divider-left">
                <div className="hero_divider-icon-wrap">
                  <PixelIcon name="cross" />
                  <PixelIcon name="cross" />
                  <PixelIcon name="cross" />
                </div>
                <span className="u-f1">3D2Y</span>
                <PixelIcon name="cross" />
              </div>

              <div className="hero_divider-center">
                <PixelIcon name="cross" />
              </div>

              <div className="hero_divider-right">
                <PixelIcon name="cross" />
                <span className="u-f1">A113</span>
                <div className="hero_divider-icon-wrap">
                  <PixelIcon name="cross" />
                  <PixelIcon name="cross" />
                  <PixelIcon name="cross" />
                </div>
              </div>
            </div>

            {/* Giant Brutalist Headline that moves BEHIND fixed header */}
            <div ref={titleRef} className="hero_title-wrap">
              <h1 className="hero_title">
                BUILDING DIGITAL EXPERIENCES
              </h1>
            </div>

            {/* Floating 3D Cards Scene with perspective */}
            <div className="hero_cards-3d-stage">
              <div className="hero_cards-stack">
                <div ref={cardAiRef} className="hero_card-slot hero_card-slot--ai">
                  <HeroCard
                    title="AI / ML"
                    artIcon="strategy-art"
                    cornerIcon="squares-diagonal"
                    code="NVL-101"
                    variant="ai"
                    items={aiItems}
                  />
                </div>

                <div ref={cardWebRef} className="hero_card-slot hero_card-slot--web">
                  <HeroCard
                    title="WEB"
                    artIcon="design-art"
                    cornerIcon="hourglass"
                    code="NVL-102"
                    variant="web"
                    items={webItems}
                  />
                </div>

                <div ref={cardBuildRef} className="hero_card-slot hero_card-slot--build">
                  <HeroCard
                    title="BUILD"
                    artIcon="build-art"
                    cornerIcon="octagon-circle"
                    code="NVL-103"
                    variant="build"
                    items={buildItems}
                  />
                </div>
              </div>
            </div>

            {/* Description & Anchored Footer Meta */}
            <div className="hero_content-row">
              <div ref={descRef} className="hero_description">
                <div className="hero_author-badge-row">
                  <span className="hero_author-badge">B.TECH CSE • AI/ML</span>
                </div>
                <p className="hero_description-text">
                  Computer Science student building intelligent systems and interactive digital experiences.{' '}
                  <span className="u-color-gray">
                    I enjoy turning ideas into useful, visually distinctive products — from AI/ML experiments to immersive web experiences.
                  </span>
                </p>
              </div>

              <div ref={metaRef} className="hero_meta-tag">
                <span className="hero_meta-text">WEBDESIGN & DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

