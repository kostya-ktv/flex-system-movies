import { Movie } from '@/services/movies';
import storageService from '@/services/storage/storage.service';
import { create } from 'zustand';

interface Props {
  movies?: Movie[];
  addMovie: (newMovie: Movie) => void;
  removeMovie: (movieID: Movie['id']) => void;
  restoreSaved: () => void;
}

const useFavoritesMoviesStore = create<Props>((set) => ({
  movies: [],
  restoreSaved: () => {
    const stored = storageService.getFavoriteMovies();
    if (stored.length > 0) {
      set(() => ({ movies: [...stored] }));
    }
  },
  addMovie: (newMovie: Movie) =>
    set((state) => {
      storageService.addToFavorites(newMovie);
      return {
        movies: [...(state?.movies || []), newMovie],
      };
    }),
  removeMovie: (movieID: Movie['id']) =>
    set((state) => {
      storageService.removeFromFavorites(movieID);
      return {
        movies: state.movies?.filter((el) => el.id != movieID),
      };
    }),
}));

export default useFavoritesMoviesStore;
