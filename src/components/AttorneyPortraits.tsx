import React from 'react';
import { Attorney } from '../types';

interface PortraitProps {
  styleId: Attorney['portraitStyle'];
  size?: number | string;
  className?: string;
  isDetailed?: boolean;
}

export const AttorneyPortrait: React.FC<PortraitProps> = ({
  styleId,
  size = 120,
  className = '',
  isDetailed = false,
}) => {
  // Common dimensions
  const width = typeof size === 'number' ? size : undefined;
  const height = typeof size === 'number' ? size : undefined;

  switch (styleId) {
    case 'founder':
      // William Ashford Sr. (Distinguished founder, hair parting with mustard touch, glasses/wisdom lines)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="74" r="44" fill="#E6E4D2" />
          <circle cx="100" cy="74" r="44" stroke="#173330" strokeWidth="3" />
          <path d="M38 214 Q100 152 162 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Hair swoosh (Mustard Accent) */}
          <path
            d="M58 50 Q100 24 142 50"
            fill="#C6902E"
            stroke="#173330"
            strokeWidth="2.4"
          />

          {/* Wireframe glasses */}
          <rect x="74" y="66" width="22" height="18" rx="4" stroke="#173330" strokeWidth="2.2" fill="#FAFCF6" />
          <rect x="104" y="66" width="22" height="18" rx="4" stroke="#173330" strokeWidth="2.2" fill="#FAFCF6" />
          <line x1="96" y1="75" x2="104" y2="75" stroke="#173330" strokeWidth="2.2" />

          {/* Eyes */}
          <circle cx="85" cy="75" r="2.8" fill="#173330" />
          <circle cx="115" cy="75" r="2.8" fill="#173330" />

          {/* Nose & calm mouth */}
          <path d="M100 86 V94 L97 96" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          <path d="M92 104 Q100 108 108 104" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

          {/* Collar & Tie */}
          <path d="M88 160 L100 180 L112 160" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
          <path d="M97 180 L103 180 L106 214 L94 214 Z" stroke="#173330" strokeWidth="2.2" fill="#C6902E" />
        </svg>
      );

    case 'associate-priya':
      // Priya Nandan (Immigration - Elegant top knot / bun, poised eyes, brick earring touch)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="78" r="42" fill="#E6E4D2" />
          <circle cx="100" cy="78" r="42" stroke="#173330" strokeWidth="3" />
          <path d="M40 214 Q100 155 160 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Elegant Bun with mustard pin */}
          <circle cx="100" cy="24" r="16" fill="#C6902E" stroke="#173330" strokeWidth="2.4" />
          <line x1="82" y1="28" x2="118" y2="20" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />

          {/* Sleek styled side bangs */}
          <path d="M60 62 Q100 44 140 62" stroke="#173330" strokeWidth="2.6" fill="#173330" />

          {/* Eyes & arched brows */}
          <path d="M76 68 Q86 64 94 68" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          <path d="M106 68 Q114 64 124 68" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          <circle cx="85" cy="76" r="3" fill="#173330" />
          <circle cx="115" cy="76" r="3" fill="#173330" />

          {/* Gentle smile */}
          <path d="M92 103 Q100 110 108 103" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

          {/* Small drop earrings (Brick accent) */}
          <circle cx="56" cy="85" r="3.2" fill="#9C4A32" />
          <circle cx="144" cy="85" r="3.2" fill="#9C4A32" />

          {/* Collar */}
          <path d="M84 165 L100 188 L116 165" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
        </svg>
      );

    case 'associate-daniel':
      // Daniel Okoye (Criminal Defense - Sharp jawline, short taper hair, determined expression)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="76" r="44" fill="#E6E4D2" />
          <circle cx="100" cy="76" r="44" stroke="#173330" strokeWidth="3" />
          <path d="M36 214 Q100 148 164 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Neat cropped taper hair */}
          <path
            d="M62 55 C65 35 80 28 100 28 C120 28 135 35 138 55 Z"
            fill="#173330"
            stroke="#173330"
            strokeWidth="2.4"
          />

          {/* Strong brow line */}
          <line x1="75" y1="68" x2="93" y2="68" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="107" y1="68" x2="125" y2="68" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />

          {/* Eyes */}
          <circle cx="84" cy="76" r="3.2" fill="#173330" />
          <circle cx="116" cy="76" r="3.2" fill="#173330" />

          {/* Sharp jawline shadow & calm mouth */}
          <path d="M90 102 H110" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M96 112 H104" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

          {/* Lapel & necktie */}
          <path d="M82 158 L100 186 L118 158" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
          <polygon points="98,186 102,186 105,214 95,214" fill="#173330" />
        </svg>
      );

    case 'partner-elena':
      // Elena Rostova (Medical Law - Round spectacles, shoulder-length wavy hair, analytical demeanor)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="76" r="42" fill="#E6E4D2" />
          <circle cx="100" cy="76" r="42" stroke="#173330" strokeWidth="3" />
          <path d="M40 214 Q100 152 160 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Wave hair cascading */}
          <path
            d="M58 70 Q52 105 60 135 M142 70 Q148 105 140 135"
            stroke="#173330"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path d="M60 48 Q100 30 140 48" fill="#173330" stroke="#173330" strokeWidth="2.4" />

          {/* Round tortoise spectacles with mustard tint */}
          <circle cx="82" cy="76" r="12" stroke="#173330" strokeWidth="2.2" fill="#FAFCF6" />
          <circle cx="118" cy="76" r="12" stroke="#173330" strokeWidth="2.2" fill="#FAFCF6" />
          <line x1="94" y1="76" x2="106" y2="76" stroke="#173330" strokeWidth="2.2" />

          {/* Eyes */}
          <circle cx="82" cy="76" r="2.8" fill="#173330" />
          <circle cx="118" cy="76" r="2.8" fill="#173330" />

          {/* Mouth */}
          <path d="M92 104 Q100 109 108 104" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

          {/* V-neck blouse (Teal/cream) */}
          <path d="M85 162 L100 190 L115 162" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
        </svg>
      );

    case 'associate-marcus':
      // Marcus Vance (Real Estate - Structured frames, side part hair, warm demeanor)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="76" r="43" fill="#E6E4D2" />
          <circle cx="100" cy="76" r="43" stroke="#173330" strokeWidth="3" />
          <path d="M38 214 Q100 150 162 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Side parted hair */}
          <path
            d="M60 52 C70 30 110 30 140 46 C120 44 95 44 75 58 Z"
            fill="#C6902E"
            stroke="#173330"
            strokeWidth="2.4"
          />

          {/* Eyes & brows */}
          <path d="M76 68 H92" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M108 68 H124" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="84" cy="76" r="3" fill="#173330" />
          <circle cx="116" cy="76" r="3" fill="#173330" />

          {/* Smile */}
          <path d="M90 102 Q100 109 110 102" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

          {/* Suit & tie */}
          <path d="M86 160 L100 184 L114 160" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
          <polygon points="98,184 102,184 104,214 96,214" fill="#9C4A32" />
        </svg>
      );

    case 'associate-sophia':
      // Sophia Sterling (Family Law - Soft layered bob, gentle eyes, brick accent pin)
      return (
        <svg
          viewBox="0 0 200 220"
          fill="none"
          width={width}
          height={height}
          className={`shrink-0 ${className}`}
        >
          {/* Head & shoulders */}
          <circle cx="100" cy="78" r="42" fill="#E6E4D2" />
          <circle cx="100" cy="78" r="42" stroke="#173330" strokeWidth="3" />
          <path d="M40 214 Q100 154 160 214" stroke="#173330" strokeWidth="3" fill="#E6E4D2" />

          {/* Layered bob hair */}
          <path
            d="M58 56 C65 32 135 32 142 56 C146 80 144 110 138 125 C130 95 130 65 100 58 C70 65 70 95 62 125 C56 110 54 80 58 56 Z"
            fill="#173330"
            stroke="#173330"
            strokeWidth="2.4"
          />

          {/* Small mustard hair clip */}
          <rect x="68" y="44" width="14" height="4" rx="2" fill="#C6902E" transform="rotate(-15 68 44)" />

          {/* Eyes & brows */}
          <path d="M78 70 Q86 66 94 70" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          <path d="M106 70 Q114 66 122 70" stroke="#173330" strokeWidth="2" strokeLinecap="round" />
          <circle cx="86" cy="78" r="2.8" fill="#173330" />
          <circle cx="114" cy="78" r="2.8" fill="#173330" />

          {/* Warm smile */}
          <path d="M91 104 Q100 112 109 104" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

          {/* Collar */}
          <path d="M84 165 L100 188 L116 165" stroke="#173330" strokeWidth="2.4" fill="#FAFCF6" />
        </svg>
      );

    default:
      return null;
  }
};
