
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, BarChart, Layers, Globe, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="text-secondary" size={32} />,
    title: 'Web Development',
    description: 'Custom sites built for speed, SEO, and reliability.',
  },
  {
    icon: <Palette className="text-secondary" size={32} />,
    title: 'UI/UX Design',
    description: 'Clean user-first design focused on conversions.',
  },
  {
    icon: <Layers className="text-secondary" size={32} />,
    title: 'Branding',
    description: 'Consistent brand identity that builds trust fast.',
  },
  {
    icon: <Globe className="text-secondary" size={32} />,
    title: 'Digital Strategy',
    description: 'Practical strategy aligned with your business goals.',
  },
  {
    icon: <BarChart className="text-secondary" size={32} />,
    title: 'SEO & Analytics',
    description: 'Measure, improve, and grow qualified traffic.',
  },
  {
    icon: <Zap className="text-secondary" size={32} />,
    title: 'Performance Optimization',
    description: 'Faster load times for better user experience.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of web design and development services to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-3 md:p-8 card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-secondary/10 p-2 md:p-4 inline-block rounded-lg mb-3 md:mb-6">
                <div className="scale-75 md:scale-100 origin-left md:origin-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-xl font-bold mb-1.5 md:mb-3 leading-snug">{service.title}</h3>
              <p className="text-gray-600 text-xs md:text-base mb-2 md:mb-4 leading-relaxed">{service.description}</p>
              <Link 
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-secondary font-medium inline-flex items-center hover:underline text-xs md:text-base"
              >
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
