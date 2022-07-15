import s from './MovieDetails.module.css';

export default function MovieDetails({ movie }) {
  const {
    release_date,
    original_title,
    overview,
    genres,
    vote_average,
    poster_path,
  } = movie;

  return (
    <article className={s.article}>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`poster ${original_title}`}
        width="300"
      />
      <div className={s.wrap}>
        <h2 className={s.movieTitle}>
          {original_title} ({new Date(release_date).getFullYear()})
        </h2>
        <p className={s.text}>{`User Score: ${vote_average * 10}%`}</p>
        <span className={s.tittle}>Overview</span>
        <p className={s.text}>{overview}</p>
        <span className={s.tittle}>Genres</span>
        <p className={s.text}>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </article>
  );
}
