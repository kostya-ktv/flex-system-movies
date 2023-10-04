'use client';

import {
  Globe2Icon,
  LucideIcon,
  PopcornIcon,
  TrendingUpIcon,
} from 'lucide-react';
import './source-toggle.scss';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SWRKeys } from '@/providers/swr.provider';
import useFavoritesMoviesStore from '@/store/favirotes-movies.store';
import { mutate } from 'swr';
import { useMovies } from '@/services/movies';

enum SourceType {
  Popular = 'Popular',
  Upcoming = 'Upcoming',
  Favorites = 'Favorites',
}

const ButtonsList = [
  { icon: Globe2Icon, label: SourceType.Popular, src: SWRKeys.Popular },
  { icon: TrendingUpIcon, label: SourceType.Upcoming, src: SWRKeys.Upcoming },
  { icon: PopcornIcon, label: SourceType.Favorites, src: SWRKeys.Favorites },
];

interface Props {
  onSelect: (value: SWRKeys) => void;
}
const SourceToggle: React.FC<Props> = ({ onSelect }) => {
  const [selected, setSelected] = useState<SourceType>(SourceType.Popular);

  const { movies } = useFavoritesMoviesStore();
  return (
    <div className="source-toggle">
      {ButtonsList.map((btn, index) => (
        <div
          onClick={() => {
            setSelected(btn.label);
            onSelect(btn.src);
            mutate(
              (key: any) => {
                console.log(key);
                return key;
              },
              undefined,
              { revalidate: false },
            );
          }}
          className={cn(
            'source-toggle__btn',
            selected === btn.label && 'source-toggle__btn-active',
          )}
          key={`${btn.label}:${index}`}
        >
          <btn.icon />
          <p className="relative">
            {btn.label}
            {btn.label === SourceType.Favorites && (
              <span className="source-toggle__badge__counter">
                {movies?.length || 0}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};
export default SourceToggle;
