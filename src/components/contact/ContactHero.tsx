
import React from 'react';
import Reveal from '@/components/ui/Reveal';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </Reveal>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactHero;
