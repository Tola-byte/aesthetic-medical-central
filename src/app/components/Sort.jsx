import React, { useState } from 'react';

const Sort = ({ setProducts, products }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const sortOption = JSON.parse(event.target.value);
    if (sortOption.field === 'label') {
      if (sortOption.mode === 'A to Z') {
        const sortedProducts = products.sort(
          (a, b) => a.name.localeCompare(b.name),
          setSelectedOption(sortOption.mode),
        );
        setProducts([...sortedProducts]);
      } else {
        const sortedProducts = products.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        setProducts([...sortedProducts]);
        setSelectedOption(sortOption.mode);
      }
    }

    if (sortOption.field === 'price') {
      if (sortOption.mode === 'Low to High') {
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts([...sortedProducts]);
        setSelectedOption(sortOption.mode);
      } else {
        const sortedProducts = products.sort((a, b) => b.price - a.price);
        setProducts([...sortedProducts]);
        setSelectedOption(sortOption.mode);
      }
    }
  };

  return (
    <div className="">
      <label
        htmlFor="styledSelect"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {/* Sort */}
      </label>
      <select
        id="styledSelect"
        value={selectedOption}
        onChange={handleChange}
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
      >
        <option value="" className="py-2">
          {selectedOption ? selectedOption : 'Sort'}
        </option>
        <option value={JSON.stringify({ field: 'label', mode: 'A to Z' })}>
          A to Z
        </option>
        <option value={JSON.stringify({ field: 'label', mode: 'Z to A' })}>
          Z to A
        </option>
        <option value={JSON.stringify({ field: 'price', mode: 'Low to High' })}>
          Low to High
        </option>
        <option value={JSON.stringify({ field: 'price', mode: 'High to Low' })}>
          High to Low
        </option>
      </select>
    </div>
  );
};

export default Sort;
