'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { allProducts } from '@/app/components/productsList';
import Checkboxes from '@/app/components/Checkboxes';
import Sort from '@/app/components/Sort';

const page = () => {
  console.log(allProducts.length);
  const [products, setProducts] = useState([...allProducts]);
  return (
    <div className="pt-24 flex px-8">
      <div className="w-1/5 ">
        <Checkboxes products={products} setProducts={setProducts} />
      </div>

      <div className="flex-1">
        <div className="w-full flex justify-between items-start">
          <h1 className="text-xl font-semibold flex-1">Explore our products</h1>
          <Sort setProducts={setProducts} products={products} />
        </div>

        <div className="flex-1 py-6 pb-12 flex flex-wrap gap-4">
          {products?.map((product) => (
            <div
              className="w-[22%] p-2 px-6 shadow-md hover:shadow-xl hover:scale-110 transition-all flex-grow"
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
