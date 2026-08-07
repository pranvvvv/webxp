
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { seoConfig } from '../lib/seo-data.mjs';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Reveal from '@/components/ui/Reveal';

const Contact = () => {
  return (
    <Layout>
      <SEO {...seoConfig['/contact']} />
      <ContactHero />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={120}>
              <ContactInfo />
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
