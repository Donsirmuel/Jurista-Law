import React from 'react';
import { Attorney } from '../types';

interface PortraitProps {
  styleId: Attorney['portraitStyle'];
  size?: number | string;
  className?: string;
}

/**
 * Editorial Line-Art Attorney Portraits
 * Spec:
 * - viewBox="0 0 100 100"
 * - Stroke: #111111, stroke-width: 2.2, round cap & join
 * - Flat mustard accent (#C6902E) used exactly once per portrait
 * - Visibly distinct faces, hair, collars, and accessories
 * - Zero container pills or drop shadows
 */
export const AttorneyPortrait: React.FC<PortraitProps> = ({
  styleId,
  size = 110,
  className = '',
}) => {
  const width = typeof size === 'number' ? size : undefined;
  const height = typeof size === 'number' ? size : undefined;

  switch (styleId) {
    case 'founder':
      // William Ashford Sr. (Senior partner: side-parted hair, glasses, mustard tie)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Head & Neck */}
          <circle cx="50" cy="40" r="19" stroke="#111111" strokeWidth="2.2" />
          <path d="M44 58 V66 M56 58 V66" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Shoulders & Suit */}
          <path d="M18 92 C24 74 34 66 44 66 H56 C66 66 76 74 82 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Receding hairline & side part */}
          <path d="M33 34 C36 24 45 22 50 22 C56 22 64 24 67 34" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M35 32 C42 27 50 27 55 30" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyeglasses */}
          <rect x="37" y="36" width="10" height="8" rx="2" stroke="#111111" strokeWidth="2.2" />
          <rect x="53" y="36" width="10" height="8" rx="2" stroke="#111111" strokeWidth="2.2" />
          <line x1="47" y1="40" x2="53" y2="40" stroke="#111111" strokeWidth="2.2" />
          {/* Eyes */}
          <circle cx="42" cy="40" r="1.5" fill="#111111" />
          <circle cx="58" cy="40" r="1.5" fill="#111111" />

          {/* Nose & Calm Mouth */}
          <path d="M50 45 V48 L48 49" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M46 53 Q50 55 54 53" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

          {/* Shirt Collar & Mustard Tie Accent */}
          <path d="M44 66 L50 74 L56 66" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="48,74 52,74 54,92 46,92" fill="#C6902E" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );

    case 'associate-priya':
      // Priya Nandan (Top knot bun with mustard hairpin, sleek styled side bangs)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Top Knot Bun with Mustard Accent */}
          <circle cx="50" cy="18" r="8" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
          <line x1="41" y1="20" x2="59" y2="16" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Head & Neck */}
          <circle cx="50" cy="42" r="18" stroke="#111111" strokeWidth="2.2" />
          <path d="M45 59 V68 M55 59 V68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Shoulders */}
          <path d="M20 92 C26 76 35 68 45 68 H55 C65 68 74 76 80 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Sleek Side Bangs & Hairline */}
          <path d="M33 36 Q50 26 67 36" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M32 38 Q35 48 37 54 M68 38 Q65 48 63 54" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyes & Arched Brows */}
          <path d="M38 37 Q42 35 46 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M54 37 Q58 35 62 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="42" cy="41" r="1.6" fill="#111111" />
          <circle cx="58" cy="41" r="1.6" fill="#111111" />

          {/* Nose & Graceful Smile */}
          <path d="M50 45 V49 L48 50" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M46 54 Q50 58 54 54" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

          {/* Professional Blazer Lapel */}
          <path d="M43 68 L50 78 L57 68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M38 72 L48 92 M62 72 L52 92" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'associate-daniel':
      // Daniel Okoye (Sharp jawline, neat taper haircut, suit with mustard collar pin)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Head & Neck */}
          <circle cx="50" cy="41" r="19" stroke="#111111" strokeWidth="2.2" />
          <path d="M43 59 V67 M57 59 V67" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Strong Shoulders */}
          <path d="M16 92 C22 74 33 67 43 67 H57 C67 67 78 74 84 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Neat Taper Hairline & Crown */}
          <path d="M32 32 C36 21 44 19 50 19 C56 19 64 21 68 32 Z" stroke="#111111" strokeWidth="2.4" strokeLinejoin="round" />

          {/* Determined Strong Brows & Eyes */}
          <line x1="38" y1="36" x2="46" y2="36" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="54" y1="36" x2="62" y2="36" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="42" cy="41" r="1.8" fill="#111111" />
          <circle cx="58" cy="41" r="1.8" fill="#111111" />

          {/* Chiseled Nose & Firm Mouth */}
          <path d="M50 44 V49 L47 50" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          <line x1="45" y1="54" x2="55" y2="54" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Collar & Tie with Mustard Lapel Pin Accent */}
          <path d="M43 67 L50 76 L57 67" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="48,76 52,76 53,92 47,92" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
          {/* Mustard Lapel Pin */}
          <circle cx="36" cy="74" r="3" fill="#C6902E" stroke="#111111" strokeWidth="2" />
        </svg>
      );

    case 'partner-elena':
      // Elena Rostova (Medical Law - Round spectacles with mustard bridge/accent, wavy layered hair)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Wavy Shoulder-Length Hair Outline */}
          <path d="M30 38 C26 50 26 68 32 82 M70 38 C74 50 74 68 68 82" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M31 34 Q50 20 69 34" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />

          {/* Head & Neck */}
          <circle cx="50" cy="42" r="18" stroke="#111111" strokeWidth="2.2" />
          <path d="M45 59 V68 M55 59 V68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Shoulders */}
          <path d="M20 92 C26 76 35 68 45 68 H55 C65 68 74 76 80 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Round Spectacles with Mustard Bridge Accent */}
          <circle cx="41" cy="42" r="6" stroke="#111111" strokeWidth="2.2" />
          <circle cx="59" cy="42" r="6" stroke="#111111" strokeWidth="2.2" />
          {/* Mustard Accent Bridge Bar */}
          <line x1="47" y1="42" x2="53" y2="42" stroke="#C6902E" strokeWidth="3" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="41" cy="42" r="1.6" fill="#111111" />
          <circle cx="59" cy="42" r="1.6" fill="#111111" />

          {/* Nose & Thoughtful Mouth */}
          <path d="M50 46 V50 L48 51" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M46 55 Q50 58 54 55" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

          {/* V-neck blouse */}
          <path d="M44 68 L50 78 L56 68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'associate-marcus':
      // Marcus Vance (Structured modern side-part haircut, suit with mustard tie)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Head & Neck */}
          <circle cx="50" cy="41" r="19" stroke="#111111" strokeWidth="2.2" />
          <path d="M44 59 V67 M56 59 V67" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Shoulders */}
          <path d="M18 92 C24 74 34 67 44 67 H56 C66 67 76 74 82 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Structured Side-Part Hair */}
          <path d="M32 34 C36 21 54 20 68 28 C60 26 48 26 38 34" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Eyes & Brows */}
          <line x1="38" y1="35" x2="45" y2="35" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="35" x2="62" y2="35" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          <circle cx="42" cy="40" r="1.6" fill="#111111" />
          <circle cx="58" cy="40" r="1.6" fill="#111111" />

          {/* Nose & Warm Smile */}
          <path d="M50 44 V48 L48 49" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M45 53 Q50 57 55 53" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

          {/* Collar & Mustard Tie Accent */}
          <path d="M44 67 L50 75 L56 67" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="48,75 52,75 54,92 46,92" fill="#C6902E" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );

    case 'associate-sophia':
      // Sophia Sterling (Family Law - Soft chin-length bob, gentle eyes, mustard hair clip accent)
      return (
        <svg
          viewBox="0 0 100 100"
          width={width}
          height={height}
          fill="none"
          className={`shrink-0 ${className}`}
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="46" stroke="#111111" strokeWidth="2.2" />

          {/* Layered Chin-Length Bob Hair */}
          <path d="M29 36 C24 50 25 64 32 72 M71 36 C76 50 75 64 68 72" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M30 36 C36 23 64 23 70 36" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />

          {/* Mustard Accent Hair Clip */}
          <rect x="33" y="27" width="9" height="3" rx="1.5" fill="#C6902E" stroke="#111111" strokeWidth="1.6" transform="rotate(-15 33 27)" />

          {/* Head & Neck */}
          <circle cx="50" cy="42" r="18" stroke="#111111" strokeWidth="2.2" />
          <path d="M45 59 V68 M55 59 V68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Shoulders */}
          <path d="M20 92 C26 76 35 68 45 68 H55 C65 68 74 76 80 92" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyes & Soft Brows */}
          <path d="M38 37 Q42 35 46 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M54 37 Q58 35 62 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="42" cy="41" r="1.6" fill="#111111" />
          <circle cx="58" cy="41" r="1.6" fill="#111111" />

          {/* Nose & Warm Gentle Smile */}
          <path d="M50 45 V49 L48 50" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M45 54 Q50 59 55 54" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

          {/* Blouse Neckline */}
          <path d="M44 68 L50 77 L56 68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};
