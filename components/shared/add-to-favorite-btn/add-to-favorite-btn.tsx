'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SWRKeys } from '@/providers/swr.provider';
import { Movie } from '@/services/movies';
import useFavoritesMoviesStore from '@/store/favirotes-movies.store';
import { HeartIcon } from 'lucide-react';
import { useCallback } from 'react';

const AddToFavoriteBtn: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { movies, addMovie, removeMovie } = useFavoritesMoviesStore();

  const isExists = movies?.some((el) => el?.id == movie.id);

  const btnText = isExists ? 'Remove' : 'Save';

  const handleClick = useCallback(() => {
    isExists ? removeMovie(movie.id) : addMovie(movie);
  }, [isExists]);

  return (
    <Button onClick={() => handleClick()}>
      <div className="flex items-center gap-x-3">
        <HeartIcon
          className={cn('', isExists && 'fill-red-500 text-red-500')}
        />
        <p className="text-[18px]">{btnText}</p>
      </div>
    </Button>
  );
};
export default AddToFavoriteBtn;
