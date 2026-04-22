import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="meta-row">
        <div>
          <span className="marker">&#8594; [VM-001]</span>
          <span>Studio · Mix · Mastering</span>
        </div>
        <div className="right">
          <span>Riverland / Madrid — 40.4°N</span>
          <span>LOCAL TIME {time}</span>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 'clamp(24px, 5vh, 80px)' }}>
        <div className="kicker">
          <span className="blink" aria-hidden="true" />
          Now booking · Temporada 26
        </div>
        <h1 className="hero-title">
          <span className="word one"><span>VISION</span></span>
          <span className="word two"><span>MOB</span></span>
        </h1>
      </div>

      <div className="hero-claim">
        <p className="lead">
          Dos productores. Un estudio online. <em>Mix &amp; master</em> de verdad, desde 10€. Sin pasos innecesarios, sin precios inflados — la visión que la calle necesita.
        </p>
        <div className="cta">
          <span>&#8595; Escucha la diferencia</span>
          <Link className="btn" to="/reservar" data-cursor="big">
            <span>Reservar sesión</span>
            <span className="arr"><Icons.arrow /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
