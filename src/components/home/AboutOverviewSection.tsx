
import React from 'react';

const AboutOverviewSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto reveal">
          <div className="text-center mb-12">
            <h2 className="section-title">Overview of WebXp</h2>
            <p className="text-center text-gray-500 italic mb-8">
              "Crafting Websites That Work – Because First Impressions Matter."
            </p>
          </div>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              At WebXp, we specialize in building responsive, professional websites tailored to elevate your 
              business online. Whether you're just starting out or scaling up, we focus on creating a strong digital 
              presence that attracts more leads, converts more customers, and keeps your brand memorable.
            </p>
            
            <p className="text-lg">
              We understand that your website is your 24/7 storefront, and we make sure it looks the part while 
              delivering an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverviewSection;
