import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../requests/fetchAPI';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Additional from '../components/Additional/Additional';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(results => setMovie(results));
  }, [id]);

  if (!movie) {
    return;
  }

  return (
    <main>
      <GoBackBtn />
      <MovieDetails movie={movie} />
      <Additional />
    </main>
  );
}
