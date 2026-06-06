
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Navtej',
    company: 'TrainWithTej',
    image: '/Screenshot%202026-05-23%20172508.png',
    quote: (
      <>
        "WebXp helped us launch a clean, conversion-first site for TrainWithTej — bookings and class sign-ups started coming in within days. See the work: "
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
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    quote: (
      <>
        "We needed a fast, trustworthy storefront. WebXp delivered a polished e‑commerce experience for Auravein with smooth checkout and clear product pages — see it here: "
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
    image: '/WhatsApp%20Image%202026-05-23%20at%205.29.51%20PM.jpeg',
    quote: (
      <>
        "Our enquiries and contact conversions improved after WebXp redesigned the site and clarified the enquiry flow — check the result: "
        <a href="https://www.drrksconsultancy.com/#enquire" target="_blank" rel="noopener noreferrer" className="text-secondary underline ml-1">
          drrksconsultancy.com
        </a>
        ."
      </>
    ),
    rating: 5,
  },
];

const trustHighlights = [
  'Fast WhatsApp replies',
  'Clear scope before starting',
  'Built for mobile-first conversions',
];

const FALLBACK_AVATAR =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [introActive, setIntroActive] = useState(true);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.testimonial-card')) as HTMLElement[];
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Respect reduced motion: reveal everything immediately
      cards.forEach((c) => c.classList.add('in-view'));
      setIntroActive(false);
      return;
    }

    // Intro sequence on first load: overlay + sequential pop-in (subtle preset)
    setIntroActive(true);
    cards.forEach((card, i) => {
      window.setTimeout(() => {
        card.classList.add('in-view');
      }, i * 180);
    });

    const totalDuration = cards.length * 180 + 700;
    const finishTimer = window.setTimeout(() => {
      setIntroActive(false);
    }, totalDuration);

    // After the intro, set up IntersectionObserver for any cards not yet visible
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((c) => {
      if (!c.classList.contains('in-view')) obs.observe(c);
    });

    return () => {
      clearTimeout(finishTimer);
      obs.disconnect();
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className={`container-custom floating-attention ${introActive ? 'highlight-mode' : ''}`}>
        {introActive && <div className="testimonials-overlay" aria-hidden />}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Real feedback from founders and teams who wanted a website that actually brings enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4">
            {trustHighlights.map((item) => (
              <span
                key={item}
                className="text-xs md:text-sm text-primary bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
          <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              ref={cardsRef}
              className="transition-all duration-500 flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div
                    className="testimonial-card bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.18}s` }}
                  >
                    <div className="flex gap-1 mb-4 md:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < testimonial.rating ? '#F59E0B' : 'none'}
                          stroke={i < testimonial.rating ? '#F59E0B' : '#D1D5DB'}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-base md:text-lg mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(event) => {
                            event.currentTarget.src = FALLBACK_AVATAR;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-base md:text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
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
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-secondary w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-8 md:mt-10">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Want similar results for your business? Send a quick message and get a clear plan.
            </p>
            <a
              href="https://wa.me/447415960499?text=Hi%20WebXp%2C%20I%20want%20a%20website%20that%20gets%20more%20leads.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Message WebXp on WhatsApp
              <MessageCircle size={18} className="ml-2" />
            </a>
            <div className="mt-4">
              <Link to="/recent-work" className="text-secondary font-medium hover:underline ml-4">
                View Recent Work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
