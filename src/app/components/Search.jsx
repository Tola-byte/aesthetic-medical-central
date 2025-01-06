'use client';
import React, { useState, useEffect } from 'react';

const Search = ({ setProducts }) => {
  const [allProducts, setAllProducts] = useState(null);

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

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    const filteredProducts = allProducts?.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (filteredProducts.length === 0) {
      return;
    }
    setProducts([...filteredProducts]);
  };

  return (
    <div className="w-full md:w-2/5">
      <input
        type="text"
        className="w-full pl-6 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-blue-300 focus:outline-none focus:border-blue-500"
        placeholder="Search Products..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
