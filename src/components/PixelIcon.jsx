import React from 'react';

export default function PixelIcon({ name, className = '', style = {} }) {
  switch (name) {
    case 'cross':
    case 'plus':
    case 'star':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`icon ${className}`}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'squares-diagonal':
    case 'strategy-art':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className={`icon ${className}`}
          style={style}
        >
          <rect x="8" y="18" width="12" height="12" fill="currentColor" />
          <rect x="20" y="8" width="12" height="12" fill="currentColor" />
        </svg>
      );

    case 'hourglass':
    case 'design-art':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className={`icon ${className}`}
          style={style}
        >
          <rect x="10" y="8" width="20" height="4" fill="currentColor" />
          <rect x="12" y="12" width="16" height="3" fill="currentColor" />
          <rect x="15" y="15" width="10" height="3" fill="currentColor" />
          <rect x="18" y="18" width="4" height="4" fill="currentColor" />
          <rect x="15" y="22" width="10" height="3" fill="currentColor" />
          <rect x="12" y="25" width="16" height="3" fill="currentColor" />
          <rect x="10" y="28" width="20" height="4" fill="currentColor" />
        </svg>
      );

    case 'octagon-circle':
    case 'build-art':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className={`icon ${className}`}
          style={style}
        >
          <rect x="14" y="8" width="12" height="4" fill="currentColor" />
          <rect x="10" y="12" width="4" height="4" fill="currentColor" />
          <rect x="26" y="12" width="4" height="4" fill="currentColor" />
          <rect x="8" y="16" width="4" height="8" fill="currentColor" />
          <rect x="28" y="16" width="4" height="8" fill="currentColor" />
          <rect x="10" y="24" width="4" height="4" fill="currentColor" />
          <rect x="26" y="24" width="4" height="4" fill="currentColor" />
          <rect x="14" y="28" width="12" height="4" fill="currentColor" />
        </svg>
      );

    case 'avatar-pixel':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="none"
          className={`icon ${className}`}
          style={style}
        >
          {/* Hair / Head Outline */}
          <rect x="10" y="4" width="12" height="4" fill="#3a2518" />
          <rect x="8" y="8" width="16" height="4" fill="#523620" />
          <rect x="6" y="10" width="4" height="8" fill="#523620" />
          <rect x="22" y="10" width="4" height="8" fill="#523620" />
          {/* Face */}
          <rect x="10" y="10" width="12" height="10" fill="#fcdca6" />
          {/* Glasses & Eyes */}
          <rect x="10" y="12" width="4" height="4" fill="#111" />
          <rect x="11" y="13" width="2" height="2" fill="#fff" />
          <rect x="18" y="12" width="4" height="4" fill="#111" />
          <rect x="19" y="13" width="2" height="2" fill="#fff" />
          <rect x="14" y="13" width="4" height="2" fill="#111" />
          {/* Smile / details */}
          <rect x="14" y="17" width="4" height="1" fill="#3a2518" />
          {/* Shirt / Collar */}
          <rect x="8" y="20" width="16" height="8" fill="#111" />
          <rect x="14" y="20" width="4" height="4" fill="#ffe32e" />
        </svg>
      );

    case 'pixel-arrow':
    case 'arrow-top-right':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`icon ${className}`}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 14L13 7M13 7H7M13 7V13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
          />
        </svg>
      );

    case 'arrow-enter':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`icon ${className}`}
          style={style}
        >
          <path
            d="M6 8V12H14M14 12L11 9M14 12L11 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className={`icon ${className}`}
          style={style}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M9 5h2v2h2v2h2v2h-2v2h-2v2H9v-2H7v-2H5V9h2V7h2V5Z" fill="currentColor" />
        </svg>
      );
  }
}

