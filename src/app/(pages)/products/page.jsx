'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { allProducts } from '@/app/components/productsList';
import Checkboxes from '@/app/components/Checkboxes';

const page = () => {
  console.log(allProducts.length);
  const [products, setProducts] = useState([...allProducts]);
  return (
    <div className="pt-24">
      <h1 className="text-xl font-semibold text-center">
        Explore our products
      </h1>
      <div className="flex justify-between px-6 ">
        <div className="w-1/5">
          <Checkboxes products={products} setProducts={setProducts} />
        </div>

        <div className="flex-1 py-6 pb-12 grid grid-cols-4 gap-6 ">
          {products?.map((product) => (
            <div
              className="w-fit p-2 shadow-md hover:shadow-xl hover:scale-110 transition-all"
              key={product.name}
            >
              <Image
                src={product.image}
                alt={`${product.name} image`}
                className="w-40 h-32 object-cover"
              />
              <div className=" pt-2">
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-white bg-yellow-500 text-[10px] w-fit px-2 py-1 rounded-md mb-6">
                  #{product.price}
                </p>
                <button className="block w-24 mx-auto text-center text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
