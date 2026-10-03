import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { BrandLogoIcon, ScalesOfJusticeIcon, RealEstateIcon } from '../LineIcons';

interface PracticeAreasHeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const PracticeAreasHero: React.FC<PracticeAreasHeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F1F4EC] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#C6902E]/25">
      {/* Soft Mustard Wash Overlay (very low-opacity --mustard tint) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 75% at 50% 15%, rgba(198, 144, 46, 0.14) 0%, rgba(198, 144, 46, 0.04) 65%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Practice areas' }]} onNavigate={onNavigate} />

        <div className="max-w-2xl mt-5 sm:mt-6">
          {/* Fanned / Overlapping Mini Icon Cluster */}
          <div className="mb-4 sm:mb-5 pt-1">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -3, 0],
                      rotate: [0, 0.8, 0],
                    }
              }
              transition={{
                duration: 6.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-flex items-center relative pl-1 select-none"
              title="Practice disciplines cluster"
            >
              {/* Chip 1: Neoclassical Courthouse (left, angled -8deg) */}
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAFCF6] border-2 border-[#C6902E]/40 flex items-center justify-center shadow-sm -rotate-8 z-10 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 2px 8px rgba(198, 144, 46, 0.18)',
                }}
              >
                <BrandLogoIcon size={20} className="text-[#173330]" />
              </div>

              {/* Chip 2: Scales of Justice (center, slightly elevated / overlapping, +2deg) */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 -ml-3 rounded-full bg-[#FEF8E8] border-2 border-[#C6902E] flex items-center justify-center shadow-md rotate-2 z-20 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 4px 12px rgba(198, 144, 46, 0.25)',
                }}
              >
                <ScalesOfJusticeIcon size={22} className="text-[#173330]" />
              </div>

              {/* Chip 3: Property & Real Estate (right, angled +10deg) - Hidden on mobile <520px to prevent crowding */}
              <div
                className="hidden min-[520px]:flex w-10 h-10 sm:w-11 sm:h-11 -ml-3 rounded-full bg-[#FAFCF6] border-2 border-[#C6902E]/40 items-center justify-center shadow-sm rotate-8 z-10 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 2px 8px rgba(198, 144, 46, 0.18)',
                }}
              >
                <RealEstateIcon size={20} className="text-[#173330]" />
              </div>
            </motion.div>
          </div>

          {/* Eyebrow Label */}
          <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
            Areas of practice
          </span>

          {/* Page Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
            Practice areas
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
            We work across six specific areas of law. Every matter is handled by an attorney who practices in that area every day, not a generalist taking on whatever comes through the door.
          </p>

          {/* Data Line under paragraph */}
          <div className="mt-6 pt-5 border-t border-[#173330]/12 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#2E4C47]">
            <span>6 practice areas</span>
            <span className="text-[#9C4A32] select-none">·</span>
            <span>one specialist each</span>
          </div>
        </div>
      </div>
    </section>
  );
};
