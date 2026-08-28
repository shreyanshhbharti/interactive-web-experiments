import React, { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import '../styles/service-card.css';

export default function HeroCard({
  title = 'AI / ML',
  artIcon = 'strategy-art',
  cornerIcon = 'squares-diagonal',
  code = 'NVL-101',
  variant = 'ai',
  items = [],
  className = '',
}) {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const innerRef = useRef(null);

  // Micro tilt on pointer
  const currentTilt = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const targetTilt = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const card = innerRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      targetTilt.current = {
        x: -normY * 12,
        y: normX * 12,
        tx: normX * 4,
        ty: normY * 4,
      };
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPressing(false);
      targetTilt.current = { x: 0, y: 0, tx: 0, ty: 0 };
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    const updatePhysics = () => {
      const ease = 0.15;
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * ease;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * ease;
      currentTilt.current.tx += (targetTilt.current.tx - currentTilt.current.tx) * ease;
      currentTilt.current.ty += (targetTilt.current.ty - currentTilt.current.ty) * ease;

      if (card) {
        const { x, y, tx, ty } = currentTilt.current;
        const lift = isHovered ? -6 : 0;
        const scale = isPressing ? 0.97 : isHovered ? 1.02 : 1;
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

  return (
    <div className={`hero-card-wrapper ${className}`} data-cursor="EXPLORE">
      <div
        ref={innerRef}
        className="hero-card"
        data-variant={variant}
        role="presentation"
        aria-label={`${title} Card`}
      >
        <div className="hero-card_inner">
          {/* Physical Card Front Face */}
          <div className="hero-card_face hero-card_front">
            {/* Top Bar */}
            <div className="hero-card_header">
              <span className="hero-card_title-label">{title}</span>
              <PixelIcon name={cornerIcon} style={{ width: '14px', height: '14px' }} />
            </div>

            {/* Central Graphic Art */}
            <div className="hero-card_visual">
              <div className="hero-card_art-wrap">
                <PixelIcon name={artIcon} style={{ width: '48px', height: '48px' }} />
              </div>
            </div>

            {/* Bottom Bar with CE, serial, and inverted text */}
            <div className="hero-card_footer">
              <div className="hero-card_meta-left">
                <PixelIcon name={cornerIcon} style={{ width: '10px', height: '10px' }} />
                <span className="hero-card_code">{code}</span>
                <span className="hero-card_ce">CE</span>
              </div>
              <span className="hero-card_inverted-title">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

