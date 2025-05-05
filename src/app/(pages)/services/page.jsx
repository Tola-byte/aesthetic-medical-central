'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img12 from '../../assets/services/Img 12.jpg';
import Img28 from '../../assets/services/Img 28.png';

import Img21 from '../../assets/Img 21.jpg';
import Img32 from '../../assets/Img 32.jpg';
import Img42 from '../../assets/services/Img 42.jpg';
import Img52 from '../../assets/services/Img 52.jpg';
import Img16 from '../../assets/Img 16.jpg';
import { ServicesData } from '@/app/config/config';

import Items from '@/app/components/FAQ/Item';
import Accordion from '@/app/components/FAQ/Accordion';
import NestedDropdown from '@/app/components/FAQ/DoubleNesting';

const page = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 10000,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   cssEase: 'linear',
  //   pauseOnHover: false,
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 25000,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fff]">
      <section className="bg-services bg-cover bg-center pt-44 md:pt-56 pb-20 md:pb-40 px-10 md:px-20 ">
        <h1 className="text-5xl text-[#d4af37] text-center font-bold mb-4 leading-[50px]">
          Services
        </h1>
      </section>

      <div className="bg-white w-full flex flex-col md:justify-center p-2 md:p-20">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:py-20 md:px-10">
            <h1 className="font-extrabold text-2xl text-center md:text-4xl text-[#D4AF37]">
              NEED A GLOW-UP?
            </h1>
            <div className="p-4 mt-4">
              <Link
                href={
                  'https://www.fresha.com/a/aesthetic-medicine-central-lagos-chronicare-143-gbagada-oworonshoki-expressway-q860ch6w/all-offer?menu=true&pId=615796'
                }
              >
                <button className="bg-[#d4af37] flex justify-center m-auto text-white rounded-lg w-3/4 p-2 hover:bg-white border-2 border-[#d4af37] hover:text-[#d4af37]">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>

          <NestedDropdown />
        </div>
      </div>

      <Slider {...settings} className=" flex gap-4">
        <div className="p-2">
          <Image
            src={Img12}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 1"
          />
        </div>
        <div className="p-2">
          <Image
            src={Img28}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 2"
          />
        </div>

        <div className="p-2">
          <Image
            src={Img16}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="p-2">
          <Image
            src={Img42}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="p-2">
          <Image
            src={Img52}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="p-2">
          <Image
            src={Img21}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="p-2">
          <Image
            src={Img32}
            className="w-[30vh] h-[40vh] md:h-[40vh] md:w-[40vh] rounded-lg object-cover"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default page;
