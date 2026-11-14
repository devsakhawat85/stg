import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_ASSETS, BRAND_INFO } from '../data/siteContent';

const NAV_LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/10 py-3 shadow-sm'
          : 'bg-navy-900/90 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark + Preserved Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
        >
          <img
            src={SITE_ASSETS.logo}
            alt="Strategic Evolution LLC emblem"
            className="h-8 w-auto object-contain shrink-0"
            referrerPolicy="no-referrer"
          />
          <span className="font-editorial text-lg sm:text-xl font-semibold tracking-tight text-white">
            {BRAND_INFO.name}
          </span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-gold-300 transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-gold-400 hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact Us
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-white hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10">
          <nav
            aria-label="Mobile Navigation"
            className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-3 px-2 text-base font-medium text-white/90 hover:text-gold-300 border-b border-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors rounded-sm"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
