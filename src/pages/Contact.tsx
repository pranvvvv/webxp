
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  useEffect(() => {
    // Change page title
    document.title = 'Contact Us - WebXp';
  }, []);

  return (
    <Layout>
      <ContactHero />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
