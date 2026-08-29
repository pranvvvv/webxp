import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface PortfolioItem {
  title: string;
  category: string;
  image: string | null;
  domain?: string;
  description: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'TrainWithTej',
    category: 'Fitness & Booking',
    image: '/portfolio-trainwithtej.webp',
    description: 'A bold, booking-focused site for a personal training business — clear CTAs and fast enquiry-to-signup flow.',
    link: 'https://www.trainwithtej.com/',
  },
  {
    title: 'Auravein',
    category: 'E-commerce',
    image: '/portfolio-auravein.webp',
    description: 'A polished fashion storefront with clean product presentation, newsletter capture, and a smooth checkout experience.',
    link: 'https://www.auravein.store/',
  },
  {
    title: 'DRRKS Consultancy',
    category: 'Education Consultancy',
    image: '/portfolio-drrksconsultancy.webp',
    description: 'A mobile-first landing page for an MBBS-abroad admissions consultancy — clear program details and fast counselling CTAs.',
    link: 'https://www.drrksconsultancy.com/',
  },
  {
    title: 'Ramya Kalakonda',
    category: 'Personal Portfolio',
    image: null,
    domain: 'ramyakalakonda.com',
    description: 'A clean personal portfolio for a data analyst — skills, projects, and experience presented to stand out to recruiters.',
    link: 'https://www.ramyakalakonda.com/',
  },
  {
    title: 'Grand Café 241',
    category: 'Coffee Shop & Bakery',
    image: '/portfolio-grandcafe241.png',
    description: 'A warm, editorial-style site for a neighbourhood coffee shop, bakery, and bar in Selhurst, London — menu showcase, story, and easy ordering.',
    link: 'https://coffee-shop-web-bay.vercel.app/',
  },
  {
    title: 'Mana Business Talks',
    category: 'Marketing Agency',
    image: '/portfolio-manabusinesstalks.png',
    description: 'A bold agency site for a Hyderabad-based social media marketing agency — services, results, and a clear "start the project" path.',
    link: 'https://manabusinessweb.vercel.app/',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Real Client Work</span>
          <h2 className="section-title">Our Latest Projects</h2>
          <p className="section-subtitle mx-auto">
            A few of the live sites we've shipped — click through to see them in action.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium-lg transition-all duration-300 ease-premium hover:-translate-y-1 h-full"
              >
                <div className="relative overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-52 md:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-52 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-200 bg-white">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="ml-2 h-4 flex-1 max-w-[160px] bg-gray-50 rounded-md border border-gray-200 flex items-center px-2">
                          <span className="text-[10px] text-gray-400 truncate">{item.domain}</span>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-3xl font-bold text-secondary/20">{item.title}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-flex items-center text-white font-medium">
                        Visit Live Site
                        <ExternalLink size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-14">
          <a
            href="https://wa.me/447415960499?text=Hi! I'm interested in your web development services. Can we discuss my project?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Get Your Project Started
            <ArrowRight size={20} className="ml-2" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default PortfolioSection;
