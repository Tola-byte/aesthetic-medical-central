'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from './Mobile-Navbar';
import DesktopNav from './Desktop-Navbar';
import { useSelector } from 'react-redux';

export const links = [
  {
    label: 'Home',
    path: '/',
  },

  {
    label: 'Services',
    path: '/services',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Blog',
    path: 'https://aestheticmedicinecentral.wordpress.com/2024/03/11/the-glow-up-tips-for-younger-looking-skin/',
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [firstNavState, setFirstNavState] = useState(false);

  const addedProductsLength = useSelector(
    (store) => store.productSlice.products,
  ).length;

  return (
    <nav>
      <div className="fixed z-30 top-0 left-0 w-full bg-white shadow-md py-3 px-4 flex justify-between items-center">
        {/* Logo and Name */}

        <Link href="/" className="flex items-center gap-[2px]">
          <Image
            src={logo}
            width={32}
            height={32}
            className="object-fit"
            alt="amc logo"
          />
          <p className="hidden md:block text-2xl text-yellow-500 relative top-1 font-swemiold">
            Aesthetic Medicine Central
          </p>
        </Link>

        {/* End of Logo and Name */}

        {/* Desktop Link */}

        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* End of Desktop Links */}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {!isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={() => {
                setFirstNavState(true);
                setIsNavOpen(true);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={() => setIsNavOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* End of Hamburger Icon */}

        {/* Cart Icon */}
        <div className="pr-2 md:pr-6 relative">
          <Link href="/cart">
            {addedProductsLength > 0 && (
              <p className="w-4 h-4 text-xs flex justify-center items-center bg-[#D4AF37] rounded-full text-white font-semibold absolute left-3 -top-2">
                {addedProductsLength}
              </p>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
        </div>
        {/* End of cart icon */}
      </div>

      <div
        className={
          firstNavState && isNavOpen
            ? 'bg-white z-20 fixed left-0 top-12 pt-4 w-full md:hidden transition duration-1000 transform translate-y-[0%]'
            : 'bg-white z-20 fixed left-0 top-12 pt-4 w-full md:hidden transition duration-1000 transform translate-y-[-100%]'
        }
        onClick={() => setIsNavOpen(false)}
      >
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
