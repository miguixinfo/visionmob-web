import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="nav" aria-label="Navegación principal">
      <Link to="/" className="brand" data-cursor="big">
        <span className="dot" aria-hidden="true" />
        VisionMob · Studio
      </Link>

      <ul>
        <li><Link to="/#demo" data-cursor="big">Demo</Link></li>
        <li><Link to="/#servicios" data-cursor="big">Mix &amp; Master</Link></li>
        <li><Link to="/#proceso" data-cursor="big">Proceso</Link></li>
        <li>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? 'on' : '')}
            data-cursor="big"
          >
            Nosotros
          </NavLink>
        </li>
        <li><Link to="/#letter" data-cursor="big">VisionLetter</Link></li>
        <li>
          <NavLink
            to="/reservar"
            className={({ isActive }) => (isActive ? 'on' : '')}
            data-cursor="big"
          >
            Reservar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
