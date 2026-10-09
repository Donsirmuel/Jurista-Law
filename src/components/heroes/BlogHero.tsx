import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { OpenBookQuillIcon } from './HeroIcons';

interface BlogHeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#F1F4EC] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#173330]/10">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Blog' }]} onNavigate={onNavigate} />

        <div className="max-w-2xl mt-5 sm:mt-6">
          {/* Single Open Book & Quill Icon Motif */}
          <div className="mb-4 sm:mb-5 pt-1 inline-block select-none" title="Legal articles & treatise">
            <OpenBookQuillIcon size={38} className="text-[#111111]" />
          </div>

          {/* Eyebrow Label */}
          <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
            Articles on the law
          </span>

          {/* Page Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
            Articles on the law
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
            Practical explanations of contracts, immigration rules, property laws, and court decisions. Written by the attorneys who work on these cases every day.
          </p>

          {/* Data Line under paragraph */}
          <div className="mt-6 pt-5 border-t border-[#173330]/12 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#2E4C47]">
            <span>Plain-language explainers, updated regularly</span>
          </div>
        </div>
      </div>
    </section>
  );
};
