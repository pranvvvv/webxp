
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl">
                Web<span className="text-secondary">Xp</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Creating stunning, high-conversion websites since 2025. We blend design excellence with technical expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1Fo9NjLWxu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pranav.tsx?igsh=OWpuemNoenFhdjFw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-pranav-888a76340/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Design', 'Web Development', 'UI/UX Design', 'Branding', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/services#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-secondary" />
                <span className="text-gray-300">Hyderabad , Sr nagar.</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary" />
                <a href="tel:+447415960499" className="text-gray-300 hover:text-secondary transition-colors">+44 7415 960499</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary" />
                <a href="mailto: WebXp.combusiness@gmail.com" className="text-gray-300 hover:text-secondary transition-colors">WebXp.combusiness@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WebXp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 text-sm hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
