import React from 'react';
import Image from 'next/image';
import banner from '../../assets/about/Img 25.jpg';
import Img5 from '../../assets/about/Img 5.jpg';

const page = () => {
  return (
    <div className="relative">
      <div
        className="bg-gray-200"
        style={{ clipPath: 'polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)' }}
      >
        <Image
          src={banner}
          alt="banner"
          priority="true"
          style={{
            clipPath: 'polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)',
          }}
          className="w-full h-[50vh] object-cover"
        />
      </div>

      <div className="bg-white shadow-md rounded-md min-h-[25vh] py-12 flex items-center w-[95%] md:w-[85%] mx-auto relative -top-40 z-10 px-4 md:px-12 -mb-12">
        <div className="">
          <h1 className="text-4xl font-semibold  mb-6 text-center">
            Welcome to your transformation
          </h1>

          <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-8 md:gap-12 px-2 pt-6 pb-10 md:px-8">
            <p className="text-[14px] leading-loose">
              Beauty is about feeling confident in your own skin and celebrating
              what makes you unique. Dr. Isime embodies this philosophy,
              combining her expertise in aesthetics with a personalized approach
              to help clients achieve their most radiant selves. With a
              background in advanced skincare and a passion for transformative
              results, Dr. Isime brings a blend of science, artistry, and
              empathy to every consultation and treatment. She takes the time to
              understand your individual needs, crafting tailored solutions that
              not only enhance your natural beauty but also inspire a renewed
              sense of self-assurance. <br /> <br /> Dr. Isime’s approach goes
              beyond the surface. By integrating cutting-edge techniques with a
              deep understanding of her clients’ goals, she ensures that each
              treatment is as unique as the individual receiving it. Her
              commitment to excellence means that every client experiences care
              that is professional, innovative, and designed to uplift both
              appearance and confidence. Whether you’re seeking to rejuvenate,
              refine, or rediscover your natural beauty, Dr. Isime is here to
              guide you every step of the way. Together, you can embark on a
              transformative journey toward timeless beauty and enduring
              confidence.
            </p>
            <Image
              src={Img5}
              alt="Dr Isime"
              className="w-full h-[23rem] md:h-[34rem] object-cover object-bottom rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
