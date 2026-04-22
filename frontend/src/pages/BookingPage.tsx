import { useState } from 'react';
import '../styles/homepage.css';
import '../styles/booking.css';
import { Cursor } from '../components/ui/Cursor';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Icons } from '../components/ui/Icons';
import { useReveal } from '../hooks/useReveal';

// ——————— Types ———————

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  servicio: 'mix' | 'master' | 'mix-master' | '';
  estilo: string;
  referencia: string;
  enlace: string;
  expectativas: string;
  presupuesto: string;
}

const INITIAL_FORM: FormData = {
  nombre: '',
  apellidos: '',
  email: '',
  servicio: '',
  estilo: '',
  referencia: '',
  enlace: '',
  expectativas: '',
  presupuesto: '',
};

const ESTILOS = [
  'Trap / Drill',
  'R&B / Soul urbano',
  'Hip-hop / Boom-bap',
  'Reggaeton / Dancehall',
  'Afrobeats / Afropop',
  'Pop alternativo',
  'Electrónica / Club',
  'Indie / Lo-fi',
  'Rock / Metal',
  'Flamenco urbano',
  'Otro / Híbrido',
];

const PRESUPUESTOS = [
  '10–15€ (single básico)',
  '20–25€ (producción media)',
  '30€ (máxima calidad)',
  'Todavía no sé — cuéntame tú',
];

// ——————— Sections ———————

function BookingHero() {
  return (
    <section className="hero bk-hero" id="top">
      <div className="meta-row">
        <div>
          <span className="marker">◆ [VM-004 / RESERVAR]</span>
          <span>Formulario de sesión · Briefing</span>
        </div>
        <div className="right">
          <span>Madrid, ES — Abierto</span>
          <span>Respuesta en 24–48h</span>
        </div>
      </div>

      <div className="bk-hero-body">
        <div className="kicker">
          <span className="blink" aria-hidden="true" />
          Reservar sesión · Book a session
        </div>
        <h1 className="bk-hero-title">
          Tu tema,<br />nuestras <em>manos.</em>
        </h1>
      </div>

      <div className="bk-hero-foot">
        <p className="lead">
          Cuéntanos qué tienes entre manos y cómo suenas.{' '}
          <em>Primer feedback siempre gratis</em> — si hay feeling, lo
          cerramos; si no, te quedas con las notas sin coste.
        </p>
        <div className="bk-hero-meta">
          <div><span>24h</span> respuesta</div>
          <div><span>10€</span> desde</div>
          <div><span>0</span> intermediarios</div>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const reveal = useReveal();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  const isValid =
    form.nombre.trim() &&
    form.apellidos.trim() &&
    form.email.includes('@') &&
    form.servicio &&
    form.estilo &&
    form.expectativas.trim().length >= 20;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    // Placeholder: integración backend pendiente
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bk-success reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        <div className="bk-success-icon" aria-hidden="true">✓</div>
        <h3>Recibido.<br /><em>Ahora escuchamos.</em></h3>
        <p>
          Hemos recibido tu briefing y te contactaremos en menos de 48 horas.
          Si quieres mandarnos el archivo directamente, escríbenos a{' '}
          <a href="mailto:hola@visionmob.es" style={{ color: 'var(--slate)' }}>
            hola@visionmob.es
          </a>{' '}
          con el asunto con tu nombre.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bk-form reveal"
      ref={reveal as React.RefObject<HTMLFormElement>}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Nombre + Apellidos */}
      <div className="bk-field-row">
        <div className="bk-field">
          <label htmlFor="nombre">
            Nombre <span className="req">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={set('nombre')}
            autoComplete="given-name"
            required
          />
        </div>
        <div className="bk-field">
          <label htmlFor="apellidos">
            Apellidos <span className="req">*</span>
          </label>
          <input
            id="apellidos"
            type="text"
            placeholder="Tus apellidos"
            value={form.apellidos}
            onChange={set('apellidos')}
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="bk-field">
        <label htmlFor="email">
          Correo electrónico <span className="req">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@correo.com"
          value={form.email}
          onChange={set('email')}
          autoComplete="email"
          required
        />
      </div>

      {/* Servicio */}
      <div className="bk-field">
        <label>
          Servicio que necesitas <span className="req">*</span>
        </label>
        <div className="bk-service-grid" role="radiogroup" aria-label="Seleccionar servicio">
          <div className="bk-service-opt">
            <input
              type="radio"
              id="svc-mix"
              name="servicio"
              value="mix"
              checked={form.servicio === 'mix'}
              onChange={set('servicio')}
            />
            <label htmlFor="svc-mix">
              <span className="svc-name">Solo Mix</span>
              <span className="svc-price">Desde 10€</span>
              <span className="svc-desc">Mezcla a mano, entrega en stems o stereo</span>
            </label>
          </div>
          <div className="bk-service-opt">
            <input
              type="radio"
              id="svc-master"
              name="servicio"
              value="master"
              checked={form.servicio === 'master'}
              onChange={set('servicio')}
            />
            <label htmlFor="svc-master">
              <span className="svc-name">Solo Máster</span>
              <span className="svc-price">Desde 10€</span>
              <span className="svc-desc">Máster con criterio, listo para plataformas</span>
            </label>
          </div>
          <div className="bk-service-opt">
            <input
              type="radio"
              id="svc-mixmaster"
              name="servicio"
              value="mix-master"
              checked={form.servicio === 'mix-master'}
              onChange={set('servicio')}
            />
            <label htmlFor="svc-mixmaster">
              <span className="svc-name">Mix + Máster</span>
              <span className="svc-price">Desde 20€</span>
              <span className="svc-desc">Todo en uno — el paquete más popular</span>
            </label>
          </div>
        </div>
      </div>

      {/* Estilo */}
      <div className="bk-field">
        <label htmlFor="estilo">
          Estilo musical <span className="req">*</span>
        </label>
        <select
          id="estilo"
          value={form.estilo}
          onChange={set('estilo')}
          required
        >
          <option value="" disabled>Selecciona el género principal</option>
          {ESTILOS.map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      {/* Referencia + Enlace */}
      <div className="bk-field-row">
        <div className="bk-field">
          <label htmlFor="referencia">Referencia sonora</label>
          <input
            id="referencia"
            type="text"
            placeholder="Artista o tema que te inspira"
            value={form.referencia}
            onChange={set('referencia')}
          />
        </div>
        <div className="bk-field">
          <label htmlFor="enlace">Enlace al tema</label>
          <input
            id="enlace"
            type="url"
            placeholder="Drive, WeTransfer, SoundCloud…"
            value={form.enlace}
            onChange={set('enlace')}
          />
        </div>
      </div>

      {/* Presupuesto */}
      <div className="bk-field">
        <label htmlFor="presupuesto">Rango de presupuesto</label>
        <select
          id="presupuesto"
          value={form.presupuesto}
          onChange={set('presupuesto')}
        >
          <option value="" disabled>Orientativo — sin compromiso</option>
          {PRESUPUESTOS.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Expectativas */}
      <div className="bk-field">
        <label htmlFor="expectativas">
          ¿Qué esperas de nosotros? <span className="req">*</span>
        </label>
        <textarea
          id="expectativas"
          placeholder="Cuéntanos el tema, el vibe que buscas, si tienes referencias concretas de cómo quieres que suene, la historia detrás del track… cuanto más nos cuentes, mejor."
          value={form.expectativas}
          onChange={set('expectativas')}
          required
          minLength={20}
        />
      </div>

      <button
        type="submit"
        className="bk-submit"
        disabled={!isValid || loading}
        data-cursor="big"
        aria-label="Enviar solicitud de sesión"
      >
        <span>{loading ? 'Enviando…' : 'Enviar solicitud'}</span>
        <span className="arr" aria-hidden="true"><Icons.arrow /></span>
      </button>
    </form>
  );
}

const STEPS = [
  { n: '01', t: 'Rellenas el briefing', d: 'Nos cuentas el tema, el estilo y qué esperas. Sin compromiso.' },
  { n: '02', t: 'Te damos feedback', d: 'En 24–48h te contamos cómo lo vemos y si encajamos.' },
  { n: '03', t: 'Cerramos y empezamos', d: 'Si hay feeling, mandas los stems y arrancamos. Sin sorpresas de precio.' },
  { n: '04', t: 'Entregas y revisiones', d: 'Te enviamos el preview, escuchamos, ajustamos. Una revisión incluida.' },
];

function BookingSidebar() {
  return (
    <aside className="bk-sidebar">
      <div className="bk-info-card">
        <span className="card-label">◆ Cómo funciona</span>
        <h4>Cuatro pasos,<br />cero rollos.</h4>
        <div className="bk-step-list">
          {STEPS.map(s => (
            <div className="bk-step" key={s.n}>
              <span className="bk-step-n">{s.n}</span>
              <div className="bk-step-body">
                <h5>{s.t}</h5>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bk-info-card">
        <span className="card-label">◆ Precios</span>
        <h4>Transparentes<br />desde el minuto uno.</h4>
        <div>
          <div className="bk-price-row">
            <span>Solo Mix</span>
            <div style={{ textAlign: 'right' }}>
              <strong>10–20€</strong>
            </div>
          </div>
          <div className="bk-price-row">
            <span>Solo Máster</span>
            <div style={{ textAlign: 'right' }}>
              <strong>10–15€</strong>
            </div>
          </div>
          <div className="bk-price-row">
            <span>Mix + Máster</span>
            <div style={{ textAlign: 'right' }}>
              <strong>20–30€</strong>
              <div className="note">más popular</div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5', fontWeight: 300 }}>
          Primer feedback gratis. Cerramos precio antes de empezar — nada de sorpresas.
        </p>
      </div>
    </aside>
  );
}

// ——————— Page ———————

export function BookingPage() {
  const reveal = useReveal();

  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <BookingHero />

        <section className="section" id="formulario">
          <div
            className="section-head reveal"
            ref={reveal as React.RefObject<HTMLDivElement>}
          >
            <div className="idx">
              ◆ 01 / BRIEFING
              <span className="num">01</span>
            </div>
            <div>
              <h2>Cuéntanos tu <em>tema.</em></h2>
              <p>
                Todos los campos marcados con <span style={{ color: 'var(--almond)' }}>*</span> son obligatorios.
                El resto nos ayuda a entenderte mejor — rellena lo que tengas.
              </p>
            </div>
          </div>

          <div className="bk-layout">
            <BookingForm />
            <BookingSidebar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
