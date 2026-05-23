
import React from 'react';

const TimelineSection = () => {
  const timelineSteps = [
    {
      package: 'Basic Package',
      duration: '5 to 7 business days',
    },
    {
      package: 'Mid Package',
      duration: '10 to 14 business days',
    },
    {
      package: 'Advanced Package',
      duration: '3 to 4 weeks',
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-title">Estimated Project Timeline</h2>
            <p className="section-subtitle">
              Project durations vary depending on the selected package and feature complexity. Here's a general guide:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 card-hover h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary leading-snug">{step.package}</h3>
                    <p className="text-sm text-secondary font-medium">{step.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Planning, design drafts, revisions, development, testing, and launch are all included.
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-100 text-gray-700">
            <p className="text-sm md:text-base leading-relaxed">
              You can view our recent work and design style here: <a href="https://shivapranavportfolio-io.vercel.app/#about" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">https://shivapranavportfolio.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
