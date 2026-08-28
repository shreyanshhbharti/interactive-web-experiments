import React, { useEffect, useState } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const prefersFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!prefersFine) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsPointer(true);
      } else {
        setCursorText('');
        const clickable = target.closest('a, button, [role="button"], .hero_card-list-item, .service-card, .project-card, .pulse-circle');
        setIsPointer(!!clickable);
      }
    };

    const updateCursor = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isPointer ? 'is-pointer' : ''} ${cursorText ? 'has-text' : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <div className="custom-cursor_dot">
        {cursorText && <span className="custom-cursor_label">{cursorText}</span>}
      </div>
    </div>
  );
}

