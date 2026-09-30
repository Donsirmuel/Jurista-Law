import { useEffect } from 'react';

/**
 * useScrollReveal hook:
 * Intersection Observer hook that adds the 'revealed' class to elements
 * with the 'scroll-reveal' class as they enter the viewport, and removes
 * it when they leave, ensuring all sections on the site animate in and out
 * smoothly during scrolling.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check for user reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document.querySelectorAll('.scroll-reveal, .ink-draw-card').forEach((el) => {
        el.classList.add('revealed', 'drawn', 'is-drawn');
      });
      return;
    }

    const observedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.classList.add('drawn', 'is-drawn');
          } else {
            // Animate out smoothly when scrolling away
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.scroll-reveal, .ink-draw-card');
      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el);
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeAll();

    // Observe dynamically mounted elements (e.g. on client route changes)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
