
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';

const testimonials = [
  {
    name: 'Navtej',
    company: 'TrainWithTej',
    domain: 'trainwithtej.com',
    url: 'https://www.trainwithtej.com/',
    screenshot: '/portfolio-trainwithtej.webp',
    quote: (
      <>
        "GetPixage helped us launch a clean, conversion-first site for TrainWithTej — bookings and class sign-ups started coming in within days. See the work: "
        <a href="https://www.trainwithtej.com/" target="_blank" rel="noopener noreferrer" className="text-secondary underline ml-1">
          trainwithtej.com
        </a>
        ."
      </>
    ),
    rating: 5,
  },
  {
    name: 'Auravein.store',
    company: 'E‑commerce Store',
    domain: 'auravein.store',
    url: 'https://www.auravein.store/',
    screenshot: '/portfolio-auravein.webp',
    quote: (
      <>
        "We needed a fast, trustworthy storefront. GetPixage delivered a polished e‑commerce experience for Auravein with smooth checkout and clear product pages — see it here: "
        <a href="https://www.auravein.store/" target="_blank" rel="noopener noreferrer" className="text-secondary underline ml-1">
          auravein.store
        </a>
        ."
      </>
    ),
    rating: 5,
  },
  {
    name: 'DRRKS Consultancy',
    company: 'Consultancy & Enquiries',
    domain: 'drrksconsultancy.com',
    url: 'https://www.drrksconsultancy.com/#enquire',
    screenshot: '/portfolio-drrksconsultancy.webp',
    quote: (
      <>
        "Our enquiries and contact conversions improved after GetPixage redesigned the site and clarified the enquiry flow — check the result: "
        <a href="https://www.drrksconsultancy.com/#enquire" target="_blank" rel="noopener noreferrer" className="text-secondary underline ml-1">
          drrksconsultancy.com
        </a>
        ."
      </>
    ),
    rating: 5,
  },
  {
    name: 'Grand Café 241',
    company: 'Coffee Shop & Bakery',
    domain: 'grandcafe241',
    url: 'https://coffee-shop-web-bay.vercel.app/',
    screenshot: '/portfolio-grandcafe241.png',
    quote: (
      <>
        "GetPixage gave our coffee shop a warm, welcoming site that actually reflects Grand Café 241 — the menu is easy to browse and it's already bringing people in the door. See it here: "
        <a href="https://coffee-shop-web-bay.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-secondary underline ml-1">
          Grand Café 241
        </a>
        ."
      </>
    ),
    rating: 5,
  },
];

const trustHighlights = [
  '50+ projects delivered',
  'Fast WhatsApp replies',
  'Clear scope before starting',
  'Built for mobile-first conversions',
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow">Social Proof</span>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle mx-auto">
            Real feedback from founders and teams who wanted a website that actually brings enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4">
            {trustHighlights.map((item) => (
              <span
                key={item}
                className="text-xs md:text-sm text-primary bg-secondary/5 border border-secondary/10 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-premium flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="group relative rounded-2xl">
                    <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-secondary via-accent to-secondary bg-200 animate-gradient-x opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 transition-all duration-300 ease-premium group-hover:-translate-y-1 group-hover:shadow-premium md:grid md:grid-cols-2">
                    {/* Real site showcase */}
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group border-b md:border-b-0 md:border-r border-gray-100"
                    >
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="ml-3 h-4 flex-1 max-w-[180px] bg-white rounded-md border border-gray-100 flex items-center px-2">
                          <span className="text-[10px] text-gray-400 truncate">{testimonial.domain}</span>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <img
                          src={testimonial.screenshot}
                          alt={`${testimonial.company} — a real GetPixage client project`}
                          loading="lazy"
                          className="w-full h-48 md:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </a>

                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonial.rating ? 'fill-accent text-accent' : 'fill-none text-gray-300'}
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-sm md:text-base mb-5 italic leading-relaxed">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <h4 className="font-bold text-primary text-base">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-secondary/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-secondary w-8' : 'bg-gray-300 w-2.5'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-secondary/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Want similar results for your business? Send a quick message and get a clear plan.
            </p>
            <a
              href="https://wa.me/447415960499?text=Hi%20GetPixage%2C%20I%20want%20a%20website%20that%20gets%20more%20leads.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary"
            >
              <span
                className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"
                aria-hidden="true"
              />
              <span className="relative flex items-center">
                Message GetPixage on WhatsApp
                <MessageCircle size={18} className="ml-2 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </a>
            <div className="mt-4">
              <Link to="/recent-work" className="text-secondary font-medium hover:underline">
                View Recent Work →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
