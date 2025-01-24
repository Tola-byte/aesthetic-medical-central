import React, { useState } from 'react';
import lady2 from '../../assets/lady2.jpg';
import profile3 from '../../assets/profile-3.jpg';
import profile6 from '../../assets/profile-6.jpg';
import profile12 from '../../assets/profile-12.jpg';
import profile20 from '../../assets/profile-20.jpg';
import feed4 from '../../assets/feed-4.jpg';
import spouse from '../../assets/taiwo.jpg';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'J.A',
    image: lady2,
    comment: 'Thank you for showing genuine concern',
  },
  {
    id: 2,
    name: 'D.T',
    image: feed4,
    comment:
      'Good evening Doctor. How are you? I want to thank you for being so pleasant and good to us yesterday! We are happy to have met with you. God bless you and yours. Amen thanks.',
  },
  {
    id: 3,
    name: 'K.O',
    image: profile12,
    comment:
      'Dr Isima. Good afternoon. I got those things and... they are working like magic. Thanks go much!',
  },
  {
    id: 4,
    name: "O.S (CLIENT'S GRATEFUL SPOUSE)",
    image: spouse,
    comment: 'Her lips are much juicier. I highly recommend.',
  },
  {
    id: 5,
    name: 'M.S',
    image: profile6,
    comment:
      "Reaction I've battling with by myself for a whole month!!! Left after 2 days of using what you prescribed. Thanks Dr. Isima. My skin is looking better and the colour is getting back. ",
  },
  {
    id: 6,
    name: 'A.P.',
    image: profile3,
    comment:
      "Everyone is saying my skin is glowing ooo. My face is looking really nice. And I'm like it's Dr. Isima o.",
  },
  {
    id: 7,
    name: 'T.O',
    image: profile20,
    comment:
      'My skin doctor, thank you so much! <br/> Been using your recommended products in the last 2 weeks and my face feels fresher.',
  },
];

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4">
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full p-6 flex flex-col items-center justify-center text-center"
            >
              {/* <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              /> */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.comment}"
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-[#D4AF37] rounded-full"
      >
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
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-[#D4AF37]  rounded-full"
      >
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
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialComponent;
