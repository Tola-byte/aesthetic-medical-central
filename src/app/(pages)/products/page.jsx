'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Checkboxes from '@/app/components/Checkboxes';
import Sort from '@/app/components/Sort';
import Search from '@/app/components/Search';
import { addProduct, removeProduct } from '@/app/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

import banner2 from '../../assets/products/banner2.jpg';
import Loading from '@/app/components/Loading';

const page = () => {
  const [isProductsReady, setIsProductsReady] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);
        setIsProductsReady(true);
        setFetchedProducts(data.products);
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, []);

  const addedProducts = useSelector((store) => store.productSlice.products);

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };

  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="pt-32">
      <div className="p-10 md:p-16 w-[95%] md:w-[80%] mx-auto relative flex flex-col gap-8 md:flex-row justify-between items-center rounded-md bg-gray-100">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Unlock Your Glow</h1>
          <p className="text-sm">
            Browse our extensive range of aesthetic products, featuring the
            latest
            <br /> advancements in skincare.
          </p>
        </div>

        <Image
          src={banner2}
          priority="true"
          className="w-52 h-52 rounded-full object-cover object-left"
          alt="banner image"
        />
      </div>
      {isProductsReady ? (
        <div className="md:flex px-8 pt-24">
          <div
            className="md:w-[15%] md:h-[50vh] px-4 md:px-4 py-4"
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 className="font-semibold mb-8">Filter Products</h2>
            <Checkboxes setFetchedProducts={setFetchedProducts} />
          </div>

          <div className="flex-1 md:px-0 md:pl-12 ">
            <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center mt-8 md:mt-0 md:mb-8">
              <Search
                products={fetchedProducts}
                setProducts={setFetchedProducts}
              />
              <Sort
                products={fetchedProducts}
                setProducts={setFetchedProducts}
              />
            </div>

            <div className="flex-1 py-6 md:pb-12 grid md:grid-cols-4 gap-8">
              {fetchedProducts?.map((product) => (
                <div
                  className="p-2 px-6 bg-gray-100 rounded-lg hover:shadow-md hover:z-20 hover:scale-105 transition-all relative"
                  key={product.name}
                >
                  <div className="flex justify-between pt-2 pb-1">
                    <p className="text-gray-400 text-xs">AMC</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={'none'}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      onClick={() => toggleLike(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-sm my-1">{product.name}</p>
                  <div className="flex gap-[4px] mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  <Image
                    src={product.image}
                    alt={`${product.name} image`}
                    width={300}
                    height={150}
                    className="object-cover mb-16"
                  />

                  <div className="flex justify-between items-center absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
                    <p className="text-[14px] px-2 font-semibold">
                      &#8358;{' '}
                      {new Intl.NumberFormat('en-US').format(product.price)}
                    </p>
                    <button className="block w-fit px-2 py-1 text-sm bg-[#D4AF37] text-white rounded-md">
                      {addedProducts.some((p) => p.name === product.name) ? (
                        <p onClick={() => removeFromCart(product)}>Remove</p>
                      ) : (
                        <p onClick={() => addToCart(product)}>Cart</p>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
