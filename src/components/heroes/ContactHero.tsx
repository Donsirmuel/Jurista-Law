import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SpeechEnvelopeIcon, ContactHeroScene } from './HeroIcons';

interface ContactHeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactHero: React.FC<ContactHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#E6E4D2] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#173330]/12">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Contact' }]} onNavigate={onNavigate} />

        {/* Two-Column Grid: Text Left, Headquarters Location Scene Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-5 sm:mt-6">
          {/* Left Column: Text Block (always first on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Single Envelope / Direct Communication Icon */}
            <div className="mb-4 sm:mb-5 pt-1 inline-block select-none" title="Direct confidential inquiry">
              <SpeechEnvelopeIcon size={36} className="text-[#111111]" />
            </div>

            {/* Eyebrow Label */}
            <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
              Contact Jurista Law
            </span>

            {/* Page Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
              Get in touch.
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
              Every inquiry is reviewed directly by an attorney in the relevant practice area. We respond with a written assessment within two business days.
            </p>
          </motion.div>

          {/* Right Column: Compact Illustrated Building & Location Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center mt-3 lg:mt-0"
          >
            <div className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-4 sm:p-5 shadow-sm">
              <ContactHeroScene className="w-full h-auto" />
              <div className="text-center mt-2">
                <span className="text-[11px] sm:text-xs text-[#2E4C47]/75 italic">
                  Headquarters · 450 Lexington Ave, New York
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
