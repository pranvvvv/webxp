
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import CareerLaunchBanner from '../components/home/CareerLaunchBanner';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import AboutOverviewSection from '../components/home/AboutOverviewSection';
import PricingSection from '../components/home/PricingSection';
import TimelineSection from '../components/home/TimelineSection';
import FAQSection from '../components/home/FAQSection';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = 'GetPixage - Premium Web Design Agency';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <CareerLaunchBanner />
      <AboutOverviewSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <TimelineSection />
      <PricingSection />
      <FAQSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
