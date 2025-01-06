import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HomeProducts } from '../config/config';

const products = HomeProducts;

const DesktopProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(products.length / 3); // 3 products per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex min-w-full justify-around">
              {products
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((product) => (
                  <div
                    key={product.name}
                    className="w-1/3 bg-white shadow-md rounded-lg p-4 m-2 flex flex-col items-center transition-all duration-100 hover:scale-105"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={160}
                      className="object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-bold">
                      {' '}
                      &#8358;{' '}
                      {new Intl.NumberFormat('en-US').format(product.price)}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="w-fit mx-auto gap-[1px] flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 transition-transform duration-100  bg-[#D4AF37] mx-1 rounded-full cursor-pointer ${
              currentIndex === idx ? 'scale-[250%]' : ''
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DesktopProducts;
