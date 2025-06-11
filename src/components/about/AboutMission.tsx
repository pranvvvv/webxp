
import React from 'react';

const AboutMission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          <div>
            <img 
              src="https://source.unsplash.com/photo-1522542550221-31fd19575a2d"
              alt="WebXp Team Collaboration"
              className="rounded-lg shadow-xl object-cover w-full h-[400px]"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At WebXp, we specialize in building responsive, professional websites tailored to elevate your 
              business online. Whether you're just starting out or scaling up, we focus on creating a strong digital 
              presence that attracts more leads, converts more customers, and keeps your brand memorable.
            </p>
            <p className="text-gray-700 mb-6">
              We understand that your website is your 24/7 storefront, and we make sure it looks the part while 
              delivering an exceptional user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-primary text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To help businesses of all sizes thrive online through effective, beautiful web design.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-primary text-lg mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Quality, creativity, transparency, and results-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
