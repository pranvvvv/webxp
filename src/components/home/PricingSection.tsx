
import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      name: 'Basic',
      price: '£489',
      maintenance: '£9/month',
      ideal: 'Personal sites, portfolios',
      includes: [
        'SEO setup',
        'Domain name guidance',
        'Hosting setup support',
        'Copywriting for key pages',
        'Custom design',
      ],
    },
    {
      name: 'Mid',
      price: '£2450',
      maintenance: '£49/month',
      ideal: 'Startups, blogs, small businesses',
      featured: true,
      includes: [
        'Everything in Basic',
        'Advanced on-page SEO',
        'Blog or CMS setup',
        'Contact forms and lead capture',
        'Speed and mobile optimization',
      ],
    },
    {
      name: 'Advanced',
      price: 'Varies',
      priceNote: 'Quote provided after consultation',
      maintenance: '£99/month',
      ideal: 'Full-fledged business sites, e-commerce, or high-traffic websites. Pricing varies based on consultation and project scope.',
      includes: [
        'Everything in Mid',
        'E-commerce or custom functionality',
        'API and third-party integrations',
        'Conversion-focused UX strategy',
        'Priority support and ongoing improvements',
      ],
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
          <ul className="text-left list-none grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-6 md:mt-8">
            {commonFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={16} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto reveal">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                pkg.featured ? 'border-2 border-secondary relative' : 'border border-gray-200'
              }`}
            >
              {pkg.featured && (
                <div className="bg-secondary text-white text-center py-1 text-xs md:text-sm font-medium">
                  Popular Choice
                </div>
              )}
              <div className="bg-white p-3 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-2 md:mb-4">
                  <span className="text-xl md:text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-500 text-xs md:text-base"> one-time</span>
                  {pkg.priceNote && (
                    <p className="mt-1 md:mt-2 text-[11px] md:text-sm text-gray-500 leading-snug">{pkg.priceNote}</p>
                  )}
                </div>
                <div className="mb-3 md:mb-6">
                  <span className="text-sm md:text-xl font-semibold text-gray-700">{pkg.maintenance}</span>
                  <span className="text-gray-500 text-xs md:text-base"> maintenance</span>
                </div>
                <hr className="my-3 md:my-4" />
                <div className="mb-3 md:mb-6">
                  <h4 className="font-medium text-gray-700 mb-1 md:mb-2 text-xs md:text-base">Ideal For:</h4>
                  <p className="text-gray-600 text-xs md:text-base leading-relaxed">{pkg.ideal}</p>
                </div>
                <div className="mb-3 md:mb-6">
                  <h4 className="font-medium text-gray-700 mb-2 md:mb-3 text-xs md:text-base">Included:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li
                        key={item}
                        className={`${itemIndex > 2 ? 'hidden md:flex' : 'flex'} items-start text-[11px] md:text-sm text-gray-600 leading-snug`}
                      >
                        <Check size={16} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-gray-500 mt-2 md:hidden">+ more included</p>
                </div>
                <a
                  href={`https://wa.me/447415960499?text=I'm interested in the ${pkg.name} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs md:text-base px-2 md:px-6"
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
