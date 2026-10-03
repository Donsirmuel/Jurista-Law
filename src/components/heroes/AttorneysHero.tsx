import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PageRoute } from '../../types';
import { Breadcrumb } from '../Breadcrumb';

interface AttorneysHeroProps {
  onNavigate: (route: PageRoute) => void;
}

// Crisp line-art head-and-shoulders person silhouette (stroke-based)
const PersonSilhouette: React.FC<{ size?: number; lead?: boolean }> = ({ size = 20, lead = false }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    {/* Head outline */}
    <circle
      cx="16"
      cy="10.5"
      r="4.8"
      stroke="#173330"
      strokeWidth={lead ? 2.4 : 2.2}
      strokeLinecap="round"
    />
    {/* Shoulders / Torso outline */}
    <path
      d="M7 26.5 C7 20.8 11 18.5 16 18.5 C21 18.5 25 20.8 25 26.5"
      stroke="#173330"
      strokeWidth={lead ? 2.4 : 2.2}
      strokeLinecap="round"
    />
    {lead && (
      /* Subtle collar detail on lead partner */
      <path d="M14 19 L16 22 L18 19" stroke="#9C4A32" strokeWidth="1.6" strokeLinecap="round" />
    )}
  </svg>
);

export const AttorneysHero: React.FC<AttorneysHeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F1F4EC] pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-[#173330]/15">
      {/* Soft Teal Wash Overlay (very low-opacity --muted/dark teal tint) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 75% at 50% 15%, rgba(23, 51, 48, 0.12) 0%, rgba(46, 76, 71, 0.04) 65%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 relative z-10">
        <Breadcrumb items={[{ label: 'Attorneys' }]} onNavigate={onNavigate} />

        <div className="max-w-2xl mt-5 sm:mt-6">
          {/* Team Silhouette Circle Cluster */}
          <div className="mb-4 sm:mb-5 pt-1">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -3.5, 0],
                      rotate: [0, -0.6, 0],
                    }
              }
              transition={{
                duration: 7.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-flex items-center relative pl-1 select-none"
              title="Attorney team cluster"
            >
              {/* Silhouette 1 (Associate / Partner left) */}
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAFCF6] border-2 border-[#173330]/25 flex items-center justify-center shadow-sm z-10 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 2px 8px rgba(23, 51, 48, 0.14)',
                }}
              >
                <PersonSilhouette size={20} />
              </div>

              {/* Silhouette 2 (Lead Partner center, elevated & larger) */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 -ml-3 rounded-full bg-[#E6E4D2] border-2 border-[#173330]/40 flex items-center justify-center shadow-md z-20 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 4px 12px rgba(23, 51, 48, 0.22)',
                }}
              >
                <PersonSilhouette size={22} lead />
              </div>

              {/* Silhouette 3 (Associate right) - Hidden on mobile <520px to prevent crowding */}
              <div
                className="hidden min-[520px]:flex w-10 h-10 sm:w-11 sm:h-11 -ml-3 rounded-full bg-[#FAFCF6] border-2 border-[#173330]/25 items-center justify-center shadow-sm z-10 hover:z-30 transition-transform"
                style={{
                  boxShadow: '0 2px 8px rgba(23, 51, 48, 0.14)',
                }}
              >
                <PersonSilhouette size={20} />
              </div>
            </motion.div>
          </div>

          {/* Eyebrow Label */}
          <span className="text-[#9C4A32] font-semibold text-xs sm:text-sm block mb-2">
            Our team
          </span>

          {/* Page Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-4">
            Our attorneys
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-2xl font-normal">
            You work directly with the attorney handling your file. Every lawyer at our firm focuses on one specific discipline rather than handling whatever comes along.
          </p>

          {/* Data Line under paragraph */}
          <div className="mt-6 pt-5 border-t border-[#173330]/12 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#2E4C47]">
            <span>6 attorneys</span>
            <span className="text-[#9C4A32] select-none">·</span>
            <span>6 disciplines</span>
          </div>
        </div>
      </div>
    </section>
  );
};
