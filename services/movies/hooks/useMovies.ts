import { SWRGetCacheKey, SWRKeys } from '@/providers/swr.provider';
import useSWR from 'swr';
import { useState } from 'react';
import moviesService from '../movies.service';
import { MovieResponse } from '..';
import { PaginatedRequest } from '../movies.types';

export const useMovies = (key: SWRKeys) => {
  const [params, setParams] = useState<PaginatedRequest>();

  const {
    data: moviesResponse,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<MovieResponse>(
    SWRGetCacheKey(key, params),
    async () => {
      if (key === SWRKeys.Popular) {
        return await moviesService.getPopularMovies(params);
      }
      if (key === SWRKeys.Upcoming) {
        return await moviesService.getUpcomingMovies(params);
      }
      return {
        results: [],
      };
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    moviesResponse,
    isLoading: isLoading || isValidating,
    params,
    mutate,
    setParams,
  };
};
