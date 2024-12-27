"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img12 from '../../assets/services/Img 12.jpg';
import Img28 from '../../assets/services/Img 28.png';
import Img30 from '../../assets/services/Img 30.jpg';
import Img21 from "../../assets/Img 21.jpg"
import Img32 from "../../assets/Img 32.jpg"
import Img35 from '../../assets/services/Img 35.jpg';
import Img38 from '../../assets/services/Img 38.jpg';
import Img42 from '../../assets/services/Img 42.jpg';
import bghero from "../../assets/services/serviceshero.jpg"
import Img52 from '../../assets/services/Img 52.jpg';
import Img16 from '../../assets/Img 16.jpg'
import { ServicesData } from '@/app/config/config';
import FAQ from '@/app/components/FAQ/faq';
import Items from '@/app/components/FAQ/Item';
import Accordion from '@/app/components/FAQ/Accordion';

const page = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
     pauseOnHover: false,
  };
  return (
    <div className="bg-[#fff]">
      <section className="bg-services bg-cover bg-center pt-36 md:pt-52 pb-20 md:pb-40 px-10 md:px-20 "
      
      >
        <h1 className="text-5xl text-white text-center font-bold mb-4 leading-[50px]">
          Services
        </h1>
        {/* <p className="md:w-2/3">
          Experience personalized treatments designed to enhance your natural
          beauty. Our expert care helps you achieve radiant, healthy skin with
          confidence.
        </p> */}
      </section>

      <div className='bg-white w-full flex flex-col md:justify-center p-2 md:p-20' >
        <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2 md:p-20 md:ml-20'>
          <h1 className='font-extrabold text-2xl text-center md:text-4xl font-roboto text-[#D4AF37]'>NEED A GLOW-UP?</h1>
          <div className='p-4 mt-4'>
              <button
                // href={
                //   'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
                // }
                className='bg-[#d4af37] flex justify-center text-white rounded-lg w-3/4 p-2 hover:bg-white border-2 border-[#d4af37] hover:text-[#d4af37]'>Book an Appointment</button>
            </div>
        </div>

        <div className='w-[100vw] md:w-3/4 md:p-10'>
        <Accordion>
          <Items data={ServicesData} />
        </Accordion>
             
          </div>
          </div>
          
    
      </div>


      <Slider {...settings} className=' flex gap-4'>
        <div className='p-2'>
          <Image src={Img12} className='h-[40vh] rounded-lg' alt="Slide 1" />
        </div>
        <div className='p-2'>
          <Image src={Img28} className='h-[40vh] rounded-lg' alt="Slide 2" />
        </div>
        <div className='p-2'>
          <Image src={Img35} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
        <div className='p-2'>
          <Image src={Img16} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
        <div className='p-2'>
          <Image src={Img42} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
        <div className='p-2'>
          <Image src={Img52} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
        <div className='p-2'>
          <Image src={Img21} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
        <div className='p-2'>
          <Image src={Img32} className='h-[40vh] rounded-lg' alt="Slide 3" />
        </div>
      </Slider>

      {/* <div className="py-12 bg-white">
        <section className="w-fit mx-auto px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6">
          <Image
            src={Img12}
            className="w-[16rem] h-[22rem] object-cover rounded-md"
            alt="image 12"
          />
          <div>
            <h3 className="font-semibold text-2xl mb-6">Consultation</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>In Person</p>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Virtual</p>
            </div>

            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Review</p>
            </div>

            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Facial Aesthetics Analysis</p>
            </div>

            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 ">
          <div className="hidden md:block">
            <h3 className="font-semibold text-2xl mb-6">
              Medical-Grade <br /> Facials
            </h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Oxygen Flow Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Dermaplaining Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Nanoneedling Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Plasma Facial</p>
            </div>

            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
          <Image
            src={Img42}
            className="w-[16rem] h-[22rem] object-cover rounded-md"
            alt="image 42"
          />
          <div className="block md:hidden">
            <h3 className="font-semibold text-2xl mb-6">
              Medical-Grade <br /> Facials
            </h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Oxygen Flow Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Dermaplaining Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Nanoneedling Facial</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>The Plasma Facial</p>
            </div>

            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 ">
          <Image
            src={Img28}
            className="w-[16rem] h-[22rem] object-cover rounded-md"
            alt="image 12"
          />
          <div className="">
            <h3 className="font-semibold text-2xl mb-6">
              Neuromodulator <br /> (Botox)
            </h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Wrinkle Treatment</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>
                Masseter Reduction/
                <br />
                Bruxism Treatment
              </p>
            </div>

            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto mt-16 px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 ">
          <div className="hidden md:block">
            <h3 className="font-semibold text-2xl mb-6">Injectables</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Skin Boosters</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Mesotherapy</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Lip Rejuvenation</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Hand Rejuvenation</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
          <Image
            src={Img38}
            className="w-[16rem] h-[22rem] object-cover rounded-md"
            alt="image 38"
          />
          <div className="block md:hidden">
            <h3 className="font-semibold text-2xl mb-6">Injectables</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Skin Boosters</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Mesotherapy</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Lip Rejuvenation</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Hand Rejuvenation</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto mt-16 px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 ">
          <Image
            src={Img35}
            className="w-[16rem] h-[22rem] object-cover rounded-md"
            alt="image 35"
          />
          <div className="">
            <h3 className="font-semibold text-2xl mb-6">IV Therapy</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Standard IV Drip</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Energy Drip</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Custom Drip</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>IV Glutathione</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto mt-16 px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 ">
          <div className="hidden md:block">
            <h3 className="font-semibold text-2xl mb-6">Chemical Peel</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Single Acid Chemical Peel</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Combo 2 Peel</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Combo 3 Peel</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>

          <Image
            src={Img30}
            className="w-[16rem] h-[22rem] object-cover object-right rounded-md"
            alt="image 30"
          />

          <div className="block md:hidden">
            <h3 className="font-semibold text-2xl mb-6">Chemical Peel</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Single Acid Chemical Peel</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Combo 2 Peel</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Combo 3 Peel</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>

        <section className="w-fit mx-auto mt-16 px-2 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6">
          <Image
            src={Img52}
            className="w-[16rem] h-[22rem] object-cover object-right rounded-md"
            priority="true"
            alt="image 52"
          />

          <div className="">
            <h3 className="font-semibold text-2xl mb-6">Others</h3>
            <div className="flex gap-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>LED Therapy</p>
            </div>
            <div className="flex gap-1 items-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 relative top-[0.4rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Sclerotherapy</p>
            </div>
            <Link
              href={
                'https://partner.pabau.com/online-bookings/Aesthetic-Medicine-Central'
              }
              className={
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-[#D4AF37] mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default page;
