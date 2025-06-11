
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
          <Link to="/contact" className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
