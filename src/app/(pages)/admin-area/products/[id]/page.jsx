'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/app/components/Loading';
const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const productId = pathname.split('/')[3];

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);

        setAllProducts(data.products);
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, []);

  const currentProduct = allProducts?.filter(
    (product) => product.id === productId,
  )[0];
  console.log(currentProduct);

  const [name, setName] = useState(currentProduct?.name);
  const [price, setPrice] = useState(currentProduct?.price);
  const [category, setCategory] = useState(currentProduct?.category);

  const editProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const productData = {
      name: name || currentProduct.name,
      price: price || currentProduct.price,
      category: category || currentProduct.category,
      image: 'https://google.com',
    };

    console.log('productData: ', productData);

    fetch(`https://amc-server.vercel.app/edit-products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);

        router.push('/admin-area/products');
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  };

  return (
    <div className="pt-24 px-12 bg-gray-300 pb-12">
      <Link href={'/admin-area/products'} className="block w-fit mb-8">
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
      </Link>

      {allProducts ? (
        <div className="bg-white w-[70%] mx-auto py-12 px-12">
          <h1 className="text-xl text-center font-semibold mb-6">
            Edit Product
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="name" className="w-[10rem]">
              Product Name
            </label>
            <input
              type="text"
              placeholder={currentProduct?.name}
              className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="price" className="w-[10rem]">
              Price
            </label>
            <input
              type="text"
              placeholder={currentProduct?.price}
              className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="category" className="w-[10rem]">
              Product Category
            </label>
            <input
              type="text"
              placeholder={currentProduct?.category}
              className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button
            className="cursor-pointer  mx-auto w-40 h-8 flex justify-center items-center rounded-sm bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            onClick={editProduct}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-2 w-2">
                <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            ) : (
              <p> Edit</p>
            )}
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
