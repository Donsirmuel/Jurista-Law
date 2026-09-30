import React from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  CorporateIcon,
  ImmigrationIcon,
  ScalesOfJusticeIcon,
  RealEstateIcon,
  CriminalIcon,
  MedicalIcon,
  FamilyIcon,
  BrickCheckIcon,
  MailLineIcon,
  PhoneLineIcon,
} from '../components/LineIcons';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { PRACTICE_AREAS, ATTORNEYS, CASE_STUDIES } from '../data/firmData';

interface PracticeAreaDetailPageProps {
  slug: PracticeSlug;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const PracticeAreaDetailPage: React.FC<PracticeAreaDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const currentPractice = PRACTICE_AREAS.find((p) => p.id === slug) || PRACTICE_AREAS[0];
  const leadAttorney = ATTORNEYS.find((a) => a.id === currentPractice.leadAttorneyId) || ATTORNEYS[0];
  const relatedCases = CASE_STUDIES.filter((cs) => currentPractice.relatedCaseStudyIds.includes(cs.id));

  const getPracticeIcon = (practiceSlug: PracticeSlug, size = 64) => {
    switch (practiceSlug) {
      case 'corporate-law':
        return <CorporateIcon size={size} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={size} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={size} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={size} className="text-[#173330]" />;
      case 'medical-law':
        return <ScalesOfJusticeIcon size={size} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={size} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Detail Page Header Banner */}
      <section className="bg-[#E6E4D2]/40 pt-6 pb-12 border-b border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: 'Practice Areas', route: { type: 'practice-areas' } },
              { label: currentPractice.name },
            ]}
            onNavigate={onNavigate}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                Practice Area
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight mb-2">
                {currentPractice.name}
              </h1>
              <p className="text-base sm:text-lg text-[#2E4C47] max-w-2xl font-normal">
                {currentPractice.shortDesc}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-md self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              Consult with this team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Two Column Layout (Sidebar Left, Content Right) */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Sidebar (Sticky on Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            {/* Practice Areas Mini-Nav */}
            <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 pb-2 border-b border-[#173330]/8">
                Practice Areas
              </h3>
              <nav className="space-y-2 text-sm font-medium">
                {PRACTICE_AREAS.map((pa) => {
                  const isActive = pa.id === currentPractice.id;
                  return (
                    <button
                      key={pa.id}
                      onClick={() => onNavigate({ type: 'practice-detail', slug: pa.id })}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#E6E4D2] text-[#9C4A32] font-bold'
                          : 'text-[#2E4C47] hover:bg-[#E6E4D2]/40 hover:text-[#173330]'
                      }`}
                    >
                      <span>{pa.name}</span>
                      {isActive && <span className="text-[#9C4A32] font-bold">●</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Lead Attorney Card */}
            <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm text-center">
              <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#9C4A32] block mb-3">
                Lead Practitioner
              </span>
              <div
                onClick={() => onNavigate({ type: 'attorney-detail', id: leadAttorney.id })}
                className="w-24 h-24 mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <AttorneyPortrait styleId={leadAttorney.portraitStyle} size="100%" />
              </div>
              <h4
                onClick={() => onNavigate({ type: 'attorney-detail', id: leadAttorney.id })}
                className="font-serif font-semibold text-lg text-[#173330] hover:text-[#9C4A32] transition-colors cursor-pointer"
              >
                {leadAttorney.name}
              </h4>
              <p className="text-xs text-[#2E4C47] mt-0.5 mb-4">
                {leadAttorney.role}
              </p>

              <div className="text-xs text-[#2E4C47] space-y-2 pt-3 border-t border-[#173330]/8 text-left mb-5">
                <div className="flex items-center gap-2">
                  <MailLineIcon size={14} className="text-[#9C4A32]" />
                  <a href={`mailto:${leadAttorney.email}`} className="hover:underline truncate">
                    {leadAttorney.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneLineIcon size={14} className="text-[#9C4A32]" />
                  <a href={`tel:${leadAttorney.phone}`} className="hover:underline">
                    {leadAttorney.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#173330] hover:bg-[#2E4C47] text-[#F1F4EC] py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Book with {leadAttorney.name.split(' ')[0]}
              </button>
            </div>

            {/* Fee Transparency Box */}
            <div className="bg-[#E6E4D2]/40 border border-[#173330]/10 rounded-xl p-5 text-xs text-[#2E4C47]">
              <span className="font-bold text-[#173330] block mb-1">Fee Structure</span>
              <p className="leading-relaxed">{currentPractice.feeStructure}</p>
            </div>
          </aside>

          {/* Right Main Column */}
          <main className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-base sm:text-[1.05rem] text-[#2E4C47] leading-relaxed"
            >
              <p className="font-medium text-[#173330] text-lg sm:text-xl font-serif">
                {currentPractice.tagline}
              </p>
              {currentPractice.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.section>

            {/* Visual Anchor Scene with Meaningful Icon */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 sm:p-10 flex items-center justify-center gap-8 shadow-sm"
            >
              <div className="w-24 h-24 shrink-0 text-[#173330]">
                {getPracticeIcon(currentPractice.id, 90)}
              </div>
              <div className="max-w-md">
                <h4 className="font-serif font-semibold text-xl text-[#173330] mb-2">
                  Dedicated {currentPractice.name} Practice
                </h4>
                <p className="text-sm text-[#2E4C47] leading-relaxed">
                  Every document, negotiation, or court appearance is handled exclusively by attorneys who focus on this field day in and day out.
                </p>
              </div>
            </motion.div>

            {/* Capabilities Checklist */}
            <section className="pt-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65 }}
                className="mb-6"
              >
                <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                  Scope of Representation
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330]">
                  Specific Capabilities
                </h3>
                <p className="text-sm text-[#2E4C47] mt-1">
                  What we routinely draft, litigate, and negotiate in {currentPractice.name}.
                </p>
              </motion.div>

              <div className="space-y-3.5">
                {currentPractice.capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-3.5 bg-[#FAFCF6] border border-[#173330]/10 p-4.5 rounded-xl shadow-sm"
                  >
                    <BrickCheckIcon size={20} className="mt-0.5" />
                    <span className="text-sm sm:text-base text-[#173330] font-medium leading-relaxed">
                      {cap}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Approach (Sequential numbered list in mustard) */}
            <section className="pt-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65 }}
                className="mb-6"
              >
                <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                  Methodology
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330]">
                  Our Approach
                </h3>
                <p className="text-sm text-[#2E4C47] mt-1">
                  How we progress from initial evaluation to conclusive resolution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {currentPractice.approachSteps.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-[#FAFCF6] border border-[#173330]/10 p-6 rounded-xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-serif font-bold text-3xl text-[#C6902E] block mb-2 leading-none">
                        {step.number}
                      </span>
                      <h4 className="font-serif font-semibold text-lg text-[#173330] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#2E4C47] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Related Case Studies Strip */}
            {relatedCases.length > 0 && (
              <section className="pt-6 border-t border-[#173330]/10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                      Track Record
                    </span>
                    <h3 className="text-2xl font-serif font-semibold text-[#173330]">
                      Related Case Results
                    </h3>
                  </div>
                  <button
                    onClick={() => onNavigate({ type: 'case-studies' })}
                    className="text-xs text-[#9C4A32] font-bold hover:underline cursor-pointer"
                  >
                    View all cases →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedCases.map((cs, idx) => (
                    <motion.div
                      key={cs.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      onClick={() => onNavigate({ type: 'case-study-detail', id: cs.id })}
                      className="bg-[#FAFCF6] border border-[#173330]/10 p-6 rounded-xl hover:border-[#173330]/25 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#9C4A32] uppercase tracking-wider mb-2">
                          {cs.summaryStats.outcome}
                        </div>
                        <h4 className="font-serif font-semibold text-base text-[#173330] group-hover:text-[#9C4A32] transition-colors mb-2 line-clamp-2">
                          {cs.title}
                        </h4>
                        <p className="text-xs text-[#2E4C47] leading-relaxed line-clamp-2 mb-4">
                          {cs.outcomeSummary}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                        Read case study →
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
