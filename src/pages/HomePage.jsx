import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import DownloadAppSection from '../components/sections/DownloadAppSection';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </div>
  );
}

export default HomePage;
