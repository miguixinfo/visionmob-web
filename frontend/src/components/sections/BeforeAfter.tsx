import { useEffect, useRef, useState } from 'react';
import portfolioData from '../../data/portfolio.json';
import { useReveal } from '../../hooks/useReveal';
import { Icons } from '../ui/Icons';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AudioEntry {
  before: string;
  after: string;
}

interface PortfolioItem {
  id: string;
  artist: string;
  title: string;
  genre: string;
  year: number;
  audio: AudioEntry;
  services: string[];
}

type ActiveSide = 'before' | 'after' | null;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const R2_DOMAIN = 'r2.dev';

/** Keep only items whose audio URLs belong to the real R2 bucket. */
const tracks: PortfolioItem[] = (portfolioData as PortfolioItem[]).filter(
  (item) =>
    item.audio.before.includes(R2_DOMAIN) &&
    item.audio.after.includes(R2_DOMAIN),
);

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BeforeAfter() {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeSide, setActiveSide] = useState<ActiveSide>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const beforeRef = useRef<HTMLAudioElement>(null);
  const afterRef = useRef<HTMLAudioElement>(null);
  const reveal = useReveal();

  const track = tracks[tabIndex];

  // ── Set initial volume on mount ───────────────────────────────────────────
  useEffect(() => {
    [beforeRef, afterRef].forEach((r) => {
      if (r.current) r.current.volume = 0.1;
    });
  }, []);

  // ── Stop everything and reset state when the tab changes ──────────────────
  useEffect(() => {
    const stopAll = () => {
      [beforeRef, afterRef].forEach((r) => {
        if (!r.current) return;
        r.current.pause();
        r.current.currentTime = 0;
      });
    };
    stopAll();
    setActiveSide(null);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [tabIndex]);

  // ── Wire up time/duration listeners whenever activeSide changes ───────────
  useEffect(() => {
    const el =
      activeSide === 'before'
        ? beforeRef.current
        : activeSide === 'after'
          ? afterRef.current
          : null;

    if (!el) return;

    const onTimeUpdate = () => {
      setCurrentTime(el.currentTime);
      setProgress(el.duration > 0 ? (el.currentTime / el.duration) * 100 : 0);
    };

    const onLoadedMetadata = () => {
      setDuration(el.duration);
    };

    const onEnded = () => {
      setActiveSide(null);
      setProgress(0);
      setCurrentTime(0);
    };

    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('loadedmetadata', onLoadedMetadata);
    el.addEventListener('ended', onEnded);

    return () => {
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('loadedmetadata', onLoadedMetadata);
      el.removeEventListener('ended', onEnded);
    };
  }, [activeSide]);

  // ── Button handler ────────────────────────────────────────────────────────
  const handlePlay = (side: 'before' | 'after') => {
    const targetRef = side === 'before' ? beforeRef : afterRef;
    const otherRef = side === 'before' ? afterRef : beforeRef;

    // Pause the other side
    if (otherRef.current) {
      otherRef.current.pause();
      otherRef.current.currentTime = 0;
    }

    if (!targetRef.current) return;

    if (activeSide === side) {
      // Same button pressed → toggle pause/play
      if (targetRef.current.paused) {
        targetRef.current.play().catch(() => {
          /* autoplay blocked — user interaction already happened, safe to ignore */
        });
      } else {
        targetRef.current.pause();
        setActiveSide(null);
        return;
      }
    } else {
      // Switch to this side
      targetRef.current.currentTime = 0;
      targetRef.current.play().catch(() => {
        /* autoplay blocked */
      });
      setProgress(0);
      setCurrentTime(0);
      setDuration(targetRef.current.duration || 0);
    }

    setActiveSide(side);
  };

  // ── Seek on progress bar click ────────────────────────────────────────────
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetRef =
      activeSide === 'before'
        ? beforeRef
        : activeSide === 'after'
          ? afterRef
          : null;
    if (!targetRef?.current || !targetRef.current.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    targetRef.current.currentTime = ratio * targetRef.current.duration;
  };

  if (tracks.length === 0) return null;

  const isBeforePlaying = activeSide === 'before';
  const isAfterPlaying = activeSide === 'after';

  return (
    <section className="section" id="demo">
      {/* Hidden audio elements */}
      <audio ref={beforeRef} src={track.audio.before} preload="metadata" />
      <audio ref={afterRef} src={track.audio.after} preload="metadata" />

      {/* Section head */}
      <div
        className="section-head reveal"
        ref={reveal as React.RefObject<HTMLDivElement>}
        style={{ marginBottom: 32 }}
      >
        <div className="idx">
          <span>01 / DEMO</span>
          <span className="num">01</span>
        </div>
        <div>
          <h2>
            Antes
            <br />y <em>después.</em>
          </h2>
          <p>
            La prueba está en cómo suena. Escucha el audio crudo y el tema listo
            para Spotify. Sin filtros de marketing — audio real de proyectos
            propios.
          </p>
        </div>
      </div>

      {/* Track tabs */}
      <div className="ba-tabs" role="tablist" aria-label="Seleccionar tema">
        {tracks.map((tk, i) => (
          <button
            key={tk.id}
            className={i === tabIndex ? 'on' : ''}
            onClick={() => setTabIndex(i)}
            role="tab"
            aria-selected={i === tabIndex}
            aria-controls="ba-player"
          >
            {String(i + 1).padStart(2, '0')} · {tk.artist} · {tk.genre}
          </button>
        ))}
      </div>

      {/* Player card */}
      <div className="ba-wrap" id="ba-player" role="tabpanel">
        {/* Card header */}
        <div className="ba-head">
          <div>
            <div className="title">
              {track.artist} — &ldquo;{track.title}&rdquo;
            </div>
            <div className="meta" style={{ textAlign: 'left', marginTop: 8 }}>
              {track.genre} · {track.year}
            </div>
          </div>
          <div className="meta">
            {track.services.map((s) => (
              <div key={s} style={{ textTransform: 'capitalize' }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Play buttons */}
        <div className="ba-btn-row">
          <button
            className={`ba-side-btn${isBeforePlaying ? ' active' : ''}`}
            onClick={() => handlePlay('before')}
            aria-label={
              isBeforePlaying ? 'Pausar versión antes' : 'Reproducir versión antes'
            }
            aria-pressed={isBeforePlaying}
          >
            <span className="ba-side-icon">
              {isBeforePlaying ? <Icons.pause /> : <Icons.play />}
            </span>
            <span className="ba-side-label">Antes</span>
            <span className="ba-side-tag">Sin procesar</span>
          </button>

          <div className="ba-vs" aria-hidden="true">VS</div>

          <button
            className={`ba-side-btn after${isAfterPlaying ? ' active' : ''}`}
            onClick={() => handlePlay('after')}
            aria-label={
              isAfterPlaying
                ? 'Pausar versión después'
                : 'Reproducir versión después'
            }
            aria-pressed={isAfterPlaying}
          >
            <span className="ba-side-icon">
              {isAfterPlaying ? <Icons.pause /> : <Icons.play />}
            </span>
            <span className="ba-side-label">Después</span>
            <span className="ba-side-tag">Mix &amp; Master</span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="ba-progress-row">
          <span className="ba-time">{formatTime(currentTime)}</span>
          <div
            className="ba-progress-track"
            onClick={handleSeek}
            role="slider"
            aria-label="Progreso de reproducción"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={activeSide !== null ? 0 : -1}
          >
            <div
              className="ba-progress-fill"
              style={{ width: `${progress}%` }}
            />
            {activeSide !== null && (
              <div
                className="ba-progress-thumb"
                style={{ left: `${progress}%` }}
                aria-hidden="true"
              />
            )}
          </div>
          <span className="ba-time">{duration > 0 ? formatTime(duration) : '--:--'}</span>
        </div>
      </div>
    </section>
  );
}
