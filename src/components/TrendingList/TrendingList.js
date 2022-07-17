import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './TrendingList.module.css';

export default function TrendingList({ movies }) {
  const { pathname, search } = useLocation();

  return (
    <>
      <h1 className={s.tittle}>Trending today</h1>
      <ul className={s.list}>
        {movies.map(({ original_title, id }) => {
          return (
            <li className={s.item} key={id}>
              <Link
                className={s.link}
                to={`/movies/${id}`}
                state={{ from: `${pathname}${search}` }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

TrendingList.propTypes = {
  movies: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]).isRequired,
};
