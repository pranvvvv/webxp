
import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$99',
      maintenance: '$9/month',
      ideal: 'Personal sites, portfolios',
    },
    {
      name: 'Mid',
      price: '$499',
      maintenance: '$49/month',
      ideal: 'Startups, blogs, small businesses',
      featured: true,
    },
    {
      name: 'Advanced',
      price: '$999',
      maintenance: '$99/month',
      ideal: 'Full-fledged business sites, e-commerce, or high-traffic websites',
    },
  ];

  const commonFeatures = [
    'A fully responsive design that works seamlessly on mobile, tablet, and desktop',
    'Professional layout and visuals to build trust with your audience',
    'Lead conversion-focused structure',
    'Custom features tailored to your industry or niche',
    'Ongoing maintenance and support (optional monthly add-on)',
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Our Services & Packages</h2>
          <p className="section-subtitle">
            We offer three comprehensive web design packages to suit different business needs. 
            Every package includes:
          </p>
          <ul className="text-left list-none space-y-3 mt-8">
            {commonFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={20} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                pkg.featured ? 'border-2 border-secondary relative' : 'border border-gray-200'
              }`}
            >
              {pkg.featured && (
                <div className="bg-secondary text-white text-center py-1 text-sm font-medium">
                  Popular Choice
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold text-gray-700">{pkg.maintenance}</span>
                  <span className="text-gray-500"> maintenance</span>
                </div>
                <hr className="my-4" />
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Ideal For:</h4>
                  <p className="text-gray-600">{pkg.ideal}</p>
                </div>
                <a
                  href={`https://wa.me/916304308774?text=I'm interested in the ${pkg.name} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto reveal">
          <p className="italic">
            <strong>Maintenance includes:</strong> Regular updates, minor content edits, performance monitoring, and backups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
