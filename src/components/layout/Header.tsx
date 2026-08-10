
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/recent-work' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => !to.includes('#') && location.pathname === to;

  const navLinkClasses = (to: string) =>
    cn(
      'relative py-1 font-medium transition-colors duration-300',
      "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-secondary after:transition-all after:duration-300",
      isActive(to)
        ? 'text-secondary after:w-full'
        : 'text-primary hover:text-secondary after:w-0 hover:after:w-full'
    );

  return (
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-soft py-3'
          : 'bg-transparent border-b border-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <span className="text-primary font-heading font-extrabold text-2xl tracking-tight">
            Get<span className="text-secondary">Pixage</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className={navLinkClasses(item.to)}>
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <Link to="/career-launch" className={cn(navLinkClasses('/career-launch'), 'flex items-center gap-1')}>
              Career Launch
              <svg className="w-3 h-3 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white shadow-premium-lg border border-gray-100 rounded-2xl p-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-premium z-50">
              <p className="font-semibold text-primary text-sm mb-1">Career Launch Package</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">CV, LinkedIn, ATS resume, portfolio website & more — built for UK students.</p>
              <span className="text-secondary text-xs font-semibold">From £849 →</span>
            </div>
          </div>
          <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden text-primary relative z-50"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

    {/* Mobile backdrop — kept outside <header> so the header's own backdrop-blur
        (applied when scrolled) doesn't become a containing block for this fixed
        element and collapse it into the header's bounding box. */}
    <div
      className={cn(
        'md:hidden fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ease-premium z-40',
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Mobile drawer — same reason as the backdrop above */}
    <div
      className={cn(
        'md:hidden fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white z-40 shadow-premium-lg transition-transform duration-400 ease-premium transform',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="pt-24 pb-6 px-6 flex flex-col space-y-1 h-full overflow-y-auto">
        {[...navItems, { label: 'Career Launch', to: '/career-launch' }].map((item, i) => (
          <Link
            key={item.label}
            to={item.to}
            className={cn(
              'font-medium text-lg py-3 border-b border-gray-100 transition-colors',
              isActive(item.to) ? 'text-secondary' : 'text-primary hover:text-secondary'
            )}
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(16px)',
              transition: `opacity 0.4s ease-out ${i * 60}ms, transform 0.4s ease-out ${i * 60}ms`,
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="btn-primary w-full mt-6"
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.4s ease-out ${navItems.length * 60 + 60}ms, transform 0.4s ease-out ${navItems.length * 60 + 60}ms`,
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
