'use client';
import React, { useState } from 'react';

const ProductUpload = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async () => {
    if (!image) {
      alert('Please select an image!');
      return null;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'amc-asset'); // Replace with your Cloudinary upload preset

    try {
      setUploading(true);
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
      setUploading(false);
      console.log(data.secure_url);
      return data.secure_url; // Get the image URL from Cloudinary
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
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

  return (
    <div
      // style={{ maxWidth: '800px', margin: '0 auto' }}
      className="pt-24 w-[80%] mx-auto max-w-[700px]"
    >
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        {/* <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="outline-none bg-blue-500"
          />
        </div> */}

        <div className="flex gap-4 items-center space-y-4">
          <label
            htmlFor="file-upload"
            className="text-lg font-semibold text-gray-700"
          >
            Upload Product Image
          </label>
          <div className="flex gap-4 items-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              // onChange={handleFileChange}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200"
            >
              Choose a file
            </label>

            {image && (
              <div className="mt-4 text-sm text-gray-600">
                <span>{image.name}</span>
              </div>
            )}
          </div>
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
