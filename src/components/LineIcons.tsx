import React from 'react';
import { motion } from 'motion/react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  animated?: boolean;
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

// 1. Corporate Law Icon
// Meaning: Multi-story corporate headquarters skyscrapers with architectural glass facade, upward growth chevron, and enterprise foundation
export const CorporateIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* Main corporate tower */}
    <path
      d="M14 50 V18 L32 10 V50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Secondary adjacent modern tower */}
    <path
      d="M32 22 L46 16 V50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Foundation base line */}
    <path
      d="M10 50 H50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Corporate office windows (clean geometric line-art) */}
    <line x1="20" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="20" y1="29" x2="26" y2="29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="20" y1="36" x2="26" y2="36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="20" y1="43" x2="26" y2="43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    <line x1="38" y1="28" x2="41" y2="28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="38" y1="35" x2="41" y2="35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="38" y1="42" x2="41" y2="42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Upward growth chevron / handshake marker */}
    <path
      d="M26 12 L32 8 L38 12"
      stroke="#C6902E"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Immigration Law Icon
// Meaning: Official passport booklet with world globe meridians, visa entry stamp, and flight trajectory arc across borders
export const ImmigrationIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* Passport booklet cover */}
    <rect
      x="12"
      y="12"
      width="28"
      height="38"
      rx="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Passport spine shadow */}
    <line x1="17" y1="12" x2="17" y2="50" stroke="currentColor" strokeWidth="1.8" />

    {/* Globe emblem on passport cover */}
    <circle cx="26" cy="28" r="7" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="26" cy="28" rx="3.5" ry="7" stroke="currentColor" strokeWidth="1.6" />
    <line x1="19" y1="28" x2="33" y2="28" stroke="currentColor" strokeWidth="1.6" />

    {/* Biometric chip emblem at bottom */}
    <rect x="23" y="40" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />

    {/* Official Visa Entry Stamp (Diagonal on the right side) */}
    <circle
      cx="42"
      cy="24"
      r="10"
      stroke="#9C4A32"
      strokeWidth="2.4"
      strokeDasharray="3 3"
    />
    <path
      d="M37 24 L41 28 L48 20"
      stroke="#9C4A32"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Flight migration route arc */}
    <path
      d="M36 44 C42 43 47 38 49 32"
      stroke="#C6902E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="2 3"
    />
    <path
      d="M48 30 L51 33 L46 34 Z"
      fill="#C6902E"
    />
  </svg>
);

// 3. Real Estate Law Icon
// Meaning: Classic architectural house with gabled roof, front door, property foundation, and a prominent solid brass key
export const RealEstateIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* House structure */}
    <path
      d="M10 26 L27 12 L44 26 V48 H10 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Chimney */}
    <path d="M36 18 V14 H41 V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />

    {/* Front entrance door */}
    <path
      d="M22 48 V34 H32 V48"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="41" r="1.2" fill="currentColor" />

    {/* Attic window */}
    <circle cx="27" cy="22" r="3.5" stroke="currentColor" strokeWidth="2" />

    {/* Prominent Real Estate Key (Handed over in front) */}
    <g transform="translate(38, 30)">
      <circle cx="8" cy="8" r="6" stroke="#C6902E" strokeWidth="2.4" />
      <circle cx="8" cy="8" r="2.5" stroke="#C6902E" strokeWidth="1.8" />
      <path d="M8 14 V26" stroke="#C6902E" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 20 H13" stroke="#C6902E" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 24 H12" stroke="#C6902E" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    {/* Ground property boundary line */}
    <line x1="6" y1="48" x2="54" y2="48" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// 4. Criminal Law Icon
// Meaning: Judge's wooden gavel on strike block with impact acoustic lines, paired with protective shield
export const CriminalIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* Gavel Head (Angled striking mallet) */}
    <path
      d="M18 16 L28 26 L23 31 L13 21 Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Gavel Head End Caps */}
    <line x1="16" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <line x1="21" y1="29" x2="25" y2="33" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

    {/* Gavel Handle */}
    <path
      d="M26 21 L46 41"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line x1="43" y1="38" x2="48" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

    {/* Sound strike block (pedestal) */}
    <ellipse cx="20" cy="46" rx="14" ry="4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M6 46 V50 C6 52.2 12.3 54 20 54 C27.7 54 34 52.2 34 50 V46" stroke="currentColor" strokeWidth={strokeWidth} />

    {/* Strike impact dynamic lines */}
    <line x1="12" y1="36" x2="9" y2="33" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="20" y1="34" x2="20" y2="30" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="28" y1="36" x2="31" y2="33" stroke="#9C4A32" strokeWidth="2.4" strokeLinecap="round" />

    {/* Defense Shield Outline in background */}
    <path
      d="M40 14 C46 14 50 17 50 17 V28 C50 35 44 42 40 45 C38 43.5 35 40.5 33 37"
      stroke="#173330"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 3"
    />
  </svg>
);

// 5. Medical Law Icon
// Meaning: Clinical Rod of Asclepius (healing serpent coiled on staff) combined with Medical Cross and ECG heartbeat pulse
export const MedicalIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* Medical Cross background badge */}
    <path
      d="M24 10 H36 V20 H46 V32 H36 V42 H24 V32 H14 V20 H24 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      opacity="0.25"
    />

    {/* Central Caduceus / Asclepius Staff */}
    <line x1="30" y1="8" x2="30" y2="52" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="30" cy="8" r="3" fill="#C6902E" stroke="currentColor" strokeWidth="1.5" />

    {/* Coiling Serpent (Symbol of clinical diagnosis & standard of care) */}
    <path
      d="M23 16 C37 18 37 26 23 28 C23 30 37 32 37 38 C37 44 23 44 23 48 C23 50 27 50 30 50"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Serpent head */}
    <path d="M23 16 C22 14 24 12 26 12 C28 12 29 13 29 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Clinical vital ECG heartbeat wave crossing through */}
    <path
      d="M8 32 H18 L22 24 L26 40 L30 30 L34 34 L38 32 H52"
      stroke="#9C4A32"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Family Law Icon
// Meaning: Two parents with an embrace arch sheltering a young child in the center, expressing custody, protection, and care
export const FamilyIcon: React.FC<IconProps> = ({ size = 56, strokeWidth = 2.5, animated = false, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    {/* Parent 1 (Left) */}
    <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M8 48 C8 38 14 32 22 32 C24 32 26 33 27 34"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Parent 2 (Right) */}
    <circle cx="42" cy="18" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M52 48 C52 38 46 32 38 32 C36 32 34 33 33 34"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Child in the Center */}
    <circle cx="30" cy="27" r="4.5" stroke="#C6902E" strokeWidth={strokeWidth} />
    <path
      d="M22 50 C22 43 25 39 30 39 C35 39 38 43 38 50"
      stroke="#C6902E"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Holding hands / sheltering embrace arch overhead */}
    <path
      d="M12 28 Q30 10 48 28"
      stroke="#9C4A32"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />

    {/* Ground baseline */}
    <line x1="6" y1="50" x2="54" y2="50" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Canonical Scales of Justice
export const ScalesIcon: React.FC<IconProps> = ({ size = 48, strokeWidth = 2.6, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M30 12 V48 M20 20 H40 M20 20 L13 32 A7 6 0 0 0 27 32 Z M40 20 L33 32 A7 6 0 0 0 47 32 Z M24 48 H36"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Brick Checkmark for values & capability lists
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

export const CalendarLineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const ClockLineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// Large Line-Art Office Scene Illustration for About Page
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
