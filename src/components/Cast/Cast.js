import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../requests/fetchAPI';
import defaultImg from '../../img/default_img.png';
import s from './Cast.module.css';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    fetchMovieCast(id).then(results => setCasts(results));
  }, [id]);

  if (!casts) {
    return;
  }

  return (
    <>
      <ul className={s.list}>
        {casts.map(({ original_name, character, profile_path, id }) => (
          <li className={s.item} key={id}>
            <img
              className={s.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              alt={`poster ${original_name}`}
            />
            <p className={s.text}>{original_name}</p>
            <p className={s.text}>{`Character: ${character}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
