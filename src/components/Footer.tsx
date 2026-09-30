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
              Confidential inquiry
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#173330]">
              Need clarity on an active legal question?
            </h3>
            <p className="text-sm text-[#2E4C47] mt-1 max-w-[50ch]">
              Consultations are confidential and conducted directly with practicing partners.
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
                Book a consultation
              </button>
            ) : (
              <button
                onClick={() => onNavigate({ type: 'contact' })}
                className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                Book a consultation
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
              We give clients direct answers, upfront pricing, and written phase budgets. You talk directly with the attorney handling your file, not an administrative middleman.
            </p>
            <div className="space-y-2 text-xs text-[#2E4C47] border-l-2 border-[#C6902E] pl-3 py-0.5">
              <div className="font-semibold text-[#173330]">Bar admission and compliance</div>
              <div>State Bar of New York · Massachusetts · California</div>
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

          {/* Column 4: Offices (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#173330]" />
              <span>Office locations</span>
            </h4>
            <div className="space-y-4 text-xs text-[#2E4C47]">
              <div className="bg-[#E6E4D2]/40 p-3 rounded-lg border border-[#173330]/8">
                <div className="font-bold text-sm text-[#173330] mb-1 flex items-center gap-1.5">
                  <LocationPinIcon size={14} className="text-[#9C4A32]" />
                  <span>New York office</span>
                </div>
                <p>450 Lexington Avenue, Suite 2400</p>
                <p>New York, NY 10017</p>
                <p className="mt-1 text-[11px] text-[#C6902E] font-medium">Mon – Fri: 8:30 AM – 6:30 PM EST</p>
              </div>

              <div className="bg-[#E6E4D2]/40 p-3 rounded-lg border border-[#173330]/8">
                <div className="font-bold text-sm text-[#173330] mb-1 flex items-center gap-1.5">
                  <LocationPinIcon size={14} className="text-[#9C4A32]" />
                  <span>Boston office</span>
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
