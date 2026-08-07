
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { seoConfig } from '../lib/seo-data.mjs';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import TeamSection from '../components/about/TeamSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <Layout>
      <SEO {...seoConfig['/about']} />
      <AboutHero />
      <AboutMission />
      <TeamSection />
      <CtaSection />
    </Layout>
  );
};

export default About;
