
import React from 'react';

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Meet the Founder</h2>
          <p className="section-subtitle">
            A focused, founder-led studio — every project gets direct attention from start to finish
          </p>
        </div>

        <div className="max-w-2xl mx-auto reveal">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&q=80"
                alt="Pranav, Founder of GetPixage"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-8 md:w-3/5">
              <h3 className="text-xl font-bold text-primary mb-1">Pranav</h3>
              <p className="text-secondary font-medium mb-4">Founder & Lead Designer</p>
              <p className="text-gray-600">
                Pranav founded GetPixage to give ambitious brands the same quality of design and
                engineering usually reserved for big-budget agencies — without the overhead. Every
                project is designed, built, and shipped with hands-on attention from first call to launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
