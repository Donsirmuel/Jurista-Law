import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { OurFirmDeskIllustration } from './HeroIcons';

interface OurFirmHeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const OurFirmHero: React.FC<OurFirmHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#F1F4EC] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#173330]/10">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Our firm' }]} onNavigate={onNavigate} />

        {/* Two-Column Grid: Text Left, Office Desk & Scales Scene Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-5 sm:mt-6">
          {/* Left Column: Text Block (always first on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
              About our firm
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
              Our firm
            </h1>

            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
              We started this firm with a simple operating standard: speak plainly, quote your fees upfront, and never leave a client guessing about what is happening in their case.
            </p>

            {/* Data Line under paragraph */}
            <div className="mt-6 pt-5 border-t border-[#173330]/12 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#2E4C47]">
              <span>15+ years</span>
              <span className="text-[#9C4A32] select-none">·</span>
              <span>900+ clients</span>
              <span className="text-[#9C4A32] select-none">·</span>
              <span>founded 2011</span>
            </div>
          </motion.div>

          {/* Right Column: Large Line-Art Office & Scales Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center mt-4 lg:mt-0"
          >
            <div className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-none bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-4 sm:p-6 shadow-sm">
              <OurFirmDeskIllustration className="w-full h-auto" />
              <div className="text-center mt-2.5">
                <span className="text-[11px] sm:text-xs text-[#2E4C47]/75 italic">
                  Legal library &amp; consultation desk at Jurista Law.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
