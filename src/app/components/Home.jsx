import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image16 from '../assets/Img 16.jpg';
import image32 from '../assets/Img 32.jpg';
import consult from '../assets/consult.png';
import bodyTherapy from '../assets/body therapy.jpg';
import './Home.css';
import aesthetic1 from '../assets/products/aesthetic1.png';
import aesthetic2 from '../assets/products/aesthetic2.png';
import aesthetic3 from '../assets/products/aesthetic3.png';
import aesthetic4 from '../assets/products/aesthetic4.png';
import aesthetic5 from '../assets/products/aesthetic5.png';
import aesthetic6 from '../assets/products/aesthetic6.png';
import aesthetic7 from '../assets/products/aesthetic7.png';
import aesthetic8 from '../assets/products/aesthetic8.png';

const HomeComponent = () => {
  return (
    <div className="bg-[#D4AF37] text-black pt-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-8 md:px-20 pb-8">
        <div className="pr-6">
          <h1 className="font-semibold text-3xl md:text-5xl  mb-2">
            Radiant Skin, <br /> Timeless Beauty
          </h1>
          <p className="text-sm mb-8">
            Experience personalized skin care solutions, luxurious products, and
            expert consultations that unlock your skin's natural glow and
            empower you with timeless confidence and beauty.
          </p>
          <button className="block w-fit px-4 py-1 mb-6 md:mb-0 rounded-md border border-black bg-[#D4AF37] transition-all duration-500 hover:bg-black hover:text-[#D4AF37]">
            Book Appointment
          </button>
        </div>
        <Image
          src={image16}
          alt="image 16"
          className="w-[100%] object-fit rounded-lg md:clipPath md:clip-it"
          priority="true"
        />
      </div>
      <section className="bg-white py-12 px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Image
              src={consult}
              alt="image 21"
              className="w-[7rem] h-[7rem] object-fit rounded-full"
            />
            <div className="text-center md:text-left">
              <h3 className="text-[#D4AF37] font-semibold text-xl">
                Consultation
              </h3>
              <p className="text-sm">
                Schedule a personalized consultation with our expert team to
                discuss your aesthetic goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Image
              src={image32}
              alt="facial"
              className="w-[7rem] h-[7rem] object-fit rounded-full object-top-right"
            />
            <div className="text-center md:text-left">
              <h3 className="text-[#D4AF37] font-semibold text-xl">Facial</h3>
              <p className="text-sm">
                Experience the ultimate glow — our tailored facials refresh and
                rejuvenate your skin for timeless beauty
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Image
              src={bodyTherapy}
              alt="body therapy"
              className="w-[7rem] h-[7rem] object-fit rounded-full"
            />
            <div className="text-center md:text-left">
              <h3 className="text-[#D4AF37] font-semibold text-xl">Therapy</h3>
              <p className="text-sm">
                Reveal your best self with aesthetic therapy because beauty is
                more than skin deep.
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services"
          className="mt-12 flex w-fit gap-2 items-center mx-auto px-4 py-2 mb-6 md:mb-0 rounded-md border relative border-black font-semibold text-[#D4AF37] transition-all duration-500 hover:shadow-xl hover:bottom-[0.8px]"
        >
          <button className="">See All Services </button>
          <span>
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
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
      </section>

      <section className="bg-[#D4AF37] px-8 md:px-20 pt-20 pb-12">
        {/* <h2 className="text-center font-semibold text-3xl mb-4">Products</h2> */}
        <p className="text-center font-semibold max-w-[90%] md:max-w-[70%] text-3xl mx-auto">
          Explore our curated selection of premium skincare products.
        </p>
        <div className="mt-6 bg-white rounded-md px-6 py-12 ">
          <div className="flex flex-wrap gap-x-4 gap-y-6 justify-between md:grid grid-cols-6 md:gap-6 md:gap-y-8">
            <div className="rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic1}
                alt="aesthetic 1"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 1</p>
              <p className="font-semibold px-2 pb-4">&#8358;29,999</p>
            </div>
            <div className="rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic2}
                alt="aesthetic 2"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 2</p>
              <p className="font-semibold px-2 pb-4">&#8358;14,999</p>
            </div>
            <div className="rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic3}
                alt="aesthetic 3"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 3</p>
              <p className="font-semibold px-2 pb-4">&#8358;19,999</p>
            </div>
            <div className="rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic4}
                alt="aesthetic 4"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 4</p>
              <p className="font-semibold px-2 pb-4">&#8358;24,999</p>
            </div>
            <div className="rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic5}
                alt="aesthetic 5"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 5</p>
              <p className="font-semibold px-2 pb-6">&#8358;29,999</p>
            </div>
            <div className="hidden md:block rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic6}
                alt="aesthetic 1"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 6</p>
              <p className="font-semibold px-2 pb-4">&#8358;21,999</p>
            </div>
            <div className="hidden md:block rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic7}
                alt="aesthetic 7"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 7</p>
              <p className="font-semibold px-2 pb-4">&#8358;17,999</p>
            </div>
            <div className="hidden md:block rounded-md w-fit transition duration-100 hover:shadow-xl hover:scale-105 relative">
              <div className="absolute -top-10 -left-1 pl-2 z-60 w-fit px-1 pb-1 h-20 bg-white text-[#D4AF37] font-semibold flex flex-col-reverse crown">
                <p>AMC</p>
              </div>
              <Image
                src={aesthetic8}
                alt="aesthetic 8"
                className="w-40 h-36 object-fit rounded-tr-md rounded-tl-md"
              />
              <p className="my-1 px-2 text-[16px] font-light">Product 8</p>
              <p className="font-semibold px-2 pb-6">&#8358;29,999</p>
            </div>
          </div>
          <Link
            href="/products"
            className="block w-fit mx-auto mt-4 px-12 py-1 text-[#D4AF37] border-2 border-[#D4AF37] hover:shadow-lg bg-white rounded-md relative transition duration-100 hover:bottom-[0.8px]"
          >
            Shop
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
