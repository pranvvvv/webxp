
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { organizationSchema, breadcrumbSchema } from '../lib/schema';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import TeamSection from '../components/about/TeamSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <Layout>
      <SEO
        title="About GetPixage — UK Web Design Agency With 50+ Projects Delivered"
        description="Meet GetPixage: a UK-based web design agency crafting high-conversion websites, AI automation, and SaaS products. Learn about our mission and how we work."
        path="/about"
        keywords="about GetPixage, UK web design agency, web development team, website design company"
        structuredData={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <AboutHero />
      <AboutMission />
      <TeamSection />
      <CtaSection />
    </Layout>
  );
};

export default About;
