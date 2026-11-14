import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/siteContent';
import { SectionReveal } from './SectionReveal';

export const ServicesSection: React.FC = () => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const activeArea = PRACTICE_AREAS[activeAreaIndex];
  const activeSub = activeArea.subServices[activeSubIndex] ?? activeArea.subServices[0];
  const displayImage = activeSub.image || activeArea.image;
  const displayImageAlt = activeSub.imageAlt || activeArea.imageAlt;

  const handleSelectArea = (index: number) => {
    setActiveAreaIndex(index);
    setActiveSubIndex(0);
  };

  return (
    <section id="services" className="bg-navy-900 text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-400 mb-3">
                Our Services
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-white [text-wrap:balance]">
                Three core practices built around your people.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              Select a practice area below to inspect the customized advisory, coaching, risk prevention, and organizational programs we deliver.
            </p>
          </div>
        </SectionReveal>

        {/* Interactive Numbered Practice Rows + Editorial Preview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Interactive Numbered Practice Selector */}
          <SectionReveal delay={0.08} className="lg:col-span-6 divide-y divide-white/15 border-t border-b border-white/15">
            {PRACTICE_AREAS.map((area, idx) => {
              const isActive = idx === activeAreaIndex;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => handleSelectArea(idx)}
                  onMouseEnter={() => {
                    if (idx !== activeAreaIndex) {
                      handleSelectArea(idx);
                    }
                  }}
                  aria-expanded={isActive}
                  className={`w-full text-left py-7 sm:py-8 px-4 sm:px-6 transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                    isActive ? 'bg-navy-800/80' : 'hover:bg-navy-800/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`text-sm font-semibold tabular-nums transition-colors ${
                          isActive ? 'text-gold-300' : 'text-white/45 group-hover:text-gold-400'
                        }`}
                      >
                        {area.number}
                      </span>
                      <div>
                        <h3
                          className={`font-editorial text-xl sm:text-2xl lg:text-[1.7rem] font-medium transition-colors ${
                            isActive ? 'text-white' : 'text-white/75 group-hover:text-white'
                          }`}
                        >
                          {area.title}
                        </h3>
                        <p
                          className={`mt-3 text-sm sm:text-base leading-relaxed transition-colors ${
                            isActive ? 'text-white/85' : 'text-white/55'
                          }`}
                        >
                          {area.description}
                        </p>
                        <p className="mt-4 text-xs font-medium text-gold-400/90">
                          {area.subServices.length} specialized programs
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 shrink-0 mt-1 transition-all duration-200 ${
                        isActive
                          ? 'text-gold-300 translate-x-1'
                          : 'text-white/35 group-hover:text-gold-400 group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </SectionReveal>

          {/* Right: Editorial Image + Active Practice Sub-Service Explorer */}
          <SectionReveal delay={0.14} className="lg:col-span-6 bg-navy-950/70 border border-white/15">
            {/* Image Stage */}
            <div className="relative h-60 sm:h-72 overflow-hidden border-b border-white/15 bg-navy-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={displayImage}
                  src={displayImage}
                  alt={displayImageAlt}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-gold-300 tabular-nums">
                  Practice {activeArea.number} · {activeArea.shortTitle}
                </span>
              </div>
            </div>

            {/* Sub-Service Segmented Navigation */}
            <div className="p-5 sm:p-8">
              <div
                role="tablist"
                aria-label={`${activeArea.title} programs`}
                className="flex flex-wrap gap-2 pb-6 border-b border-white/10"
              >
                {activeArea.subServices.map((sub, sIdx) => {
                  const selected = sIdx === activeSubIndex;
                  return (
                    <button
                      key={sub.id}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      onClick={() => setActiveSubIndex(sIdx)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                        selected
                          ? 'bg-gold-400 text-navy-950 border-gold-400 font-semibold'
                          : 'bg-navy-900/80 text-white/75 border-white/15 hover:border-gold-400/50 hover:text-white'
                      }`}
                    >
                      {sub.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Sub-Service Copy */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSub.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-6"
                >
                  <h4 className="font-editorial text-2xl font-medium text-white mb-3">
                    {activeSub.title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    {activeSub.summary}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {activeSub.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {activeSub.quote && (
                    <blockquote className="my-6 pt-5 border-t border-white/10">
                      <p className="font-editorial italic text-base sm:text-lg text-gold-300 leading-relaxed">
                        &ldquo;{activeSub.quote.text}&rdquo;
                      </p>
                      <footer className="mt-2 text-xs font-medium text-white/65">
                        ~ {activeSub.quote.author}
                      </footer>
                    </blockquote>
                  )}

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <span className="text-xs text-white/60">
                      Customized to your organization&apos;s culture &amp; goals
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
