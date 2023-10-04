import moviesService from '@/services/movies/movies.service';
import './movie-page.scss';
import Image from 'next/image';
import { EnvConfig } from '@/config/env.config';
import { Button } from '@/components/ui/button';
import AddToFavoriteBtn from '@/components/shared/add-to-favorite-btn/add-to-favorite-btn';

interface Props {
  params: { id: Array<string> };
}

const MoviePage: React.FC<Props> = async ({ params }) => {
  const movie = await moviesService.getMovie(params.id[0]);
  const moviePoster = `${EnvConfig.IMAGE_API_URL}w1920_and_h1080_face/${movie.poster_path}`;
  const movieImg = `${EnvConfig.IMAGE_API_URL}w220_and_h330_face/${movie.backdrop_path}`;
  if (!movie) return <h1>Not found...</h1>;

  return (
    <div className="movie-page">
      <Image
        alt="poster"
        width={1920}
        height={1080}
        className="movie-page__poster"
        src={moviePoster}
      />
      <div className="movie-page__content">
        <Image
          className="h-[330px] w-[220px]"
          alt="img"
          width={220}
          height={330}
          src={movieImg}
        />
        <div className="flex flex-col gap-5">
          <span className="text-[30px]">{movie.title}</span>
          <span>{movie.release_date}</span>
          <span>{movie.overview}</span>
          <AddToFavoriteBtn movie={movie} />
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
