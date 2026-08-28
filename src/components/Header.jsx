import React, { useState, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import MenuModal from './MenuModal';
import { scrollToTarget, scrollToTop } from '../hooks/useLenis';
import '../styles/header.css';

export default function Header({ currentRoute = '/', onRouteChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'WORK', target: '#projects' },
    { text: 'ABOUT', target: '#process' },
    { text: 'SKILLS', target: '#service' },
    { text: 'CONTACT', target: '#footer' },
  ];


  const handleNavClick = (e, target) => {
    e.preventDefault();
    scrollToTarget(target);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'has-scrolled' : ''}`}>
        <div className="header_inner">
          {/* Logo / Profile Pill that collapses on scroll */}
          <div className="header_title">
            <div className="header_title-inner">
              <a
                href="#top"
                className="header_title-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                aria-label="Back to top"
              >
                <div
                  className="header_title-profile"
                  title="Shreyansh Bharti"
                >
                  <PixelIcon name="avatar-pixel" style={{ width: '28px', height: '28px' }} />
                </div>

                <div className={`header_title-button ${isLogoHovered ? 'is-hovered' : ''}`}>
                  <div className="header_title-logo">
                    <span className="header_title-logo-text">Shreyansh</span>
                    <PixelIcon name="cross" />
                    <span className="header_title-logo-text">Bharti</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="header_nav">
            <ul className="header_nav-list">
              {navItems.map((item) => (
                <li key={item.text} className="header_nav-list-item">
                  <a
                    href={item.target}
                    className="header_nav-button"
                    onClick={(e) => handleNavClick(e, item.target)}
                  >
                    <span className="header_nav-button-inner">{item.text}</span>
                    <span className="header_nav-button-bg"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Feed Button */}
          <div className="header_tools">
            <button
              type="button"
              className="header_nav-button header_feed-btn"
              onClick={() => scrollToTarget('#projects')}
            >
              <span className="header_nav-button-inner">FEED</span>
              <span className="header_nav-button-bg"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="header_menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentRoute={currentRoute}
        onRouteChange={onRouteChange}
      />
    </>
  );
}

