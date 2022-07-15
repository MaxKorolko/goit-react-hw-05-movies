import { NavLink } from 'react-router-dom';
import s from './Navigator.module.css';

export default function Navigator() {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink exact="true" to="/" className={s.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={s.link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
