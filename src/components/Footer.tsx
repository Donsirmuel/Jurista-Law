import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BrandLogoIcon, CourthouseSkylineSilhouette, PhoneLineIcon, MailLineIcon, LocationPinIcon } from './LineIcons';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="relative bg-[#F1F4EC] border-t border-[#173330]/12 text-[#173330] overflow-hidden">
      {/* Neoclassical courthouse & urban skyline silhouette frieze */}
      <div className="w-full text-[#173330] pt-4">
        <CourthouseSkylineSilhouette className="opacity-40" />
      </div>

      {/* Pre-footer Quick Consultation Banner */}
      <div className="border-b border-[#173330]/10 bg-[#E6E4D2]/45 py-8">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
              Confidential Inquiry
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#173330]">
              Need clarity on an active legal question?
            </h3>
            <p className="text-sm text-[#2E4C47] mt-1 max-w-[50ch]">
              Consultations are conducted in strict confidence with experienced partners.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+20116114574"
              className="inline-flex items-center gap-2 border border-[#173330]/20 hover:border-[#173330]/40 px-5 py-2.5 rounded-full text-sm font-semibold text-[#173330] transition-colors"
            >
              <PhoneLineIcon size={16} />
              <span>+2 011 611-4574</span>
            </a>
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                Schedule Consultation
              </button>
            ) : (
              <button
                onClick={() => onNavigate({ type: 'contact' })}
                className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                Schedule Consultation
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Firm Philosophy (4 cols) */}
          <div className="lg:col-span-4 lg:pr-6">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-3 font-serif font-semibold text-2xl tracking-tight text-[#173330] mb-4 text-left cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-[#E6E4D2] border border-[#173330]/15 group-hover:border-[#C6902E] transition-colors">
                <BrandLogoIcon size={24} className="text-[#173330]" />
              </div>
              <span>Jurista Law</span>
            </button>
            <p className="text-[#2E4C47] text-sm leading-relaxed mb-6 font-normal">
              A boutique partnership dedicated to plain-language legal counsel. We replace bureaucratic opacity with predictable timelines, upfront fees, and direct attorney access.
            </p>
            <div className="space-y-2 text-xs text-[#2E4C47] border-l-2 border-[#C6902E] pl-3 py-0.5">
              <div className="font-semibold text-[#173330]">Bar Admission &amp; Compliance</div>
              <div>State Bar of New York · Massachusetts · California</div>
              <div>Ethics &amp; Confidentiality Guarantee Under Rule 1.6</div>
            </div>
          </div>

          {/* Column 2: Practice Disciplines (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6902E]" />
              <span>Practice Disciplines</span>
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
                  <span>Medical Negligence &amp; Litigation</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'family-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>Family Law &amp; Mediation</span>
                  <span className="text-xs text-[#9C4A32] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Firm & Perspectives (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C4A32]" />
              <span>The Firm</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'our-firm' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  About Our Firm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'attorneys' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Our Attorneys
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'case-studies' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'blog' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Legal Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'contact' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Metropolitan Offices (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#173330]" />
              <span>Office Locations</span>
            </h4>
            <div className="space-y-4 text-xs text-[#2E4C47]">
              <div className="bg-[#E6E4D2]/40 p-3 rounded-lg border border-[#173330]/8">
                <div className="font-bold text-sm text-[#173330] mb-1 flex items-center gap-1.5">
                  <LocationPinIcon size={14} className="text-[#9C4A32]" />
                  <span>New York Headquarters</span>
                </div>
                <p>450 Lexington Avenue, Suite 2400</p>
                <p>New York, NY 10017</p>
                <p className="mt-1 text-[11px] text-[#C6902E] font-medium">Mon – Fri: 8:30 AM – 6:30 PM EST</p>
              </div>

              <div className="bg-[#E6E4D2]/40 p-3 rounded-lg border border-[#173330]/8">
                <div className="font-bold text-sm text-[#173330] mb-1 flex items-center gap-1.5">
                  <LocationPinIcon size={14} className="text-[#9C4A32]" />
                  <span>Boston Affiliate Office</span>
                </div>
                <p>100 High Street, 18th Floor</p>
                <p>Boston, MA 02110</p>
              </div>

              <div className="flex items-center gap-3 text-xs pt-1">
                <a
                  href="mailto:w.ashford@jurista.com"
                  className="hover:text-[#9C4A32] transition-colors flex items-center gap-1.5"
                >
                  <MailLineIcon size={14} />
                  <span>w.ashford@jurista.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Advertising Disclosure */}
        <div className="bg-[#E6E4D2]/35 border border-[#173330]/10 rounded-xl p-4 text-[11.5px] leading-relaxed text-[#2E4C47] mb-8">
          <span className="font-bold text-[#173330] uppercase tracking-wider block mb-1">
            Attorney Advertising &amp; Legal Notices:
          </span>
          Prior results do not guarantee a similar outcome in future legal matters. The content presented on this website is for general informational purposes only and does not constitute formal legal counsel. Transmission or receipt of information through this website does not create or constitute an attorney-client relationship until a written engagement retainer has been formally executed by both parties.
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
              Privacy &amp; Privilege Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-[#9C4A32] transition-colors cursor-pointer underline underline-offset-2"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Privacy Policy & Terms of Service (No alert() calls!) */}
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
                  Confidentiality Standards
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#173330] mb-4">
                  Privacy Policy &amp; Attorney-Client Privilege
                </h3>
                <div className="text-sm text-[#2E4C47] space-y-3 leading-relaxed">
                  <p>
                    Jurista Law adheres strictly to the American Bar Association (ABA) Model Rules of Professional Conduct, particularly Rule 1.6 regarding the confidentiality of information provided by existing and prospective clients.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> We collect only the contact information and preliminary matter outlines that you voluntarily submit through our consultation booking portal or email channels.
                  </p>
                  <p>
                    <strong>No Third-Party Monetization:</strong> Jurista Law will never sell, lease, or monetize client contact information to advertisers, data brokers, or third parties under any circumstances.
                  </p>
                  <p>
                    <strong>Encryption &amp; Digital Hygiene:</strong> All transmitted case notes and intake inquiries are guarded by enterprise-grade cryptographic standards and archived within secure, access-restricted repositories.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#173330]/10 flex justify-end">
                  <button
                    onClick={() => setModalContent(null)}
                    className="bg-[#173330] text-[#F1F4EC] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2E4C47] transition-colors cursor-pointer"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                  Client Engagement
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#173330] mb-4">
                  Terms of Service &amp; Engagement
                </h3>
                <div className="text-sm text-[#2E4C47] space-y-3 leading-relaxed">
                  <p>
                    <strong>No Attorney-Client Relationship:</strong> Browsing this website, submitting an inquiry form, or contacting our office via phone or electronic mail does not establish an attorney-client relationship.
                  </p>
                  <p>
                    <strong>Written Retainer Required:</strong> Formal representation by Jurista Law commences solely upon the execution of a written retainer agreement signed by both the client and an authorized partner of the firm, accompanied by the designated fee deposit.
                  </p>
                  <p>
                    <strong>Statute of Limitations Notice:</strong> Legal rights and claims are subject to strict statutory deadlines known as statutes of limitations. Delaying legal action can permanently bar recovery. Do not withhold urgent claims pending website review.
                  </p>
                  <p>
                    <strong>Jurisdictional Limits:</strong> Our attorneys are licensed to practice law in specific jurisdictions as noted in their individual biographies. We do not provide advice regarding jurisdictions where our attorneys are not admitted.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#173330]/10 flex justify-end">
                  <button
                    onClick={() => setModalContent(null)}
                    className="bg-[#173330] text-[#F1F4EC] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2E4C47] transition-colors cursor-pointer"
                  >
                    Close Terms
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
