import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_INFO, SITE_ASSETS } from '../data/siteContent';

const METHODOLOGY_STEPS = [
  {
    num: '01',
    verb: 'Engage',
    detail:
      'Partnering with senior and emerging leaders, teams, and organizations on both business structure and behavioral and cultural alignment.',
  },
  {
    num: '02',
    verb: 'Enhance',
    detail:
      'Performing an overview and analysis of structure and behaviors to develop customized leadership, climate survey, crisis planning, and conflict resolution programs.',
  },
  {
    num: '03',
    verb: 'Empower',
    detail:
      'Equipping leaders and personnel through executive coaching, customized workplace training, and Train the Trainer programs to drive lasting ROI.',
  },
];

export const MethodologySection: React.FC = () => {
  return (
    <section id="philosophy" className="bg-surface text-navy-900 py-20 sm:py-28 border-b border-navy-900/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Image-Led Split Feature: Brass Compass + Executive Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] overflow-hidden border border-navy-900/15 bg-navy-900">
              <img
                src={SITE_ASSETS.brassCompass}
                alt="Brass navigation compass on map illustrating strategic executive guidance"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <p className="text-xs font-semibold tracking-wider uppercase text-gold-300 mb-1">
                  Executive Guide
                </p>
                <p className="font-editorial text-lg leading-snug">
                  Unbiased, neutral strategic navigation aligned to organizational goals.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-3">
                Strategic Philosophy
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.14] text-navy-900 [text-wrap:balance]">
                {ABOUT_INFO.whyQuestion}{' '}
                <span className="text-navy-700">{ABOUT_INFO.whySubtext}</span>
              </h2>
            </div>

            {/* Numbered 01 / 02 / 03 Progression */}
            <div className="mt-10 divide-y divide-navy-900/10 border-t border-b border-navy-900/10">
              {METHODOLOGY_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="text-xs font-semibold text-gold-600 tabular-nums">
                      {step.num}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium text-navy-900">
                      {step.verb}
                    </h3>
                  </div>
                  <p className="sm:col-span-8 text-sm sm:text-base text-navy-900/75 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* In The News Spotlight — Preserved from Existing Website */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-canvas border border-navy-900/10 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-1">
              In The News
            </p>
            <h3 className="font-editorial text-xl sm:text-2xl font-medium text-navy-900">
              {ABOUT_INFO.inTheNews.headline}
            </h3>
          </div>
          <p className="lg:col-span-7 text-sm sm:text-base text-navy-900/75 leading-relaxed">
            {ABOUT_INFO.inTheNews.summary}
          </p>
          <div className="lg:col-span-2 lg:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <span>Discuss Change</span>
              <ArrowUpRight className="w-4 h-4 text-gold-600" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
