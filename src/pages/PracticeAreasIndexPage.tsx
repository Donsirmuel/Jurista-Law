import React from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { FloatingChips } from '../components/FloatingChips';
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
import { FinalCtaBand } from '../components/FinalCtaBand';
import { PRACTICE_AREAS, ATTORNEYS } from '../data/firmData';

interface PracticeAreasIndexPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const PracticeAreasIndexPage: React.FC<PracticeAreasIndexPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={64} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={64} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={64} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={64} className="text-[#173330]" />;
      case 'medical-law':
        return <ScalesOfJusticeIcon size={64} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={64} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Intro Band on --panel background */}
      <section className="relative overflow-hidden bg-[#E6E4D2]/60 pt-6 pb-16 lg:pb-20 border-b border-[#173330]/10">
        <FloatingChips variant="calm" onNavigate={onNavigate} />

        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Practice areas' }]} onNavigate={onNavigate} />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-4"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Areas of practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-4">
              Practice areas
            </h1>
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed">
              We work across six specific areas of law. Every matter is handled by an attorney who practices in that area every day, not a generalist taking on whatever comes through the door.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Grid of All 6 Practice Areas */}
      <section className="py-20 lg:py-24 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((practice, idx) => {
              const leadAttorney = ATTORNEYS.find((a) => a.id === practice.leadAttorneyId);
              return (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onNavigate({ type: 'practice-detail', slug: practice.id })}
                  className="group bg-[#FAFCF6] p-8 rounded-2xl border border-[#173330]/12 hover:border-[#173330]/30 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 mb-6 text-[#173330] group-hover:text-[#9C4A32] transition-colors group-hover:scale-105 duration-300">
                      {getPracticeIcon(practice.id)}
                    </div>
                    <h2 className="font-serif font-semibold text-2xl text-[#173330] mb-3 group-hover:text-[#9C4A32] transition-colors">
                      {practice.name}
                    </h2>
                    <p className="text-[#2E4C47] text-[0.95rem] leading-relaxed mb-6 font-normal">
                      {practice.overview[0]}
                    </p>

                    {/* Capabilities bullets preview */}
                    <div className="border-t border-[#173330]/8 pt-4 mb-6 space-y-2">
                      {practice.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#2E4C47]">
                          <BrickCheckIcon size={14} className="mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#173330]/8 pt-4 flex items-center justify-between">
                    <span className="text-[#9C4A32] group-hover:text-[#173330] font-bold text-xs uppercase tracking-wider border-b border-[#9C4A32] group-hover:border-[#173330] pb-0.5 transition-colors">
                      Learn more →
                    </span>
                    {leadAttorney && (
                      <span className="text-[0.75rem] text-[#2E4C47]/70">
                        Lead: {leadAttorney.name.split(' ')[0]}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cross-Sell Strip */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-16 bg-[#E6E4D2]/70 border border-[#173330]/12 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-serif font-semibold text-2xl text-[#173330] mb-2">
                Not sure which area fits your situation?
              </h3>
              <p className="text-sm sm:text-base text-[#2E4C47] leading-relaxed">
                Send us a note or book a consultation. One of our attorneys will review your facts and let you know which practice area fits your situation best.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer whitespace-nowrap"
            >
              Book a free consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
