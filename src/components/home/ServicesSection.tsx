
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, BarChart, Layers, Globe, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="text-secondary" size={28} />,
    title: 'Websites & Web Apps',
    description:
      'Production-ready websites and web apps focused on performance, accessibility, and conversions — responsive and SEO-friendly.',
  },
  {
    icon: <Zap className="text-secondary" size={28} />,
    title: 'AI Agents Integration',
    description:
      'Integrate intelligent AI agents (chat, automation, data workflows) into your systems to save time and increase revenue.',
  },
  {
    icon: <Palette className="text-secondary" size={28} />,
    title: 'Frontend-Designs Implementation',
    description:
      'Implement designs with the Frontend-Designs system — consistent tokens and production-ready components for fast, accurate UIs.',
  },
  {
    icon: <Palette className="text-secondary" size={32} />,
    title: 'UI/UX Design',
    description: 'Clean, user-first design focused on conversions and usability.',
  },
  {
    icon: <Layers className="text-secondary" size={32} />,
    title: 'Branding',
    description: 'Consistent brand identity systems that build trust quickly.',
  },
  {
    icon: <BarChart className="text-secondary" size={32} />,
    title: 'SEO & Analytics',
    description: 'Measure performance, improve rankings, and grow qualified traffic.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            WebXP builds high‑impact websites and web apps, integrates AI agents into your business workflows, and delivers designs using the Frontend-Designs system for a fast, consistent frontend.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-3 md:p-5 card-hover reveal-anim"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="bg-secondary/10 p-2 md:p-3 inline-block rounded-md mb-3 md:mb-4">
                <div className="scale-90 md:scale-100 origin-left md:origin-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 leading-snug">{service.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm mb-2 leading-relaxed">{service.description}</p>
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-secondary font-medium inline-flex items-center hover:underline text-xs"
              >
                Learn More
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
