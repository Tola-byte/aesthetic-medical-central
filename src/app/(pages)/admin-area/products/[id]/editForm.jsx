'use client';
import React, { useState } from 'react';

const EditForm = () => {
  const editProduct = (e) => {
    e.preventDefault();
    const productData = {
      name: 'Dettol',
      price: 2389,
      category: 'soap',
      image: 'https://google.com',
    };

    // fetch('https://amc-server.vercel.app/add-products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(productData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data returned: ', data);
    //     router.push('/admin-area/products');
    //   })
    //   .catch((err) => {
    //     console.log('Something went wrong: ', err);
    //   });
  };
  return (
    <div className="bg-white w-[70%] mx-auto py-12 px-12">
      <h1 className="text-xl text-center font-semibold mb-6">Edit Product</h1>
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="name" className="w-[10rem]">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="price" className="w-[10rem]">
          Price
        </label>
        <input
          type="text"
          placeholder="Price"
          className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="category" className="w-[10rem]">
          Product Category
        </label>
        <input
          type="text"
          placeholder="category"
          className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
        />
      </div>
      <button
        className="block w-fit mx-auto px-8 py-1 rounded-sm bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
        onClick={editProduct}
      >
        Add
      </button>
    </div>
  );
};

export default EditForm;
