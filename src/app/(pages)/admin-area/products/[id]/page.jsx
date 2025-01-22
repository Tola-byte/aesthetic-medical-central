'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/app/components/Loading';
import SignOut from '@/app/components/SignOut';

const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isImageUploadedToCloud, setIsImageUploadedToCloud] = useState(false);

  const productId = pathname.split('/')[3];

  const currentProduct = allProducts?.filter(
    (product) => product.id === productId,
  )[0];

  const [name, setName] = useState(currentProduct?.name);
  const [price, setPrice] = useState(currentProduct?.price);
  const [category, setCategory] = useState(currentProduct?.category);
  const [image, setImage] = useState(currentProduct?.image);
  const [imageUrl, setImageUrl] = useState('');

  const generateUrlForImage = async () => {
    setIsImageUploading(true);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'amc-asset'); // Replace with your Cloudinary upload preset

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

    const cloudinaryImageUrl = data.secure_url;
    console.log(cloudinaryImageUrl);
    setImageUrl(cloudinaryImageUrl);
    setIsImageUploading(false);
    setIsImageUploadedToCloud(true);
  };

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);

        setAllProducts(data.products);
        if (isImageUploaded) {
          generateUrlForImage();
        }
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, [isImageUploaded]);

  console.log(currentProduct);

  const editProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const productData = {
        name: name || currentProduct.name,
        price: price || currentProduct.price,
        category: category || currentProduct.category,
        image: imageUrl || currentProduct.image,
      };

      console.log('productData: ', productData);

      const putRes = await fetch(
        `https://amc-server.vercel.app/edit-products/${productId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        },
      );
      const putData = await putRes.json();

      console.log('PUT data returned: ', putData);

      router.push('/admin-area/products');
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  return (
    <div className="pt-28 px-12 bg-gray-300 pb-12">
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

          {/* Image Uploader */}
          <div
            className={`flex gap-4 items-center ${isImageUploading ? 'mb-2' : 'mb-6'}`}
          >
            <label htmlFor="file-upload" className="w-[13rem]">
              Product Image
            </label>
            <div className="flex w-full gap-4 items-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setIsImageUploaded(true);
                }}
              />
              <label
                htmlFor="file-upload"
                className="flex-1 px-2 py-2 bg-gray-300 text-gray-400 rounded-lg cursor-pointer"
              >
                {image ? image.name : 'Choose Image'}
              </label>
            </div>
          </div>
          {isImageUploading && (
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
              <span>Image is uploading</span>
              <div className="flex space-x-1">
                <span className="animate-[bounce_1.4s_ease-in-out_infinite]">
                  .
                </span>
                <span className="animate-[bounce_1.4s_ease-in-out_infinite_0.2s]">
                  .
                </span>
                <span className="animate-[bounce_1.4s_ease-in-out_infinite_0.4s]">
                  .
                </span>
              </div>
            </div>
          )}

          {isImageUploadedToCloud && (
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
              <p>Image Uploaded!</p>
            </div>
          )}

          {/* End of image uploader */}
          <button
            className="cursor-pointer  mx-auto w-40 h-8 flex justify-center items-center rounded-sm bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold"
            onClick={editProduct}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-2 w-2">
                <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            ) : (
              <p> Save</p>
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
