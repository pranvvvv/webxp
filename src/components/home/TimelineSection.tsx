
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
        <div className="max-w-4xl mx-auto reveal">
          <div className="text-center mb-12">
            <h2 className="section-title">Estimated Project Timeline</h2>
            <p className="section-subtitle">
              Project durations vary depending on the selected package and feature complexity. Here's a general guide:
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.package}</h3>
                  <p className="text-gray-600">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-gray-700">
            <p>
              Each project includes time for planning, design drafts, revisions, development, testing, and final launch.
            </p>
            <p className="mt-4">
              You can view our recent work and design style here: <a href="https://github.com/pranav" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">https://pranav.github.io/live-pranav/</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
