import { useEffect, useRef } from 'react';

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            sharedObserver!.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' }
    );
  }
  return sharedObserver;
}

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
      el.classList.add('in');
      return;
    }

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return ref as React.RefObject<HTMLElement>;
}
