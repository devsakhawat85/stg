import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';
import { SectionReveal } from './SectionReveal';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="bg-surface text-navy-900 py-20 sm:py-28 border-b border-navy-900/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-navy-900/10">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-3">
              Client Testimonials
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-navy-900 [text-wrap:balance]">
              What people are saying about Strategic Evolution.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm font-medium text-navy-700 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 inline-flex items-center justify-center border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 inline-flex items-center justify-center border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          </div>
        </SectionReveal>

        {/* Editorial Quote Display + Client Roster */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Featured Large Quotation */}
          <SectionReveal delay={0.08} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-canvas border border-navy-900/10 p-7 sm:p-10 lg:p-12"
              >
                <Quote className="w-8 h-8 text-gold-500 mb-6" aria-hidden="true" />
                <blockquote className="font-editorial text-xl sm:text-2xl leading-[1.55] text-navy-900">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-8 pt-6 border-t border-navy-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-base font-semibold text-navy-900">
                      {current.author}
                    </p>
                    <p className="text-sm text-navy-900/70">
                      {current.role} · {current.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </SectionReveal>

          {/* Client Selector List */}
          <SectionReveal delay={0.14} className="lg:col-span-4 divide-y divide-navy-900/10 border-t border-b border-navy-900/10">
            {TESTIMONIALS.map((item, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-full text-left py-4 px-4 transition-colors duration-150 flex items-start justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                    active ? 'bg-navy-900 text-white' : 'hover:bg-canvas text-navy-900'
                  }`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${active ? 'text-white' : 'text-navy-900'}`}>
                      {item.author}
                    </p>
                    <p className={`text-xs mt-0.5 ${active ? 'text-gold-300' : 'text-navy-900/65'}`}>
                      {item.organization}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium tabular-nums ${
                      active ? 'text-gold-300' : 'text-navy-900/40'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
