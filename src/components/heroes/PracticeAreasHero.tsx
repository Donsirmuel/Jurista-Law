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
          {/* Clean Line-Art Icon Trio sitting directly on background (No container pills/chips) */}
          <div className="mb-4 sm:mb-5 pt-1">
            <div
              className="inline-flex items-center gap-4 text-[#111111] select-none"
              title="Practice disciplines"
            >
              <BrandLogoIcon size={34} />
              <ScalesOfJusticeIcon size={34} />
              <RealEstateIcon size={34} />
            </div>
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
