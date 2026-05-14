import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export function Footer() {
  return (
    <footer>
      <div className="footer-mark" aria-hidden="true">
        VISION<span className="sep">·</span>MOB
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h5>VisionMob</h5>
          <p>Mix &amp; mastering online desde Madrid. La calle hecha studio.</p>
        </div>
        <div className="footer-col">
          <h5>Navegar</h5>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/#demo">Demo</Link></li>
            <li><Link to="/#servicios">Mix &amp; Master</Link></li>
            <li><Link to="/#proceso">Proceso</Link></li>
            <li><Link to="/#letter">VisionLetter</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/reservar">Reservar sesión</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Redes</h5>
          <ul>
            <li>
              <a href="#" data-cursor="big" aria-label="Instagram de VisionMob">
                <Icons.ig /> &nbsp; Instagram
              </a>
            </li>
            <li>
              <a href="#" data-cursor="big" aria-label="TikTok de VisionMob">
                <Icons.tt /> &nbsp; TikTok
              </a>
            </li>
            <li>
              <a href="#" data-cursor="big" aria-label="Spotify de VisionMob">
                <Icons.sp /> &nbsp; Spotify
              </a>
            </li>
            <li>
              <a href="#" data-cursor="big" aria-label="YouTube de VisionMob">
                <Icons.yt /> &nbsp; YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
            <li><Link to="/privacidad">Política de Privacidad</Link></li>
            <li><Link to="/aviso-legal">Aviso Legal</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VisionMob — La calle hecha studio</span>
        <span className="status">
          <span className="pulse" aria-hidden="true" />
          Aceptando nuevos proyectos
        </span>
        <span>Hecho con ♥ en Madrid</span>
      </div>
    </footer>
  );
}
