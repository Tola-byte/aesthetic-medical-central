'use client';
import React from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import {
  increaseCount,
  decreaseCount,
  removeProduct,
} from '@/app/features/productSlice';

const page = () => {
  const products = useSelector((store) => store.productSlice.products);
  const calculateProductPrice = (product) => {
    return product.price * product.count;
  };
  const dispatch = useDispatch();

  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.count * product.price;
  });

  const increaseProductCount = (product) => {
    dispatch(increaseCount(product));
  };

  const decreaseProductCount = (product) => {
    if (product.count === 1) {
      dispatch(removeProduct(product));
    } else {
      dispatch(decreaseCount(product));
    }
  };

  return (
    <div className="pt-24 pb-8 max-w-[80%] mx-auto">
      <div>Cart Items</div>
      {products?.map((product) => (
        <div
          className=" p-2 px-6 border rounded-md mb-4 flex gap-8"
          key={product.name}
        >
          <Image
            src={product.image}
            alt={`${product.name} image`}
            className="w-60 h-60 object-cover"
          />
          <div className="flex-1 py-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-white bg-[#D4AF37] text-[10px] w-fit px-2 py-1 rounded-md mt-1 mb-8">
                &#8358; {new Intl.NumberFormat('en-US').format(product.price)}
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <p
                  className="bg-[#D4AF37] w-6 h-6 flex items-center justify-center rounded-full"
                  onClick={() => increaseProductCount(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </p>
                <p className="px-4 font-semibold">{product.count}</p>
                <p
                  className="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full"
                  onClick={() => decreaseProductCount(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </p>
              </div>
              <button className="block w-fit px-4 mx-auto text-center text-sm border border-[#D4AF37] text-[#D4AF37] hover:bg-yellow-50  py-1 rounded-sm">
                <p onClick={() => dispatch(removeProduct(product))}>
                  Remove from Cart
                </p>
              </button>
              <p className="px-2 py-1 bg-[#D4AF37] rounded-md text-white">
                &#8358;{' '}
                {new Intl.NumberFormat('en-US').format(
                  calculateProductPrice(product),
                )}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="w-full flex justify-end items-center gap-[6px] mt-4">
        <p>Total: </p>
        <p className="text-white bg-[#D4AF37] w-fit px-2 py-1 rounded-md">
          &#8358; {new Intl.NumberFormat('en-US').format(totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default page;
