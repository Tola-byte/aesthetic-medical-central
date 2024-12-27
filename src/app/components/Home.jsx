'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image16 from '../assets/Img 16.jpg';
import './Home.css';
import { listofservices } from '../config/config';
import FAQ from './FAQ/faq';
import MobileProducts from './mobileProducts';
import DesktopProducts from './DesktopProducts';
import TestimonialComponent from './testimonials/Testimonial';

const HomeComponent = () => {
  return (
    <div className="bg-[#D4AF37] text-black pt-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 md:px-20 pb-8">
        <div className="pr-6">
          <h1 className="font-semibold text-3xl md:text-7xl  mb-2">
            Radiant Skin <br /> Timeless Beauty.
          </h1>
          <p className="text-lg px-2 w-3/4 mb-8">
            Experience personalized skin care solutions, luxurious products, and
            expert consultations that unlock your skin's natural glow and
            empower you with timeless confidence and beauty.
          </p>
          <button className="block ml-2 w-fit px-4 py-1 mb-6 md:mb-0 rounded-md border border-black bg-[#D4AF37] transition-all duration-500 hover:bg-black hover:text-[#D4AF37]">
            Book Appointment
          </button>
        </div>
        <Image
          src={image16}
          alt="image 16"
          className="w-[95%] object-fit rounded-2xl hover:scale-105 transform transition duration-300 ease-in-out"
        />
      </div>
      <section className="bg-white py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-6">
          {listofservices.map((item) => (
            <div
              className="flex flex-col md:flex-row gap-4 items-center"
              key={item.id}
            >
              <Image
                src={item.image}
                key={item.id}
                alt="image 21"
                className="w-[50%] h-[70%] object-fit rounded-xl"
              />
              <div className="text-center md:text-left flex flex-col gap-4">
                <h3 className="text-[#D4AF37] font-bold text-3xl">
                  {item.title}
                </h3>
                <p className="text-md w-[80%] mx-auto">{item.description}</p>
              </div>
            </div>
          ))}
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

      <section className="bg-[#fff] px-4 md:px-20 pt-24 pb-16 border-b-2 border-white">
        <p className="text-center font-semibold max-w-[90%] md:max-w-[70%] text-3xl mx-auto">
          Explore our curated selection of premium skincare products.
        </p>
        <div className="mt-8 bg-white rounded-md px-6 py-12 ">
          <div className="hidden md:block">
            <DesktopProducts />
          </div>
          <div className="block md:hidden">
            <MobileProducts />
          </div>
          <Link
            href="/products"
            className="block w-fit mx-auto mt-8 px-12 py-1 text-[#D4AF37] border-2 border-[#D4AF37] hover:shadow-lg bg-white rounded-md relative transition duration-100 hover:bottom-[0.8px]"
          >
            Shop
          </Link>
        </div>
      </section>

      <section className="py-20 px-10 border-b-2 border-white">
        <h2 className="text-center font-semibold max-w-[90%] md:max-w-[70%] text-3xl mx-auto mb-4">
          What our clients say
        </h2>
        <TestimonialComponent />
        <Link
          href="/"
          className="mt-6 flex w-fit gap-2 items-center mx-auto px-4 py-2 mb-6 md:mb-0 rounded-md border relative border-white font-semibold text-white transition-all duration-500 hover:shadow-xl hover:bottom-[0.8px]"
        >
          <button className="">Book Appointment</button>
        </Link>
      </section>

      <section className="py-20 border-b-2 border-white">
        <FAQ />
      </section>
    </div>
  );
};

export default HomeComponent;
