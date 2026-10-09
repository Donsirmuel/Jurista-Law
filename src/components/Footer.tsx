import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BrandLogoIcon, PhoneLineIcon, MailLineIcon, ClockLineIcon } from './LineIcons';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

// Thin line-art courthouse & urban architecture skyline running along the top edge of the footer
const FooterSkylineIllustration: React.FC = () => (
  <svg
    viewBox="0 0 1200 64"
    fill="none"
    preserveAspectRatio="none"
    className="w-full h-12 sm:h-14 lg:h-16 text-[#173330] pointer-events-none select-none"
    aria-hidden="true"
  >
    {/* Continuous top ground line */}
    <line x1="0" y1="62" x2="1200" y2="62" stroke="currentColor" strokeWidth="1.6" opacity="0.25" />

    {/* Skyline structures across the full width */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.22">
      {/* Far Left urban buildings */}
      <path d="M20 62 V46 H55 V62" />
      <line x1="32" y1="50" x2="43" y2="50" opacity="0.6" />
      <line x1="32" y1="56" x2="43" y2="56" opacity="0.6" />
      <path d="M70 62 V38 H115 V62" />
      <path d="M85 38 V32 H100 V38" />
      <line x1="82" y1="44" x2="103" y2="44" opacity="0.6" />
      <line x1="82" y1="52" x2="103" y2="52" opacity="0.6" />
      <path d="M130 62 V48 H175 V62" />

      {/* Mid Left architectural block */}
      <path d="M195 62 V34 H255 V62" />
      <path d="M205 34 L225 24 L245 34" />
      <line x1="212" y1="42" x2="238" y2="42" opacity="0.6" />
      <line x1="212" y1="50" x2="238" y2="50" opacity="0.6" />
      <path d="M275 62 V42 H320 V62" />
      <path d="M340 62 V50 H380 V62" />

      {/* Center Neoclassical Courthouse with triangular pediment & columns */}
      <path d="M490 38 L550 14 L610 38 Z" />
      <rect x="480" y="38" width="140" height="4" rx="0.5" />
      <line x1="504" y1="42" x2="504" y2="62" strokeWidth="2" />
      <line x1="524" y1="42" x2="524" y2="62" strokeWidth="2" />
      <line x1="544" y1="42" x2="544" y2="62" strokeWidth="2" />
      <line x1="564" y1="42" x2="564" y2="62" strokeWidth="2" />
      <line x1="584" y1="42" x2="584" y2="62" strokeWidth="2" />
      <line x1="604" y1="42" x2="604" y2="62" strokeWidth="2" />
      <rect x="475" y="58" width="150" height="4" rx="0.5" />

      {/* Mid Right architectural block */}
      <path d="M640 62 V46 H685 V62" />
      <path d="M705 62 V32 H765 V62" />
      <path d="M715 32 L735 22 L755 32" />
      <line x1="722" y1="40" x2="748" y2="40" opacity="0.6" />
      <line x1="722" y1="48" x2="748" y2="48" opacity="0.6" />
      <line x1="722" y1="56" x2="748" y2="56" opacity="0.6" />
      <path d="M785 62 V44 H835 V62" />

      {/* Far Right urban skyline */}
      <path d="M855 62 V36 H905 V62" />
      <line x1="870" y1="42" x2="890" y2="42" opacity="0.6" />
      <line x1="870" y1="50" x2="890" y2="50" opacity="0.6" />
      <path d="M925 62 V48 H970 V62" />
      <path d="M990 62 V30 H1045 V62" />
      <path d="M1005 30 L1018 20 L1030 30" />
      <line x1="1005" y1="40" x2="1030" y2="40" opacity="0.6" />
      <line x1="1005" y1="50" x2="1030" y2="50" opacity="0.6" />
      <path d="M1065 62 V44 H1110 V62" />
      <path d="M1130 62 V52 H1175 V62" />
    </g>
  </svg>
);

// Large, low-opacity scale-of-justice watermark bleeding off the bottom corner
const FooterCornerScalesWatermark: React.FC = () => (
  <svg
    viewBox="0 0 320 320"
    fill="none"
    className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto text-[#173330] pointer-events-none select-none opacity-[0.07]"
    aria-hidden="true"
  >
    {/* Central pillar / fulcrum */}
    <line x1="160" y1="30" x2="160" y2="290" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    {/* Finial top ornament */}
    <circle cx="160" cy="24" r="10" stroke="currentColor" strokeWidth="5" />
    {/* Stepped classical base */}
    <rect x="110" y="270" width="100" height="12" rx="2" stroke="currentColor" strokeWidth="5" />
    <rect x="80" y="282" width="160" height="14" rx="3" stroke="currentColor" strokeWidth="5" />

    {/* Balancing Beam */}
    <line x1="40" y1="90" x2="280" y2="90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <circle cx="160" cy="90" r="14" stroke="currentColor" strokeWidth="5" />

    {/* Left Pan Strings & Scale Pan */}
    <line x1="50" y1="90" x2="15" y2="180" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="90" x2="85" y2="180" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path
      d="M10 180 C10 215 90 215 90 180 Z"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinejoin="round"
    />

    {/* Right Pan Strings & Scale Pan */}
    <line x1="270" y1="90" x2="235" y2="180" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="270" y1="90" x2="305" y2="180" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path
      d="M230 180 C230 215 310 215 310 180 Z"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="relative bg-[#F1F4EC] border-t border-[#173330]/12 text-[#173330] overflow-hidden">
      {/* 1. Thin Line-Art Skyline running along the top edge of the footer (Direct child of <footer>) */}
      <div className="absolute top-0 left-0 right-0 w-full z-0 overflow-hidden pointer-events-none">
        <FooterSkylineIllustration />
      </div>

      {/* 2. Large Scale-of-Justice Watermark bleeding off the bottom-right corner (Direct child of <footer>) */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6">
        <FooterCornerScalesWatermark />
      </div>

      {/* 3. Main Footer Content Container (relative z-10 so content always sits above the watermark textures) */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Firm Philosophy (4 cols) */}
          <div className="lg:col-span-4 lg:pr-6">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-3 font-serif font-semibold text-2xl tracking-tight text-[#173330] mb-4 text-left cursor-pointer group"
            >
              <BrandLogoIcon size={32} className="text-[#111111]" />
              <span>Jurista Law</span>
            </button>

            <p className="text-[#2E4C47] text-sm leading-relaxed mb-4 font-normal">
              We give clients direct answers, upfront pricing, and written phase budgets. You talk directly with the attorney handling your file, not an administrative middleman.
            </p>

            {/* Retained from pre-footer strip per specification */}
            <p className="text-xs text-[#2E4C47] leading-relaxed mb-5 border-l-2 border-[#9C4A32] pl-3 py-0.5">
              Consultations are confidential and conducted directly with practicing partners.
            </p>

            <div className="space-y-1.5 text-xs text-[#2E4C47] border-l-2 border-[#C6902E] pl-3 py-0.5">
              <div className="font-semibold text-[#173330]">Bar admission and operating standard</div>
              <div>State Bar of New York · Founded 2011</div>
              <div>Strict confidentiality under Bar Rule 1.6</div>
            </div>
          </div>

          {/* Column 2: Practice Areas (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6902E]" />
              <span>Practice areas</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'corporate-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Corporate Law</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Immigration Law</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'real-estate-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Real Estate Law</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'criminal-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Criminal Defense</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'medical-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Medical Law</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'family-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Family Law</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Firm (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4A32]" />
              <span>Firm</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'our-firm' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Our firm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'attorneys' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Attorneys
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'case-studies' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Case studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'blog' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'contact' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Block (3 cols - Option A) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#173330]" />
              <span>Direct contact</span>
            </h4>
            <div className="space-y-4 text-xs text-[#2E4C47]">
              {/* Primary Contact Card */}
              <div className="bg-[#E6E4D2]/40 p-4 rounded-xl border border-[#173330]/10 space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneLineIcon size={20} className="text-[#111111] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#2E4C47]/80">Direct telephone</div>
                    <a
                      href="tel:+20116114574"
                      className="text-sm font-bold text-[#173330] hover:text-[#9C4A32] transition-colors"
                    >
                      +2 011 611-4574
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#173330]/8">
                  <MailLineIcon size={20} className="text-[#111111] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#2E4C47]/80">Confidential email</div>
                    <a
                      href="mailto:w.ashford@jurista.com"
                      className="text-sm font-semibold text-[#173330] hover:text-[#9C4A32] transition-colors"
                    >
                      w.ashford@jurista.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours & Response Standards */}
              <div className="space-y-1.5 text-xs text-[#2E4C47] pl-1">
                <div className="flex items-center gap-2">
                  <ClockLineIcon size={14} className="text-[#9C4A32] shrink-0" />
                  <span className="font-medium text-[#173330]">Monday – Friday: 8:30 AM – 6:30 PM EST</span>
                </div>
                <div className="text-[11px] text-[#2E4C47]/80 pl-5">
                  Written preliminary assessment in 2 business days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Advertising Disclosure */}
        <div className="bg-[#E6E4D2]/35 border border-[#173330]/10 rounded-xl p-4 text-[11.5px] leading-relaxed text-[#2E4C47] mb-8">
          <span className="font-bold text-[#173330] uppercase tracking-wider block mb-1">
            Attorney advertising notice:
          </span>
          Prior results do not guarantee a similar outcome. The information on this website is for general understanding only and is not formal legal advice. Contacting our office or sending information does not establish an attorney-client relationship until both sides sign a written engagement agreement.
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-[#173330]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2E4C47]">
          <div>
            © 2026 Jurista Law. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-[#9C4A32] transition-colors cursor-pointer underline underline-offset-2"
            >
              Privacy policy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-[#9C4A32] transition-colors cursor-pointer underline underline-offset-2"
            >
              Terms of engagement
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Privacy Policy & Terms of Service */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-[#173330]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#F1F4EC] border border-[#173330]/20 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 text-2xl text-[#173330] hover:text-[#9C4A32] leading-none cursor-pointer"
              aria-label="Close dialog"
            >
              ×
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                  Confidentiality standards
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#173330] mb-4">
                  Privacy policy and confidentiality
                </h3>
                <div className="text-sm text-[#2E4C47] space-y-3 leading-relaxed">
                  <p>
                    Jurista Law follows the American Bar Association Model Rules of Professional Conduct, including Rule 1.6 regarding the confidentiality of information shared by clients and prospective clients.
                  </p>
                  <p>
                    <strong>Information we collect:</strong> We collect only the contact information and preliminary matter descriptions you voluntarily send through our consultation form or email.
                  </p>
                  <p>
                    <strong>No selling of data:</strong> We never sell, rent, or share client contact information with marketing companies, data brokers, or third parties.
                  </p>
                  <p>
                    <strong>Data protection:</strong> All case notes, intake inquiries, and client files are stored on secure, encrypted systems accessible only to our legal staff.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#173330]/10 flex justify-end">
                  <button
                    onClick={() => setModalContent(null)}
                    className="bg-[#173330] text-[#F1F4EC] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2E4C47] transition-colors cursor-pointer"
                  >
                    I understand
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                  Client engagement
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#173330] mb-4">
                  Terms of engagement
                </h3>
                <div className="text-sm text-[#2E4C47] space-y-3 leading-relaxed">
                  <p>
                    <strong>No attorney-client relationship:</strong> Visiting this website, filling out a form, or sending an email does not create an attorney-client relationship.
                  </p>
                  <p>
                    <strong>Written agreement required:</strong> We formally represent a client only after both sides sign a written engagement letter specifying the scope of work and fee terms.
                  </p>
                  <p>
                    <strong>Filing deadlines (statute of limitations):</strong> Legal claims have strict deadlines set by law, known as statutes of limitations. Missing a deadline can permanently prevent you from taking legal action. If your matter is urgent, contact an attorney immediately rather than waiting for an email response.
                  </p>
                  <p>
                    <strong>Where we practice:</strong> Our attorneys are admitted to practice law in the specific state and federal jurisdictions listed on their profile pages. We do not provide advice regarding jurisdictions where we are not licensed.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#173330]/10 flex justify-end">
                  <button
                    onClick={() => setModalContent(null)}
                    className="bg-[#173330] text-[#F1F4EC] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2E4C47] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
