import ApiService from '@/config/axios.config';
import { EnvConfig } from '@/config/env.config';
import { SWRKeys } from '@/providers/swr.provider';
import { MovieResponse } from '.';
import { Movie, PaginatedRequest } from './movies.types';

class MoviesService extends ApiService {
  constructor() {
    super({ baseURL: EnvConfig.MOVIE_API_URL });
  }
  async getPopularMovies(params?: PaginatedRequest): Promise<MovieResponse> {
    return await this.api
      .get(SWRKeys.Popular, {
        params,
      })
      .then((res) => res.data);
  }
  async getUpcomingMovies(params?: PaginatedRequest): Promise<MovieResponse> {
    return await this.api
      .get(SWRKeys.Upcoming, { params })
      .then((res) => res.data);
  }
  async getMovie(id: string): Promise<Movie> {
    return await this.api.get(`/${id}`).then((res) => res.data);
  }
}
export default new MoviesService();
