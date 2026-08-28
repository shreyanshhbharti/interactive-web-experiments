import React from 'react';
import PixelIcon from './PixelIcon';
import { scrollToTarget, scrollToTop } from '../hooks/useLenis';
import '../styles/footer.css';

export default function Footer() {
  const handleProcessClick = (e) => {
    e.preventDefault();
    scrollToTarget('#process');
  };

  const handleTopClick = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="footer_container u-container">
        {/* Top CTA & Link Columns Row */}
        <div className="footer_top">
          {/* Left CTA Area */}
          <div className="footer_cta-block">
            <div className="footer_cta-question">
              <span>WANT TO KNOW HOW IT WORKS?</span>
            </div>
            <a
              href="#process"
              className="footer_cta-btn"
              onClick={handleProcessClick}
              data-cursor="PROCESS"
            >
              <PixelIcon name="arrow-enter" style={{ width: '12px', height: '12px' }} />
              <span>PROCESS</span>
            </a>
          </div>

          {/* Navigation Columns */}
          <div className="footer_nav-cols">
            {/* Col 1: Pages */}
            <div className="footer_nav-col">
              <span className="footer_nav-heading">NAVIGATION</span>
              <ul className="footer_nav-list">
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToTarget('#projects'); }}>WORK</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToTarget('#process'); }}>ABOUT</a></li>
                <li><a href="#service" onClick={(e) => { e.preventDefault(); scrollToTarget('#service'); }}>SKILLS</a></li>
                <li><a href="#footer" onClick={(e) => { e.preventDefault(); scrollToTarget('#footer'); }}>CONTACT</a></li>
              </ul>
            </div>


            {/* Col 2: Socials */}
            <div className="footer_nav-col">
              <span className="footer_nav-heading">SOCIAL</span>
              <ul className="footer_nav-list">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a></li>
                <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X.COM ↗</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a></li>
              </ul>
            </div>

            {/* Col 3: Legal */}
            <div className="footer_nav-col">
              <span className="footer_nav-heading">LEGAL</span>
              <ul className="footer_nav-list">
                <li><a href="#impressum" onClick={(e) => e.preventDefault()}>IMPRESSUM</a></li>
                <li><a href="#privacy" onClick={(e) => e.preventDefault()}>PRIVACY</a></li>
                <li><a href="#terms" onClick={(e) => e.preventDefault()}>TERMS</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Row matching reference screenshot 21 */}
        <div className="footer_bottom">
          <div className="footer_bottom-left">
            <span>©2026 SHREYANSH BHARTI</span>
            <PixelIcon name="cross" />
          </div>

          <div className="footer_bottom-center">
            <span>B.TECH CSE • AI/ML</span>
            <div className="footer_bottom-crosses" aria-hidden="true">
              <PixelIcon name="cross" />
              <PixelIcon name="cross" />
              <PixelIcon name="cross" />
            </div>
          </div>

          <div className="footer_bottom-right">
            <button
              type="button"
              className="footer_back-to-top"
              onClick={handleTopClick}
              data-cursor="TOP"
            >
              <span>BACK TO TOP ↑ ↑ ↑</span>
            </button>
            <PixelIcon name="cross" />
          </div>
        </div>
      </div>
    </footer>
  );
}
