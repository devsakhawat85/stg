import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { BRAND_INFO, SITE_ASSETS } from '../data/siteContent';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative bg-navy-900 text-white pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Subtle architectural grid lines derived purely from brand navy/gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(188, 158, 87, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(188, 158, 87, 0.08) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(188, 158, 87, 0.35) 0%, rgba(39, 48, 67, 0) 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-medium tracking-wide text-gold-400 mb-6"
              >
                Strategic Evolution LLC · Behavioral Risk, Executive &amp; Organizational Consulting
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-4xl sm:text-5xl lg:text-[3.65rem] font-medium leading-[1.08] tracking-tight text-white [text-wrap:balance]"
              >
                {BRAND_INFO.heroHeadline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
              >
                {BRAND_INFO.heroSubcopy}
              </motion.p>
            </div>

            {/* Action & Triad Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 py-2.5 text-sm font-medium text-white/85 hover:text-gold-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
                >
                  <span>Explore Services</span>
                  <ArrowDownRight className="w-4 h-4 text-gold-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gold-300/90 tracking-wide whitespace-nowrap">
                <span>Engage</span>
                <span aria-hidden="true" className="text-white/30">·</span>
                <span>Enhance</span>
                <span aria-hidden="true" className="text-white/30">·</span>
                <span>Empower</span>
              </div>
            </motion.div>
          </div>

          {/* Right Architectural Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex"
          >
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] border border-gold-400/30 p-2 sm:p-3 bg-navy-950/50">
              <div className="relative w-full h-full overflow-hidden bg-navy-800">
                <img
                  src={SITE_ASSETS.heroAtrium}
                  alt="Soaring architectural glass and steel vaulted atrium representing clarity, structure, and forward vision"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle navy vignette to harmonize photography with brand */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/15 to-transparent"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                  <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xs leading-snug">
                    Strengthening personnel, business processes, and culture with an eye to the future.
                  </p>
                  <span className="hidden sm:inline-block text-xs font-medium text-gold-300 tabular-nums shrink-0">
                    Bel Air, MD
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
