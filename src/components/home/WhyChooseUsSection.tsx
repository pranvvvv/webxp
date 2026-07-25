
import React from 'react';
import { Rocket, Gem, Smartphone, Search, Sparkles, Headphones, Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const features = [
  { icon: Rocket, title: 'Fast Delivery', description: 'Most projects ship in 1–4 weeks, not months.' },
  { icon: Gem, title: 'Premium Quality', description: 'Every detail — spacing, motion, copy — gets real attention.' },
  { icon: Smartphone, title: 'Responsive Design', description: 'Looks and works great on mobile, tablet, and desktop.' },
  { icon: Search, title: 'SEO Optimized', description: 'Built to be found — clean structure, fast load times.' },
  { icon: Sparkles, title: 'AI-Powered', description: 'Optional AI automation baked into your workflows.' },
  { icon: Headphones, title: 'Dedicated Support', description: 'Direct access to the person who built your site.' },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Why GetPixage</span>
          <h2 className="section-title">Built Different, On Purpose</h2>
          <p className="section-subtitle mx-auto">
            No account managers, no hand-offs, no bloated process — just direct, founder-led work that
            takes your project seriously.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 70}>
                <div className="card-premium p-6 h-full group">
                  <div className="bg-secondary/10 p-3 inline-flex rounded-xl mb-4 transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-110">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-bold text-primary mb-1.5">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="relative bg-primary rounded-2xl px-6 py-8 md:px-12 md:py-10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 75%)',
              }}
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none animate-[float_9s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none animate-[float_11s_ease-in-out_infinite_1s]" />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter end={50} suffix="+" />
                </p>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1 flex items-center justify-center gap-1.5">
                  5.0 <Star size={22} className="fill-accent text-accent animate-pulse" />
                </p>
                <p className="text-gray-400 text-sm">Average Client Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-gray-400 text-sm">Founder-Led, No Middlemen</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
