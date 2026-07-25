
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, PenTool, Code2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  { icon: Search, title: 'Discovery', description: 'Understand your goals, audience, and what success looks like.' },
  { icon: Compass, title: 'Research', description: 'Study your market, competitors, and the best-fit approach.' },
  { icon: PenTool, title: 'Design', description: 'Wireframes and visual design, refined with your feedback.' },
  { icon: Code2, title: 'Development', description: 'Clean, production-ready code built for speed and scale.' },
  { icon: CheckCircle2, title: 'Testing', description: 'Cross-device QA so everything works before it ships.' },
  { icon: Rocket, title: 'Launch', description: 'Go live, then 30 days of support to iron out the edges.' },
];

const TimelineSection = () => {
  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-title">A Clear, Proven Process</h2>
          <p className="section-subtitle mx-auto">
            Every project follows the same six stages — so you always know what's happening and what's next.
          </p>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-secondary/40 to-secondary/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent bg-[length:200%_100%] animate-shimmer opacity-70" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 90} className="relative">
                  <div className="group flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative z-10 w-16 h-16 mb-4">
                      <span className="absolute inset-0 rounded-2xl bg-secondary/20 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125 blur-md transition-all duration-500" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-secondary/20 shadow-soft flex items-center justify-center transition-all duration-300 group-hover:border-secondary/50 group-hover:-translate-y-1">
                        <Icon className="text-secondary" size={26} />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-glow">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-primary mb-1.5">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={200} className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Want to see this process in action?</p>
          <Link to="/recent-work" className="btn-outline inline-flex">
            View Our Recent Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default TimelineSection;
