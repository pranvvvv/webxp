
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-primary font-heading font-bold text-2xl">
            Web<span className="text-secondary">Xp</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-primary hover:text-secondary font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="relative group">
            <Link
              to="/career-launch"
              className="text-primary hover:text-secondary font-medium transition-colors flex items-center gap-1"
            >
              Career Launch
              <svg className="w-3 h-3 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Hover dropdown preview */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white shadow-xl border border-gray-100 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <p className="font-semibold text-primary text-sm mb-1">Career Launch Package</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">CV, LinkedIn, ATS resume, portfolio website & more — built for UK students.</p>
              <span className="text-secondary text-xs font-semibold">From £849 →</span>
            </div>
          </div>
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container pt-24 pb-6 flex flex-col space-y-6">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-primary hover:text-secondary font-medium text-lg transition-colors border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/career-launch"
            className="text-primary hover:text-secondary font-medium text-lg transition-colors border-b border-gray-100 pb-2 flex items-center justify-between"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Career Launch</span>
            <span className="text-xs text-secondary font-semibold bg-secondary/10 px-2 py-0.5 rounded-full">From £849</span>
          </Link>
          <Link to="/contact" className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
