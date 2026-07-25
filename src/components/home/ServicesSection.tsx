
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Zap, Layers, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Production-ready, responsive websites focused on performance, accessibility, and conversions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Clean, user-first interfaces designed around real usage — not just visuals.',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'AI agents and workflow automation that save time on sales, support, and operations.',
  },
  {
    icon: Layers,
    title: 'SaaS & Landing Pages',
    description: 'From MVP to polished product — landing pages and SaaS builds that ship fast.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Storefronts with smooth checkout flows and clear, conversion-focused product pages.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    description: 'Faster load times, better rankings, and measurable growth in qualified traffic.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            GetPixage builds high-impact websites and products, integrates AI agents into your workflows,
            and delivers a consistent, production-ready design system for a fast, polished result.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 80}>
                <div className="card-premium p-5 md:p-6 h-full">
                  <div className="bg-secondary/10 p-3 inline-flex rounded-xl mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 leading-snug text-primary">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-12" delay={150}>
          <p className="text-gray-500 mb-4">Not sure exactly what you need?</p>
          <Link to="/contact" className="btn-outline">
            Let's Talk About Your Project
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
