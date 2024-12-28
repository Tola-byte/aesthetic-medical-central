import React from 'react';
import logo from '../assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
// import { links } from './Navbar';

const Footer = () => {
  const links = [
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
      label: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <>
      <div className="px-10 md:px-20 bg-[#D4AF37] pt-4 pb-6 flex flex-col md:flex-row gap-12">
        <Link href="/">
          <Image
            src={logo}
            width={64}
            height={64}
            className="object-fit rounded-full"
            alt="amc logo"
          />
          <p className="hidden md:block relative top-1 font-semibold text-2xl">
            Aesthetic <br /> Medicine Center
          </p>
        </Link>

        <div className="flex-1 flex flex-col md:flex-row justify-between gap-6">
          <section className="md:pl-12">
            <h3 className=" text-lg pt-4 mb-3 font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-3 ">
              {links.map((link) => {
                if (link.label === 'Home') return;
                else {
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.path}
                        className="block overflow-hidden w-fit relative after:absolute after:-bottom-[0.7px] after:left-1/2 after:w-[80%] after:h-[2px] after:bg-black transition duration-200 after:-translate-x-[200%] hover:after:-translate-x-1/2 "
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </section>

          <section className=" pt-4">
            <h3 className=" text-lg mb-3 font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>
                  Chronicare Building, 143 Gbagada-Oworonshoki Expressway,
                  <br /> Lagos
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p>+2349015151533</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <Link href={'mailto:info.amcentral@gmail.com'}>
                  info.amcentral@gmail.com
                </Link>
              </div>
            </div>
          </section>

          <section className=" pt-4 md:px-8">
            <h3 className=" text-lg mb-3 font-semibold">Socials</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Facebook</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p>WhatsApp</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <Link href={'mailto:info.amcentral@gmail.com'}>Instagram</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <p className="bg-[rgba(0,0,0,0.9)] text-sm text-white text-center py-1">
        &copy;{new Date().getFullYear()}. Aesthetic Medical Central. All Rights
        Reserved
      </p>
    </>
  );
};

export default Footer;
