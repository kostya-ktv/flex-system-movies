import { Movie } from '@/services/movies';
import './movie-card.scss';
import MovieCard from './movie-card';

interface Props {
  movies?: Array<Movie>;
}
const MoviesCards: React.FC<Props> = ({ movies = [] }) => {
  return (
    <div className="movies-cards">
      {movies?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};
export default MoviesCards;
