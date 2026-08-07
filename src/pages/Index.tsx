
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO, { SITE_URL } from '../components/seo/SEO';
import { organizationSchema, faqSchema } from '../lib/schema';
import HeroSection from '../components/home/HeroSection';
import CareerLaunchBanner from '../components/home/CareerLaunchBanner';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import AboutOverviewSection from '../components/home/AboutOverviewSection';
import PricingSection from '../components/home/PricingSection';
import TimelineSection from '../components/home/TimelineSection';
import FAQSection, { faqs } from '../components/home/FAQSection';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'GetPixage',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="GetPixage — Premium Web Design Agency | AI Automation & SaaS Development (UK)"
        description="GetPixage designs and builds high-converting websites, AI automation, and SaaS products for UK businesses. 50+ projects delivered. Get a free consultation today."
        path="/"
        keywords="web design agency UK, website design and development, AI automation, SaaS development, custom website design, conversion-focused web design"
        structuredData={[organizationSchema, websiteSchema, faqSchema(faqs)]}
      />
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
