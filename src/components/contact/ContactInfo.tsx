
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
      
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <div className="space-y-6">
          <div className="flex items-start">
            <Phone className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Phone</h3>
              <a href="tel:+447415960499" className="text-gray-600 hover:text-secondary">
                +44 7415 960499
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Email</h3>
              <a href="mailto:WebXp.combusiness@gmail.com" className="text-gray-600 hover:text-secondary">
                WebXp.combusiness@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Service Area</h3>
              <p className="text-gray-600">
                Remote-first, serving small businesses worldwide — including India &amp; the UK
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Response Time</h3>
              <p className="text-gray-600">
                We reply fast — usually within a few hours, every day
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100 p-6 mb-8 shadow-sm">
        <h3 className="font-bold text-primary mb-4">Follow on Social Media</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.facebook.com/share/1Fo9NjLWxu/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Facebook size={16} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/pranv.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Instagram size={16} />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-pranav-888a76340/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg bg-primary text-white p-8 text-center">
        <MessageCircle className="mx-auto mb-3 text-secondary" size={32} />
        <h3 className="font-bold text-lg mb-2">Prefer to chat directly?</h3>
        <p className="text-gray-300 text-sm mb-5 max-w-sm mx-auto">
          We work remotely with small businesses worldwide. Message us on WhatsApp and we'll usually reply within a few hours.
        </p>
        <a
          href="https://wa.me/447415960499?text=Hi%20GetPixage%2C%20I%27d%20like%20to%20get%20in%20touch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <MessageCircle size={18} />
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
