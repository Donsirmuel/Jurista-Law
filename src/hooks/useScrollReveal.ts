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
            // Keep revealed permanently once visible so content never disappears on navigation/re-entry
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '120px 0px 80px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.scroll-reveal, .ink-draw-card');
      elements.forEach((el) => {
        // If element is already revealed, ensure classes are present
        if (el.classList.contains('revealed')) {
          el.classList.add('drawn', 'is-drawn');
          return;
        }
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
