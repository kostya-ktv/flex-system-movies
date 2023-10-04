'use client';
import { useMovies } from '@/services/movies';
import SourceToggle from './_components/source-toggle/source-toggle';
import './main-page.scss';
import { SWRKeys } from '@/providers/swr.provider';
import { useEffect, useState } from 'react';
import { MoviesCards } from '@/components/shared';
import useFavoritesMoviesStore from '@/store/favirotes-movies.store';

const MainPage = () => {
  const [moviesSrc, setMovieSrc] = useState<SWRKeys>(SWRKeys.Popular);
  const { setParams, moviesResponse } = useMovies(moviesSrc);
  const { movies: favoriteMovies } = useFavoritesMoviesStore();

  useEffect(() => {
    setParams({ page: 1 });
  }, []);

  return (
    <div className="main-page">
      <h1>Movies Trends</h1>
      <SourceToggle onSelect={setMovieSrc} />
      <MoviesCards
        movies={
          moviesSrc === SWRKeys.Favorites
            ? favoriteMovies
            : moviesResponse?.results
        }
      />
    </div>
  );
};
export default MainPage;
