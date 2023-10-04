'use client';
import { SWRConfig } from 'swr';

export enum SWRKeys {
  Popular = '/popular',
  Upcoming = '/upcoming',
  Favorites = '/favorites',
  Movie = '/movie',
}
export const SWRGetCacheKey = (key: SWRKeys, params?: Object) => {
  return params ? key.concat(JSON.stringify(params)).trim() : key;
};

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
        revalidateIfStale: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
