
import React from 'react';
import { TrendingUp, Clock3 } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Built to convert',
    description:
      "With 50+ projects delivered, GetPixage builds responsive, professional websites that help your business look trustworthy, attract attention, and turn visits into enquiries.",
  },
  {
    icon: Clock3,
    title: 'Always working for you',
    description:
      'Your website is your 24/7 storefront, so we make sure it stays clear, fast, and easy to use across mobile and desktop.',
  },
];

const AboutOverviewSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-title">Overview of GetPixage</h2>
            <p className="text-center text-gray-500 italic mb-8">
              "Crafting Websites That Work – Because First Impressions Matter."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-700">
            {cards.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="group relative reveal-anim" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="absolute -inset-[1.5px] rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary bg-200 animate-gradient-x opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                <div className="relative bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 transition-all duration-300 ease-premium group-hover:-translate-y-1 group-hover:shadow-premium">
                  <div className="bg-secondary/10 p-3 inline-flex rounded-xl mb-4 transition-colors duration-300 group-hover:bg-secondary/15">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-sm md:text-base leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverviewSection;
