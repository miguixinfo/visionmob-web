import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Icons } from '../ui/Icons';

interface Track {
  id: string;
  name: string;
  genre: string;
  seedA: number;
  seedB: number;
  before: number;
  after: number;
}

const TRACKS: Track[] = [
  { id: 'trap', name: 'MVRK — "Riverland Freestyle"', genre: 'Trap / Drill', seedA: 7, seedB: 13, before: 0.55, after: 1.0 },
  { id: 'rnb', name: 'Lz — "Slow Down"', genre: 'R&B / Urbano', seedA: 23, seedB: 41, before: 0.45, after: 0.95 },
  { id: 'hh', name: 'Flaxe — "Calle 09"', genre: 'Hip-Hop Boom-bap', seedA: 91, seedB: 77, before: 0.5, after: 1.0 },
];

interface WaveBarsProps {
  count?: number;
  seed?: number;
  intensity?: number;
}

const WaveBars = memo(function WaveBars({ count = 80, seed = 1, intensity = 1 }: WaveBarsProps) {
  const bars = useMemo(() => {
    const arr: number[] = [];
    let s = seed;
    const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let i = 0; i < count; i++) {
      const base = Math.sin(i / 4) * 0.3 + Math.sin(i / 11) * 0.4 + 0.5;
      const noise = rand() * 0.6 + 0.4;
      arr.push(Math.max(0.08, Math.min(1, base * noise * intensity)));
    }
    return arr;
  }, [count, seed, intensity]);

  return (
    <div className="bars">
      {bars.map((h, i) => <div key={i} className="bar" style={{ height: `${h * 100}%` }} />)}
    </div>
  );
});

export function BeforeAfter() {
  const [tab, setTab] = useState(0);
  const [split, setSplit] = useState(50);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const reveal = useReveal();
  const t = TRACKS[tab];

  useEffect(() => {
    let pending = false;
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current || !wrapRef.current || pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        if (!draggingRef.current || !wrapRef.current) return;
        const r = wrapRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
        setSplit(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
      });
    };
    const onUp = () => { draggingRef.current = false; document.body.style.cursor = ''; };
    window.addEventListener('mousemove', onMove as EventListener);
    window.addEventListener('touchmove', onMove as EventListener, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove as EventListener);
      window.removeEventListener('touchmove', onMove as EventListener);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.4)), 100);
    return () => clearInterval(id);
  }, [playing]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    document.body.style.cursor = 'ew-resize';
  };

  const seconds = Math.floor((progress / 100) * 142);
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <section className="section" id="demo">
      <div className="section-head reveal" ref={reveal as React.RefObject<HTMLDivElement>} style={{ marginBottom: 32 }}>
        <div className="idx">
          <span>01 / DEMO</span>
          <span className="num">01</span>
        </div>
        <div>
          <h2>Antes<br />y <em>después.</em></h2>
          <p>La prueba está en cómo suena. Arrastra la línea vertical para cruzar del take crudo al tema listo para Spotify. Sin filtros de marketing — audio real de proyectos propios.</p>
        </div>
      </div>

      <div className="ba-tabs" role="tablist" aria-label="Seleccionar tema">
        {TRACKS.map((tk, i) => (
          <button
            key={tk.id}
            className={i === tab ? 'on' : ''}
            onClick={() => { setTab(i); setProgress(0); }}
            role="tab"
            aria-selected={i === tab}
          >
            {String(i + 1).padStart(2, '0')} · {tk.name.split(' — ')[0]} · {tk.genre}
          </button>
        ))}
      </div>

      <div className="ba-wrap">
        <div className="ba-head">
          <div>
            <div className="title">{t.name}</div>
            <div className="meta" style={{ textAlign: 'left', marginTop: 8 }}>{t.genre} · Studio session {String(tab + 1).padStart(2, '0')}</div>
          </div>
          <div className="meta">
            <div>WAV 24-bit · 48kHz</div>
            <div>Tempo auto · Key match</div>
          </div>
        </div>

        <div className="ba-player">
          <div
            className="ba-wave"
            ref={wrapRef}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            aria-label="Comparador antes/después — arrastra para comparar"
          >
            <span className="ba-label l">Antes</span>
            <span className="ba-label r">Después</span>
            <div className="side before">
              <WaveBars count={90} seed={t.seedA} intensity={t.before} />
            </div>
            <div className="side after" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
              <WaveBars count={90} seed={t.seedB} intensity={t.after} />
            </div>
            <div className="ba-divider" style={{ left: `${split}%` }}>
              <div
                className="handle"
                onMouseDown={startDrag}
                onTouchStart={startDrag}
                role="slider"
                aria-label="Posición del comparador"
                aria-valuenow={Math.round(split)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                &#8249; &#8250;
              </div>
            </div>
          </div>
          <div className="ba-controls">
            <button className="play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pausar' : 'Reproducir'}>
              {playing ? <Icons.pause /> : <Icons.play />}
            </button>
            <div className="track">
              <strong>{mm}:{ss}</strong>
              <div style={{ flex: 1, height: 2, background: 'var(--hair)', borderRadius: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'var(--slate)', transition: 'width .3s' }} />
              </div>
              <span>02:22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
