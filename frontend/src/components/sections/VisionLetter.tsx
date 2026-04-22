import React, { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface NewsletterRow {
  rank: string;
  artist: string;
  track: string;
}

const previewRows: NewsletterRow[] = [
  { rank: '01', artist: 'MVRK', track: 'Riverland LP' },
  { rank: '02', artist: 'Lz', track: 'Slow Down' },
  { rank: '03', artist: 'Flaxe', track: 'Calle 09' },
  { rank: '04', artist: 'Kaina', track: 'Sin Vuelta' },
  { rank: '05', artist: 'N\u00f8', track: '04:00 AM' },
];

export function VisionLetter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const reveal = useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="letter">
      <div className="vl reveal" ref={reveal as React.RefObject<HTMLDivElement>}>
        <div>
          <div className="eyebrow">VisionLetter · Mensual</div>
          <h3>La escena<br />y los <em>descuentos.</em></h3>
          <p>Una vez al mes. Novedades de la escena urbana curadas por nosotros — y ofertas exclusivas que no verás en redes. Prometido: sin spam.</p>
          {!sent ? (
            <form onSubmit={submit}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Tu dirección de email"
              />
              <button type="submit" data-cursor="big">Suscribirme</button>
            </form>
          ) : (
            <div style={{ padding: '16px 18px', border: '1px solid var(--slate)', borderRadius: 12, fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--slate)' }}>
              &#10003; Dentro. Revisa tu bandeja — te mandamos tu código VM10.
            </div>
          )}
          <div className="perks">
            <span><span className="dot" aria-hidden="true" /> -10% primer tema</span>
            <span><span className="dot" aria-hidden="true" /> Drops antes que nadie</span>
            <span><span className="dot" aria-hidden="true" /> Sin spam</span>
          </div>
        </div>

        <div className="vl-preview" aria-hidden="true">
          <div className="hdr">
            <span>VL · N°09</span>
            <span>ABRIL 26</span>
          </div>
          <h4>Top 05 del mes + salseo VMB</h4>
          {previewRows.map((row) => (
            <div className="row" key={row.rank}>
              <span><span className="rank">{row.rank}</span> {row.artist}</span>
              <span>{row.track}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
