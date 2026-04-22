import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Icons } from '../ui/Icons';

export function Services() {
  const revealHead = useReveal();
  const revealGrid = useReveal();
  const revealNote = useReveal();

  return (
    <section className="section" id="servicios">
      <div className="section-head reveal" ref={revealHead as React.RefObject<HTMLDivElement>}>
        <div className="idx">
          <span>02 / SERVICIOS</span>
          <span className="num">02</span>
        </div>
        <div>
          <h2>Sin trampa.<br />Sin <em>cartón.</em></h2>
          <p>Precios fijos, sin sorpresas. Revisamos hasta que suene como tiene que sonar.</p>
        </div>
      </div>

      <div className="svc-grid reveal" ref={revealGrid as React.RefObject<HTMLDivElement>}>
        <div className="svc-card">
          <div className="tag">Entry · Starter</div>
          <h3>Mix</h3>
          <div className="sub">Balance, presencia, cuerpo</div>
          <div className="price-row">
            <div className="price">10<sup>€</sup></div>
            <div className="price-old">20€</div>
          </div>
          <ul>
            <li><Icons.check /> Mezcla profesional del tema completo</li>
            <li><Icons.check /> Procesado de voces principales y coros</li>
            <li><Icons.check /> Integración con beat + ajuste de niveles</li>
            <li><Icons.check /> 2 rondas de revisión incluidas</li>
            <li><Icons.check /> Entrega en WAV 24-bit · 48kHz</li>
          </ul>
          <button className="cta-btn" data-cursor="big" aria-label="Empezar con el servicio Mix">
            <span>Empezar con Mix</span>
            <Icons.arrow />
          </button>
        </div>

        <div className="svc-card featured">
          <div className="tag">Más pedido</div>
          <h3>Mix + Master</h3>
          <div className="sub">Listo para Spotify, YouTube, TikTok</div>
          <div className="price-row">
            <div className="price">30<sup>€</sup></div>
            <div className="price-old">45€</div>
          </div>
          <ul>
            <li><Icons.check /> Todo lo del pack Mix</li>
            <li><Icons.check /> Masterizado competitivo para streaming</li>
            <li><Icons.check /> LUFS optimizados por plataforma</li>
            <li><Icons.check /> Revisiones ilimitadas hasta aprobación</li>
            <li><Icons.check /> Stems y sesión archivada 90 días</li>
            <li><Icons.check /> Soporte directo con el productor</li>
          </ul>
          <button className="cta-btn" data-cursor="big" aria-label="Reservar el servicio Mix + Master">
            <span>Reservar Mix + Master</span>
            <Icons.arrow />
          </button>
        </div>
      </div>

      <div className="svc-note reveal" ref={revealNote as React.RefObject<HTMLDivElement>}>
        <span>&#8594; Cobramos <strong>después</strong> de que apruebes el resultado. Si no suena, no pagas.</span>
        <span>Código VM10 · −10% en tu primer tema</span>
      </div>
    </section>
  );
}
