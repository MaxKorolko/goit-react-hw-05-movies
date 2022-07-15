import { useState, useEffect } from 'react';
import { fetchTrendingMovieDay } from '../requests/fetchAPI';
import TrendingList from '../components/TrendingList/TrendingList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovieDay().then(results => setMovies(results));
  }, []);

  return (
    <main>
      <TrendingList movies={movies} />
    </main>
  );
}
