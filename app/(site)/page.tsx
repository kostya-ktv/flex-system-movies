'use client';
import { useMovies } from '@/services/movies';
import SourceToggle from './_components/source-toggle/source-toggle';
import './main-page.scss';
import { SWRKeys } from '@/providers/swr.provider';
import { useEffect, useRef, useState } from 'react';
import { MoviesCards, Pagination } from '@/components/shared';
import useFavoritesMoviesStore from '@/store/favirotes-movies.store';

const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [moviesSrc, setMovieSrc] = useState<SWRKeys>(SWRKeys.Popular);
  const { setParams, params, moviesResponse } = useMovies(moviesSrc);
  const { movies: favoriteMovies } = useFavoritesMoviesStore();

  const handlePageChange = (pageNumber: number) => {
    setParams({ page: pageNumber });
  };

  useEffect(() => {
    if (moviesSrc !== SWRKeys.Favorites) {
      setParams({ page: 1 });
    }
  }, [moviesSrc]);

  useEffect(() => {
    if (ref?.current !== null) ref?.current.scrollIntoView();
  }, [params?.page]);

  return (
    <div ref={ref} className="main-page">
      <h1>Movies Trends</h1>
      <SourceToggle onSelect={setMovieSrc} />
      <MoviesCards
        movies={
          moviesSrc === SWRKeys.Favorites
            ? favoriteMovies
            : moviesResponse?.results
        }
      />

      {moviesSrc != SWRKeys.Favorites && (
        <Pagination
          currentPageNumber={params?.page || 1}
          totalPages={
            moviesResponse?.total_pages && moviesResponse.total_pages > 500
              ? 500
              : moviesResponse?.total_pages
          }
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
export default MainPage;
