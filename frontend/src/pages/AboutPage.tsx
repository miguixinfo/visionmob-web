import React, { useEffect, useState } from 'react';
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

// ——————— Member card ———————

interface MemberCardProps {
  idx: string;
  name: string;
  role: string;
  tag: string;
  city: string;
  years: string;
  specs: string;
  quote: string;
  code: string;
  accent: string;
}

function MemberCard({ idx, name, role, tag, city, years, specs, quote, code, accent }: MemberCardProps) {
  const reveal = useReveal();
  return (
    <article className="ab-card reveal" ref={reveal as React.RefObject<HTMLElement>} data-cursor="big">
      <PortraitPlaceholder label={name.toUpperCase()} code={code} accent={accent} />
      <div className="ab-card-head">
        <span className="ab-card-idx">{idx}</span>
        <span className="ab-card-tag">{tag}</span>
      </div>
      <h3 className="ab-card-name">{name}</h3>
      <div className="ab-card-role">{role}</div>
      <p className="ab-card-quote">
        <span className="q-mark">"</span>{quote}<span className="q-mark">"</span>
      </p>
      <dl className="ab-card-specs">
        <div><dt>Base</dt><dd>{city}</dd></div>
        <div><dt>Años</dt><dd>{years}</dd></div>
        <div><dt>Toca</dt><dd>{specs}</dd></div>
      </dl>
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
  const reveal = useReveal();
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

      <div className="ab-grid reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        <MemberCard
          idx="01"
          code="flaxe"
          name="Flaxe"
          role="Mix Engineer · Productor"
          tag="◆ LA CONSOLA"
          city="Madrid, ES"
          years="09"
          specs="Drill · trap · R&B urbano"
          quote="Si no te pone los pelos de punta a la primera, no está mezclado — está apilado."
          accent="rgba(127,119,221,0.45)"
        />
        <MemberCard
          idx="02"
          code="lz"
          name="Lz"
          role="Mastering · A&R de la casa"
          tag="★ EL OÍDO"
          city="Móstoles → Madrid"
          years="07"
          specs="Mastering · loudness · vinilo"
          quote="El máster no arregla una mierda — afina lo que ya suena bien. Por eso empezamos por el mix."
          accent="rgba(194,102,138,0.40)"
        />
        <MemberCard
          idx="03"
          code="miguix"
          name="Miguix"
          role="Full-stack · Diseño · Producto"
          tag="◇ EL CÓDIGO"
          city="Madrid, ES"
          years="06"
          specs="Web · UI · automatización"
          quote="Si la web no carga en dos segundos, el artista ya se fue. Construyo para que el estudio no se note — solo se use."
          accent="rgba(127,221,180,0.38)"
        />
      </div>
    </section>
  );
}

function AboutOrigin() {
  const reveal = useReveal();
  return (
    <section className="section" id="origen">
      <div className="section-head">
        <div className="idx">
          ◆ 02 / DE DÓNDE VENIMOS
          <span className="num">02</span>
        </div>
        <div>
          <h2>Telegram, beats a las <em>4 AM</em>,<br />y un hartazgo en común.</h2>
        </div>
      </div>

      <div className="ab-timeline reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        <ol>
          <li>
            <div className="ab-tl-year">2019</div>
            <div className="ab-tl-body">
              <h4>El primer beat compartido</h4>
              <p>Flaxe y Lz se conocen pasando carpetas por Telegram. Dos años discutiendo mezclas a las cuatro de la mañana, cada uno currando para estudios distintos.</p>
            </div>
          </li>
          <li>
            <div className="ab-tl-year">2022</div>
            <div className="ab-tl-body">
              <h4>El hartazgo</h4>
              <p>Demasiados artistas llegando con el tema mal mezclado y el bolsillo vacío. Demasiados estudios cobrando 300€ por un preset y entregando tarde. <em>Basta.</em></p>
            </div>
          </li>
          <li>
            <div className="ab-tl-year">2024</div>
            <div className="ab-tl-body">
              <h4>Entra Miguix</h4>
              <p>El estudio funcionaba por DMs. Miguix entra al proyecto y monta la web, el flujo de briefing, los pagos, la VisionLetter. La idea se vuelve un producto.</p>
            </div>
          </li>
          <li>
            <div className="ab-tl-year">2026</div>
            <div className="ab-tl-body">
              <h4>VisionMob — año cero</h4>
              <p>Abrimos bookings oficialmente. <em>Cero intermediarios</em>, precios honestos, y tres personas que escuchan tu tema como si fuera suyo. Mix a mano, máster con criterio, código con cabeza.</p>
            </div>
          </li>
        </ol>
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
          ◆ 03 / CÓMO TRABAJAMOS
          <span className="num">03</span>
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
  { n: '200+', l: 'Temas mezclados' },
  { n: '09', l: 'Años cocinando' },
  { n: '14', l: 'Ciudades en el mapa' },
  { n: '03', l: 'Cabezas · 0 jefes' },
];

function AboutStats() {
  const reveal = useReveal();
  return (
    <section className="section" id="stats" style={{ paddingTop: 0 }}>
      <div className="ab-stats reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        {STATS.map((s, i) => (
          <div className="ab-stat" key={i}>
            <div className="ab-stat-n">{s.n}</div>
            <div className="ab-stat-l">{s.l}</div>
          </div>
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
        <AboutOrigin />
        <AboutValues />
        <AboutStats />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
