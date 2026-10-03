import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { CaseFolderIcon } from './HeroIcons';

interface CaseStudiesHeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#F1F4EC] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#9C4A32]/25">
      {/* Soft Brick Wash Overlay (very low-opacity --brick tint) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 75% at 50% 15%, rgba(156, 74, 50, 0.12) 0%, rgba(156, 74, 50, 0.035) 65%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Case studies' }]} onNavigate={onNavigate} />

        <div className="max-w-2xl mt-5 sm:mt-6">
          {/* Single Case File / Open Folder Icon Motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-5 pt-1 inline-block select-none"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAFCF6] border-2 border-[#9C4A32]/35 flex items-center justify-center shadow-sm"
              style={{
                boxShadow: '0 3px 10px rgba(156, 74, 50, 0.16)',
              }}
              title="Legal case file"
            >
              <CaseFolderIcon size={30} />
            </div>
          </motion.div>

          {/* Eyebrow Label */}
          <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
            Representative cases
          </span>

          {/* Page Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
            Case studies
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
            Detailed summaries of real matters we have handled across our practice areas. Client names and identifying details have been changed to maintain attorney-client confidentiality.
          </p>

          {/* Data Line under paragraph */}
          <div className="mt-6 pt-5 border-t border-[#173330]/12 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#2E4C47]">
            <span>Real matters, explained plainly</span>
          </div>
        </div>
      </div>
    </section>
  );
};
