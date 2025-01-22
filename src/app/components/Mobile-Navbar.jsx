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
        {links.map((link) => {
          if (link.label === 'Blog') {
            return (
              <li
                key={link.label}
                className={
                  pathName === link.path
                    ? 'text-[#D4AF37] transition hover:bg-[rgba(236,235,235,0.2)] py-1'
                    : 'transition hover:bg-[rgba(236,235,235,0.2)] py-3'
                }
              >
                <Link
                  href={link.path}
                  target="_blank"
                  className="w-full flex justify-center gap-[2px] items-center"
                >
                  <span>{link.label}</span>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg> */}
                </Link>
              </li>
            );
          } else {
            return (
              <li
                key={link.label}
                className={
                  pathName === link.path
                    ? 'text-[#D4AF37] transition hover:bg-[rgba(236,235,235,0.2)] py-1'
                    : 'transition hover:bg-[rgba(236,235,235,0.2)] py-3'
                }
              >
                <Link href={link.path} className="block font-roboto w-full">
                  {link.label}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
