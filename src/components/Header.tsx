import React, { useState, useEffect, useRef } from 'react';
import { PageRoute, PracticeSlug } from '../types';
import { BrandLogoIcon, CorporateIcon, ImmigrationIcon, RealEstateIcon, CriminalIcon, MedicalIcon, FamilyIcon } from './LineIcons';
import { PRACTICE_AREAS } from '../data/firmData';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isPracticeActive =
    currentRoute.type === 'practice-areas' || currentRoute.type === 'practice-detail';
  const isFirmActive = currentRoute.type === 'our-firm';
  const isAttorneysActive =
    currentRoute.type === 'attorneys' || currentRoute.type === 'attorney-detail';
  const isCaseStudiesActive =
    currentRoute.type === 'case-studies' || currentRoute.type === 'case-study-detail';
  const isBlogActive =
    currentRoute.type === 'blog' || currentRoute.type === 'blog-detail';

  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
      case 'medical-law':
        return <MedicalIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={20} strokeWidth={2.4} className="text-[#173330]" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#173330]/10 ${
        isScrolled
          ? 'bg-[#F1F4EC]/95 backdrop-blur-md shadow-sm py-3.5'
          : 'bg-[#F1F4EC]/90 backdrop-blur-sm py-4.5'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo Zone */}
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="flex items-center gap-2.5 font-serif font-semibold text-xl tracking-tight text-[#173330] hover:opacity-90 transition-opacity cursor-pointer group"
        >
          <div className="p-1 rounded-lg group-hover:bg-[#E6E4D2]/60 transition-colors">
            <BrandLogoIcon size={28} className="text-[#173330]" />
          </div>
          <span>Jurista</span>
        </button>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[0.94rem] font-medium text-[#173330]">
          <button
            onClick={() => onNavigate({ type: 'our-firm' })}
            className={`transition-colors cursor-pointer py-1 relative ${
              isFirmActive
                ? 'text-[#9C4A32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9C4A32]'
                : 'hover:text-[#9C4A32]'
            }`}
          >
            Our Firm
          </button>

          {/* Practice Areas Dropdown Menu */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => onNavigate({ type: 'practice-areas' })}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative ${
                isPracticeActive
                  ? 'text-[#9C4A32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9C4A32]'
                  : 'hover:text-[#9C4A32]'
              }`}
              aria-expanded={isDropdownOpen}
            >
              <span>Practice Areas</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#9C4A32]' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50">
                <div className="bg-[#FAFCF6] border border-[#173330]/15 rounded-xl shadow-xl p-3 divide-y divide-[#173330]/8">
                  <div className="pb-2">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onNavigate({ type: 'practice-areas' });
                      }}
                      className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#9C4A32] font-bold hover:bg-[#E6E4D2]/40 rounded-lg flex items-center justify-between"
                    >
                      <span>All Practice Areas</span>
                      <span>→</span>
                    </button>
                  </div>
                  <div className="pt-2 space-y-1">
                    {PRACTICE_AREAS.map((pa) => (
                      <button
                        key={pa.id}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          onNavigate({ type: 'practice-detail', slug: pa.id });
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-sm transition-colors cursor-pointer ${
                          currentRoute.type === 'practice-detail' && currentRoute.slug === pa.id
                            ? 'bg-[#E6E4D2] text-[#9C4A32] font-semibold'
                            : 'hover:bg-[#E6E4D2]/40 text-[#173330]'
                        }`}
                      >
                        <span className="shrink-0">{getPracticeIcon(pa.id)}</span>
                        <div className="truncate">
                          <div className="leading-snug">{pa.name}</div>
                          <div className="text-[0.78rem] text-[#2E4C47] truncate">
                            {pa.shortDesc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate({ type: 'attorneys' })}
            className={`transition-colors cursor-pointer py-1 relative ${
              isAttorneysActive
                ? 'text-[#9C4A32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9C4A32]'
                : 'hover:text-[#9C4A32]'
            }`}
          >
            Attorneys
          </button>

          <button
            onClick={() => onNavigate({ type: 'case-studies' })}
            className={`transition-colors cursor-pointer py-1 relative ${
              isCaseStudiesActive
                ? 'text-[#9C4A32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9C4A32]'
                : 'hover:text-[#9C4A32]'
            }`}
          >
            Case Studies
          </button>

          <button
            onClick={() => onNavigate({ type: 'blog' })}
            className={`transition-colors cursor-pointer py-1 relative ${
              isBlogActive
                ? 'text-[#9C4A32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9C4A32]'
                : 'hover:text-[#9C4A32]'
            }`}
          >
            Blog
          </button>
        </nav>

        {/* Right Action: Pill Button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-5 py-2.5 rounded-full font-bold text-[0.92rem] transition-all transform hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(198,144,46,0.25)] hover:shadow-[0_6px_18px_rgba(198,144,46,0.35)] cursor-pointer whitespace-nowrap"
          >
            Talk to us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#173330] hover:bg-[#E6E4D2]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#173330]/10 bg-[#FAFCF6] px-6 py-5 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-3 font-medium text-[0.98rem]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'home' });
              }}
              className="text-left py-2 hover:text-[#9C4A32] border-b border-[#173330]/8"
            >
              Home
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'our-firm' });
              }}
              className="text-left py-2 hover:text-[#9C4A32] border-b border-[#173330]/8"
            >
              Our Firm
            </button>

            <div className="py-2 border-b border-[#173330]/8">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate({ type: 'practice-areas' });
                  }}
                  className="font-semibold text-[#9C4A32]"
                >
                  Practice Areas (All 6)
                </button>
              </div>
              <div className="pl-3 space-y-2 mt-2">
                {PRACTICE_AREAS.map((pa) => (
                  <button
                    key={pa.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate({ type: 'practice-detail', slug: pa.id });
                    }}
                    className="flex items-center gap-2.5 text-sm text-[#2E4C47] hover:text-[#173330] w-full text-left"
                  >
                    <span>{getPracticeIcon(pa.id)}</span>
                    <span>{pa.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'attorneys' });
              }}
              className="text-left py-2 hover:text-[#9C4A32] border-b border-[#173330]/8"
            >
              Attorneys
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'case-studies' });
              }}
              className="text-left py-2 hover:text-[#9C4A32] border-b border-[#173330]/8"
            >
              Case Studies
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'blog' });
              }}
              className="text-left py-2 hover:text-[#9C4A32] border-b border-[#173330]/8"
            >
              Blog
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate({ type: 'contact' });
              }}
              className="text-left py-2 hover:text-[#9C4A32]"
            >
              Contact
            </button>

            <div className="pt-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#C6902E] text-[#173330] font-bold py-3 rounded-full text-center shadow-md cursor-pointer"
              >
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
