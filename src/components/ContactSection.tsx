import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Printer, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/siteContent';

interface FormState {
  organization: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  emailUpdates: boolean;
}

const INITIAL_FORM: FormState = {
  organization: '',
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  emailUpdates: false,
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.organization.trim()) nextErrors.organization = 'Organization name is required.';
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-navy-900 text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Conclusion CTA + Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-400 mb-3">
                Reach Out to Us
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-white [text-wrap:balance]">
                Want to learn more? Contact us.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
                {BRAND_INFO.contact.prompt} Whether planning for organizational change, executive coaching, or workplace violence prevention, we partner with you to drive results.
              </p>
            </div>

            {/* Verified Office & Telephone Details */}
            <div className="pt-8 border-t border-white/15 space-y-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-300">
                How to Find Us
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {BRAND_INFO.contact.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=1200+Agora+Drive+Suite+176+Bel+Air+MD+21014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs font-medium text-gold-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    >
                      View Larger Map
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <a
                    href={BRAND_INFO.contact.phoneHref}
                    className="text-sm font-medium text-white hover:text-gold-300 transition-colors tabular-nums"
                  >
                    P: {BRAND_INFO.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <Printer className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-sm font-medium text-white/85 tabular-nums">
                    F: {BRAND_INFO.contact.fax}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-surface text-navy-900 p-7 sm:p-10 lg:p-12 border border-gold-400/25"
          >
            {submitted ? (
              <div className="py-10 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-900 text-gold-300 rounded-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-navy-900">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 text-base text-navy-900/80 leading-relaxed max-w-lg">
                    {BRAND_INFO.contact.confirmation}
                  </p>
                </div>
                <div className="pt-4 border-t border-navy-900/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-navy-900/60">
                    Submitted for {form.organization} ({form.email})
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-sm font-semibold text-navy-900 border border-navy-900/25 hover:bg-navy-900 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-5 border-b border-navy-900/10 flex items-baseline justify-between gap-4">
                  <h3 className="font-editorial text-2xl font-medium text-navy-900">
                    Send a Message
                  </h3>
                  <span className="text-xs text-navy-900/55">
                    * Required fields
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-organization"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                    >
                      Organization Name *
                    </label>
                    <input
                      id="contact-organization"
                      type="text"
                      required
                      value={form.organization}
                      onChange={(e) => {
                        setForm({ ...form, organization: e.target.value });
                        if (errors.organization) setErrors({ ...errors, organization: undefined });
                      }}
                      className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm"
                    />
                    {errors.organization && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={(e) => {
                      setForm({ ...form, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 placeholder:text-navy-900/40 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className="w-full px-4 py-3 text-sm bg-canvas border border-navy-900/20 text-navy-900 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 rounded-sm resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
                  <label className="inline-flex items-center gap-2.5 text-sm text-navy-900/75 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.emailUpdates}
                      onChange={(e) => setForm({ ...form, emailUpdates: e.target.checked })}
                      className="w-4 h-4 accent-navy-900 rounded-sm"
                    />
                    <span>Check here to receive email updates</span>
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-navy-900 hover:bg-gold-600 transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
