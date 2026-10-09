import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

/**
 * Jurista Law Site-Wide Icon System
 * Spec:
 * - Canvas: viewBox="0 0 100 100" grid
 * - Stroke: #111111 (near-black), stroke-width: 2.2, stroke-linecap: round, stroke-linejoin: round, fill: none
 * - Accent fill: single flat mustard fill #C6902E with black stroke on ONE small feature per icon
 * - Professional editorial line-art with authentic legal details
 * - Zero pill containers, zero chips, zero gradients, zero shadows
 */

// 1. Header & Brand Logo Mark: Simplified columned courthouse with scales glyph
export const BrandLogoIcon: React.FC<IconProps> = ({ size = 28, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Triangular Pediment with Mustard Tympanum Detail */}
    <polygon points="50,14 18,34 82,34" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="27" r="3.5" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
    <line x1="14" y1="34" x2="86" y2="34" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="14" y1="40" x2="86" y2="40" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* 4 Architectural Columns with Capitals */}
    <line x1="26" y1="40" x2="26" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="42" y1="40" x2="42" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="58" y1="40" x2="58" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="74" y1="40" x2="74" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Stepped Base / Stylobate */}
    <line x1="18" y1="76" x2="82" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="14" y1="82" x2="86" y2="82" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="10" y1="88" x2="90" y2="88" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 2. Canonical Corporate Law Icon: Courthouse / columned building
export const CorporateIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Triangular Pediment with Mustard Tympanum Accent */}
    <polygon points="50,14 14,36 86,36" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="50,22 28,34 72,34" fill="#C6902E" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Entablature */}
    <line x1="10" y1="36" x2="90" y2="36" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="12" y1="42" x2="88" y2="42" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* 4 Classical Columns with fluting and capitals */}
    {/* Column 1 */}
    <line x1="21" y1="42" x2="27" y2="42" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="22" y1="42" x2="22" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="26" y1="42" x2="26" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="21" y1="76" x2="27" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Column 2 */}
    <line x1="39" y1="42" x2="45" y2="42" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="40" y1="42" x2="40" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="44" y1="42" x2="44" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="39" y1="76" x2="45" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Column 3 */}
    <line x1="55" y1="42" x2="61" y2="42" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="56" y1="42" x2="56" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="60" y1="42" x2="60" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="55" y1="76" x2="61" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Column 4 */}
    <line x1="73" y1="42" x2="79" y2="42" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="74" y1="42" x2="74" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="78" y1="42" x2="78" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="73" y1="76" x2="79" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Central double door */}
    <path d="M47 76 V56 H53 V76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Three Stepped Base Plinths */}
    <line x1="12" y1="76" x2="88" y2="76" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="8" y1="82" x2="92" y2="82" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="4" y1="88" x2="96" y2="88" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 3. Canonical Immigration Law Icon: Passport with globe
export const ImmigrationIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Passport Booklet Cover */}
    <rect x="22" y="14" width="56" height="74" rx="4" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Spine Binding Crease */}
    <line x1="28" y1="14" x2="28" y2="88" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* "PASSPORT" Emblem Header Line */}
    <line x1="36" y1="24" x2="70" y2="24" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Globe Emblem in Center */}
    <circle cx="53" cy="46" r="16" stroke="#111111" strokeWidth="2.2" />
    <line x1="37" y1="46" x2="69" y2="46" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="53" y1="30" x2="53" y2="62" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <ellipse cx="53" cy="46" rx="9" ry="16" stroke="#111111" strokeWidth="2.2" />
    <path d="M40 38 Q53 42 66 38" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M40 54 Q53 50 66 54" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Official Visa Entry Stamp with Mustard Accent Fill */}
    <g transform="rotate(-10 60 74)">
      <rect x="46" y="66" width="22" height="15" rx="2" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
      <line x1="50" y1="71" x2="64" y2="71" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="76" x2="61" y2="76" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Machine-readable text zones at bottom */}
    <line x1="34" y1="80" x2="44" y2="80" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 4. Canonical Real Estate Law Icon: House with key
export const RealEstateIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Gable Roof with Chimney */}
    <path d="M14 48 L46 20 L78 48" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 32 V20 H68 V39" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* House Body */}
    <path d="M22 48 V86 H70 V48" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Attic Louver / Round Window */}
    <circle cx="46" cy="34" r="5" stroke="#111111" strokeWidth="2.2" />
    <line x1="41" y1="34" x2="51" y2="34" stroke="#111111" strokeWidth="2.2" />
    <line x1="46" y1="29" x2="46" y2="39" stroke="#111111" strokeWidth="2.2" />

    {/* Paned Window on Left */}
    <rect x="28" y="56" width="14" height="16" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="35" y1="56" x2="35" y2="72" stroke="#111111" strokeWidth="2.2" />
    <line x1="28" y1="64" x2="42" y2="64" stroke="#111111" strokeWidth="2.2" />

    {/* Classic Key Angled in Front with Mustard Bow Accent */}
    <g transform="translate(10, 0)">
      {/* Key Bow with Mustard Fill */}
      <circle cx="68" cy="62" r="9" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
      <circle cx="68" cy="62" r="4" fill="#FAFCF6" stroke="#111111" strokeWidth="2.2" />
      {/* Key Stem */}
      <line x1="59" y1="62" x2="22" y2="62" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
      {/* Key Bits / Teeth */}
      <line x1="28" y1="62" x2="28" y2="72" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="35" y1="62" x2="35" y2="70" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="31" y1="72" x2="28" y2="72" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    {/* Ground baseline */}
    <line x1="10" y1="86" x2="86" y2="86" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 5. Canonical Criminal Law Icon: Handcuffs
export const CriminalIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Left Handcuff Ring with Ratchet Teeth */}
    <circle cx="28" cy="50" r="18" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="28" cy="50" r="12" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Left Ratchet Hinge & Lock Box */}
    <rect x="22" y="32" width="12" height="6" rx="1.5" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 45 L16 49 M10 52 L14 56 M42 45 L46 49" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Left Keyhole */}
    <circle cx="28" cy="52" r="1.5" fill="#111111" />
    <line x1="28" y1="53.5" x2="28" y2="57" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />

    {/* Right Handcuff Ring with Ratchet Teeth */}
    <circle cx="72" cy="50" r="18" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="72" cy="50" r="12" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Right Ratchet Hinge & Lock Box */}
    <rect x="66" y="32" width="12" height="6" rx="1.5" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M56 45 L60 49 M86 45 L90 49 M88 52 L92 56" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Right Keyhole */}
    <circle cx="72" cy="52" r="1.5" fill="#111111" />
    <line x1="72" y1="53.5" x2="72" y2="57" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />

    {/* Three Chain Links Connecting Handcuffs with Center Mustard Accent Link */}
    {/* Left link */}
    <rect x="38" y="47" width="8" height="6" rx="3" stroke="#111111" strokeWidth="2.2" />
    {/* Center Link (Mustard Accent) */}
    <rect x="46" y="46" width="8" height="8" rx="4" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
    {/* Right link */}
    <rect x="54" y="47" width="8" height="6" rx="3" stroke="#111111" strokeWidth="2.2" />
  </svg>
);

// 6. Canonical Medical Law Icon: Caduceus
export const MedicalIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Central Wand / Staff of Hermes */}
    <line x1="50" y1="18" x2="50" y2="88" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M47 88 H53 L50 93 Z" fill="#111111" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />

    {/* Top Finial / Round Knob with Mustard Accent Fill */}
    <circle cx="50" cy="18" r="6" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />

    {/* Symmetrical Wings Spreading from Top */}
    {/* Left wing with 3 feather ribs */}
    <path d="M50 24 C40 16 26 18 16 26 C24 30 36 29 44 32 C36 36 28 36 20 40 C30 43 42 40 48 41" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right wing with 3 feather ribs */}
    <path d="M50 24 C60 16 74 18 84 26 C76 30 64 29 56 32 C64 36 72 36 80 40 C70 43 58 40 52 41" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Two Intertwined Serpents Coiling around Staff */}
    {/* Upper Loop */}
    <path d="M44 30 C38 32 36 38 42 44 C46 48 54 48 58 44 C64 38 62 32 56 30" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Middle Loop (Figure 8 Cross) */}
    <path d="M42 44 C34 50 32 58 40 64 C46 68 54 68 60 64 C68 58 66 50 58 44" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Lower Loop Towards Base */}
    <path d="M40 64 C36 70 36 76 44 80 C48 82 52 82 56 80 C64 76 64 70 60 64" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Serpent Heads Facing Inward at Top */}
    <circle cx="43" cy="29" r="2.5" stroke="#111111" strokeWidth="2.2" />
    <circle cx="57" cy="29" r="2.5" stroke="#111111" strokeWidth="2.2" />
  </svg>
);

// 7. Canonical Family Law Icon: Family group (two adults and a child, stick-figure line art)
export const FamilyIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Adult 1 (Left - Taller) */}
    <circle cx="28" cy="24" r="8" stroke="#111111" strokeWidth="2.2" />
    {/* Body */}
    <line x1="28" y1="32" x2="28" y2="60" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Left Arm down */}
    <path d="M28 38 L14 54" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Right Arm holding child's hand */}
    <path d="M28 40 L40 52" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Legs */}
    <path d="M28 60 L18 84 M28 60 L36 84" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Child (Center - Smaller with Mustard Accent Scarf/Heart) */}
    <circle cx="50" cy="42" r="6" stroke="#111111" strokeWidth="2.2" />
    {/* Mustard accent heart emblem / brooch on child */}
    <path d="M50 51 C48 49 46 51 46 53 C46 56 50 58 50 58 C50 58 54 56 54 53 C54 51 52 49 50 51 Z" fill="#C6902E" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Body */}
    <line x1="50" y1="48" x2="50" y2="68" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Arms holding parents' hands */}
    <path d="M50 54 L40 52" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M50 54 L60 52" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Legs */}
    <path d="M50 68 L44 84 M50 68 L56 84" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Adult 2 (Right) */}
    <circle cx="72" cy="26" r="8" stroke="#111111" strokeWidth="2.2" />
    {/* Body */}
    <line x1="72" y1="34" x2="72" y2="60" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Left Arm holding child's hand */}
    <path d="M72 40 L60 52" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Right Arm down */}
    <path d="M72 38 L86 54" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    {/* Legs / Skirt line */}
    <path d="M72 60 L64 84 M72 60 L80 84" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Ground baseline */}
    <line x1="10" y1="88" x2="90" y2="88" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 8. General Brand Mark: Scales of justice
export const ScalesOfJusticeIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Stepped Pedestal Base */}
    <line x1="30" y1="90" x2="70" y2="90" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M38 90 L42 82 H58 L62 90" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Central Fluted Pillar */}
    <line x1="50" y1="82" x2="50" y2="24" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />

    {/* Fulcrum Ball & Finial with Mustard Accent Fill */}
    <circle cx="50" cy="18" r="5" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />

    {/* Horizontal Balancing Beam */}
    <path d="M18 30 Q50 22 82 30" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="18" cy="30" r="2.5" stroke="#111111" strokeWidth="2.2" />
    <circle cx="82" cy="30" r="2.5" stroke="#111111" strokeWidth="2.2" />

    {/* Left Scale Pan and Suspension Chains */}
    <line x1="18" y1="30" x2="8" y2="62" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="18" y1="30" x2="28" y2="62" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 62 Q18 76 30 62 Z" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />

    {/* Right Scale Pan and Suspension Chains */}
    <line x1="82" y1="30" x2="72" y2="62" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="82" y1="30" x2="92" y2="62" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M70 62 Q82 76 94 62 Z" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

// 9. General Brand Mark: Gavel and sound block
export const GavelIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Sound Block Base (Double Tier) */}
    <polygon points="20,78 80,78 74,86 26,86" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    <rect x="18" y="86" width="64" height="6" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />

    {/* Turned Wood Gavel Handle */}
    <path d="M50 78 L32 38" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="51" cy="79" r="2.5" stroke="#111111" strokeWidth="2.2" />

    {/* Gavel Mallet Barrel with Mustard Accent Head */}
    <polygon points="22,34 38,27 44,40 28,47" fill="#C6902E" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Left Striking Face */}
    <polygon points="16,36 24,32 30,46 22,50" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Right Striking Face */}
    <polygon points="36,27 44,23 50,37 42,41" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

// 10. General Brand Mark: Open Law Book / Legal Tome
export const LawBookIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Book Pages & Spine Curves */}
    <path d="M16 26 C32 21 48 25 50 29 C52 25 68 21 84 26 V76 C68 71 52 75 50 79 C48 75 32 71 16 76 Z" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Center Spine Stitching */}
    <line x1="50" y1="29" x2="50" y2="79" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Left Page Text Lines */}
    <path d="M22 35 C32 32 42 34 44 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 45 C32 42 42 44 44 47" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 55 C32 52 42 54 44 57" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 65 C32 62 42 64 44 67" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />

    {/* Right Page Text Lines */}
    <path d="M78 35 C68 32 58 34 56 37" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M78 45 C68 42 58 44 56 47" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M78 55 C68 52 58 54 56 57" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M78 65 C68 62 58 64 56 67" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />

    {/* Silk Bookmark Ribbon with Mustard Accent Fill */}
    <polygon points="48,29 52,29 52,65 50,60 48,65" fill="#C6902E" stroke="#111111" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// 11. General Brand Mark: Document with wax seal
export const DocumentSealIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Parchment Document with Folded Dog-Ear Corner */}
    <polygon points="22,14 62,14 78,30 78,86 22,86" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="62,14 62,30 78,30" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Written Text Paragraph Lines */}
    <line x1="30" y1="36" x2="56" y2="36" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="30" y1="46" x2="70" y2="46" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="30" y1="56" x2="70" y2="56" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="30" y1="66" x2="52" y2="66" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Wax Notarial Seal with Ribbon Tails and Mustard Fill */}
    <polygon points="64,74 59,86 64,81 69,86 66,74" stroke="#111111" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="64" cy="72" r="8" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
    <circle cx="64" cy="72" r="4.5" stroke="#111111" strokeWidth="1.8" />
  </svg>
);

// 12. General Brand Mark: Quill pen and inkwell
export const QuillPenIcon: React.FC<IconProps> = ({ size = 56, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    {/* Inkwell Pot with Glass Facets */}
    <rect x="52" y="66" width="34" height="22" rx="3" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    <rect x="60" y="60" width="18" height="6" rx="1.5" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    <line x1="60" y1="74" x2="78" y2="74" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

    {/* Slanted Goose Feather Quill */}
    <path d="M66 62 L44 32 C38 18 24 14 16 16 C16 28 22 40 36 48 L56 66" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="16" x2="68" y2="72" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

    {/* Vanes Barbs Details on Feather */}
    <path d="M22 24 C28 28 34 30 38 30" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26 34 C32 38 38 40 42 40" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />

    {/* Brass Writing Nib with Mustard Fill Accent */}
    <polygon points="68,72 74,80 70,82 64,74" fill="#C6902E" stroke="#111111" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// 13. UI Tick Mark: Plain black stroked tick M20 52 L40 72 L80 28 on the 100 grid at stroke-width 2.6, NO CONTAINER
export const BrickCheckIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <path
      d="M20 52 L40 72 L80 28"
      stroke="#111111"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 14. Telephone Handset Icon (viewBox 0 0 100 100, stroke-width 2.2, no container)
export const PhoneLineIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <path
      d="M24 22 C22 28 28 38 36 50 C46 62 58 70 66 70 C72 70 76 64 80 58 L72 50 L64 54 C58 50 48 40 44 34 L48 26 L40 18 C34 20 26 20 24 22 Z"
      stroke="#111111"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Mustard accent earpiece dot */}
    <circle cx="34" cy="24" r="3" fill="#C6902E" stroke="#111111" strokeWidth="2" />
  </svg>
);

// 15. Mail / Envelope Icon (viewBox 0 0 100 100, stroke-width 2.2, no container)
export const MailLineIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <rect x="14" y="24" width="72" height="52" rx="4" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M14 26 L50 54 L86 26" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Small mustard seal dot */}
    <circle cx="50" cy="54" r="4.5" fill="#C6902E" stroke="#111111" strokeWidth="2" />
  </svg>
);

// 16. Clock / Hours Icon (viewBox 0 0 100 100, stroke-width 2.2, no container)
export const ClockLineIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <circle cx="50" cy="50" r="38" stroke="#111111" strokeWidth="2.2" />
    {/* Mustard center cap */}
    <circle cx="50" cy="50" r="3.5" fill="#C6902E" stroke="#111111" strokeWidth="2" />
    {/* Clock hands */}
    <polyline points="50,24 50,50 68,50" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Hour ticks */}
    <line x1="50" y1="16" x2="50" y2="20" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    <line x1="84" y1="50" x2="80" y2="50" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="84" x2="50" y2="80" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="50" x2="20" y2="50" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 17. Location Pin Icon (viewBox 0 0 100 100, stroke-width 2.2, no container)
export const LocationPinIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <path
      d="M50 16 C34 16 22 28 22 44 C22 64 50 86 50 86 C50 86 78 64 78 44 C78 28 66 16 50 16 Z"
      stroke="#111111"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Mustard accent inner circle */}
    <circle cx="50" cy="42" r="9" fill="#C6902E" stroke="#111111" strokeWidth="2.2" />
  </svg>
);
