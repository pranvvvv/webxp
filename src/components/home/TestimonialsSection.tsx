
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechVision CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    quote: "WebXp transformed our digital presence completely. The new website has increased our conversions by 45% and provided an exceptional user experience for our customers.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'GreenLeaf Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: "Working with WebXp was a game-changer for our startup. They delivered a website that perfectly captures our brand identity and has helped us establish credibility in a competitive market.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Fusion Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: "The team at WebXp doesn't just build websites - they create digital experiences that drive real business results. Our e-commerce sales have doubled since the redesign.",
    rating: 4,
  },
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients say about working with WebXp.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative reveal">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
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
                    <blockquote className="text-gray-700 text-lg md:text-xl mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
