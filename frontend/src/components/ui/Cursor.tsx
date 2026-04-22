import { useEffect, useRef } from 'react';

export function Cursor() {
  const outer = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let cx = x, cy = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf: number;
    const tick = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      if (outer.current) outer.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    let lastOver = 0;
    const onOver = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastOver < 50) return;
      lastOver = now;
      const t = (e.target as Element).closest('[data-cursor="big"], button, a');
      if (outer.current) outer.current.classList.toggle('big', !!t);
    };
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={outer} />
      <div className="cursor-dot" ref={dot} />
    </>
  );
}
