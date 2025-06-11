
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, BarChart, Layers, Globe, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="text-secondary" size={32} />,
    title: 'Web Development',
    description: 'Custom website development with clean, efficient code optimized for performance and SEO.',
  },
  {
    icon: <Palette className="text-secondary" size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design that delights your audience while driving conversions and engagement.',
  },
  {
    icon: <Layers className="text-secondary" size={32} />,
    title: 'Branding',
    description: 'Cohesive brand identity development that communicates your values and resonates with customers.',
  },
  {
    icon: <Globe className="text-secondary" size={32} />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies tailored to your business goals and target audience.',
  },
  {
    icon: <BarChart className="text-secondary" size={32} />,
    title: 'SEO & Analytics',
    description: 'Data-driven optimization to increase visibility, traffic and meaningful conversions.',
  },
  {
    icon: <Zap className="text-secondary" size={32} />,
    title: 'Performance Optimization',
    description: 'Speed up your site with advanced optimization techniques for better user experience.',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-8 card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-secondary/10 p-4 inline-block rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-secondary font-medium inline-flex items-center hover:underline"
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
