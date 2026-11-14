import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, STRATEGIC_PILLARS } from '../data/siteContent';

export const ValuePropositionSection: React.FC = () => {
  return (
    <section id="approach" className="bg-canvas text-navy-900 py-20 sm:py-28 border-b border-navy-900/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Asymmetric Editorial Header + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-4">
              Why Strategic Evolution
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-navy-900 [text-wrap:balance]">
              {BRAND_INFO.introHeading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {BRAND_INFO.introBody.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-navy-900/80 leading-[1.7] max-w-[68ch]"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 border-b border-gold-500 pb-1 hover:text-gold-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <span>Examine Our Practice Areas</span>
                <ArrowUpRight className="w-4 h-4 text-gold-600" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <span>Request a Consultation</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hairline Separated Strategic Questions / Focus Pillars from Existing Home */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-navy-900/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STRATEGIC_PILLARS.map((pillar, idx) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between bg-surface border border-navy-900/10 p-7 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-navy-900/10">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold-600">
                    Focus Area
                  </span>
                  <span className="text-sm font-semibold text-navy-700 tabular-nums">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl font-medium text-navy-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-navy-900/75 leading-relaxed">
                  {pillar.statement}
                </p>
              </div>

              <a
                href={pillar.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 pt-4 border-t border-navy-900/10 inline-flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <span>{pillar.linkLabel}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-gold-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
