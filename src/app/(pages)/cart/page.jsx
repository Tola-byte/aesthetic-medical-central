'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { PaystackButton } from 'react-paystack';
import EmptyCart from '@/app/components/EmptyCart';

import {
  increaseCount,
  decreaseCount,
  removeProduct,
} from '@/app/features/productSlice';

const page = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
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

  const componentProps = {
    email: email,
    amount: totalPrice * 100, // Convert to kobo
    publicKey: 'pk_test_d4092ce3db5a82a4b470336b1bff4f34cbb49ae2',
    text: 'Pay Now',
    onSuccess: (response) => {
      alert(`Payment successful! Reference: ${response.reference}`);
      // Optionally call your backend to verify the payment
    },
    onClose: () => alert('Transaction was not completed, window closed.'),
  };
  return (
    <div className="pt-24 pb-8 max-w-[80%] mx-auto">
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <p className="mb-2 font-semibold text-lg pl-4">Cart Items</p>
          {products?.map((product) => (
            <div
              className=" p-2 border rounded-md mb-4 flex gap-8"
              key={product.name}
            >
              <Image
                src={product.image}
                alt={`${product.name} image`}
                className="w-40 h-40 rounded-lg object-cover"
                width={200}
                height={200}
              />
              <div className="flex-1 py-4 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-white bg-[#D4AF37] text-[10px] w-fit px-2 py-1 rounded-md mt-1 mb-8">
                      &#8358;{' '}
                      {new Intl.NumberFormat('en-US').format(product.price)}
                    </p>
                  </div>
                  <button className="block md:hidden w-fit px-4 mx-auto text-center text-sm border border-[#D4AF37] text-[#D4AF37] hover:bg-yellow-50  py-1 rounded-sm">
                    <p onClick={() => dispatch(removeProduct(product))}>
                      Remove
                    </p>
                  </button>
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
                  <button className="hidden md:block w-fit px-4 mx-auto text-center text-sm border border-[#D4AF37] text-[#D4AF37] hover:bg-yellow-50  py-1 rounded-sm">
                    <p onClick={() => dispatch(removeProduct(product))}>
                      Remove
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
        </div>
      )}

      {/* </div>
      ))} */}

      <div className="w-1/4 ml-auto flex justify-between px-4 mt-4 border rounded-md mb-4 ">
        <div>
          <p className="text-bold text-xl font-mono">Total: </p>
        </div>
        <div>
          <p className="text-bold text-xl font-mono">
            &#8358; {new Intl.NumberFormat('en-US').format(totalPrice)}
          </p>
        </div>
      </div>

      <button className="m-auto" onClick={() => setOpen(true)}>
        Proceed to payment
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-4">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Enter Your Email
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                We need your email to proceed with the payment.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end px-6 py-3 border-t border-gray-200">
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              {/* <button
                onClick={() => {}}
                disabled={!email} // Disable if email is empty
                className={`px-4 py-2 rounded-md text-white ${email ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
                  }`}
              >
                Submit
              </button> */}

              <PaystackButton disabled={!email} {...componentProps} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
