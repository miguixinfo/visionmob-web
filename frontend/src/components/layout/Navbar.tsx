import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${open ? ' nav-open' : ''}`} aria-label="Navegación principal">
        <Link to="/" className="brand" data-cursor="big" onClick={close}>
          <span className="dot" aria-hidden="true" />
          VisionMob · Studio
        </Link>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span /><span /><span />
        </button>

        <ul>
          <li><Link to="/#demo" data-cursor="big">Demo</Link></li>
          <li><Link to="/#servicios" data-cursor="big">Mix &amp; Master</Link></li>
          <li><Link to="/#proceso" data-cursor="big">Proceso</Link></li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'on' : '')} data-cursor="big">
              Nosotros
            </NavLink>
          </li>
          <li><Link to="/#letter" data-cursor="big">VisionLetter</Link></li>
          <li>
            <NavLink to="/reservar" className={({ isActive }) => (isActive ? 'on' : '')} data-cursor="big">
              Reservar
            </NavLink>
          </li>
        </ul>
      </nav>

      {createPortal(
        <div
          id="mobile-nav"
          className={`nav-overlay${open ? ' open' : ''}`}
          /* inert prevents focus & screen-reader access when hidden */
          {...(!open ? { inert: true } : {})}
        >
          <Link to="/#demo" onClick={close}>Demo</Link>
          <Link to="/#servicios" onClick={close}>Mix &amp; Master</Link>
          <Link to="/#proceso" onClick={close}>Proceso</Link>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'on' : '')} onClick={close}>
            Nosotros
          </NavLink>
          <Link to="/#letter" onClick={close}>VisionLetter</Link>
          <NavLink to="/reservar" className={({ isActive }) => (isActive ? 'on' : '')} onClick={close}>
            Reservar
          </NavLink>
        </div>,
        document.body
      )}
    </>
  );
}
