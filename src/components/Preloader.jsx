import React, { useEffect, useState } from 'react';
import '../styles/preloader.css';

export default function Preloader({ onReady }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Artificial minimum delay for smooth intro feel
    const timer = setTimeout(() => {
      setReady(true);
      document.documentElement.classList.add('is-ready');
      if (onReady) onReady();
    }, 750);

    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className={`preloader ${ready ? 'is-hidden' : ''}`} aria-hidden={ready}>
      <div className="preloader_element">
        <span className="preloader_box"></span>
        <span className="preloader_box"></span>
        <span className="preloader_box"></span>
        <span className="preloader_box"></span>
      </div>
    </div>
  );
}
