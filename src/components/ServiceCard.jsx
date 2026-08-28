import React, { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import '../styles/service-card.css';

export default function ServiceCard({
  title = 'JAVASCRIPT',
  icon = 'js-circuit',
  code = 'JS / 01',
  variant = 'base',
  items = [],
}) {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const cardRef = useRef(null);

  // Magnetic & 3D Tilt values (Lerped)
  const currentTilt = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const targetTilt = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates (-1 to 1)
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      // Magnetic tilt limits (max ~14 deg rotate, ~6px magnetic translate)
      targetTilt.current = {
        x: -normY * 13,
        y: normX * 15,
        tx: normX * 6,
        ty: normY * 6,
      };
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPressing(false);
      targetTilt.current = { x: 0, y: 0, tx: 0, ty: 0 };
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Spring Lerp Loop
    const updatePhysics = () => {
      const ease = 0.16;
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * ease;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * ease;
      currentTilt.current.tx += (targetTilt.current.tx - currentTilt.current.tx) * ease;
      currentTilt.current.ty += (targetTilt.current.ty - currentTilt.current.ty) * ease;

      if (card) {
        const { x, y, tx, ty } = currentTilt.current;
        const lift = isHovered ? -8 : 0;
        const scale = isPressing ? 0.96 : isHovered ? 1.02 : 1;

        card.style.transform = `translate3d(${tx}px, ${ty + lift}px, 0px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(updatePhysics);
    };

    rafId.current = requestAnimationFrame(updatePhysics);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isHovered, isPressing]);

  const handleCardClick = () => {
    setIsPressing(true);
    setTimeout(() => {
      setIsPressing(false);
      setFlipped((prev) => !prev);
    }, 120);
  };

  return (
    <div className="service-card-wrapper">
      <div
        ref={cardRef}
        className={`service-card ${flipped ? 'is-flipped' : ''}`}
        data-variant={variant}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label={`${title} - Click to explore details`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="service-card_inner">
          {/* Front Face */}
          <div className="service-card_flip-front">
            <div className="service-card_front-top">
              <span className="u-c1">{title}</span>
              <PixelIcon name="cross" />
            </div>

            <div className="service-card_front-visual">
              <div className="pixel-visual-wrap">
                <PixelIcon name={icon} style={{ width: '42px', height: '42px' }} />
              </div>
            </div>

            <div className="service-card_front-bottom">
              <div className="service-card_front-bottom-wrap">
                <PixelIcon name="cross" />
                <span className="service-card_tag-pill">{code}</span>
              </div>
              <span className="u-c1">{title}</span>
            </div>
          </div>

          {/* Back Face */}
          <div className="service-card_flip-back">
            <div className="service-card_back-top">
              <span className="u-c1">{title}</span>
              <span className="service-card_tag-pill">{code}</span>
            </div>

            <div className="service-card_back-content">
              <ul className="service-card_back-list">
                {items.map((item, i) => (
                  <li key={i} className="service-card_back-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card_back-bottom">
              <PixelIcon name="cross" />
              <span className="u-c1">TOPICS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
