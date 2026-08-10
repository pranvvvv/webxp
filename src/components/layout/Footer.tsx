
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/recent-work' },
  { label: 'Career Launch', to: '/career-launch' },
  { label: 'Contact', to: '/contact' },
];

const services = ['Website Design', 'Website Development', 'UI/UX Design', 'AI Automation', 'SEO & Analytics'];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're on the list!",
      description: "We'll send you occasional updates — no spam, ever.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 mb-16">
          <div>
            <Link to="/" className="inline-block mb-5">
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                Get<span className="text-secondary">Pixage</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              50+ projects delivered since 2025. We blend design excellence with technical expertise to create stunning, high-conversion websites.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/share/1Fo9NjLWxu/?mibextid=wwXIfr', label: 'Facebook' },
                { Icon: Instagram, href: 'https://www.instagram.com/pranv.tsx', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/shiva-pranav-888a76340/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-400 hover:text-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Stay in the loop</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Occasional tips on web design and conversion — no spam.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-8">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 bg-secondary hover:bg-secondary-600 rounded-lg px-3 py-2 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-secondary shrink-0" />
                <span className="text-gray-400 text-sm">Serving clients across the UK</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary shrink-0" />
                <a href="tel:+447415960499" className="text-gray-400 text-sm hover:text-secondary transition-colors">+44 7415 960499</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary shrink-0" />
                <a href="mailto:WebXp.combusiness@gmail.com" className="text-gray-400 text-sm hover:text-secondary transition-colors break-all">WebXp.combusiness@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} GetPixage. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-secondary transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
