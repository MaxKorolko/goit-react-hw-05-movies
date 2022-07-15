import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMoviesSearch } from '../requests/fetchAPI';
import TrendingList from '../components/TrendingList/TrendingList';

export default function MoviesPage(params) {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();

  const navigation = useNavigate();
  const request = searchParams.get('request');

  useEffect(() => {
    if (!request) {
      return;
    }
    fetchMoviesSearch(request).then(results => setMovies(results));
  }, [request]);

  const addRequest = newRequest => {
    if (request !== newRequest) {
      navigation({ search: `request=${newRequest}` });
    }
  };

  return (
    <main>
      <SearchBar onGetRequest={addRequest} />
      {movies && movies.length > 0 && <TrendingList movies={movies} />}
      {movies && movies.length === 0 && (
        <p>The search has not given any results</p>
      )}
    </main>
  );
}
