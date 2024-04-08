'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './NavLink.module.css';

const NavLink = ({ url, children }) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={
        path.startsWith(url)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
