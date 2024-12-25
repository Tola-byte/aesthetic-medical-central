import React, { useState } from 'react';

const Sort = ({ setProducts, products }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const sortOption = JSON.parse(event.target.value);
    if (sortOption.field === 'label') {
      if (sortOption.mode === 'AZ') {
        const sortedProducts = products.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setProducts([...sortedProducts]);
      } else {
        const sortedProducts = products.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        setProducts([...sortedProducts]);
      }
    }

    if (sortOption.field === 'price') {
      if (sortOption.mode === 'LH') {
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts([...sortedProducts]);
      } else {
        const sortedProducts = products.sort((a, b) => b.price - a.price);
        setProducts([...sortedProducts]);
      }
    }
  };

  return (
    <div className="w-64 mx-auto ">
      <label
        htmlFor="styledSelect"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Sort
      </label>
      <select
        id="styledSelect"
        value={selectedOption}
        onChange={handleChange}
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value={JSON.stringify({ field: 'label', mode: 'AZ' })}>
          A to Z
        </option>
        <option value={JSON.stringify({ field: 'label', mode: 'ZA' })}>
          Z to A
        </option>
        <option value={JSON.stringify({ field: 'price', mode: 'LH' })}>
          Low to High
        </option>
        <option value={JSON.stringify({ field: 'price', mode: 'HL' })}>
          High to Low
        </option>
      </select>
    </div>
  );
};

export default Sort;
