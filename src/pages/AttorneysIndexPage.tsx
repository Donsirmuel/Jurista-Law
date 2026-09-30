import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { FloatingChips } from '../components/FloatingChips';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { ATTORNEYS, PRACTICE_AREAS } from '../data/firmData';

interface AttorneysIndexPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  initialFilter?: string;
}

export const AttorneysIndexPage: React.FC<AttorneysIndexPageProps> = ({
  onNavigate,
  onOpenBooking,
  initialFilter = 'all',
}) => {
  const [filter, setFilter] = useState<string>(initialFilter);

  const filteredAttorneys =
    filter === 'all'
      ? ATTORNEYS
      : ATTORNEYS.filter((att) => att.practices.includes(filter as PracticeSlug));

  return (
    <div className="w-full">
      {/* Intro Band on --panel background */}
      <section className="relative overflow-hidden bg-[#E6E4D2]/60 pt-6 pb-16 lg:pb-20 border-b border-[#173330]/10">
        <FloatingChips variant="calm" onNavigate={onNavigate} />

        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Attorneys' }]} onNavigate={onNavigate} />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-4"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Our team
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-tight mb-4">
              Our attorneys
            </h1>
            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed">
              You work directly with the attorney handling your file. Every lawyer at our firm focuses on one specific discipline rather than handling whatever comes along.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Row + Grid */}
      <section className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          {/* Practice Area Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 scrollbar-none text-xs sm:text-sm font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#173330] text-[#F1F4EC] font-bold'
                  : 'text-[#2E4C47] hover:bg-[#E6E4D2]/50'
              }`}
            >
              All attorneys ({ATTORNEYS.length})
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

          {/* Attorneys Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttorneys.map((attorney, idx) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onNavigate({ type: 'attorney-detail', id: attorney.id })}
                className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <AttorneyPortrait styleId={attorney.portraitStyle} size="100%" />
                  </div>
                  <h2 className="font-serif font-semibold text-2xl text-[#173330] mb-1 group-hover:text-[#9C4A32] transition-colors">
                    {attorney.name}
                  </h2>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#9C4A32] mb-3">
                    {attorney.role}
                  </div>
                  <p className="text-sm text-[#2E4C47] leading-relaxed mb-6">
                    {attorney.shortSpecialty}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#173330]/8 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                    View profile →
                  </span>
                  <span className="text-[0.75rem] text-[#2E4C47]/70">
                    {attorney.credentials[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
