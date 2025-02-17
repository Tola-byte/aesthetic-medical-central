import React, { useState } from 'react';

const ProductCategory = ({ setCategory, category  }) => {
//   const [category, setcategory] = useState('');

  const handleChange = (event) => {
    const productCat = event.target.value;
    setCategory(productCat)
    console.log(category)
  };

  return (
    <div className="w-full">
      <label
        htmlFor="styledSelect"
        className="block w-full text-sm font-medium text-gray-700 mb-2"
      >
        {/* Product Category */}
      </label>
      <select
        id="styledSelect"
        value={category}
        onChange={handleChange}
        className="block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
      >
        <option value="" className="block w-full py-2">
          {category ? category : 'Select Category'}
        </option>
        <option value="Moisturizer" className="block w-full py-2">
          Moisturizer
        </option>
        <option value="Cleanser" className="block w-full py-2">
          Cleanser
        </option>
        <option value="Serum" className="block w-full py-2">
          Serum
        </option>
        <option value="Treatment" className="block w-full py-2">
         Treatment
        </option>
        <option value="Masks" className="block w-full py-2">
         Masks
        </option>
        <option value="Toner" className="block w-full py-2">
         Toner
        </option>
      </select>
    </div>
  );
};

export default ProductCategory;
