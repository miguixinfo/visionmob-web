import React from 'react';
import { useReveal } from '../../hooks/useReveal';

interface Step {
  n: string;
  t: string;
  p: string;
}

const steps: Step[] = [
  { n: '01', t: 'Nos escribes', p: 'Mándanos tu tema en crudo: voz, beat, referencias. Sin formularios eternos, directo por WhatsApp o email.' },
  { n: '02', t: 'Revisamos juntos', p: 'Escuchamos todo y te confirmamos presupuesto y plazo. Sin sorpresas: precio fijo antes de empezar.' },
  { n: '03', t: 'Trabajamos', p: 'Mezclamos y masterizamos. Entregamos primer resultado en 48–72h. Rondas de cambios incluidas.' },
  { n: '04', t: 'A plataformas', p: 'Cuando apruebes el sonido, te entregamos WAV final listo para subir a Spotify, YouTube y donde quieras.' },
];

export function Process() {
  const revealHead = useReveal();
  const revealGrid = useReveal();

  return (
    <section className="section" id="proceso">
      <div className="section-head reveal" ref={revealHead as React.RefObject<HTMLDivElement>}>
        <div className="idx">
          <span>03 / PROCESO</span>
          <span className="num">03</span>
        </div>
        <div>
          <h2>Cuatro pasos.<br />Ni uno <em>de más.</em></h2>
          <p>Desde que nos escribes hasta que subes tu tema a plataformas. Sin intermediarios, sin reuniones interminables, sin ir al estudio.</p>
        </div>
      </div>
      <div className="proc-grid reveal" ref={revealGrid as React.RefObject<HTMLDivElement>}>
        {steps.map((s) => (
          <div className="proc-item" key={s.n} data-cursor="big">
            <div className="n">Paso {s.n}</div>
            <h4>{s.t}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
