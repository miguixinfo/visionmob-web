import React, { useEffect, useRef, useState } from 'react';
import '../styles/homepage.css';
import '../styles/about.css';
import { Cursor } from '../components/ui/Cursor';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Icons } from '../components/ui/Icons';
import { useReveal } from '../hooks/useReveal';

// ——————— Portrait placeholder ———————

interface PortraitProps {
  label: string;
  code: string;
  accent: string;
}

function PortraitPlaceholder({ label, code, accent }: PortraitProps) {
  return (
    <div className="ab-portrait" aria-label={`Placeholder retrato ${label}`}>
      <svg className="ab-portrait-img" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id={`stripes-${code}`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="#1A1A2E" />
            <rect width="1.2" height="8" fill={accent} />
          </pattern>
          <linearGradient id={`grad-${code}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(127,119,221,0.20)" />
            <stop offset="100%" stopColor="rgba(10,10,16,0.0)" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#stripes-${code})`} />
        <rect width="400" height="500" fill={`url(#grad-${code})`} />
        <g opacity="0.22" fill="#0a0a10">
          <ellipse cx="200" cy="185" rx="78" ry="92" />
          <path d="M60 500 C 80 360, 160 320, 200 320 C 240 320, 320 360, 340 500 Z" />
        </g>
        <g stroke="rgba(241,239,232,0.25)" strokeWidth="1" fill="none">
          <line x1="200" y1="230" x2="200" y2="270" />
          <line x1="180" y1="250" x2="220" y2="250" />
          <circle cx="200" cy="250" r="14" />
        </g>
      </svg>
      <div className="ab-portrait-caption">
        <span>◇ PLACEHOLDER</span>
        <span>[FOTO · {label}]</span>
      </div>
    </div>
  );
}

// ——————— Member row ———————

interface MemberRowProps {
  idx: string;
  name: string;
  role: string;
  tag: string;
  quote: string;
  code: string;
  accent: string;
  delay?: number;
  instagram?: string;
  tiktok?: string;
  spotifyId?: string;
  github?: string;
  linkedin?: string;
}

function MemberRow({ idx, name, role, tag, quote, code, accent, delay = 0, instagram, tiktok, spotifyId, github, linkedin }: MemberRowProps) {
  const [inView, setInView] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const hasWidget = !!(spotifyId || github || linkedin);

  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function handleToggle() {
    setWidgetOpen(o => {
      const next = !o;
      if (next) setTimeout(() => widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
      return next;
    });
  }

  const cls = ['ab-row', 'reveal', inView && 'in', widgetOpen && 'ab-row--open'].filter(Boolean).join(' ');

  return (
    <article
      ref={articleRef}
      className={cls}
      style={inView ? undefined : { transitionDelay: `${delay}ms` }}
      data-cursor="big"
    >
      <div className="ab-row-portrait">
        <PortraitPlaceholder label={name.toUpperCase()} code={code} accent={accent} />
      </div>

      <div className="ab-row-info">
        <div className="ab-row-head">
          <span className="ab-card-idx">{idx}</span>
          <span className="ab-card-tag">{tag}</span>
        </div>
        <h3 className="ab-row-name">{name}</h3>
        <div className="ab-card-role">{role}</div>
        <p className="ab-card-quote">
          <span className="q-mark">"</span>{quote}<span className="q-mark">"</span>
        </p>
        <div className="ab-card-social">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="ab-card-social-btn ab-card-social-btn--instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
              <span className="ab-card-social-arr">↗</span>
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noopener noreferrer" className="ab-card-social-btn ab-card-social-btn--tiktok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.78a8.18 8.18 0 004.84 1.55V6.89a4.85 4.85 0 01-1.07-.2z" />
              </svg>
              <span>TikTok</span>
              <span className="ab-card-social-arr">↗</span>
            </a>
          )}
          {spotifyId && (
            <a href={`https://open.spotify.com/artist/${spotifyId}`} target="_blank" rel="noopener noreferrer" className="ab-card-social-btn ab-card-social-btn--spotify">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span>Spotify</span>
              <span className="ab-card-social-arr">↗</span>
            </a>
          )}
        </div>
        {hasWidget && (
          <button
            className="ab-row-toggle"
            onClick={handleToggle}
            aria-expanded={widgetOpen}
          >
            {widgetOpen ? '↑ Ver menos' : '↓ Ver más'}
          </button>
        )}
      </div>

      <div className="ab-row-widget" ref={widgetRef}>
        {spotifyId && (
          <div className="ab-spotify">
            <div className="ab-widget-label">◆ ESCUCHA EN SPOTIFY</div>
            <iframe
              title={`Spotify · ${name}`}
              src={`https://open.spotify.com/embed/artist/${spotifyId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              style={{ border: 'none' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
            />
          </div>
        )}
        {(github || linkedin) && (
          <div className="ab-social">
            <div className="ab-widget-label">◇ ENCUÉNTRAME EN</div>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="ab-social-link">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
                <span className="ab-social-arr">↗</span>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="ab-social-link">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
                <span className="ab-social-arr">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// ——————— Sections ———————

function AboutHero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero ab-hero" id="top">
      <div className="meta-row">
        <div>
          <span className="marker">◆ [VM-003 / NOSOTROS]</span>
          <span>Tres cabezas · una visión</span>
        </div>
        <div className="right">
          <span>Riverland / Madrid — 40.4°N</span>
          <span>LOCAL TIME {time}</span>
        </div>
      </div>

      <div className="ab-hero-body">
        <div className="kicker">
          <span className="blink" aria-hidden="true" />
          About us · Quiénes somos
        </div>
        <h1 className="ab-hero-title">
          La gente<br />detrás<br />del <em>sonido.</em>
        </h1>
        <a href="#equipo" className="ab-hero-jump" data-cursor="big">
          <span>↓</span>
          <span>Conoce al equipo</span>
        </a>
      </div>

      <div className="ab-hero-foot">
        <p className="lead">
          Dos productores y un programador. Montamos VisionMob porque cansaba ver a artistas buenos pagar 300€ por una mezcla regular.{' '}
          <em>La escena urbana merece mejor</em> — y nosotros no hemos venido a cobrar la entrada.
        </p>
        <div className="ab-hero-counts">
          <div><span>03</span> miembros</div>
          <div><span>2024</span> · año cero</div>
          <div><span>ES</span> base Madrid</div>
        </div>
      </div>
    </section>
  );
}

function AboutTeam() {
  return (
    <section className="section" id="equipo">
      <div className="section-head">
        <div className="idx">
          ◆ 01 / EL EQUIPO
          <span className="num">01</span>
        </div>
        <div>
          <h2>Tres tipos, un <em>estudio</em>,<br />la misma obsesión.</h2>
          <p>
            Flaxe y Lz son los oídos. Miguix, las manos en el teclado. Ninguno es jefe de nadie — las decisiones se hablan,
            los temas se escuchan tres veces, y si algo no está a la altura, no sale. Así de simple.
          </p>
        </div>
      </div>

      <div className="ab-rows">
        <MemberRow
          idx="01"
          code="flaxe"
          name="Flaxe"
          role="Mix Engineer · Productor"
          tag="◆ LA CONSOLA"
          quote="Si no te pone los pelos de punta a la primera, no está mezclado — está apilado."
          accent="rgba(127,119,221,0.45)"
          delay={0}
          instagram="#"
          tiktok="#"
          spotifyId="58hvJy4OWGwkh65JRMASeC"
        />
        <MemberRow
          idx="02"
          code="lz"
          name="Lz"
          role="Mastering · A&R de la casa"
          tag="★ EL OÍDO"
          quote="El máster no arregla una mierda — afina lo que ya suena bien. Por eso empezamos por el mix."
          accent="rgba(194,102,138,0.40)"
          delay={120}
          instagram="#"
          tiktok="#"
          spotifyId="528L0u2yXdYMBDFW9bnWmd"
        />
        <MemberRow
          idx="03"
          code="miguix"
          name="Miguix"
          role="Full-stack · Diseño · Producto"
          tag="◇ EL CÓDIGO"
          quote="Si la web no carga en dos segundos, el artista ya se fue. Construyo para que el estudio no se note — solo se use."
          accent="rgba(127,221,180,0.38)"
          delay={240}
          instagram="#"
          tiktok="#"
          github="https://github.com/miguixinfo"
          linkedin="https://www.linkedin.com/in/miguelgomezdev/"
        />
      </div>
    </section>
  );
}


const VALUES = [
  { n: '01', t: 'Sin intermediarios', d: 'Hablas con quien mezcla tu tema. No hay comercial, no hay project manager, no hay formulario perdido en un CRM.' },
  { n: '02', t: 'Precio honesto', d: 'Desde 10€ porque podemos. No tenemos oficina en Gran Vía ni socios con Tesla. Lo que no pagas en estructura, lo pagas en calidad.' },
  { n: '03', t: 'Oído a mano', d: 'Cero presets automáticos. Cero "IA mastering". Cada tema pasa por nuestras orejas — y por las tuyas antes de cerrarlo.' },
  { n: '04', t: 'Plazo que se cumple', d: 'Si decimos 72h son 72h. Si vamos tarde te avisamos antes — y te compensamos. La palabra va por delante de la factura.' },
];

function AboutValues() {
  const reveal = useReveal();
  return (
    <section className="section" id="valores">
      <div className="section-head">
        <div className="idx">
          ◆ 02 / CÓMO TRABAJAMOS
          <span className="num">02</span>
        </div>
        <div>
          <h2>Cuatro reglas que <em>no</em> se tocan.</h2>
          <p>No son eslóganes de home — son las cosas por las que renunciamos a trabajos antes, y por las que montamos esto.</p>
        </div>
      </div>

      <div className="ab-values reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        {VALUES.map(v => (
          <div className="ab-value" key={v.n}>
            <div className="ab-value-n">{v.n}</div>
            <h4>{v.t}</h4>
            <p>{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STATS = [
  { target: 200, suffix: '+', pad: 0, l: 'Temas mezclados' },
  { target: 9,   suffix: '',  pad: 2, l: 'Años cocinando' },
  { target: 14,  suffix: '',  pad: 0, l: 'Ciudades en el mapa' },
  { target: 3,   suffix: '',  pad: 2, l: 'Cabezas · 0 jefes' },
];

function useCountUp(target: number, active: boolean, duration = 1800, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frameId: number;
    let startTime: number | null = null;
    const tick = (now: number) => {
      if (startTime === null) startTime = now + delay;
      if (now < startTime) { frameId = requestAnimationFrame(tick); return; }
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(t < 1 ? Math.floor(eased * target) : target);
      if (t < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration, delay]);
  return count;
}

function StatItem({ target, suffix, pad, label, active, delay }: {
  target: number; suffix: string; pad: number; label: string; active: boolean; delay: number;
}) {
  const count = useCountUp(target, active, 1800, delay);
  const display = String(count).padStart(pad, '0');
  return (
    <div className="ab-stat">
      <div className="ab-stat-n">{display}{suffix}</div>
      <div className="ab-stat-l">{label}</div>
    </div>
  );
}

function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="stats" style={{ paddingTop: 0 }}>
      <div className="ab-stats" ref={containerRef}>
        {STATS.map((s, i) => (
          <StatItem
            key={i}
            target={s.target}
            suffix={s.suffix}
            pad={s.pad}
            label={s.l}
            active={active}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
}

function AboutCTA() {
  const reveal = useReveal();
  return (
    <section className="section" id="contacto" style={{ paddingTop: 0 }}>
      <div className="ab-cta reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        <div>
          <div className="eyebrow">◆ ¿Te encaja?</div>
          <h3>Mándanos tu tema —<br /><em>escuchamos antes de cobrar.</em></h3>
          <p>Primer feedback gratis. Si te mola cómo suena nuestra ruta, cerramos; si no, te quedas con las notas.</p>
        </div>
        <div className="ab-cta-actions">
          <a className="btn" href="/#demo" data-cursor="big">
            <span>Escuchar demos</span>
            <span className="arr"><Icons.arrow /></span>
          </a>
          <a className="ab-cta-mail" href="mailto:hola@visionmob.es" data-cursor="big">
            hola@visionmob.es ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ——————— Page ———————

export function AboutPage() {
  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <AboutHero />
        <AboutTeam />
        <AboutValues />
        <AboutStats />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
