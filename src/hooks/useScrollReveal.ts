import { useEffect } from 'react';

/**
 * useScrollReveal hook:
 * Observes elements with:
 * - '.ink-draw-card': triggers the SVG ink-draw stroke drawing effect when 20% in view
 * - '.scroll-reveal': triggers a smooth fade-and-rise when scrolled into view
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document.querySelectorAll('.ink-draw-card, .scroll-reveal').forEach((el) => {
        el.classList.add('drawn', 'is-drawn', 'revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('drawn', 'is-drawn', 'revealed');
            // Unobserve once animated so it doesn't re-trigger unnecessarily
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.ink-draw-card, .scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
