'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from './Navbar';

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <div>
      <ul className="text-center flex flex-col">
        {links.map((link) => (
          <li
            key={link.label}
            className={
              pathName === link.path
                ? 'text-[#D4AF37] transition hover:bg-[rgba(236,235,235,0.2)] py-1'
                : 'transition hover:bg-[rgba(236,235,235,0.2)] py-3'
            }
          >
            <Link href={link.path} className="block font-roboto w-full text-black">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
