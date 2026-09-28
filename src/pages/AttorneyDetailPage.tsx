import React from 'react';
import { PageRoute, PracticeSlug } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import {
  CorporateIcon,
  ImmigrationIcon,
  RealEstateIcon,
  CriminalIcon,
  MedicalIcon,
  FamilyIcon,
  MailLineIcon,
  PhoneLineIcon,
  BrickCheckIcon,
} from '../components/LineIcons';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { ATTORNEYS, PRACTICE_AREAS } from '../data/firmData';

interface AttorneyDetailPageProps {
  id: string;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AttorneyDetailPage: React.FC<AttorneyDetailPageProps> = ({
  id,
  onNavigate,
  onOpenBooking,
}) => {
  const attorney = ATTORNEYS.find((a) => a.id === id) || ATTORNEYS[0];

  const getPracticeIcon = (slug: PracticeSlug) => {
    switch (slug) {
      case 'corporate-law':
        return <CorporateIcon size={22} className="text-[#173330]" />;
      case 'immigration-law':
        return <ImmigrationIcon size={22} className="text-[#173330]" />;
      case 'real-estate-law':
        return <RealEstateIcon size={22} className="text-[#173330]" />;
      case 'criminal-law':
        return <CriminalIcon size={22} className="text-[#173330]" />;
      case 'medical-law':
        return <MedicalIcon size={22} className="text-[#173330]" />;
      case 'family-law':
        return <FamilyIcon size={22} className="text-[#173330]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Detail Page Header (Calm, no floating chips) */}
      <section className="bg-[#E6E4D2]/40 pt-6 pb-12 border-b border-[#173330]/10">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: 'Attorneys', route: { type: 'attorneys' } },
              { label: attorney.name },
            ]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Large Line-Art Portrait */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="w-48 h-52 sm:w-56 sm:h-60 bg-[#FAFCF6] border border-[#173330]/15 rounded-2xl p-4 shadow-sm">
                <AttorneyPortrait styleId={attorney.portraitStyle} size="100%" />
              </div>
            </div>

            {/* Header Meta */}
            <div className="md:col-span-8">
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                Jurista Practitioner
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#173330] tracking-tight mb-2">
                {attorney.name}
              </h1>
              <p className="text-lg text-[#2E4C47] font-medium mb-5">
                {attorney.role}
              </p>

              {/* Clean unboxed credentials metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#2E4C47]">
                {attorney.credentials.map((cred, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span className="font-semibold text-[#173330]">{cred}</span>
                  </React.Fragment>
                ))}
              </div>

              {/* Quick actions */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer"
                >
                  Book consultation with {attorney.name.split(' ')[0]}
                </button>
                <a
                  href={`mailto:${attorney.email}`}
                  className="bg-[#FAFCF6] border border-[#173330]/20 hover:border-[#173330]/50 text-[#173330] px-5 py-2.5 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <MailLineIcon size={16} />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Body */}
      <section className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Bio Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Philosophy Quote */}
              <blockquote className="bg-[#FAFCF6] border-l-4 border-[#C6902E] p-6 sm:p-8 rounded-r-xl shadow-sm">
                <p className="font-serif italic text-xl sm:text-2xl text-[#173330] leading-snug">
                  “{attorney.philosophyQuote}”
                </p>
                <footer className="mt-3 text-xs uppercase tracking-wider font-bold text-[#9C4A32]">
                  — {attorney.name}
                </footer>
              </blockquote>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#2E4C47] leading-relaxed">
                <h3 className="text-2xl font-serif font-semibold text-[#173330]">
                  Background &amp; Advocacy Approach
                </h3>
                {attorney.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Practices Handled with Icons */}
              <div className="pt-6 border-t border-[#173330]/10">
                <h3 className="text-xl font-serif font-semibold text-[#173330] mb-4">
                  Practices Handled
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {attorney.practices.map((pSlug) => {
                    const pa = PRACTICE_AREAS.find((p) => p.id === pSlug);
                    if (!pa) return null;
                    return (
                      <div
                        key={pSlug}
                        onClick={() => onNavigate({ type: 'practice-detail', slug: pSlug })}
                        className="bg-[#FAFCF6] border border-[#173330]/12 p-4 rounded-xl flex items-center gap-3.5 hover:border-[#173330]/30 transition-all cursor-pointer group"
                      >
                        <span className="shrink-0 group-hover:scale-110 transition-transform">
                          {getPracticeIcon(pSlug)}
                        </span>
                        <div>
                          <h4 className="font-serif font-semibold text-base text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                            {pa.name}
                          </h4>
                          <span className="text-xs text-[#2E4C47] line-clamp-1">
                            {pa.shortDesc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Card / Credentials */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Contact Card */}
              <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#173330] mb-4 pb-2 border-b border-[#173330]/8">
                  Direct Contact
                </h3>
                <div className="space-y-3 text-sm text-[#2E4C47]">
                  <div className="flex items-center gap-2.5">
                    <MailLineIcon size={16} className="text-[#9C4A32]" />
                    <a href={`mailto:${attorney.email}`} className="hover:underline">
                      {attorney.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneLineIcon size={16} className="text-[#9C4A32]" />
                    <a href={`tel:${attorney.phone}`} className="hover:underline">
                      {attorney.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#173330]/8">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#173330] hover:bg-[#2E4C47] text-[#F1F4EC] py-3 rounded-full text-xs font-bold transition-colors cursor-pointer"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* Bar Admissions & Education */}
              <div className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 shadow-sm text-xs text-[#2E4C47] space-y-5">
                <div>
                  <h4 className="font-bold text-[#173330] uppercase tracking-wider mb-2">
                    Bar Admissions
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {attorney.barAdmissions.map((bar, i) => (
                      <li key={i}>{bar}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#173330] uppercase tracking-wider mb-2">
                    Education
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {attorney.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
