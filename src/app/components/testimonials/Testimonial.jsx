import React, { useState } from 'react';
import lady2 from '../../assets/lady2.jpg';
import profile3 from '../../assets/profile-3.jpg';
import profile12 from '../../assets/profile-12.jpg';
import story4 from '../../assets/story-4.jpg';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    image: lady2,
    comment:
      'This product completely transformed my skincare routine. I highly recommend it!',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    image: profile3,
    comment:
      'Exceptional service and amazing results! My skin has never felt better.',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    image: profile12,
    comment: 'I saw a visible difference within weeks. Absolutely worth it!',
  },
  {
    id: 4,
    name: 'James Smith',
    image: story4,
    comment:
      'The consultation was incredibly insightful. My skin feels healthier than ever.',
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
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
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
