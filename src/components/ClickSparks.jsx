import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/sparks.css';

/**
 * Editorial Geometric Click Spark Burst
 * Emits 6 tiny geometric marks (horizontal dash, vertical pipe, diagonals, tiny squares)
 * around the exact pointer location, animating subtly outward and fading out over ~400ms.
 */
export default function ClickSparks() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      // Get click coordinates
      const x = e.clientX;
      const y = e.clientY;

      // Check if clicked element or ancestor is dark/black
      const targetEl = document.elementFromPoint(x, y);
      const isDarkBg = targetEl && (targetEl.closest('#footer') || targetEl.closest('.hero-card_back'));

      // Define 6 geometric shapes around the center:
      const particleDefs = [
        { angle: -Math.PI / 2, dist: 18, type: 'h-dash', rot: 0 },
        { angle: -Math.PI / 4, dist: 22, type: 'slash', rot: 45 },
        { angle: 0, dist: 20, type: 'h-dash', rot: 0 },
        { angle: Math.PI / 2, dist: 18, type: 'v-pipe', rot: 90 },
        { angle: (3 * Math.PI) / 4, dist: 22, type: 'backslash', rot: -45 },
        { angle: Math.PI, dist: 20, type: 'square', rot: 15 },
      ];

      const burstGroup = document.createElement('div');
      burstGroup.className = 'spark-burst';
      burstGroup.style.left = `${x}px`;
      burstGroup.style.top = `${y}px`;

      particleDefs.forEach((p) => {
        const particle = document.createElement('span');
        particle.className = `spark-mark spark-mark--${p.type} ${isDarkBg ? 'spark-mark--light' : ''}`;
        burstGroup.appendChild(particle);


        // Calculate destination with slight randomness
        const randomSpread = (Math.random() - 0.5) * 0.2;
        const targetAngle = p.angle + randomSpread;
        const targetDist = p.dist + (Math.random() * 6 - 3);
        const targetX = Math.cos(targetAngle) * targetDist;
        const targetY = Math.sin(targetAngle) * targetDist;

        // GSAP animate particle outward, rotate slightly, fade out
        gsap.fromTo(
          particle,
          {
            x: 0,
            y: 0,
            rotation: p.rot,
            scale: 0.8,
            opacity: 1,
          },
          {
            x: targetX,
            y: targetY,
            rotation: p.rot + (Math.random() * 30 - 15),
            scale: 1,
            opacity: 0,
            duration: 0.42,
            ease: 'power2.out',
          }
        );
      });

      container.appendChild(burstGroup);

      // Clean up DOM node after animation completes
      setTimeout(() => {
        if (burstGroup.parentNode === container) {
          container.removeChild(burstGroup);
        }
      }, 480);
    };

    window.addEventListener('pointerdown', handleClick, { capture: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleClick, { capture: true });
    };
  }, []);

  return <div ref={containerRef} className="spark-container" aria-hidden="true" />;
}
