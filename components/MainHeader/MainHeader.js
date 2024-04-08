import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import MainHeaderBackground from './MainHeaderBackground';
import NavLink from '@/components/MainHeader/NavLink';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logo} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink url='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink url='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
