import React from 'react';
import PixelIcon from './PixelIcon';
import { scrollToTarget } from '../hooks/useLenis';
import '../styles/menu.css';

export default function MenuModal({ isOpen, onClose, currentRoute = '/', onRouteChange }) {
  const links = [
    { text: 'WORK', target: '#projects' },
    { text: 'ABOUT', target: '#process' },
    { text: 'SKILLS', target: '#service' },
    { text: 'CONTACT', target: '#footer' },
  ];

  return (
    <div className={`menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className="menu_backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div className="menu_outer">
        <div className="menu_header">
          <div className="menu_title">
            <PixelIcon name="avatar-pixel" style={{ width: '28px', height: '28px' }} />
          </div>
          <button type="button" className="menu_close-button" onClick={onClose}>
            Back
          </button>
        </div>

        <nav className="menu_nav">
          <ul className="menu_nav-list">
            {links.map((link) => (
              <li key={link.text} className="menu_nav-list-item">
                <button
                  type="button"
                  className="menu_nav-button"
                  onClick={() => {
                    scrollToTarget(link.target);
                    onClose();
                  }}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>


        <div className="menu_footer">
          <PixelIcon name="cross" />
          <span className="u-f1">SYS-01</span>
          <div className="menu_footer-icon-wrap">
            <PixelIcon name="cross" />
            <PixelIcon name="cross" />
            <PixelIcon name="cross" />
          </div>
          <span className="u-f1">DEV / 26</span>
          <PixelIcon name="cross" />
        </div>
      </div>
    </div>
  );
}
