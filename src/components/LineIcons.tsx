import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

// Brand Logo Mark (Architectural Pillar & Courthouse Motif)
export const BrandLogoIcon: React.FC<IconProps> = ({ size = 28, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M20 4 L34 12 L34 16 L6 16 L6 12 Z"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M20 4 L20 34" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M6 16 L6 34 M34 16 L34 34" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M4 34 H36" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

// 1. Bespoke Corporate Law Icon — The Handshake & Contract Agreement
// Visual Concept: Formal executive handshake sealing an agreement, framed with contract document & fountain pen
export const CorporateIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Contract document outline in background */}
    <rect
      x="12"
      y="8"
      width="40"
      height="48"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="4 3"
      opacity="0.3"
    />
    <line x1="20" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.8" opacity="0.35" strokeLinecap="round" />
    <line x1="20" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="1.8" opacity="0.35" strokeLinecap="round" />

    {/* Handshake: Left Partner Arm & Cuff */}
    <path
      d="M6 38 L16 30 L22 34 L12 44 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="9" y1="35" x2="15" y2="41" stroke="#C6902E" strokeWidth="2" strokeLinecap="round" />

    {/* Handshake: Right Partner Arm & Cuff */}
    <path
      d="M58 38 L48 30 L42 34 L52 44 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="55" y1="35" x2="49" y2="41" stroke="#C6902E" strokeWidth="2" strokeLinecap="round" />

    {/* Handshake: Clasped Hands & Fingers */}
    <path
      d="M22 34 L28 28 C30 26 34 26 36 28 L42 34"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Interlocked fingers */}
    <path
      d="M25 36 L31 42 C33 44 37 44 39 42 L42 39"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 39 L33 44"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M32 42 L36 46"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Partnership / Deal Star Sparkle */}
    <path
      d="M32 20 L33.5 24 L37.5 25.5 L33.5 27 L32 31 L30.5 27 L26.5 25.5 L30.5 24 Z"
      fill="#C6902E"
    />

    {/* Signature wax seal stamp at bottom right */}
    <circle cx="44" cy="46" r="6" stroke="#9C4A32" strokeWidth="2" />
    <path d="M41 46 L43 48 L47 44" stroke="#9C4A32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 2. Bespoke Immigration Law Icon — The World Globe & Transnational Flight
// Visual Concept: World globe with meridians, orbital migration route across borders, and visa seal
export const ImmigrationIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Main Globe Sphere */}
    <circle
      cx="30"
      cy="32"
      r="20"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Equator */}
    <line
      x1="10"
      y1="32"
      x2="50"
      y2="32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Latitude parallels */}
    <path
      d="M13 22 C18 25 42 25 47 22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13 42 C18 39 42 39 47 42"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Longitude central meridian */}
    <line
      x1="30"
      y1="12"
      x2="30"
      y2="52"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Elliptical side meridians */}
    <ellipse
      cx="30"
      cy="32"
      rx="11"
      ry="20"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Transnational Flight / Journey Orbital Arc */}
    <path
      d="M16 48 C24 56 46 54 54 40 C60 28 54 14 42 10"
      stroke="#C6902E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="4 3"
    />

    {/* Aircraft / Migration Arrowhead */}
    <g transform="translate(42, 10) rotate(-45)">
      <path
        d="M0 0 L8 3 L12 0 L8 -3 Z"
        fill="#C6902E"
        stroke="#173330"
        strokeWidth="1.2"
      />
      <path d="M4 -5 L7 -1 M4 5 L7 1" stroke="#C6902E" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Approved Entry Visa Stamp Emblem */}
    <circle
      cx="46"
      cy="44"
      r="9"
      stroke="#9C4A32"
      strokeWidth="2.2"
      strokeDasharray="2 2"
    />
    <path
      d="M42 44 L45 47 L51 41"
      stroke="#9C4A32"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Bespoke Litigation & Justice Icon — The Classical Scales of Justice
// Visual Concept: Fluted pillar, balanced horizontal brass beam, suspension chains, and weighing pans
export const ScalesOfJusticeIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Base Pedestal (Courthouse Foundation) */}
    <path
      d="M20 54 H44"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M24 50 H40"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M28 46 H36"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Central Pillar Column */}
    <line
      x1="32"
      y1="14"
      x2="32"
      y2="46"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    {/* Fulcrum Top Finial & Pivot Ring */}
    <circle cx="32" cy="12" r="3.5" stroke="#C6902E" strokeWidth="2.2" fill="#FAFCF6" />
    <circle cx="32" cy="18" r="2" fill="currentColor" />

    {/* Main Balance Beam (Equilibrium) */}
    <path
      d="M12 18 C20 16 44 16 52 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Beam end rings */}
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="52" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />

    {/* Left Scale: Hanging Chains */}
    <line x1="12" y1="20" x2="6" y2="34" stroke="currentColor" strokeWidth="1.6" />
    <line x1="12" y1="20" x2="18" y2="34" stroke="currentColor" strokeWidth="1.6" />
    {/* Left Scale Pan */}
    <path
      d="M4 34 Q12 42 20 34 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="4" y1="34" x2="20" y2="34" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

    {/* Right Scale: Hanging Chains */}
    <line x1="52" y1="20" x2="46" y2="34" stroke="currentColor" strokeWidth="1.6" />
    <line x1="52" y1="20" x2="58" y2="34" stroke="currentColor" strokeWidth="1.6" />
    {/* Right Scale Pan */}
    <path
      d="M44 34 Q52 42 60 34 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="44" y1="34" x2="60" y2="34" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

    {/* Subtle indicator needle pointing straight up */}
    <line x1="32" y1="18" x2="32" y2="24" stroke="#9C4A32" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Alias for Litigation / Medical
export const ScalesIcon = ScalesOfJusticeIcon;
export const LitigationIcon = ScalesOfJusticeIcon;

// 4. Bespoke Real Estate Law Icon — Architectural Manor, Deed & Solid Brass Key
export const RealEstateIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* House Structure */}
    <path
      d="M10 28 L28 14 L46 28 V52 H10 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Chimney */}
    <path
      d="M38 20 V14 H43 V24"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Attic Fanlight Window */}
    <path
      d="M23 24 A5 5 0 0 1 33 24 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <line x1="28" y1="19" x2="28" y2="24" stroke="currentColor" strokeWidth="1.6" />

    {/* Front Entrance Door */}
    <path
      d="M22 52 V36 H34 V52"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="31" cy="44" r="1.5" fill="#C6902E" />

    {/* Ground Boundary Line */}
    <line x1="6" y1="52" x2="56" y2="52" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

    {/* Prominent Brass Property Key in Foreground */}
    <g transform="translate(38, 28)">
      <circle cx="10" cy="8" r="7" stroke="#C6902E" strokeWidth="2.4" />
      <circle cx="10" cy="8" r="3" stroke="#C6902E" strokeWidth="1.8" />
      <path d="M10 15 V30" stroke="#C6902E" strokeWidth="2.6" strokeLinecap="round" />
      {/* Key wards / teeth */}
      <path d="M10 22 H15" stroke="#C6902E" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M10 27 H16" stroke="#C6902E" strokeWidth="2.4" strokeLinecap="round" />
    </g>

    {/* Parcel boundary badge */}
    <circle cx="50" cy="16" r="2" fill="#9C4A32" />
    <path d="M47 16 H53 M50 13 V19" stroke="#9C4A32" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 5. Bespoke Criminal Law Icon — The Judge's Gavel & Defense Shield
export const CriminalIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Constitutional Defense Shield Outline in Background */}
    <path
      d="M38 10 C46 10 52 14 52 14 V28 C52 40 44 48 38 52 C35 50 30 46 27 42"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="3 3"
      opacity="0.35"
    />

    {/* Strike block pedestal */}
    <ellipse cx="22" cy="50" rx="14" ry="4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M8 50 V54 C8 56.5 14.5 58 22 58 C29.5 58 36 56.5 36 54 V50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />

    {/* Striking Gavel Mallet Head */}
    <path
      d="M18 16 L28 26 L23 31 L13 21 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="16" y1="14" x2="20" y2="18" stroke="#C6902E" strokeWidth={strokeWidth} strokeLinecap="round" />
    <line x1="21" y1="29" x2="25" y2="33" stroke="#C6902E" strokeWidth={strokeWidth} strokeLinecap="round" />

    {/* Gavel Handle */}
    <path
      d="M26 21 L48 43"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Grip ribbing */}
    <line x1="43" y1="38" x2="48" y2="43" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />

    {/* Impact Acoustic Resonance Lines */}
    <line x1="12" y1="39" x2="8" y2="35" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="22" y1="37" x2="22" y2="31" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="32" y1="39" x2="36" y2="35" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// 6. Bespoke Medical Law Icon — Clinical Caduceus, Medical Cross & Vital ECG Pulse
export const MedicalIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Subtle Medical Cross Emblem in Background */}
    <path
      d="M26 12 H38 V22 H48 V34 H38 V44 H26 V34 H16 V22 H26 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      opacity="0.25"
    />

    {/* Central Caduceus / Rod of Asclepius */}
    <line x1="32" y1="8" x2="32" y2="54" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="32" cy="8" r="3" fill="#C6902E" stroke="currentColor" strokeWidth="1.5" />

    {/* Healing Coiled Serpent */}
    <path
      d="M24 16 C38 18 38 26 24 28 C24 30 38 32 38 38 C38 44 24 44 24 48 C24 50 28 50 32 50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="16" r="1.5" fill="#9C4A32" />

    {/* Clinical Vital ECG Heartbeat Wave */}
    <path
      d="M8 32 H18 L22 23 L27 41 L32 29 L36 35 L40 32 H56"
      stroke="#9C4A32"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 7. Bespoke Family Law Icon — Protective Arch, Parents & Children
export const FamilyIcon: React.FC<IconProps> = ({
  size = 56,
  strokeWidth = 2.4,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Ground baseline */}
    <line x1="8" y1="52" x2="56" y2="52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Protective Haven Arch Overhead */}
    <path
      d="M12 28 Q32 8 52 28"
      stroke="#9C4A32"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />

    {/* Parent 1 (Left) */}
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M10 50 C10 38 16 32 24 32 C26 32 28 33 29 34"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Parent 2 (Right) */}
    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M54 50 C54 38 48 32 40 32 C38 32 36 33 35 34"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Child in the Center */}
    <circle cx="32" cy="28" r="4.5" stroke="#C6902E" strokeWidth={strokeWidth} fill="#FAFCF6" />
    <path
      d="M24 52 C24 44 27 40 32 40 C37 40 40 44 40 52"
      stroke="#C6902E"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Custody & Protection Harmony Heart in Center */}
    <path
      d="M32 15 C30 13 27 13 27 16 C27 19 32 22 32 22 C32 22 37 19 37 16 C37 13 34 13 32 15 Z"
      fill="#9C4A32"
      opacity="0.85"
    />
  </svg>
);

// Checkmark for values & lists
export const BrickCheckIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
  >
    <path
      d="M4 12 L10 18 L20 6"
      stroke="#9C4A32"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Utility Line Icons
export const ArrowRightIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneLineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4743 21.8326 20.7294C21.721 20.9845 21.5574 21.2132 21.3524 21.3999C21.1474 21.5866 20.9056 21.7271 20.6433 21.8116C20.3809 21.8961 20.1037 21.9228 19.83 21.89C16.7428 21.5552 13.777 20.5002 11.17 18.81C8.75389 17.2721 6.72793 15.2461 5.19 12.83C3.49397 10.2114 2.43854 7.2317 2.11 4.13C2.07728 3.85698 2.10377 3.58045 2.18768 3.31868C2.2716 3.0569 2.41108 2.81561 2.59664 2.61102C2.7822 2.40643 3.00974 2.2431 3.26359 2.13204C3.51744 2.02098 3.79189 1.96466 4.07 1.96H7.07C7.56252 1.95523 8.04018 2.13111 8.41113 2.45427C8.78208 2.77743 9.02068 3.22596 9.08 3.72C9.19139 4.64687 9.41775 5.55627 9.75 6.43C9.88939 6.79375 9.91931 7.18949 9.83606 7.56942C9.75281 7.94935 9.55986 8.29744 9.28 8.57L8.01 9.84C9.43444 12.3435 11.4965 14.4056 14 15.83L15.27 14.56C15.5426 14.2801 15.8906 14.0872 16.2706 14.0039C16.6505 13.9207 17.0463 13.9506 17.41 14.09C18.2837 14.4222 19.1931 14.6486 20.12 14.76C20.6199 14.8197 21.0734 15.0624 21.3976 15.4402C21.7218 15.818 21.8943 16.304 21.89 16.8V16.92Z"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MailLineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LocationPinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 21C16 16.5 19 13 19 9A7 7 0 1 0 5 9C5 13 8 16.5 12 21Z"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2.2" />
  </svg>
);

export const ClockLineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// Large Line-Art Office Scene Illustration for About / Our Firm Page
export const OfficeSceneIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 460 300"
    fill="none"
    className={`w-full max-w-lg h-auto mx-auto ${className}`}
  >
    {/* Wall Arch Window */}
    <path
      d="M160 210 V110 A70 70 0 0 1 300 110 V210"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinecap="round"
      opacity="0.45"
    />
    <line x1="230" y1="40" x2="230" y2="210" stroke="#173330" strokeWidth="2" opacity="0.35" />
    <line x1="160" y1="120" x2="300" y2="120" stroke="#173330" strokeWidth="2" opacity="0.35" />

    {/* Bookshelf */}
    <rect x="40" y="70" width="80" height="170" rx="4" stroke="#173330" strokeWidth="2.6" />
    <line x1="40" y1="120" x2="120" y2="120" stroke="#173330" strokeWidth="2.4" />
    <line x1="40" y1="170" x2="120" y2="170" stroke="#173330" strokeWidth="2.4" />
    <line x1="40" y1="215" x2="120" y2="215" stroke="#173330" strokeWidth="2.4" />

    {/* Books on shelf */}
    <rect x="52" y="85" width="12" height="35" rx="1" stroke="#173330" strokeWidth="2" fill="#E6E4D2" />
    <rect x="68" y="90" width="14" height="30" rx="1" stroke="#173330" strokeWidth="2" />
    <rect x="86" y="80" width="16" height="40" rx="1" stroke="#173330" strokeWidth="2" fill="#FBF2DC" />

    <rect x="54" y="132" width="14" height="38" rx="1" stroke="#173330" strokeWidth="2" />
    <rect x="72" y="138" width="18" height="32" rx="1" stroke="#173330" strokeWidth="2" fill="#E6E4D2" />
    <line x1="94" y1="145" x2="108" y2="168" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />

    {/* Desk */}
    <path
      d="M110 210 H350 L370 240 H90 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />
    <line x1="120" y1="240" x2="120" y2="280" stroke="#173330" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="340" y1="240" x2="340" y2="280" stroke="#173330" strokeWidth="2.8" strokeLinecap="round" />

    {/* Desk Lamp */}
    <path d="M140 210 H160 M150 210 V165 L170 148" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M165 140 L185 155 L165 165 Z" stroke="#173330" strokeWidth="2.4" fill="#C6902E" />

    {/* Legal Document Folio & Scales */}
    <rect x="200" y="195" width="45" height="25" rx="2" stroke="#173330" strokeWidth="2.4" fill="#F1F4EC" transform="rotate(-6 200 195)" />
    <line x1="205" y1="204" x2="235" y2="201" stroke="#173330" strokeWidth="1.8" />
    <line x1="206" y1="210" x2="230" y2="207" stroke="#173330" strokeWidth="1.8" />

    {/* Pen in stand */}
    <circle cx="265" cy="208" r="4" stroke="#173330" strokeWidth="2" />
    <line x1="265" y1="206" x2="278" y2="182" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />

    {/* Scales of justice mini emblem on the wall */}
    <circle cx="230" cy="80" r="18" stroke="#173330" strokeWidth="2.4" fill="#E6E4D2" />
    <path d="M230 68 V88 M222 74 H238 M222 74 L218 82 A4 3 0 0 0 226 82 Z M238 74 L234 82 A4 3 0 0 0 242 82 Z" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" />

    {/* Hardwood floor line */}
    <line x1="20" y1="280" x2="440" y2="280" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

// Line-art Building & Location Map Illustration for Contact Page
export const BuildingMapIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 360 240"
    fill="none"
    className={`w-full max-w-sm h-auto mx-auto ${className}`}
  >
    <line x1="40" y1="180" x2="320" y2="180" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="70" y1="40" x2="70" y2="200" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
    <line x1="180" y1="40" x2="180" y2="200" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
    <line x1="290" y1="40" x2="290" y2="200" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />

    <rect x="50" y="110" width="50" height="70" rx="3" stroke="#173330" strokeWidth="2.2" fill="#E6E4D2" opacity="0.6" />
    <rect x="250" y="90" width="60" height="90" rx="3" stroke="#173330" strokeWidth="2.2" fill="#E6E4D2" opacity="0.6" />

    {/* Headquarters Building */}
    <path
      d="M130 180 V60 H210 V180 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />
    <path
      d="M120 60 L170 32 L220 60 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#E6E4D2"
    />

    <rect x="145" y="75" width="12" height="18" rx="1" stroke="#173330" strokeWidth="2" />
    <rect x="183" y="75" width="12" height="18" rx="1" stroke="#173330" strokeWidth="2" />
    <rect x="145" y="105" width="12" height="18" rx="1" stroke="#173330" strokeWidth="2" />
    <rect x="183" y="105" width="12" height="18" rx="1" stroke="#173330" strokeWidth="2" />

    <path d="M160 180 V150 A10 10 0 0 1 180 150 V180 Z" stroke="#173330" strokeWidth="2.4" fill="#C6902E" />

    <g transform="translate(170, 16)">
      <path
        d="M0 0 C6 -6 12 -12 12 -18 A12 12 0 1 0 -12 -18 C-12 -12 -6 -6 0 0 Z"
        fill="#9C4A32"
        stroke="#173330"
        strokeWidth="2.2"
      />
      <circle cx="0" cy="-18" r="4" fill="#F1F4EC" />
    </g>
  </svg>
);

// Neoclassical Courthouse Skyline Line-Art Border (For Footer & Architecture Motifs)
export const CourthouseSkylineSilhouette: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 800 64"
    fill="none"
    className={`w-full h-auto ${className}`}
    preserveAspectRatio="none"
  >
    {/* Base ground line */}
    <line x1="0" y1="62" x2="800" y2="62" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

    {/* Neoclassical courthouse facade with triangular pediment & columns */}
    <g opacity="0.28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {/* Central pediment */}
      <path d="M340 40 L400 16 L460 40 Z" />
      <path d="M335 44 H465" />
      {/* Columns */}
      <line x1="352" y1="44" x2="352" y2="62" />
      <line x1="372" y1="44" x2="372" y2="62" />
      <line x1="392" y1="44" x2="392" y2="62" />
      <line x1="408" y1="44" x2="408" y2="62" />
      <line x1="428" y1="44" x2="428" y2="62" />
      <line x1="448" y1="44" x2="448" y2="62" />

      {/* Flanking urban structures */}
      <rect x="220" y="32" width="60" height="30" />
      <line x1="240" y1="36" x2="240" y2="58" strokeDasharray="3 3" />
      <line x1="260" y1="36" x2="260" y2="58" strokeDasharray="3 3" />

      <rect x="520" y="28" width="65" height="34" />
      <line x1="540" y1="32" x2="540" y2="58" strokeDasharray="3 3" />
      <line x1="565" y1="32" x2="565" y2="58" strokeDasharray="3 3" />

      {/* Distant skyline outlines */}
      <path d="M120 62 V48 H160 V62" />
      <path d="M640 62 V42 H680 V62" />
      <path d="M50 62 V52 H85 V62" />
      <path d="M720 62 V50 H760 V62" />
    </g>
  </svg>
);
