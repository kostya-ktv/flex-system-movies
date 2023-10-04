import { Movie } from '@/services/movies';
import './movie-card.scss';
import Image from 'next/image';
import { EnvConfig } from '@/config/env.config';
import Link from 'next/link';
import { SWRKeys } from '@/providers/swr.provider';

interface Props {
  movie: Movie;
}
const MovieCard: React.FC<Props> = ({ movie }) => {
  const movieImg = `${EnvConfig.IMAGE_API_URL}w220_and_h330_face/${movie.poster_path}`;
  const moviePageLink = `${SWRKeys.Movie}/${movie.id}`;

  return (
    <Link href={moviePageLink} className="movie-card">
      <Image alt="img" height={250} width={150} src={movieImg} />
      <div className="movie-card__title">
        <h3>{movie.title}</h3>
        <h5>{movie.release_date}</h5>
        <p>{movie.overview}</p>
      </div>
    </Link>
  );
};
export default MovieCard;
