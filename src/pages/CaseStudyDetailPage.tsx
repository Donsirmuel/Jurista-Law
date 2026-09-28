import React from 'react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  CorporateIcon,
  ImmigrationIcon,
  RealEstateIcon,
  CriminalIcon,
  MedicalIcon,
  FamilyIcon,
  BrickCheckIcon,
} from '../components/LineIcons';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { CASE_STUDIES, PRACTICE_AREAS, ATTORNEYS } from '../data/firmData';

interface CaseStudyDetailPageProps {
  id: string;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  id,
  onNavigate,
  onOpenBooking,
}) => {
  const caseStudy = CASE_STUDIES.find((cs) => cs.id === id) || CASE_STUDIES[0];
  const practice = PRACTICE_AREAS.find((p) => p.id === caseStudy.practiceSlug);
  const leadAttorney = ATTORNEYS.find((a) => a.id === caseStudy.leadAttorneyId);
  const otherCases = CASE_STUDIES.filter((cs) => cs.id !== caseStudy.id).slice(0, 2);

  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={24} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={24} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={24} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={24} className="text-[#173330]" />;
      case 'medical-law':
        return <MedicalIcon size={24} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={24} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner (Calm, no floating chips) */}
      <section className="bg-[#E6E4D2]/40 pt-6 pb-12 border-b border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: 'Case Studies', route: { type: 'case-studies' } },
              { label: caseStudy.title },
            ]}
            onNavigate={onNavigate}
          />

          <div className="mt-4 max-w-3xl">
            {/* Eyebrow tag with practice icon + label */}
            <div className="flex items-center gap-2 mb-3">
              <span>{getPracticeIcon(caseStudy.practiceSlug)}</span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#9C4A32]">
                {practice?.name}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed">
              {caseStudy.outcomeSummary}
            </p>
          </div>

          {/* Summary Strip: 3 Key Stat Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#173330]/10 max-w-2xl">
            <div className="bg-[#FAFCF6] border border-[#173330]/10 p-4 rounded-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2E4C47] block mb-1">
                Timeline
              </span>
              <span className="font-serif font-bold text-xl text-[#173330]">
                {caseStudy.summaryStats.timeline}
              </span>
            </div>
            <div className="bg-[#FAFCF6] border border-[#173330]/10 p-4 rounded-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2E4C47] block mb-1">
                Outcome
              </span>
              <span className="font-serif font-bold text-xl text-[#9C4A32]">
                {caseStudy.summaryStats.outcome}
              </span>
            </div>
            <div className="bg-[#FAFCF6] border border-[#173330]/10 p-4 rounded-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2E4C47] block mb-1">
                Practice
              </span>
              <span className="font-serif font-bold text-xl text-[#173330]">
                {caseStudy.summaryStats.practice}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Body */}
      <section className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Narrative Sections (Left Column) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Situation */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6E4D2] flex items-center justify-center font-serif font-bold text-sm text-[#173330]">
                    1
                  </div>
                  <h2 className="font-serif font-semibold text-2xl text-[#173330]">
                    The Situation
                  </h2>
                </div>
                <div className="bg-[#FAFCF6] border border-[#173330]/10 p-6 sm:p-7 rounded-xl shadow-sm space-y-3 text-base text-[#2E4C47] leading-relaxed">
                  <p className="font-medium text-[#173330]">
                    Client Context: {caseStudy.clientContext}
                  </p>
                  {caseStudy.situation.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Approach */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6E4D2] flex items-center justify-center font-serif font-bold text-sm text-[#173330]">
                    2
                  </div>
                  <h2 className="font-serif font-semibold text-2xl text-[#173330]">
                    Our Legal Strategy &amp; Approach
                  </h2>
                </div>
                <div className="bg-[#FAFCF6] border border-[#173330]/10 p-6 sm:p-7 rounded-xl shadow-sm space-y-3 text-base text-[#2E4C47] leading-relaxed">
                  {caseStudy.approach.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Outcome */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C6902E] flex items-center justify-center font-serif font-bold text-sm text-[#173330]">
                    3
                  </div>
                  <h2 className="font-serif font-semibold text-2xl text-[#173330]">
                    The Conclusive Outcome
                  </h2>
                </div>
                <div className="bg-[#FAFCF6] border border-[#173330]/10 p-6 sm:p-7 rounded-xl shadow-sm space-y-3 text-base text-[#2E4C47] leading-relaxed">
                  {caseStudy.outcome.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Client Quote Card (if present) */}
              {caseStudy.clientQuote && (
                <div className="bg-[#E6E4D2]/60 border border-[#173330]/12 p-7 sm:p-8 rounded-2xl shadow-sm">
                  <blockquote className="font-serif italic text-xl text-[#173330] leading-snug mb-4">
                    “{caseStudy.clientQuote.quote}”
                  </blockquote>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#173330]">
                      {caseStudy.clientQuote.author}
                    </span>
                    <span className="text-[#9C4A32] font-semibold">
                      {caseStudy.clientQuote.roleOrTitle}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (Lead Attorney & Consultation) */}
            <aside className="lg:col-span-4 space-y-6">
              {leadAttorney && (
                <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm text-center">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#9C4A32] block mb-3">
                    Lead Counsel on This Matter
                  </span>
                  <div
                    onClick={() => onNavigate({ type: 'attorney-detail', id: leadAttorney.id })}
                    className="w-24 h-24 mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <AttorneyPortrait styleId={leadAttorney.portraitStyle} size="100%" />
                  </div>
                  <h3
                    onClick={() => onNavigate({ type: 'attorney-detail', id: leadAttorney.id })}
                    className="font-serif font-semibold text-lg text-[#173330] hover:text-[#9C4A32] cursor-pointer"
                  >
                    {leadAttorney.name}
                  </h3>
                  <p className="text-xs text-[#2E4C47] mt-0.5 mb-5">
                    {leadAttorney.role}
                  </p>

                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#173330] hover:bg-[#2E4C47] text-[#F1F4EC] py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer"
                  >
                    Consult on a Similar Matter
                  </button>
                </div>
              )}

              {/* Related Case Studies */}
              <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 pb-2 border-b border-[#173330]/8">
                  Other Representative Matters
                </h4>
                <div className="space-y-4">
                  {otherCases.map((cs) => (
                    <div
                      key={cs.id}
                      onClick={() => onNavigate({ type: 'case-study-detail', id: cs.id })}
                      className="cursor-pointer group"
                    >
                      <span className="text-[0.72rem] font-bold text-[#9C4A32] uppercase tracking-wider block">
                        {cs.summaryStats.outcome}
                      </span>
                      <h5 className="font-serif font-semibold text-sm text-[#173330] group-hover:text-[#9C4A32] transition-colors leading-snug">
                        {cs.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
