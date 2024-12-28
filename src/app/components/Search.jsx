import React from 'react';
import { allProducts } from './productsList';

const Search = ({ setProducts }) => {
  const handleInputChange = (e) => {
    const searchText = e.target.value;
    const filteredProducts = allProducts.filter((product) =>
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
