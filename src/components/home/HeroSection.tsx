
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] md:h-screen bg-gradient-to-br from-white to-gray-100 flex items-center py-16 md:py-0">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 leading-tight">
              We Build <span className="gradient-text">Digital Experiences</span> That Convert
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-600 max-w-lg leading-relaxed">
              WebXp is a premier design agency crafting beautiful, high-performance websites that drive results for ambitious brands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-lg">
              <a 
                href="https://wa.me/916304308774?text=I'm interested in a free consultation for my website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Get Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/recent-work" className="btn-outline w-full">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="w-full h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl shadow-lg relative z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">W</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">WebXp</h3>
                  <p className="text-gray-600">Digital Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-primary hover:text-secondary transition-colors"
        >
          <span className="mb-2">Learn About Us</span>
          <div className="w-6 h-6 border-b-2 border-r-2 border-primary transform rotate-45 animate-bounce"></div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
