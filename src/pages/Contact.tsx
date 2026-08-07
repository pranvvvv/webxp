
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { organizationSchema, breadcrumbSchema } from '../lib/schema';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Reveal from '@/components/ui/Reveal';

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact GetPixage — Free Web Design Consultation | UK"
        description="Get in touch with GetPixage for a free consultation on your website, AI automation, or SaaS project. Fast replies, clear scope, no obligation."
        path="/contact"
        keywords="contact GetPixage, web design quote UK, free website consultation"
        structuredData={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
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
