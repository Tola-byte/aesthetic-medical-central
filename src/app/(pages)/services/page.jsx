import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Img12 from '../../assets/services/Img 12.jpg';
import Img28 from '../../assets/services/Img 28.png';
import Img30 from '../../assets/services/Img 30.jpg';
import Img35 from '../../assets/services/Img 35.jpg';
import Img38 from '../../assets/services/Img 38.jpg';
import Img42 from '../../assets/services/Img 42.jpg';
import Img52 from '../../assets/services/Img 52.jpg';

const page = () => {
  return (
    <div className="">
      <section className="bg-[#D4AF37] pt-36 md:pt-52 pb-20 md:pb-40 px-10 md:px-20 ">
        <h1 className="text-5xl font-bold mb-4 leading-[50px]">
          Expert Care,
          <br /> Visible Results.
        </h1>
        <p className="md:w-2/3">
          Experience personalized treatments designed to enhance your natural
          beauty. Our expert care helps you achieve radiant, healthy skin with
          confidence.
        </p>
      </section>

      <div className="py-12">
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit px-4 py-1 rounded-md border border-yellow-500 mt-8'
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
                'block w-fit mx-auto md:mx-0 px-4 py-1 rounded-md border border-yellow-500 mt-8'
              }
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
