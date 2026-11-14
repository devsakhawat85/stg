import React from 'react';
import { BRAND_INFO, SITE_ASSETS } from '../data/siteContent';

const FOOTER_NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3">
              <img
                src={SITE_ASSETS.logo}
                alt="Strategic Evolution LLC logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-editorial text-xl font-semibold text-white">
                {BRAND_INFO.name}
              </span>
            </a>
            <p className="text-sm text-gold-300 font-medium">
              ~ {BRAND_INFO.tagline}
            </p>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Engage · Enhance · Empower
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-white/50 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/75 hover:text-gold-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <p className="text-xs font-semibold tracking-wider uppercase text-white/50 mb-4">
              Contact Information
            </p>
            <p className="text-white/80 leading-relaxed">
              {BRAND_INFO.contact.address}
            </p>
            <p className="text-white/80 tabular-nums">
              P:{' '}
              <a
                href={BRAND_INFO.contact.phoneHref}
                className="hover:text-gold-300 transition-colors"
              >
                {BRAND_INFO.contact.phone}
              </a>
            </p>
            <p className="text-white/65 tabular-nums">
              F: {BRAND_INFO.contact.fax}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>Copyright &copy; {BRAND_INFO.legalName}</p>
          <p>Behavioral Risk · Leadership Development · Organizational Strategy</p>
        </div>
      </div>
    </footer>
  );
};
