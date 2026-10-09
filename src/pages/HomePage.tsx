import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { FloatingChips } from '../components/FloatingChips';
import { MarqueeStrip } from '../components/MarqueeStrip';
import {
  CorporateIcon,
  ImmigrationIcon,
  ScalesOfJusticeIcon,
  RealEstateIcon,
  CriminalIcon,
  MedicalIcon,
  FamilyIcon,
  BrickCheckIcon,
} from '../components/LineIcons';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { PRACTICE_AREAS, ATTORNEYS, FAQS } from '../data/firmData';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={58} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={58} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={58} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={58} className="text-[#173330]" />;
      case 'medical-law':
        return <MedicalIcon size={58} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={58} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-24 bg-[#F1F4EC]">
        {/* Floating Badges that bounce autonomously on their own */}
        <FloatingChips variant="full" onNavigate={onNavigate} />

        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <div className="max-w-[720px] mx-auto">
            {/* Staggered Serif Headline with motion */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-serif font-semibold text-[#173330] tracking-tight leading-[1.12] mb-6">
              {['Legal', 'clarity.', 'Human', 'perspective.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-2.5 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#2E4C47] leading-relaxed max-w-[48ch] mx-auto mb-8 font-normal"
            >
              We cut through the legal complexity to show you exactly where you stand and how we win.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-7 py-3.5 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(198,144,46,0.25)] hover:shadow-[0_6px_18px_rgba(198,144,46,0.35)] cursor-pointer"
              >
                Book a consultation
              </button>
              <button
                onClick={() => onNavigate({ type: 'practice-areas' })}
                className="text-[#173330] hover:text-[#9C4A32] font-bold text-[0.96rem] border-b-2 border-[#173330] hover:border-[#9C4A32] pb-0.5 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>See our practice areas</span>
                <span>→</span>
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-8 sm:gap-14 mt-14 pt-8 border-t border-[#173330]/10 max-w-lg mx-auto"
            >
              <div className="text-center group cursor-default">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#173330] leading-none mb-1 group-hover:text-[#C6902E] transition-colors">
                  900+
                </span>
                <span className="text-xs sm:text-sm text-[#2E4C47] font-medium">
                  clients represented
                </span>
              </div>
              <div className="h-8 w-px bg-[#173330]/10" aria-hidden="true" />
              <div className="text-center group cursor-default">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#173330] leading-none mb-1 group-hover:text-[#C6902E] transition-colors">
                  6
                </span>
                <span className="text-xs sm:text-sm text-[#2E4C47] font-medium">
                  practice areas
                </span>
              </div>
              <div className="h-8 w-px bg-[#173330]/10" aria-hidden="true" />
              <div className="text-center group cursor-default">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#173330] leading-none mb-1 group-hover:text-[#C6902E] transition-colors">
                  15 yrs
                </span>
                <span className="text-xs sm:text-sm text-[#2E4C47] font-medium">
                  in practice
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS MOVING MARQUEE TICKER (Runs continually on loop) */}
      <MarqueeStrip
        speed={26}
        onItemClick={(phrase) => {
          if (phrase.includes('Consultation') || phrase.includes('Review')) {
            onOpenBooking();
          } else {
            onNavigate({ type: 'our-firm' });
          }
        }}
      />

      {/* 3. ABOUT / VALUE PROPOSITION (Scroll Animated) */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="scroll-reveal py-20 lg:py-24 bg-[#F1F4EC]"
      >
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left text column */}
            <div className="lg:col-span-6">
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-3">
                Our firm
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-5">
                Built around one idea.
              </h2>
              <p className="text-[#2E4C47] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Most people hire a lawyer because they are dealing with a difficult situation and cannot afford to make a mistake. What they usually encounter is thirty-page memos, calls routed through assistants, and invoices with unexpected line items.
              </p>
              <p className="text-[#2E4C47] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                We built our firm to do the opposite. You work directly with the attorney handling your file. We explain the reasoning behind every recommendation, put timelines in writing, and treat questions as an essential part of the work.
              </p>
              <button
                onClick={() => onNavigate({ type: 'attorneys' })}
                className="text-[#173330] hover:text-[#9C4A32] font-bold text-sm sm:text-base border-b-2 border-[#173330] hover:border-[#9C4A32] pb-1 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Meet the attorneys</span>
                <span>→</span>
              </button>
            </div>

            {/* Right value stack with staggered entry */}
            <div className="lg:col-span-6 space-y-4">
              {[
                'Direct access to the attorney handling your case, not a rotating assistant.',
                'Upfront fee quotes wherever the practice area allows for it.',
                'Plain-language updates at every stage, with no legal jargon left unexplained.',
                'Specialized attorneys in each practice area, not generalists trying to handle everything.',
              ].map((valueText, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 bg-[#E6E4D2]/45 border border-[#173330]/10 p-5 rounded-xl hover:bg-[#E6E4D2]/70 transition-colors"
                >
                  <BrickCheckIcon size={22} className="mt-0.5" />
                  <span className="text-sm sm:text-[0.96rem] text-[#173330] font-medium leading-relaxed">
                    {valueText}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. PRACTICE AREAS GRID (Scroll-Animated with Meaningful Icons) */}
      <section className="py-20 lg:py-24 bg-[#FAFCF6] border-y border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mb-12 sm:mb-14"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Practice areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-3">
              Six ways we help.
            </h2>
            <p className="text-[#2E4C47] text-base leading-relaxed">
              Each area below is handled by attorneys who practice in it exclusively, not generalists taking on every kind of case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRACTICE_AREAS.map((practice, idx) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onNavigate({ type: 'practice-detail', slug: practice.id })}
                className="group bg-[#FAFCF6] p-7 sm:p-8 rounded-xl border border-[#173330]/12 hover:border-[#173330]/30 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 mb-5 text-[#173330] group-hover:text-[#9C4A32] transition-colors group-hover:scale-105 duration-300">
                    {getPracticeIcon(practice.id)}
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-[#173330] mb-2 group-hover:text-[#9C4A32] transition-colors">
                    {practice.name}
                  </h3>
                  <p className="text-[#2E4C47] text-sm leading-relaxed mb-6 font-normal">
                    {practice.shortDesc}
                  </p>
                </div>
                <div>
                  <span className="text-[#9C4A32] group-hover:text-[#173330] font-bold text-xs uppercase tracking-wider border-b border-[#9C4A32] group-hover:border-[#173330] pb-0.5 transition-colors inline-block">
                    Learn more
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION ("How a case moves" with Staggered Scroll-In) */}
      <section className="py-20 lg:py-24 bg-[#E6E4D2]/60">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mb-12 sm:mb-14"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-3">
              How a case moves.
            </h2>
            <p className="text-[#2E4C47] text-base leading-relaxed">
              Four stages, the same for every practice area, so you always know what happens next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Consultation', desc: 'We listen first. We never recommend a strategy before we understand the full picture.' },
              { num: '02', title: 'Case review', desc: 'We assess the facts, potential exposure, and realistic options, then put our assessment in writing.' },
              { num: '03', title: 'Strategy', desc: 'You receive a plan you can actually read, with clear next steps and cost expectations.' },
              { num: '04', title: 'Representation', desc: 'We act on your behalf and send plain-language updates at every milestone.' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-white border-[#C6902E] shadow-md transform -translate-y-1'
                    : 'bg-[#FAFCF6] border-[#173330]/10 shadow-sm hover:border-[#173330]/20'
                }`}
              >
                <span className="font-serif font-bold text-3xl sm:text-4xl text-[#C6902E] block mb-3">
                  {step.num}
                </span>
                <h3 className="font-serif font-semibold text-lg text-[#173330] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#2E4C47] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SPOTLIGHT (Scroll-Animated) */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="scroll-reveal py-20 lg:py-24 bg-[#F1F4EC]"
      >
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
          <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center hover:shadow-md transition-shadow">
            {/* Circular line-art portrait */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-44 h-48 sm:w-52 sm:h-56 hover:scale-105 transition-transform duration-300">
                <AttorneyPortrait styleId="founder" size="100%" />
              </div>
            </div>

            {/* Quote on the other side */}
            <div className="md:col-span-8">
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[1.75rem] text-[#173330] leading-snug mb-6">
                “Clients deserve to understand what is happening in their case, not just be told to trust us.”
              </blockquote>
              <div>
                <div className="font-bold text-[#173330] text-base">
                  William Ashford Sr.
                </div>
                <div className="text-[#2E4C47] text-sm">
                  Partner, Jurista Law
                </div>
                <button
                  onClick={() => onNavigate({ type: 'attorney-detail', id: 'william-ashford' })}
                  className="text-[#9C4A32] font-semibold text-xs uppercase tracking-wider mt-3 inline-block hover:underline cursor-pointer"
                >
                  View profile and background →
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIALS (Scroll-Animated) */}
      <section className="scroll-reveal py-20 lg:py-24 bg-[#E6E4D2]/60 border-y border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mb-12"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Client stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight">
              What clients say about working with us.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: '“From the first call, I understood where I stood. No guesswork and no waiting around.”',
                author: 'Jonathan Sterling',
                tag: 'Medical negligence claim',
              },
              {
                quote: '“They walked me through every option before I had to decide anything. I never felt rushed.”',
                author: 'Amara Reyes',
                tag: 'Immigration visa petition',
              },
              {
                quote: '“No surprises and no jargon. Just a clear plan we could execute on.”',
                author: 'Michael Chen',
                tag: 'Corporate acquisition',
              },
            ].map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAFCF6] p-7 sm:p-8 rounded-xl border border-[#173330]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-all hover:-translate-y-1"
              >
                <p className="font-serif text-lg text-[#173330] leading-relaxed mb-6">
                  {testi.quote}
                </p>
                <div>
                  <div className="font-bold text-sm text-[#173330]">
                    {testi.author}
                  </div>
                  <div className="text-xs font-semibold text-[#9C4A32] mt-0.5">
                    {testi.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ATTORNEYS PREVIEW GRID (Scroll-Animated) */}
      <section className="scroll-reveal py-20 lg:py-24 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
                Our team
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight">
                The attorneys on your case.
              </h2>
            </div>
            <button
              onClick={() => onNavigate({ type: 'attorneys' })}
              className="text-[#9C4A32] hover:text-[#173330] font-bold text-sm border-b border-[#9C4A32] pb-0.5 self-start sm:self-auto cursor-pointer"
            >
              Meet the full team →
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ATTORNEYS.slice(0, 3).map((attorney, idx) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onNavigate({ type: 'attorney-detail', id: attorney.id })}
                className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-28 h-28 mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                  <AttorneyPortrait styleId={attorney.portraitStyle} size="100%" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-[#173330] mb-1 group-hover:text-[#9C4A32] transition-colors">
                  {attorney.name}
                </h3>
                <span className="text-xs text-[#2E4C47] block max-w-[28ch] mx-auto leading-relaxed">
                  {attorney.role}
                </span>
                <div className="mt-4 pt-4 border-t border-[#173330]/8">
                  <span className="text-xs text-[#9C4A32] font-semibold group-hover:underline">
                    View profile →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION (Scroll-Animated) */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="scroll-reveal py-20 lg:py-24 bg-[#E6E4D2]/60 border-t border-[#173330]/10"
      >
        <div className="max-w-[820px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#173330] tracking-tight leading-tight">
              Questions people ask us.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#173330]/15 shadow-sm'
                      : 'bg-[#FAFCF6] border-[#173330]/8 hover:border-[#173330]/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#173330] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="font-serif text-2xl text-[#C6902E] leading-none shrink-0 font-normal transition-transform duration-200">
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#2E4C47] leading-relaxed border-t border-[#173330]/6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 10. FINAL CTA BAND */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
