
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import CareerLaunchBanner from '../components/home/CareerLaunchBanner';
import ServicesSection from '../components/home/ServicesSection';
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
      <CareerLaunchBanner />
      <AboutOverviewSection />
      <TestimonialsSection />
      <ServicesSection />
      <PricingSection />
      <TimelineSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
