import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { FloatingChips } from '../components/FloatingChips';
import {
  CorporateIcon,
  ImmigrationIcon,
  RealEstateIcon,
  CriminalIcon,
  MedicalIcon,
  FamilyIcon,
} from '../components/LineIcons';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { CASE_STUDIES, PRACTICE_AREAS } from '../data/firmData';

interface CaseStudiesIndexPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  initialFilter?: string;
}

export const CaseStudiesIndexPage: React.FC<CaseStudiesIndexPageProps> = ({
  onNavigate,
  onOpenBooking,
  initialFilter = 'all',
}) => {
  const [filter, setFilter] = useState<string>(initialFilter);

  const filteredCases =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.practiceSlug === filter);

  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={36} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={36} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={36} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={36} className="text-[#173330]" />;
      case 'medical-law':
        return <MedicalIcon size={36} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={36} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Intro Band on --panel background */}
      <section className="relative overflow-hidden bg-[#E6E4D2]/60 pt-6 pb-16 lg:pb-20 border-b border-[#173330]/10">
        <FloatingChips variant="calm" onNavigate={onNavigate} />

        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Case studies' }]} onNavigate={onNavigate} />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-4"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Representative cases
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-4">
              Case studies
            </h1>
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed">
              Detailed summaries of real matters we have handled across our practice areas. Client names and identifying details have been changed to maintain attorney-client confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Row + Grid */}
      <section className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          {/* Filter Bar */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 scrollbar-none text-xs sm:text-sm font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#173330] text-[#F1F4EC] font-bold'
                  : 'text-[#2E4C47] hover:bg-[#E6E4D2]/50'
              }`}
            >
              All case studies ({CASE_STUDIES.length})
            </button>
            {PRACTICE_AREAS.map((pa) => (
              <button
                key={pa.id}
                onClick={() => setFilter(pa.id)}
                className={`px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                  filter === pa.id
                    ? 'bg-[#173330] text-[#F1F4EC] font-bold'
                    : 'text-[#2E4C47] hover:bg-[#E6E4D2]/50'
                }`}
              >
                {pa.name}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((cs, idx) => {
              const pa = PRACTICE_AREAS.find((p) => p.id === cs.practiceSlug);
              return (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onNavigate({ type: 'case-study-detail', id: cs.id })}
                  className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Practice Tag + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 bg-[#E6E4D2]/60 rounded-xl group-hover:scale-105 transition-transform">
                          {getPracticeIcon(cs.practiceSlug)}
                        </span>
                        <span className="text-xs uppercase font-bold tracking-wider text-[#9C4A32]">
                          {pa?.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#173330] bg-[#E6E4D2]/40 px-3 py-1 rounded-full">
                        {cs.summaryStats.timeline}
                      </span>
                    </div>

                    <h2 className="font-serif font-semibold text-2xl text-[#173330] group-hover:text-[#9C4A32] transition-colors mb-3 leading-snug">
                      {cs.title}
                    </h2>

                    <p className="text-sm text-[#2E4C47] leading-relaxed mb-6 font-normal">
                      {cs.outcomeSummary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#173330]/8 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                      Read case study →
                    </span>
                    <span className="text-xs font-bold text-[#9C4A32]">
                      {cs.summaryStats.outcome}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
