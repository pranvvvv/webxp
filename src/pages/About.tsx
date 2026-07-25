
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import TeamSection from '../components/about/TeamSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  useEffect(() => {
    // Change page title
    document.title = 'About Us - GetPixage';
  }, []);

  return (
    <Layout>
      <AboutHero />
      <AboutMission />
      <TeamSection />
      <CtaSection />
    </Layout>
  );
};

export default About;
