
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-secondary opacity-10 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-accent opacity-10 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center reveal">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-5 md:mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-sm md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear about your project and help bring your vision to life. You can book a free consultation call or get started right away by signing the agreement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
            <a 
              href="https://wa.me/916304308774?text=I'd like to discuss my web project" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center w-full"
            >
              Book a Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="tel:+916304308774" 
              className="border-2 border-white hover:bg-white/10 text-white px-6 md:px-8 py-3 md:py-[14px] rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center w-full"
            >
              <Phone size={18} className="mr-2" />
              Call: 6304308774
            </a>
          </div>
          
          <div className="mt-10 text-gray-300">
            <div className="mb-2">
              <strong className="text-white">Email:</strong> WebXp.combusiness@gmail.com
            </div>
            <div>
              <strong className="text-white"></strong> 
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-700 pt-10 text-left text-gray-300">
            <p className="mb-4">Looking forward to helping your brand thrive online.</p>
            <div>
              <p>Warm regards,</p>
              <p className="font-bold text-white">Pranav</p>
              <p>Founder, WebXp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
