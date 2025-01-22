import React from 'react';
import logo from '../assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';

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
            className="object-fit rounded-md"
            alt="amc logo"
          />
          <p className="hidden md:block relative top-1 font-semibold text-2xl">
            Aesthetic <br /> Medicine Central
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
              <Link
                className="flex gap-2"
                href={
                  'https://www.facebook.com/share/14kBTAaPa9/?mibextid=wwXIfr'
                }
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="#000"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.494v-9.294H9.845v-3.622h2.975V8.413c0-2.946 1.796-4.553 4.418-4.553 1.256 0 2.337.093 2.65.135v3.073h-1.819c-1.428 0-1.704.679-1.704 1.674v2.193h3.406l-.444 3.622h-2.962V24h5.805c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
                </svg>

                <p>Facebook</p>
              </Link>
              <Link
                className="flex gap-2 items-center"
                href={'https://wa.me/c/2349015151533'}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="#000"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.989.82 5.84 2.383 8.364L0 32l7.844-2.352C11.163 31.18 13.55 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.636 23.319c-.373 1.041-1.867 1.979-3.065 2.248-.82.184-1.85.33-5.392-.935C11.91 22.673 6.51 17.59 6.041 12.084c-.467-5.506 4.39-6.377 5.865-6.18 1.516.201 2.434.746 2.681 1.221.315.612.102 1.484-.072 2.191-.189.769-.386 1.086-.73 1.673-.36.612-.76 1.048-.433 1.602.326.555 1.454 2.391 3.089 3.495 1.635 1.102 3.006 1.461 3.601 1.626.595.166 1.185.126 1.606-.187.413-.306.658-.731.989-1.13.33-.4.657-.457 1.056-.277.398.18 2.554 1.205 2.984 1.422.43.217.717.323.818.501.092.18.092 1.047-.281 2.087z" />
                  <path
                    d="M20.857 19.329c-.24.299-.469.566-.824.812-.276.2-.615.26-.987.151-.374-.109-1.573-.521-3.091-1.552-1.516-1.032-2.805-2.662-3.157-3.24-.353-.579.017-.937.356-1.515.245-.41.477-.798.643-1.514.148-.612.177-1.1-.03-1.509-.214-.42-.731-.745-1.748-.875-1.168-.15-3.372.123-3.1 3.347.272 3.224 5.207 8.084 9.168 9.322 3.961 1.238 4.207-1.252 4.131-1.554-.076-.302-1.687-1.103-2.252-1.283-.294-.096-.499-.087-.556-.011z"
                    fill="#000"
                  />
                </svg>

                <p>WhatsApp</p>
              </Link>
              <Link
                className="flex gap-2 items-center"
                href={
                  'https://www.instagram.com/am.central?igsh=MXZjd293aXVqcWtqaw=='
                }
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="#000"
                >
                  <path d="M16 2.883c4.263 0 4.768.015 6.448.093 1.675.077 2.792.35 3.44.588a6.488 6.488 0 0 1 2.35 1.537 6.49 6.49 0 0 1 1.537 2.35c.238.648.511 1.765.588 3.44.078 1.68.093 2.185.093 6.448s-.015 4.768-.093 6.448c-.077 1.675-.35 2.792-.588 3.44a6.49 6.49 0 0 1-1.537 2.35 6.49 6.49 0 0 1-2.35 1.537c-.648.238-1.765.511-3.44.588-1.68.078-2.185.093-6.448.093s-4.768-.015-6.448-.093c-1.675-.077-2.792-.35-3.44-.588a6.49 6.49 0 0 1-2.35-1.537 6.49 6.49 0 0 1-1.537-2.35c-.238-.648-.511-1.765-.588-3.44-.078-1.68-.093-2.185-.093-6.448s.015-4.768.093-6.448c.077-1.675.35-2.792.588-3.44a6.488 6.488 0 0 1 1.537-2.35 6.49 6.49 0 0 1 2.35-1.537c.648-.238 1.765-.511 3.44-.588 1.68-.078 2.185-.093 6.448-.093zm0-2.883c-4.341 0-4.889.02-6.593.096-1.717.077-2.895.36-3.895.768a9.37 9.37 0 0 0-3.458 2.271 9.37 9.37 0 0 0-2.271 3.458c-.408 1-.691 2.178-.768 3.895-.076 1.704-.096 2.252-.096 6.593s.02 4.889.096 6.593c.077 1.717.36 2.895.768 3.895a9.37 9.37 0 0 0 2.271 3.458 9.37 9.37 0 0 0 3.458 2.271c1 .408 2.178.691 3.895.768 1.704.076 2.252.096 6.593.096s4.889-.02 6.593-.096c1.717-.077 2.895-.36 3.895-.768a9.37 9.37 0 0 0 3.458-2.271 9.37 9.37 0 0 0 2.271-3.458c.408-1 .691-2.178.768-3.895.076-1.704.096-2.252.096-6.593s-.02-4.889-.096-6.593c-.077-1.717-.36-2.895-.768-3.895a9.37 9.37 0 0 0-2.271-3.458 9.37 9.37 0 0 0-3.458-2.271c-1-.408-2.178-.691-3.895-.768C20.889.02 20.341 0 16 0z" />
                  <path d="M16 7.775a8.225 8.225 0 1 0 0 16.45 8.225 8.225 0 0 0 0-16.45zm0 13.6a5.375 5.375 0 1 1 0-10.75 5.375 5.375 0 0 1 0 10.75zM24.725 7.273a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0z" />
                </svg>

                <p>Instagram</p>
              </Link>
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
