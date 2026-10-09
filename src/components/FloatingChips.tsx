import React from 'react';
import { PageRoute } from '../types';

interface FloatingChipsProps {
  variant?: 'full' | 'calm';
  onNavigate?: (route: PageRoute) => void;
}

/**
 * Hero Line-Art Scatter Illustration System:
 * Replaces glossy circular pill badges with editorial black line-art legal drawings.
 * Features a large centered scales watermark, two human stick-figure scenes,
 * and surrounding legal objects with gentle desynced drift.
 */
export const FloatingChips: React.FC<FloatingChipsProps> = ({ variant = 'full' }) => {
  if (variant === 'calm') {
    return (
      <div className="floating-icons" aria-hidden="true">
        {/* Large faint anchor: scales of justice, centered behind the text */}
        <svg
          className="li big"
          viewBox="0 0 100 100"
          style={{ width: '460px', left: 'calc(50% - 230px)', top: 'calc(50% - 220px)' }}
        >
          <path d="M34 90 H66 M40 90 L43 82 H57 L60 90 M50 82 V24" />
          <circle cx="50" cy="18" r="4.5" />
          <path d="M20 30 Q50 22 80 30" />
          <circle cx="20" cy="30" r="2" />
          <circle cx="80" cy="30" r="2" />
          <path d="M20 30 L8 62 M20 30 L34 62 M8 62 Q21 76 34 62 Z M80 30 L66 62 M80 30 L92 62 M66 62 Q79 76 92 62 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="floating-icons" aria-hidden="true">
      {/* Large faint anchor: scales of justice, centered behind the text */}
      <svg
        className="li big"
        viewBox="0 0 100 100"
        style={{ width: '540px', left: 'calc(50% - 270px)', top: 'calc(50% - 250px)' }}
      >
        <path d="M34 90 H66 M40 90 L43 82 H57 L60 90 M50 82 V24" />
        <circle cx="50" cy="18" r="4.5" />
        <path d="M20 30 Q50 22 80 30" />
        <circle cx="20" cy="30" r="2" />
        <circle cx="80" cy="30" r="2" />
        <path d="M20 30 L8 62 M20 30 L34 62 M8 62 Q21 76 34 62 Z M80 30 L66 62 M80 30 L92 62 M66 62 Q79 76 92 62 Z" />
      </svg>

      {/* Scene 1: attorney and client across a desk (left) */}
      <svg
        className="li s1 hidden md:block"
        viewBox="0 0 100 100"
        style={{ width: '160px', left: '3%', top: '11%', animationDelay: '0.3s', animationDuration: '17s' }}
      >
        <circle cx="23" cy="24" r="8" />
        <circle cx="77" cy="24" r="8" />
        <path d="M23 32 V64 M23 40 L44 56 M77 32 V64 M77 40 L56 56" />
        <path className="a" d="M44 50 H56 V64 H44 Z" />
        <path d="M6 64 H94 M12 64 V92 M88 64 V92 M60 64 V78 H82 V64 M68 71 H74" />
      </svg>

      {/* Scene 2: judge at the bench (right) */}
      <svg
        className="li s2 hidden md:block"
        viewBox="0 0 100 100"
        style={{ width: '145px', right: '3%', top: '10%', animationDelay: '1.4s', animationDuration: '19s' }}
      >
        <circle cx="50" cy="20" r="8" />
        <path d="M42 29 L36 54 H64 L58 29 Z M42 36 L30 52 M58 36 L70 52" />
        <path className="a" d="M66 49 L78 41 L82 46 L70 54 Z" />
        <path d="M12 54 H88 V92 H12 Z M30 62 V84 M50 62 V84 M70 62 V84" />
      </svg>

      {/* Gavel and sound block (lower left) */}
      <svg
        className="li gv hidden sm:block"
        viewBox="0 0 100 100"
        style={{ width: '84px', left: '6%', top: '63%', animationDelay: '0.8s', animationDuration: '17s' }}
      >
        <path d="M20 78 H80 L74 86 H26 Z M18 86 H82 V92 H18 Z" />
        <path d="M50 78 L32 38" />
        <path className="a" d="M22 34 L38 27 L44 40 L28 47 Z" />
        <path d="M16 36 L24 32 M36 27 L44 23 M22 50 L30 46 M42 41 L50 37" />
        <path d="M16 36 L22 50 M44 23 L50 37" />
      </svg>

      {/* Law book / legal tome (lower right) */}
      <svg
        className="li bk hidden sm:block"
        viewBox="0 0 100 100"
        style={{ width: '90px', right: '5%', top: '64%', animationDelay: '2.1s', animationDuration: '18s' }}
      >
        <path d="M16 24 C32 20 48 24 50 28 C52 24 68 20 84 24 V76 C68 72 52 76 50 80 C48 76 32 72 16 76 Z" />
        <path d="M50 28 V80" />
        <path d="M20 32 C32 29 44 32 46 35 M20 42 C32 39 44 42 46 45 M20 52 C32 49 44 52 46 55" />
        <path d="M80 32 C68 29 56 32 54 35 M80 42 C68 39 56 42 54 45 M80 52 C68 49 56 52 54 55" />
        <path className="a" d="M48 28 V60 L50 56 L52 60 V28 Z" />
      </svg>

      {/* Document with wax seal (middle left) */}
      <svg
        className="li dc hidden lg:block"
        viewBox="0 0 100 100"
        style={{ width: '80px', left: '16%', top: '38%', animationDelay: '1.1s', animationDuration: '16.5s' }}
      >
        <path d="M22 14 H64 L78 28 V86 H22 Z" />
        <path d="M64 14 V28 H78" />
        <path d="M30 36 H58 M30 46 H70 M30 56 H70 M30 66 H54" />
        <path d="M64 74 L60 84 L65 80 L70 84 L66 74" />
        <circle className="a" cx="64" cy="72" r="7" />
      </svg>

      {/* Courthouse / columned building (middle right) */}
      <svg
        className="li ch hidden lg:block"
        viewBox="0 0 100 100"
        style={{ width: '88px', right: '14%', top: '39%', animationDelay: '1.8s', animationDuration: '17.5s' }}
      >
        <path className="a" d="M14 36 L50 16 L86 36 Z" />
        <path d="M10 36 H90 V42 H10 Z" />
        <path d="M20 42 V76 M28 42 V76 M40 42 V76 M48 42 V76 M60 42 V76 M68 42 V76 M80 42 V76 M88 42 V76" />
        <path d="M16 42 H32 M36 42 H52 M56 42 H72 M76 42 H92" />
        <path d="M16 76 H32 M36 76 H52 M56 76 H72 M76 76 H92" />
        <path d="M10 76 H90 V82 H10 Z M6 82 H94 V88 H6 Z" />
      </svg>

      {/* Handcuffs (bottom left center) */}
      <svg
        className="li hc hidden md:block"
        viewBox="0 0 100 100"
        style={{ width: '76px', left: '23%', top: '81%', animationDelay: '0.5s', animationDuration: '18.5s' }}
      >
        <circle cx="28" cy="50" r="18" />
        <circle cx="28" cy="50" r="13" />
        <path d="M12 44 L16 48 M40 52 L44 56" />
        <circle cx="72" cy="50" r="18" />
        <circle cx="72" cy="50" r="13" />
        <path d="M56 44 L60 48 M84 52 L88 56" />
        <path className="a" d="M46 47 H54 V53 H46 Z" />
        <path d="M41 50 H46 M54 50 H59" />
      </svg>

      {/* House and key (bottom right center) */}
      <svg
        className="li hk hidden md:block"
        viewBox="0 0 100 100"
        style={{ width: '78px', right: '22%', top: '80%', animationDelay: '2.3s', animationDuration: '19.5s' }}
      >
        <path d="M20 44 L46 22 L72 44 V78 H20 Z" />
        <path d="M60 30 V20 H66 V35" />
        <path d="M38 78 V58 H54 V78" />
        <circle className="a" cx="68" cy="62" r="7" />
        <circle cx="68" cy="62" r="3.5" />
        <path d="M61 62 L32 62 M36 62 V68 M42 62 V67" />
      </svg>
    </div>
  );
};
