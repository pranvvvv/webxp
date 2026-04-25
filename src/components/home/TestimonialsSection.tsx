
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Founder, TechVision',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    quote: "I came to WebXp after wasting months with a generic template site. In the first 6 weeks after launch, we started getting consistent qualified enquiries through the contact form. The process felt personal, fast, and honestly stress-free.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Founder, GreenLeaf Interiors',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: "I was hesitant about investing in a new website, but WebXp made every decision simple. Our brand finally looks premium, and new leads now mention our website in discovery calls. It paid for itself faster than expected.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Marketing Director, Fusion Growth',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: "What stood out was how they combined design with strategy. Visitors stay longer, bounce rate is down, and our booking flow finally feels smooth on mobile. The site now works like a 24/7 salesperson.",
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
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
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
        
        <div className="max-w-4xl mx-auto relative reveal">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          fill={i < testimonial.rating ? "#F59E0B" : "none"} 
                          stroke={i < testimonial.rating ? "#F59E0B" : "#D1D5DB"}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-base md:text-xl mb-8 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
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
                        <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
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
              href="https://wa.me/916304308774?text=Hi%20WebXp%2C%20I%20want%20a%20website%20that%20gets%20more%20leads.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Message WebXp on WhatsApp
              <MessageCircle size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
