'use client';
import MainNavbar from './main-navbar/main-navbar';
import './main-layout.scss';
import useFavoritesMoviesStore from '@/store/favirotes-movies.store';
import { useEffect } from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { restoreSaved } = useFavoritesMoviesStore();

  useEffect(() => {
    restoreSaved();
  }, []);

  return (
    <div className="main-layout">
      <MainNavbar />
      <div className="main-layout__movies">{children}</div>
    </div>
  );
};
export default MainLayout;
