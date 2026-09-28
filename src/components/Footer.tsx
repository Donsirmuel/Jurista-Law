import React from 'react';
import { PageRoute } from '../types';
import { BrandLogoIcon } from './LineIcons';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#F1F4EC] border-t border-[#173330]/10 pt-18 pb-10">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="lg:pr-4">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-2.5 font-serif font-semibold text-2xl tracking-tight text-[#173330] mb-4 text-left cursor-pointer"
            >
              <BrandLogoIcon size={28} className="text-[#173330]" />
              <span>Jurista Law</span>
            </button>
            <p className="text-[#2E4C47] text-sm leading-relaxed max-w-[32ch]">
              Legal counsel explained plainly, from consultation through resolution. No jargon, no theatrics.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'our-firm' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Our Firm
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
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'contact' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'corporate-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Corporate Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'immigration-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Immigration Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'real-estate-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Real Estate Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'criminal-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Criminal Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'medical-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Medical Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'practice-detail', slug: 'family-law' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Family Law
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2E4C47]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'blog' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Our Blog &amp; Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'home' })}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Jurista Law adheres to strict attorney-client privilege and confidentiality regulations.');
                  }}
                  className="hover:text-[#9C4A32] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Legal notices and formal engagement terms are provided prior to retainer execution.');
                  }}
                  className="hover:text-[#9C4A32] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#173330]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2E4C47]">
          <span>© 2026 Jurista Law. All rights reserved.</span>
          <span className="flex items-center gap-3">
            <a href="mailto:w.ashford@jurista.com" className="hover:text-[#9C4A32] transition-colors">
              W.Ashford@Jurista.com
            </a>
            <span>·</span>
            <a href="tel:+20116114574" className="hover:text-[#9C4A32] transition-colors">
              +2 011 611-4574
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
