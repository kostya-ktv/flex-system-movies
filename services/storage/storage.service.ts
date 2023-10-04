'use client';
import { Movie } from '../movies';

export enum StorageServiceKeys {
  Favorites = 'favorites',
}
class StorageService {
  getFavoriteMovies(): Movie[] {
    const value = localStorage.getItem(StorageServiceKeys.Favorites);
    return value ? JSON.parse(value) : [];
  }
  addToFavorites(movie: Movie) {
    const savedFavorites = this.getFavoriteMovies();
    localStorage.setItem(
      StorageServiceKeys.Favorites,
      JSON.stringify([...savedFavorites, movie]),
    );
  }
  removeFromFavorites(movieID: Movie['id']) {
    const savedFavorites = this.getFavoriteMovies();
    localStorage.setItem(
      StorageServiceKeys.Favorites,
      JSON.stringify([...savedFavorites.filter((el) => el.id !== movieID)]),
    );
  }
}
export default new StorageService();
