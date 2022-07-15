import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../components/Container/Container';

const Loader = lazy(() =>
  import('../components/Loader/Loader' /* webpackChunkName: "loader" */)
);
const Navigator = lazy(() =>
  import('./Navigator/Navigator' /* webpackChunkName: "navigator" */)
);
const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Navigator />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={2500} />
    </Container>
  );
};
