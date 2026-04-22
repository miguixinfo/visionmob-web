import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles scroll-to-hash navigation for React Router.
 *
 * Problems solved:
 * 1. React Router intercepts clicks on <Link to="/#section"> — the browser never
 *    gets a chance to do its native hash-scroll.
 * 2. Lazy-loaded sections (Suspense) may not be in the DOM yet when the route
 *    change fires, so we retry until the element appears.
 *
 * Place this component once inside <BrowserRouter>, outside <Routes>.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // No hash → scroll to top on every route change
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const id = hash.slice(1); // strip leading '#'

    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    // Try immediately (element already in DOM)
    if (scrollToEl()) return;

    // Element not yet mounted (lazy / Suspense). Retry with increasing delays.
    const delays = [50, 150, 400];
    const timers = delays.map((ms) => setTimeout(scrollToEl, ms));

    return () => timers.forEach(clearTimeout);
  }, [pathname, hash]);

  return null;
}
