'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SignOut from '@/app/components/SignOut';

const page = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  // const [uploading, setUploading] = useState(false);

  const handleImageUpload = async () => {
    if (!image) {
      alert('Please select an image!');
      return null;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'amc-asset'); // Replace with your Cloudinary upload preset
    // formData.append('transformation', 'w_500,h_450,c_fill,q_auto');

    try {
      // setUploading(true);
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/druryt8ny/image/upload',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      // setUploading(false);
      console.log(data.secure_url);
      return data.secure_url; // Get the image URL from Cloudinary
    } catch (error) {
      console.error('Error uploading image:', error);
      // setUploading(false);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = await handleImageUpload();
    if (!imageUrl) return;

    const productData = {
      name,
      price: parseFloat(price),
      image: imageUrl,
    };

    console.log(productData);
    //  try {
    //    const response = await fetch("/api/products", {
    //      method: "POST",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify(productData),
    //    });

    //    if (!response.ok) {
    //      throw new Error("Failed to upload product");
    //    }

    //    alert("Product uploaded successfully!");
    //    setName("");
    //    setPrice("");
    //    setImage(null);
    //  } catch (error) {
    //    console.error("Error saving product:", error);
    //    alert("Failed to upload product. Please try again.");
    //  }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageUrl = await handleImageUpload();
    const productData = {
      name,
      price,
      category,
      image: imageUrl,
    };

    console.log(productData);

    fetch('https://amc-server.vercel.app/add-products', {
      method: 'POST',
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
      <div className="flex justify-between items-center">
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

        <SignOut />
      </div>

      <div className="bg-white w-[70%] mx-auto py-12 px-12">
        <h1 className="text-xl text-center font-semibold mb-6">
          Add New Product
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="name" className="w-[12rem]">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="price" className="w-[12rem]">
            Price
          </label>
          <input
            type="text"
            placeholder="Price"
            className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="category" className="w-[12rem]">
            Product Category
          </label>
          <input
            type="text"
            placeholder="category"
            className="focus:outline-none px-2 py-2 rounded-md flex-1 bg-gray-300"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex gap-4 items-center mb-6">
          <label htmlFor="file-upload" className="w-[16rem]">
            Product Image
          </label>
          <div className="flex w-full gap-4 items-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              // onChange={handleFileChange}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label
              htmlFor="file-upload"
              className="flex-1 px-2 py-2 bg-gray-300 text-gray-400 rounded-lg cursor-pointer hover:bg-gray-400 transition duration-200"
            >
              {image ? image.name : 'Choose Image'}
            </label>
          </div>
        </div>

        <button
          className="cursor-pointer  mx-auto w-40 h-8 flex justify-center items-center rounded-sm bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
          onClick={addProduct}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-2 w-2">
              <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <p> Add</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default page;
