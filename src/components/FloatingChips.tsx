import React from 'react';
import { PageRoute } from '../types';

interface FloatingChipsProps {
  variant?: 'full' | 'calm';
  onNavigate?: (route: PageRoute) => void;
}

export const FloatingChips: React.FC<FloatingChipsProps> = ({
  variant = 'full',
  onNavigate,
}) => {
  if (variant === 'calm') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Scales (Gold, Top Left) */}
        <div
          className="absolute rounded-full flex items-center justify-center animate-bounce-slow-a shadow-[0_10px_24px_rgba(23,51,48,0.16),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.1)] pointer-events-auto cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            top: '18%',
            left: '6%',
            background: 'radial-gradient(circle at 30% 25%, #FBF2DC 0%, #ECC575 32%, #C6902E 68%, #9C6F1F 100%)',
          }}
          title="Scales of Justice"
          onClick={() => onNavigate && onNavigate({ type: 'practice-areas' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path
              d="M30 12 V48 M20 20 H40 M20 20 L13 32 A7 6 0 0 0 27 32 Z M40 20 L33 32 A7 6 0 0 0 47 32 Z M24 48 H36"
              stroke="#173330"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Passport / Immigration (Teal, Top Right) */}
        <div
          className="absolute rounded-full items-center justify-center animate-bounce-slow-b shadow-[0_10px_24px_rgba(23,51,48,0.16),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.1)] hidden sm:flex pointer-events-auto cursor-pointer"
          style={{
            width: '50px',
            height: '50px',
            top: '22%',
            right: '8%',
            background: 'radial-gradient(circle at 30% 25%, #E3F2EE 0%, #89B3A9 32%, #2E5951 68%, #173330 100%)',
          }}
          title="Immigration Law"
          onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <rect x="14" y="14" width="24" height="32" rx="3" stroke="#F1F4EC" strokeWidth="2.6" />
            <circle cx="26" cy="27" r="5" stroke="#F1F4EC" strokeWidth="2" />
            <line x1="21" y1="27" x2="31" y2="27" stroke="#F1F4EC" strokeWidth="1.8" />
            <circle cx="38" cy="24" r="6" stroke="#ECC575" strokeWidth="2" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Corporate Towers (Brick, Bottom Right) */}
        <div
          className="absolute rounded-full items-center justify-center animate-bounce-slow-c shadow-[0_10px_24px_rgba(23,51,48,0.16),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.1)] hidden md:flex pointer-events-auto cursor-pointer"
          style={{
            width: '46px',
            height: '46px',
            bottom: '16%',
            right: '18%',
            background: 'radial-gradient(circle at 30% 25%, #F7DFD2 0%, #D48E6E 32%, #9C4A32 68%, #723220 100%)',
          }}
          title="Corporate Law"
          onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'corporate-law' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path d="M16 48 V20 L30 14 V48" stroke="#173330" strokeWidth="2.6" strokeLinejoin="round" />
            <path d="M30 24 L42 19 V48" stroke="#173330" strokeWidth="2.6" strokeLinejoin="round" />
            <line x1="12" y1="48" x2="46" y2="48" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  // Full 6 chips for Home Hero — bouncing on their own with staggered independent loops (NO mouse parallax)
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      {/* 1. Scales of Justice (Gold - Top Left) */}
      <div
        className="absolute pointer-events-auto cursor-pointer"
        style={{
          top: '12%',
          left: '7%',
        }}
        title="Scales of Justice"
        onClick={() => onNavigate && onNavigate({ type: 'practice-areas' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-a shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '68px',
            height: '68px',
            background: 'radial-gradient(circle at 30% 25%, #FBF2DC 0%, #ECC575 32%, #C6902E 68%, #9C6F1F 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path
              d="M30 12 V48 M20 20 H40 M20 20 L13 32 A7 6 0 0 0 27 32 Z M40 20 L33 32 A7 6 0 0 0 47 32 Z M24 48 H36"
              stroke="#173330"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* 2. Passport & Visa Entry Stamp / Immigration (Teal - Top Right) */}
      <div
        className="absolute pointer-events-auto cursor-pointer hidden sm:block"
        style={{
          top: '9%',
          right: '10%',
        }}
        title="Immigration Law & Visas"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-b shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '56px',
            height: '56px',
            background: 'radial-gradient(circle at 30% 25%, #E3F2EE 0%, #89B3A9 32%, #2E5951 68%, #173330 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            {/* Passport booklet with globe */}
            <rect x="13" y="14" width="24" height="32" rx="3" stroke="#F1F4EC" strokeWidth="2.4" />
            <circle cx="25" cy="27" r="5" stroke="#F1F4EC" strokeWidth="1.8" />
            <line x1="20" y1="27" x2="30" y2="27" stroke="#F1F4EC" strokeWidth="1.6" />
            {/* Approved Visa Seal */}
            <circle cx="38" cy="23" r="6" stroke="#ECC575" strokeWidth="1.8" strokeDasharray="2 2" />
            <path d="M35 23 L37 25 L42 20" stroke="#ECC575" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 3. Gavel on Strike Block / Criminal (Brick - Mid Left) */}
      <div
        className="absolute pointer-events-auto cursor-pointer"
        style={{
          top: '55%',
          left: '5%',
        }}
        title="Criminal Defense & Trial"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'criminal-law' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-c shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '64px',
            height: '64px',
            background: 'radial-gradient(circle at 30% 25%, #F7DFD2 0%, #D48E6E 32%, #9C4A32 68%, #723220 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path d="M16 18 L26 28 L21 33 L11 23 Z" stroke="#173330" strokeWidth="2.6" strokeLinejoin="round" />
            <path d="M24 23 L44 43" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
            <ellipse cx="18" cy="46" rx="11" ry="3.5" stroke="#173330" strokeWidth="2.4" />
            <path d="M8 46 V49 C8 51 12 52.5 18 52.5 C24 52.5 28 51 28 49 V46" stroke="#173330" strokeWidth="2.4" />
          </svg>
        </div>
      </div>

      {/* 4. House with Real Estate Key (Gold - Mid Right) */}
      <div
        className="absolute pointer-events-auto cursor-pointer hidden sm:block"
        style={{
          top: '58%',
          right: '7%',
        }}
        title="Real Estate & Property"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'real-estate-law' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-a shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '54px',
            height: '54px',
            background: 'radial-gradient(circle at 30% 25%, #FBF2DC 0%, #ECC575 32%, #C6902E 68%, #9C6F1F 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path d="M12 28 L26 16 L40 28 V46 H12 Z" stroke="#173330" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M22 46 V34 H30 V46" stroke="#173330" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Key */}
            <circle cx="39" cy="36" r="4" stroke="#173330" strokeWidth="2" />
            <path d="M39 40 V48 M39 44 H42" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* 5. Caduceus Staff & ECG Pulse / Medical (Teal - Bottom Left) */}
      <div
        className="absolute pointer-events-auto cursor-pointer"
        style={{
          bottom: '8%',
          left: '20%',
        }}
        title="Medical & Clinical Law"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'medical-law' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-b shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '58px',
            height: '58px',
            background: 'radial-gradient(circle at 30% 25%, #E3F2EE 0%, #89B3A9 32%, #2E5951 68%, #173330 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <line x1="30" y1="12" x2="30" y2="48" stroke="#F1F4EC" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="30" cy="12" r="3" fill="#ECC575" stroke="#F1F4EC" strokeWidth="1.5" />
            {/* Coiled Serpent */}
            <path
              d="M23 20 C37 22 37 30 23 32 C23 34 37 36 37 42 C37 46 25 46 25 48"
              stroke="#F1F4EC"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* ECG pulse line */}
            <path d="M12 30 H20 L24 22 L28 38 L32 28 L36 32 H48" stroke="#ECC575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 6. Corporate Skyscrapers & Growth / Business (Brick - Bottom Right) */}
      <div
        className="absolute pointer-events-auto cursor-pointer hidden md:block"
        style={{
          bottom: '10%',
          right: '22%',
        }}
        title="Corporate Law & Enterprises"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'corporate-law' })}
      >
        <div
          className="rounded-full flex items-center justify-center animate-bounce-slow-c shadow-[0_12px_28px_rgba(23,51,48,0.18),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-110"
          style={{
            width: '52px',
            height: '52px',
            background: 'radial-gradient(circle at 30% 25%, #F7DFD2 0%, #D48E6E 32%, #9C4A32 68%, #723220 100%)',
          }}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 60 60" fill="none">
            <path d="M16 48 V18 L32 10 V48" stroke="#173330" strokeWidth="2.6" strokeLinejoin="round" />
            <path d="M32 22 L44 16 V48" stroke="#173330" strokeWidth="2.6" strokeLinejoin="round" />
            <line x1="12" y1="48" x2="48" y2="48" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="22" y1="22" x2="26" y2="22" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="30" x2="26" y2="30" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="38" x2="26" y2="38" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};
