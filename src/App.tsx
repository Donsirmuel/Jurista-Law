/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, PracticeSlug } from './types';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { OurFirmPage } from './pages/OurFirmPage';
import { PracticeAreasIndexPage } from './pages/PracticeAreasIndexPage';
import { PracticeAreaDetailPage } from './pages/PracticeAreaDetailPage';
import { AttorneysIndexPage } from './pages/AttorneysIndexPage';
import { AttorneyDetailPage } from './pages/AttorneyDetailPage';
import { CaseStudiesIndexPage } from './pages/CaseStudiesIndexPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  useScrollReveal();

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    // Parse initial route from location hash if present
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash || hash === 'home') return { type: 'home' };
    if (hash === 'our-firm' || hash === 'about') return { type: 'our-firm' };
    if (hash === 'practice-areas' || hash === 'practice') return { type: 'practice-areas' };
    if (hash.startsWith('practice/')) {
      const slug = hash.replace('practice/', '') as PracticeSlug;
      return { type: 'practice-detail', slug };
    }
    if (hash === 'attorneys') return { type: 'attorneys' };
    if (hash.startsWith('attorney/')) {
      const id = hash.replace('attorney/', '');
      return { type: 'attorney-detail', id };
    }
    if (hash === 'case-studies') return { type: 'case-studies' };
    if (hash.startsWith('case-study/')) {
      const id = hash.replace('case-study/', '');
      return { type: 'case-study-detail', id };
    }
    if (hash === 'blog' || hash === 'insights') return { type: 'blog' };
    if (hash.startsWith('blog/')) {
      const slug = hash.replace('blog/', '');
      return { type: 'blog-detail', slug };
    }
    if (hash === 'contact') return { type: 'contact' };
    return { type: 'home' };
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPractice, setBookingPractice] = useState<PracticeSlug | undefined>(undefined);
  const [bookingAttorneyId, setBookingAttorneyId] = useState<string | undefined>(undefined);

  // Sync hash on navigation
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);

    let hash = '#/';
    switch (route.type) {
      case 'home':
        hash = '#/';
        break;
      case 'our-firm':
        hash = '#/our-firm';
        break;
      case 'practice-areas':
        hash = '#/practice-areas';
        break;
      case 'practice-detail':
        hash = `#/practice/${route.slug}`;
        break;
      case 'attorneys':
        hash = '#/attorneys';
        break;
      case 'attorney-detail':
        hash = `#/attorney/${route.id}`;
        break;
      case 'case-studies':
        hash = '#/case-studies';
        break;
      case 'case-study-detail':
        hash = `#/case-study/${route.id}`;
        break;
      case 'blog':
        hash = '#/blog';
        break;
      case 'blog-detail':
        hash = `#/blog/${route.slug}`;
        break;
      case 'contact':
        hash = '#/contact';
        break;
    }
    window.history.pushState(null, '', hash);
  };

  // Listen for browser back / forward
  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'home') setCurrentRoute({ type: 'home' });
      else if (hash === 'our-firm') setCurrentRoute({ type: 'our-firm' });
      else if (hash === 'practice-areas') setCurrentRoute({ type: 'practice-areas' });
      else if (hash.startsWith('practice/')) {
        setCurrentRoute({ type: 'practice-detail', slug: hash.replace('practice/', '') as PracticeSlug });
      } else if (hash === 'attorneys') setCurrentRoute({ type: 'attorneys' });
      else if (hash.startsWith('attorney/')) {
        setCurrentRoute({ type: 'attorney-detail', id: hash.replace('attorney/', '') });
      } else if (hash === 'case-studies') setCurrentRoute({ type: 'case-studies' });
      else if (hash.startsWith('case-study/')) {
        setCurrentRoute({ type: 'case-study-detail', id: hash.replace('case-study/', '') });
      } else if (hash === 'blog') setCurrentRoute({ type: 'blog' });
      else if (hash.startsWith('blog/')) {
        setCurrentRoute({ type: 'blog-detail', slug: hash.replace('blog/', '') });
      } else if (hash === 'contact') setCurrentRoute({ type: 'contact' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openBookingModal = (practice?: PracticeSlug, attorneyId?: string) => {
    setBookingPractice(practice);
    setBookingAttorneyId(attorneyId);
    setIsBookingOpen(true);
  };

  // Render active page based on route
  const renderCurrentPage = () => {
    switch (currentRoute.type) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;

      case 'our-firm':
        return <OurFirmPage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;

      case 'practice-areas':
        return (
          <PracticeAreasIndexPage
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal()}
          />
        );

      case 'practice-detail':
        return (
          <PracticeAreaDetailPage
            slug={currentRoute.slug}
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal(currentRoute.slug)}
          />
        );

      case 'attorneys':
        return (
          <AttorneysIndexPage
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal()}
            initialFilter={currentRoute.filter}
          />
        );

      case 'attorney-detail':
        return (
          <AttorneyDetailPage
            id={currentRoute.id}
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal(undefined, currentRoute.id)}
          />
        );

      case 'case-studies':
        return (
          <CaseStudiesIndexPage
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal()}
            initialFilter={currentRoute.filter}
          />
        );

      case 'case-study-detail':
        return (
          <CaseStudyDetailPage
            id={currentRoute.id}
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal()}
          />
        );

      case 'blog':
        return <BlogIndexPage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;

      case 'blog-detail':
        return (
          <BlogPostDetailPage
            slug={currentRoute.slug}
            onNavigate={handleNavigate}
            onOpenBooking={() => openBookingModal()}
          />
        );

      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F4EC] text-[#173330] selection:bg-[#C6902E]/30 selection:text-[#173330]">
      {/* Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Main Page Body */}
      <main className="grow">
        {renderCurrentPage()}
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPractice={bookingPractice}
        preselectedAttorneyId={bookingAttorneyId}
      />
    </div>
  );
}
