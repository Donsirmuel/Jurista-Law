import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// 1. Case Studies Icon Motif: An open legal case file / folder with index tab, documents, and paper clip
export const CaseFolderIcon: React.FC<IconProps> = ({ size = 48, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Back folder body with tab */}
    <path
      d="M8 18 L22 18 L27 24 L56 24 C57.65 24 59 25.35 59 27 L59 52 C59 53.65 57.65 55 56 55 L8 55 C6.35 55 5 53.65 5 52 L5 21 C5 19.35 6.35 18 8 18 Z"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="#FAFCF6"
    />

    {/* Inset legal documents peeking out */}
    <rect
      x="13"
      y="14"
      width="34"
      height="32"
      rx="2"
      stroke="#9C4A32"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="#F1F4EC"
      transform="rotate(-3 13 14)"
    />
    <line x1="18" y1="22" x2="38" y2="20.5" stroke="#9C4A32" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19" y1="28" x2="36" y2="26.5" stroke="#9C4A32" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="20" y1="34" x2="32" y2="32.5" stroke="#9C4A32" strokeWidth="1.8" strokeLinecap="round" />

    {/* Brass Document Clip */}
    <path
      d="M38 10 V23 C38 25 36 26.5 34 26.5 C32 26.5 30 25 30 23 V13 C30 11.5 31.5 10 33 10 C34.5 10 36 11.5 36 13 V21"
      stroke="#C6902E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Front folder flap angled forward */}
    <path
      d="M5 33 L22 30 L28 35 L59 35 L56 53 C55.7 54.2 54.5 55 53.2 55 L7 55 C5.7 55 4.7 54.1 4.5 52.8 L5 33 Z"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="#E6E4D2"
    />

    {/* Horizontal divider rule on front flap */}
    <line x1="12" y1="44" x2="48" y2="44" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// 2. Blog Icon Motif: An open legal treatise / book with pages and a fine fountain quill
export const OpenBookQuillIcon: React.FC<IconProps> = ({ size = 48, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    {...props}
  >
    {/* Book spine & pages outline */}
    <path
      d="M32 49 C24 45 13 45 6 49 V23 C13 19 24 19 32 23 C40 19 51 19 58 23 V49 C51 45 40 45 32 49 Z"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />

    {/* Center Spine Stitching */}
    <line x1="32" y1="23" x2="32" y2="49" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />

    {/* Left Page Text Lines */}
    <line x1="12" y1="28" x2="26" y2="28" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    <line x1="12" y1="34" x2="26" y2="34" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    <line x1="12" y1="40" x2="22" y2="40" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

    {/* Right Page Text Lines */}
    <line x1="38" y1="28" x2="52" y2="28" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    <line x1="38" y1="34" x2="52" y2="34" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    <line x1="38" y1="40" x2="48" y2="40" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

    {/* Diagonal Fountain Pen / Quill */}
    <path
      d="M48 8 L54 14 L36 32 L30 33 L31 27 Z"
      stroke="#9C4A32"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#F1F4EC"
    />
    <path d="M50 10 L52 12" stroke="#C6902E" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="33" x2="33" y2="30" stroke="#9C4A32" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// 3. Contact Icon Motif: A formal line-art envelope with inquiry wax seal / speech line
export const SpeechEnvelopeIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    className={className}
    {...props}
  >
    {/* Envelope Body */}
    <rect
      x="6"
      y="13"
      width="44"
      height="32"
      rx="3.5"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />

    {/* Envelope Flap Fold */}
    <path
      d="M6 15 L28 31 L50 15"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bottom Corner Creases */}
    <line x1="6" y1="44" x2="22" y2="29" stroke="#173330" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <line x1="50" y1="44" x2="34" y2="29" stroke="#173330" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

    {/* Center Seal Stamp in Brick */}
    <circle cx="28" cy="31" r="5" fill="#9C4A32" stroke="#173330" strokeWidth="2" />
  </svg>
);

// 4. Large Line-Art Office Scene with Scales of Justice (for Our Firm Hero)
export const OurFirmDeskIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    className={`w-full max-w-lg h-auto mx-auto ${className}`}
  >
    {/* Wall Window Arch with natural daylight lines */}
    <path
      d="M170 220 V115 A65 65 0 0 1 310 115 V220"
      stroke="#173330"
      strokeWidth="2.6"
      strokeLinecap="round"
      opacity="0.4"
    />
    <line x1="240" y1="50" x2="240" y2="220" stroke="#173330" strokeWidth="2" opacity="0.3" />
    <line x1="170" y1="125" x2="310" y2="125" stroke="#173330" strokeWidth="2" opacity="0.3" />

    {/* Classical Bookshelf with Legal Tomes */}
    <rect x="36" y="65" width="88" height="190" rx="4" stroke="#173330" strokeWidth="2.6" fill="#F1F4EC" />
    <line x1="36" y1="120" x2="124" y2="120" stroke="#173330" strokeWidth="2.4" />
    <line x1="36" y1="175" x2="124" y2="175" stroke="#173330" strokeWidth="2.4" />
    <line x1="36" y1="225" x2="124" y2="225" stroke="#173330" strokeWidth="2.4" />

    {/* Bookshelf volumes */}
    <rect x="48" y="78" width="13" height="42" rx="1.5" stroke="#173330" strokeWidth="2" fill="#E6E4D2" />
    <rect x="65" y="84" width="14" height="36" rx="1.5" stroke="#173330" strokeWidth="2" />
    <rect x="83" y="74" width="16" height="46" rx="1.5" stroke="#173330" strokeWidth="2" fill="#C6902E" />
    <rect x="103" y="82" width="11" height="38" rx="1.5" stroke="#173330" strokeWidth="2" />

    <rect x="49" y="132" width="16" height="43" rx="1.5" stroke="#173330" strokeWidth="2" fill="#9C4A32" />
    <rect x="69" y="138" width="18" height="37" rx="1.5" stroke="#173330" strokeWidth="2" fill="#E6E4D2" />
    <line x1="93" y1="145" x2="110" y2="173" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />

    {/* Large Scales of Justice Emblem on Office Wall */}
    <g transform="translate(240, 110)">
      <circle cx="0" cy="0" r="24" stroke="#C6902E" strokeWidth="2.4" fill="#FAFCF6" />
      <path d="M0 -15 V15 M-12 -6 H12" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />
      {/* Left scale pan */}
      <path d="M-12 -6 L-17 3 A5 4 0 0 0 -7 3 Z" stroke="#173330" strokeWidth="1.8" strokeLinejoin="round" fill="#E6E4D2" />
      {/* Right scale pan */}
      <path d="M12 -6 L7 3 A5 4 0 0 0 17 3 Z" stroke="#173330" strokeWidth="1.8" strokeLinejoin="round" fill="#E6E4D2" />
      <line x1="-6" y1="15" x2="6" y2="15" stroke="#173330" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    {/* Stately Partner Desk */}
    <path
      d="M120 220 H380 L400 255 H100 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />
    <line x1="130" y1="255" x2="130" y2="295" stroke="#173330" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="370" y1="255" x2="370" y2="295" stroke="#173330" strokeWidth="2.8" strokeLinecap="round" />
    {/* Desk Modesty Panel */}
    <rect x="145" y="255" width="210" height="28" stroke="#173330" strokeWidth="2.2" fill="#E6E4D2" opacity="0.7" />

    {/* Brass Banker's Lamp on Desk */}
    <path d="M150 220 H170 M160 220 V175 L182 158" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M174 148 L202 165 L178 178 Z" stroke="#173330" strokeWidth="2.4" fill="#C6902E" />

    {/* Brief Folio & Legal Contract on Desk */}
    <rect x="220" y="206" width="56" height="34" rx="2.5" stroke="#173330" strokeWidth="2.4" fill="#F1F4EC" transform="rotate(-6 220 206)" />
    <line x1="228" y1="216" x2="264" y2="212" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="229" y1="223" x2="258" y2="220" stroke="#173330" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="260" cy="226" r="3" fill="#9C4A32" />

    {/* Ink Stand & Fountain Pen */}
    <circle cx="305" cy="218" r="4.5" stroke="#173330" strokeWidth="2" fill="#E6E4D2" />
    <line x1="305" y1="215" x2="322" y2="188" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />

    {/* Polished Floor Horizon Line */}
    <line x1="20" y1="295" x2="460" y2="295" stroke="#173330" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

// 5. Contact Hero Building & Location Scene (lighter 2-column illustration)
export const ContactHeroScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 360 250"
    fill="none"
    className={`w-full max-w-sm h-auto mx-auto ${className}`}
  >
    {/* Street grid coordinate lines */}
    <line x1="30" y1="195" x2="330" y2="195" stroke="#173330" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="60" y1="50" x2="60" y2="215" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
    <line x1="180" y1="50" x2="180" y2="215" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
    <line x1="300" y1="50" x2="300" y2="215" stroke="#173330" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />

    {/* Background City Silhouettes */}
    <rect x="44" y="115" width="52" height="80" rx="3" stroke="#173330" strokeWidth="2" fill="#E6E4D2" opacity="0.5" />
    <rect x="264" y="95" width="58" height="100" rx="3" stroke="#173330" strokeWidth="2" fill="#E6E4D2" opacity="0.5" />

    {/* Jurista Law Lexington Ave Headquarters */}
    <path
      d="M125 195 V70 H235 V195 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#FAFCF6"
    />
    {/* Neoclassical Pediment */}
    <path
      d="M115 70 L180 36 L245 70 Z"
      stroke="#173330"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="#E6E4D2"
    />
    <rect x="120" y="70" width="120" height="5" stroke="#173330" strokeWidth="2" fill="#C6902E" />

    {/* Windows grid */}
    <rect x="142" y="88" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />
    <rect x="172" y="88" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />
    <rect x="202" y="88" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />

    <rect x="142" y="122" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />
    <rect x="172" y="122" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />
    <rect x="202" y="122" width="16" height="22" rx="1.5" stroke="#173330" strokeWidth="2" fill="#F1F4EC" />

    {/* Main Entrance Arch */}
    <path d="M165 195 V162 A15 15 0 0 1 195 162 V195 Z" stroke="#173330" strokeWidth="2.4" fill="#E6E4D2" />

    {/* Prominent Location Pin Marker */}
    <g transform="translate(180, 26)">
      <circle cx="0" cy="0" r="16" fill="#9C4A32" stroke="#173330" strokeWidth="2.2" />
      <circle cx="0" cy="0" r="5" fill="#FAFCF6" />
      <path d="M-8 10 L0 23 L8 10 Z" fill="#9C4A32" stroke="#173330" strokeWidth="1.8" />
    </g>

    {/* Lexington Ave Label Badge */}
    <rect x="110" y="210" width="140" height="24" rx="12" fill="#FAFCF6" stroke="#173330" strokeWidth="1.8" />
    <text x="180" y="226" textAnchor="middle" fill="#173330" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
      450 Lexington Ave, NY
    </text>
  </svg>
);
