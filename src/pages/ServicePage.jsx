import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import ProcessSection from '../components/ProcessSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function ServicePage() {
  return (
    <main id="main" className="main">
      {/* 1. Hero Pinned 3D Experience */}
      <Hero />

      {/* 2. Service Cards 3D Fanning & Unfolding Section */}
      <ServiceSection />

      {/* 3. Process Section with Mountain Illustration & CTA */}
      <ProcessSection />

      {/* 4. Portfolio Projects Showcase */}
      <ProjectsSection />

      {/* 5. Editorial Footer */}
      <Footer />
    </main>
  );
}


