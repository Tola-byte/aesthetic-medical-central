'use client';
import React from 'react';
import { links } from './Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-6">
      {links.map((link) => (
        <li
          key={link.label}
          className={
            pathName === link.path
              ? 'relative after:absolute after:-bottom-1 after:w-3/4 after:h-[2px] after:bg-[#D4AF37] after:left-1/2 after:transform after:-translate-x-1/2'
              : ''
          }
        >
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
