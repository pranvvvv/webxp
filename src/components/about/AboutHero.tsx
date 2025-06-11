
import React from 'react';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About WebXp</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            "Crafting Websites That Work – Because First Impressions Matter."
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutHero;
