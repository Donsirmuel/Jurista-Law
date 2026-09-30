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
  // Common glossy box-shadow from spec:
  const glossyShadow =
    '0 8px 18px rgba(23,51,48,0.16), inset 0 2px 5px rgba(255,255,255,0.65), inset 0 -6px 10px rgba(0,0,0,0.08)';

  // Three alternating color palettes using the required radial-gradient formula:
  // radial-gradient(circle at 32% 26%, <light> 0%, <mid> 30%, <accent> 65%, <dark> 100%)
  const goldGradient =
    'radial-gradient(circle at 32% 26%, #FEF8E8 0%, #ECC575 30%, #C6902E 65%, #8C5F14 100%)';
  const tealGradient =
    'radial-gradient(circle at 32% 26%, #EAF5F2 0%, #80B5AB 30%, #2E5951 65%, #142E2A 100%)';
  const brickGradient =
    'radial-gradient(circle at 32% 26%, #FCEEE9 0%, #D88F79 30%, #9C4A32 65%, #6C2B1B 100%)';

  if (variant === 'calm') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Chip 1 - Scales of Justice (Gold) */}
        <div
          className="ficon absolute rounded-full flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
          style={{
            width: '54px',
            height: '54px',
            top: '18%',
            left: '6%',
            background: goldGradient,
            boxShadow: glossyShadow,
            animationDuration: '6.5s',
            animationDelay: '0.2s',
          }}
          title="Scales of Justice"
          onClick={() => onNavigate && onNavigate({ type: 'practice-areas' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 7 V33 M13 14 H27 M13 14 L8 22 A5 4 0 0 0 18 22 Z M27 14 L22 22 A5 4 0 0 0 32 22 Z M15 33 H25"
              stroke="#173330"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Chip 2 - Globe / Immigration (Teal) */}
        <div
          className="ficon absolute rounded-full hidden sm:flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
          style={{
            width: '50px',
            height: '50px',
            top: '20%',
            right: '8%',
            background: tealGradient,
            boxShadow: glossyShadow,
            animationDuration: '7.2s',
            animationDelay: '1.1s',
          }}
          title="Immigration Law"
          onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="20" x2="34" y2="20" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Chip 3 - Gavel (Brick) */}
        <div
          className="ficon absolute rounded-full hidden md:flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
          style={{
            width: '48px',
            height: '48px',
            bottom: '18%',
            right: '16%',
            background: brickGradient,
            boxShadow: glossyShadow,
            animationDuration: '5.8s',
            animationDelay: '0.6s',
          }}
          title="Criminal Law"
          onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'criminal-law' })}
        >
          <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
            <path d="M11 13 L18 20 L14 24 L7 17 Z" stroke="#F1F4EC" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M16 18 L31 33" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
            <path d="M7 33 H21" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  // Full 6 chips for HomePage Hero — following the exact specification:
  // - Class: .ficon (explicit longhand animation properties defined in CSS, no shorthand)
  // - Duration & Delay set per chip instance
  // - Sizes varying 46px - 64px
  // - Glossy radial-gradient background rotated across Gold, Teal, Brick
  // - Spec box-shadow
  // - Stroke-only inline SVG (stroke-width: 3, rounded caps/joins) sized to ~52% of chip
  // - Scatter positioning around edges, avoiding centered text
  // - Responsive: chips 4 & 6 hidden on mobile below 820px to prevent clutter
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      {/* 1. Scales of Justice (Gold / Mustard) - Top Left */}
      <div
        className="ficon absolute rounded-full flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '62px',
          height: '62px',
          top: '13%',
          left: '7%',
          background: goldGradient,
          boxShadow: glossyShadow,
          animationDuration: '6.5s',
          animationDelay: '0.2s',
        }}
        title="Litigation & Justice"
        onClick={() => onNavigate && onNavigate({ type: 'practice-areas' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 7 V33 M13 14 H27 M13 14 L8 22 A5 4 0 0 0 18 22 Z M27 14 L22 22 A5 4 0 0 0 32 22 Z M15 33 H25"
            stroke="#173330"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 2. Globe / World Mobility (Teal) - Top Right */}
      <div
        className="ficon absolute rounded-full hidden sm:flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '54px',
          height: '54px',
          top: '11%',
          right: '9%',
          background: tealGradient,
          boxShadow: glossyShadow,
          animationDuration: '7.2s',
          animationDelay: '1.1s',
        }}
        title="Immigration Law & Global Mobility"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="20" x2="34" y2="20" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 3. Judge's Gavel (Brick) - Mid-Left */}
      <div
        className="ficon absolute rounded-full flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '60px',
          height: '60px',
          top: '55%',
          left: '5%',
          background: brickGradient,
          boxShadow: glossyShadow,
          animationDuration: '5.8s',
          animationDelay: '0.6s',
        }}
        title="Criminal Defense & Courtroom Trial"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'criminal-law' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          <path d="M11 13 L18 20 L14 24 L7 17 Z" stroke="#F1F4EC" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M16 18 L31 33" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
          <path d="M7 33 H21" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Corporate Handshake (Gold / Mustard) - Mid-Right (Hidden on mobile <820px) */}
      <div
        className="ficon absolute rounded-full hidden min-[820px]:flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '48px',
          height: '48px',
          top: '56%',
          right: '6%',
          background: goldGradient,
          boxShadow: glossyShadow,
          animationDuration: '6.9s',
          animationDelay: '1.6s',
        }}
        title="Corporate Law & Agreements"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'corporate-law' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          {/* Handshake line art */}
          <path d="M7 23 L13 18 L19 22 L24 18 L33 23" stroke="#173330" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 20 L21 24 L18 27 L14 23" stroke="#173330" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 24 L25 28 L28 25" stroke="#173330" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 5. Medical Staff & Pulse (Teal) - Bottom-Left */}
      <div
        className="ficon absolute rounded-full flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '56px',
          height: '56px',
          bottom: '8%',
          left: '18%',
          background: tealGradient,
          boxShadow: glossyShadow,
          animationDuration: '6.2s',
          animationDelay: '0.9s',
        }}
        title="Medical Negligence & Health Law"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'medical-law' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          <line x1="20" y1="7" x2="20" y2="33" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="7" r="2.5" fill="#ECC575" stroke="#F1F4EC" strokeWidth="1.5" />
          <path d="M8 20 H14 L17 14 L20 26 L23 17 L26 20 H32" stroke="#ECC575" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 6. Real Estate Architectural House & Key (Brick) - Bottom-Right (Hidden on mobile <820px) */}
      <div
        className="ficon absolute rounded-full hidden min-[820px]:flex items-center justify-center pointer-events-auto cursor-pointer transition-transform hover:scale-110"
        style={{
          width: '50px',
          height: '50px',
          bottom: '9%',
          right: '20%',
          background: brickGradient,
          boxShadow: glossyShadow,
          animationDuration: '7.6s',
          animationDelay: '0.3s',
        }}
        title="Real Estate & Property Law"
        onClick={() => onNavigate && onNavigate({ type: 'practice-detail', slug: 'real-estate-law' })}
      >
        <svg className="w-[52%] h-[52%]" viewBox="0 0 40 40" fill="none">
          <path d="M8 19 L20 9 L32 19 V32 H8 Z" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 32 V23 H24 V32" stroke="#F1F4EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
