import { Link, Outlet } from 'react-router-dom';
import s from './Additional.module.css';

export default function Additional() {
  return (
    <div className={s.wrap}>
      <h3 className={s.tittle}>Additional information</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <Link className={s.link} to="cast">
            Cast
          </Link>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
