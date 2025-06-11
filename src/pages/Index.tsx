
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import AboutOverviewSection from '../components/home/AboutOverviewSection';
import PricingSection from '../components/home/PricingSection';
import TimelineSection from '../components/home/TimelineSection';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = 'WebXp - Modern Web Design Agency';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutOverviewSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <TimelineSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
