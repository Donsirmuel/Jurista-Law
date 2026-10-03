import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { OurFirmHero } from '../components/heroes/OurFirmHero';
import { BrickCheckIcon } from '../components/LineIcons';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { ATTORNEYS, TIMELINE_MILESTONES, FIRM_VALUES } from '../data/firmData';

interface OurFirmPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const OurFirmPage: React.FC<OurFirmPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full">
      {/* Dedicated Two-Column Hero with Office Desk & Scales Illustration */}
      <OurFirmHero onNavigate={onNavigate} />

      {/* Story Section: Two Columns (Left Text, Right Founding Principle Card) */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 lg:py-24 bg-[#F1F4EC]"
      >
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-5 text-[#2E4C47] text-base leading-relaxed">
              <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block">
                The philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight">
                Counsel you can actually follow.
              </h2>
              <p>
                When William Ashford Sr. established Jurista Law in 2011, he saw a legal industry that seemed more interested in billing hours than giving straightforward answers. Routine contracts were buried in legal boilerplate, calls were routed through multiple layers of assistants, and invoices arrived with surprise charges.
              </p>
              <p>
                We built Jurista Law around the opposite principles: direct attorney access, upfront fee transparency, and explanations in plain English. If you do not understand the practical trade-offs of a contract clause or an immigration waiver, that is not your failing. It is our job to make it clear.
              </p>
              <p>
                Today, our firm includes six practice disciplines, but our standard remains the same. You deal directly with the attorney handling your file, we explain the reasoning behind our recommendations, and we put costs in writing before we begin.
              </p>
            </div>

            {/* Right Founding Principle & Operating Commitments Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-7 sm:p-10 shadow-sm space-y-6">
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#173330] leading-snug">
                  “If a client leaves our conference room feeling confused, we have failed at our job. The law is complicated enough without lawyers performing for each other.”
                </blockquote>
                <div className="border-t border-[#173330]/10 pt-4 flex items-center justify-between text-xs text-[#2E4C47]">
                  <span className="font-bold text-[#173330]">William Ashford Sr.</span>
                  <span>Managing Partner · Bar of NY</span>
                </div>

                <div className="border-t border-[#173330]/8 pt-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-[#2E4C47]">
                    <BrickCheckIcon size={16} className="mt-0.5 shrink-0" />
                    <span>Written cost caps agreed before work begins</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#2E4C47]">
                    <BrickCheckIcon size={16} className="mt-0.5 shrink-0" />
                    <span>Direct phone and email contact with your lead attorney</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#2E4C47]">
                    <BrickCheckIcon size={16} className="mt-0.5 shrink-0" />
                    <span>Statutory deadlines tracked in real-time with written client updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Row: 4 Cards */}
      <section className="py-20 bg-[#FAFCF6] border-y border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="max-w-xl mb-12"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Our standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-3">
              How we work with clients.
            </h2>
            <p className="text-[#2E4C47] text-base leading-relaxed">
              Four operating rules that guide every engagement we accept.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FIRM_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F1F4EC] p-6 sm:p-7 rounded-xl border border-[#173330]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E6E4D2] flex items-center justify-center mb-4">
                    <BrickCheckIcon size={20} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#173330] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[#2E4C47] text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Timeline: Genuine Sequence */}
      <section className="py-20 lg:py-24 bg-[#F1F4EC]">
        <div className="max-w-[940px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-3">
              Fifteen years in practice.
            </h2>
            <p className="text-[#2E4C47] text-base leading-relaxed">
              From our first corporate office in Manhattan to a collaborative six-discipline partnership.
            </p>
          </motion.div>

          {/* Timeline Stack with Staggered Scroll-In */}
          <div className="relative border-l-2 border-[#173330]/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Year Marker Pin */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-6 h-6 rounded-full bg-[#FAFCF6] border-2 border-[#C6902E] flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#C6902E]" />
                </div>

                <div className="bg-[#FAFCF6] p-6 rounded-xl border border-[#173330]/10 shadow-sm hover:border-[#173330]/25 transition-colors">
                  <span className="font-serif font-bold text-xl text-[#C6902E] block mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-serif font-semibold text-lg text-[#173330] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2E4C47] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight Block */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
        className="py-16 bg-[#E6E4D2]/40 border-t border-[#173330]/10"
      >
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
          <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-44 h-48">
                <AttorneyPortrait styleId="founder" size="100%" />
              </div>
            </div>
            <div className="md:col-span-8">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#173330] leading-snug mb-5">
                “Clients deserve to understand exactly what’s happening in their case — not just be told to trust us.”
              </blockquote>
              <div className="font-bold text-[#173330] text-base">
                William Ashford Sr.
              </div>
              <div className="text-[#2E4C47] text-sm">
                Founder, Jurista Law
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Teaser */}
      <section className="py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
                Attorneys
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight">
                Attorneys who focus on one area of law.
              </h2>
            </div>
            <button
              onClick={() => onNavigate({ type: 'attorneys' })}
              className="text-[#9C4A32] hover:text-[#173330] font-bold text-sm border-b border-[#9C4A32] pb-0.5 cursor-pointer self-start sm:self-auto"
            >
              Meet the team →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ATTORNEYS.slice(0, 3).map((att, idx) => (
              <motion.div
                key={att.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => onNavigate({ type: 'attorney-detail', id: att.id })}
                className="bg-[#FAFCF6] border border-[#173330]/12 rounded-xl p-7 text-center hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <AttorneyPortrait styleId={att.portraitStyle} size="100%" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#173330] mb-1 group-hover:text-[#9C4A32]">
                  {att.name}
                </h3>
                <span className="text-xs text-[#2E4C47] block">{att.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
