import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import { ABOUT_INFO, BRAND_INFO, SITE_ASSETS } from '../data/siteContent';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-canvas text-navy-900 py-20 sm:py-28 border-b border-navy-900/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission Statement + Portrait + Credentials Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-3">
                Leadership &amp; Mission
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium leading-[1.15] text-navy-900 [text-wrap:balance]">
                Experience grounded in behavioral science and business execution.
              </h2>
            </div>

            {/* Founder Portrait Card — Sized respectfully for sharp native resolution */}
            <div className="bg-surface border border-navy-900/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-24 h-28 shrink-0 overflow-hidden border border-gold-400/40 bg-surface-muted">
                <img
                  src={SITE_ASSETS.lynnPortrait}
                  alt="Lynn Scarbath Berger, MSW, LGSW — Owner and Principal Consultant"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-editorial text-xl font-semibold text-navy-900">
                  {ABOUT_INFO.founder}
                </h3>
                <p className="text-sm font-medium text-gold-700 mt-1">
                  {ABOUT_INFO.title}
                </p>
                <p className="text-xs text-navy-900/65 mt-2 leading-relaxed">
                  B.A., Salisbury State University · MSW, University of MD at Baltimore · ICISF Certified (2001)
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-navy-900 text-white p-7 sm:p-8">
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-300 mb-3">
                Mission Statement
              </p>
              <p className="font-editorial text-lg sm:text-xl leading-relaxed text-white/95">
                {BRAND_INFO.missionStatement}
              </p>
            </div>

            {/* Existing Video Link from About Page */}
            <a
              href={ABOUT_INFO.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-surface border border-navy-900/15 hover:border-gold-500 px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 bg-navy-900 text-gold-300 rounded-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                <div>
                  <span className="block text-sm font-semibold text-navy-900">
                    View Featured Perspective Video
                  </span>
                  <span className="block text-xs text-navy-900/60">
                    Start With Why — Leadership Alignment
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-navy-700 group-hover:text-gold-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Right Column: Full Biography + Speaking Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Editorial Bio */}
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-wider uppercase text-navy-700">
                Experience &amp; Background
              </p>
              {ABOUT_INFO.bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-navy-900/80 leading-[1.75] max-w-[68ch]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Verified Scope Markers from Existing Bio */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-7 border-t border-b border-navy-900/10">
              <div>
                <p className="font-editorial text-3xl font-medium text-navy-900 tabular-nums">
                  15+ Years
                </p>
                <p className="text-xs sm:text-sm text-navy-900/65 mt-1">
                  Driving organizational initiatives &amp; corporate visibility
                </p>
              </div>
              <div>
                <p className="font-editorial text-3xl font-medium text-navy-900 tabular-nums">
                  400+ Clients
                </p>
                <p className="text-xs sm:text-sm text-navy-900/65 mt-1">
                  Non-profit, for-profit, government &amp; private sectors
                </p>
              </div>
              <div>
                <p className="font-editorial text-3xl font-medium text-navy-900 tabular-nums">
                  Since 2001
                </p>
                <p className="text-xs sm:text-sm text-navy-900/65 mt-1">
                  ICISF certified in Critical Incident Crisis Management
                </p>
              </div>
            </div>

            {/* Recent Speaking Engagements */}
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-5">
                Recent Speaking Engagements
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {ABOUT_INFO.speakingEngagements.map((item) => (
                  <div
                    key={item.topic}
                    className="py-3 border-b border-navy-900/10"
                  >
                    <p className="text-sm font-semibold text-navy-900">
                      {item.topic}
                    </p>
                    <p className="text-xs sm:text-sm text-navy-900/65 mt-0.5">
                      {item.venue}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
