import { ClapperboardIcon } from 'lucide-react';
import './main-navbar.scss';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <nav className="main-navbar">
      <Link className="main-navbar__logo" href="/">
        <ClapperboardIcon />
        <div>
          <span>Flex Dynamics</span>
        </div>
      </Link>
    </nav>
  );
};
export default MainNavbar;
