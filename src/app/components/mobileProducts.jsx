import React, { useState, useEffect } from 'react';
import aesthetic1 from '../assets/products/aesthetic1.png';
import aesthetic2 from '../assets/products/aesthetic2.png';
import aesthetic3 from '../assets/products/aesthetic3.png';
import aesthetic4 from '../assets/products/aesthetic4.png';
import aesthetic5 from '../assets/products/aesthetic5.png';
import aesthetic6 from '../assets/products/aesthetic6.png';
import aesthetic7 from '../assets/products/aesthetic7.png';
import aesthetic8 from '../assets/products/aesthetic8.png';
import aesthetic9 from '../assets/products/aesthetic9.jpg';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Hydrating Facial Serum',
    image: aesthetic1,
    price: '$29.99',
  },
  {
    id: 2,
    name: 'Anti-Aging Cream',
    image: aesthetic2,
    price: '$49.99',
  },
  {
    id: 3,
    name: 'Brightening Face Mask',
    image: aesthetic3,
    price: '$19.99',
  },
  {
    id: 4,
    name: 'Soothing Eye Gel',
    image: aesthetic4,
    price: '$24.99',
  },
  {
    id: 5,
    name: 'Exfoliating Scrub',
    image: aesthetic5,
    price: '$14.99',
  },
  {
    id: 6,
    name: 'Moisturizing Day Cream',
    image: aesthetic6,
    price: '$34.99',
  },
  {
    id: 7,
    name: 'Dettol Soap',
    image: aesthetic7,
    price: '$34.99',
  },
  {
    id: 8,
    name: 'Moisturizing Lotion',
    image: aesthetic8,
    price: '$34.99',
  },
  {
    id: 9,
    name: 'Mosmetic Pack',
    image: aesthetic9,
    price: '$25',
  },
];

const MobileProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(products.length / 1); // 3 products per slide

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
                .slice(slideIndex * 1, slideIndex * 1 + 1)
                .map((product) => (
                  <div
                    key={product.id}
                    className="w-full bg-white shadow-md rounded-lg p-4 m-2 flex flex-col items-center transition-all duration-100 hover:scale-105"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-bold">{product.price}</p>
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
            className={`h-2 w-2 transition-transform duration-100  bg-[#D4AF37] mx-1 rounded-full ${
              currentIndex === idx ? 'scale-[250%]' : ''
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MobileProducts;
