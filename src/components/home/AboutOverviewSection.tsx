
import React from 'react';

const AboutOverviewSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-title">Overview of WebXp</h2>
            <p className="text-center text-gray-500 italic mb-8">
              "Crafting Websites That Work – Because First Impressions Matter."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-700">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 card-hover">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">Built to convert</h3>
              <p className="text-sm md:text-base leading-relaxed">
                At WebXp, we build responsive, professional websites that help your business look trustworthy, attract attention, and turn visits into enquiries.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 card-hover">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">Always working for you</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Your website is your 24/7 storefront, so we make sure it stays clear, fast, and easy to use across mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverviewSection;
