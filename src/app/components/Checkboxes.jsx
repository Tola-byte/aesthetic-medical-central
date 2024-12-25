'use client';
import React, { useState, useEffect } from 'react';
import { allProducts } from './productsList';

const Checkboxes = ({ products, setProducts }) => {
  const [filteredProducts, setfilteredProducts] = useState([]);

  const [categories, setCategories] = useState([
    { label: 'cream', checkedStatus: false },
    { label: 'serum', checkedStatus: false },
    { label: 'cleanser', checkedStatus: false },
    { label: 'mask', checkedStatus: false },
  ]);

  const toggleCheckedStatus = (category) => {
    const categoryIndex = categories.findIndex(
      (cat) => cat.label === category.label,
    );

    const newCategories = [...categories];

    newCategories.splice(categoryIndex, 1, {
      label: category.label,
      checkedStatus: !category.checkedStatus,
    });

    setCategories(newCategories);
  };

  useEffect(() => {
    const checkedCategories = categories.filter(
      (cat) => cat.checkedStatus === true,
    );

    const labels = [];
    checkedCategories.forEach((cat) => {
      labels.push(cat.label);
    });

    const requiredProducts = allProducts.filter((product) =>
      labels.includes(product.category),
    );
    console.log(requiredProducts);
    if (labels.length !== 0) {
      setProducts([...requiredProducts]);
    } else {
      setProducts([...allProducts]);
    }
  }, categories);

  return (
    <div className="flex flex-col gap-2">
      {categories.length !== 0
        ? categories.map((category, index) => (
            <label
              className="flex items-center cursor-pointer"
              key={category.label}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={category.checkedStatus}
                  onChange={() => toggleCheckedStatus(category)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded-md border-2 ${
                    category.checkedStatus
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-white border-gray-300'
                  } transition-colors duration-300`}
                ></div>
                {category.checkedStatus && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-6 h-6 text-white pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 text-gray-700">
                {category.label.charAt(0).toUpperCase() +
                  category.label.slice(1)}
              </span>
            </label>
          ))
        : categories.map((category, index) => (
            <label
              className="flex items-center cursor-pointer"
              key={category.label}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={category.checkedStatus}
                  onChange={() => toggleCheckedStatus(category)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded-md border-2 ${
                    category.checkedStatus
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-white border-gray-300'
                  } transition-colors duration-300`}
                ></div>
                {category.checkedStatus && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-6 h-6 text-white pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 text-gray-700">
                {category.label.charAt(0).toUpperCase() +
                  category.label.slice(1)}
              </span>
            </label>
          ))}
    </div>
  );
};

export default Checkboxes;
