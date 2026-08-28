import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import ServicePage from './pages/ServicePage';
import CustomCursor from './components/CustomCursor';
import ClickSparks from './components/ClickSparks';
import useLenis from './hooks/useLenis';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [isReady, setIsReady] = useState(false);

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="wrapper">
      {/* Preloader */}
      <Preloader onReady={() => setIsReady(true)} />

      {/* Subtle Background Pattern */}
      <div className="overlay_background" aria-hidden="true" />

      {/* Interactive Header */}
      <Header currentRoute={currentRoute} onRouteChange={setCurrentRoute} />

      {/* Main Page Area */}
      <ServicePage />

      {/* Global Interactive Micro-elements */}
      <ClickSparks />
      <CustomCursor />
    </div>
  );
}
