import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { FloatingChips } from '../components/FloatingChips';
import {
  BuildingMapIllustration,
  PhoneLineIcon,
  MailLineIcon,
  LocationPinIcon,
  ClockLineIcon,
  BrickCheckIcon,
} from '../components/LineIcons';
import { PRACTICE_AREAS } from '../data/firmData';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [practice, setPractice] = useState<PracticeSlug>('corporate-law');
  const [message, setMessage] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Intro Band on --panel background */}
      <section className="relative overflow-hidden bg-[#E6E4D2]/60 pt-6 pb-16 lg:pb-20 border-b border-[#173330]/10">
        <FloatingChips variant="calm" onNavigate={onNavigate} />

        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact' }]} onNavigate={onNavigate} />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-4"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-4">
              Get in touch.
            </h1>
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed">
              Every inquiry is reviewed directly by an attorney in the relevant practice area. We respond with a written assessment within two business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              {!isSubmitted ? (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330] mb-2">
                    Send us a message
                  </h2>
                  <p className="text-sm text-[#2E4C47] mb-8">
                    Confidential and protected under attorney-client privilege.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                    {/* Practice Area Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                        Practice area *
                      </label>
                      <select
                        value={practice}
                        onChange={(e) => setPractice(e.target.value as PracticeSlug)}
                        className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-4 py-3 text-[#173330] font-medium focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                        required
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.id}>
                            {pa.name} — {pa.shortDesc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                          Full name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-4 py-3 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                          Email address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-4 py-3 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-4 py-3 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                        How can we help? *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your legal situation, any relevant dates, and the best time to call..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-4 py-3 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                      />
                    </div>

                    {/* Urgent Flag */}
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        id="contact-urgent"
                        checked={isUrgent}
                        onChange={(e) => setIsUrgent(e.target.checked)}
                        className="w-4 h-4 rounded border-[#173330]/30 text-[#9C4A32] focus:ring-[#9C4A32]"
                      />
                      <label htmlFor="contact-urgent" className="text-xs text-[#2E4C47] cursor-pointer">
                        Mark as time-sensitive matter (court date or closing within 48h)
                      </label>
                    </div>

                    {/* Submit Button in Mustard */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] font-bold py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer text-base"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Screen */
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-[#E6E4D2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BrickCheckIcon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#173330]">
                    Message received
                  </h3>
                  <p className="text-sm text-[#2E4C47] max-w-md mx-auto leading-relaxed">
                    Thank you, <b>{fullName}</b>. An attorney will review your message and contact you at <b>{email}</b> within two business days.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-[#173330] text-[#F1F4EC] px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#2E4C47] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </motion.div>

            {/* Right: Contact Info Card + Line-Art Building Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Illustrated Map & Building */}
              <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
                <BuildingMapIllustration />
                <div className="text-xs text-[#2E4C47]/70 italic mt-3">
                  Jurista Law · 450 Lexington Avenue, New York, NY
                </div>
              </div>

              {/* Office Details Card */}
              <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#9C4A32] mb-3">
                    Office location
                  </h3>
                  <div className="flex items-start gap-3 text-sm text-[#2E4C47]">
                    <LocationPinIcon size={18} className="mt-0.5 text-[#9C4A32]" />
                    <address className="not-italic leading-relaxed">
                      <b>Jurista Law PLLC</b><br />
                      450 Lexington Avenue, Suite 2400<br />
                      New York, NY 10017
                    </address>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#173330]/8">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#9C4A32] mb-3">
                    Phone and email
                  </h3>
                  <div className="space-y-2 text-sm text-[#2E4C47]">
                    <div className="flex items-center gap-3">
                      <PhoneLineIcon size={18} className="text-[#9C4A32]" />
                      <a href="tel:+20116114574" className="hover:underline font-semibold text-[#173330]">
                        +2 011 611-4574
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailLineIcon size={18} className="text-[#9C4A32]" />
                      <a href="mailto:w.ashford@jurista.com" className="hover:underline">
                        w.ashford@jurista.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#173330]/8">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#9C4A32] mb-3">
                    Office hours
                  </h3>
                  <div className="flex items-start gap-3 text-sm text-[#2E4C47]">
                    <ClockLineIcon size={18} className="mt-0.5 text-[#9C4A32]" />
                    <div className="leading-relaxed text-xs sm:text-sm">
                      <div>Monday – Friday: 8:30 AM – 6:30 PM EST</div>
                      <div>Saturday: By appointment for urgent matters</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
