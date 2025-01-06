'use client';
import React, { useState, useEffect } from 'react';

const Checkboxes = ({ setFetchedProducts }) => {
  const [products, setProducts] = useState(null);
  const [isProductsReady, setIsProductsReady] = useState(false);
  const [categories, setCategories] = useState([
    { label: 'cream', checkedStatus: false },
    { label: 'serum', checkedStatus: false },
    { label: 'solution', checkedStatus: false },
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

    if (newCategories.length === 0) {
      setCategories([
        { label: 'cream', checkedStatus: false },
        { label: 'serum', checkedStatus: false },
        { label: 'solution', checkedStatus: false },
      ]);
    } else {
      setCategories([...newCategories]);
    }
  };

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);
        setIsProductsReady(true);
        setProducts(data.products);
        const checkedCategories = categories.filter(
          (cat) => cat.checkedStatus === true,
        );

        const labels = [];
        checkedCategories.forEach((cat) => {
          labels.push(cat.label);
        });

        const requiredProducts = products?.filter((product) =>
          labels.includes(product.category),
        );
        console.log(requiredProducts);
        if (labels.length !== 0) {
          setFetchedProducts([...requiredProducts]);
        } else {
          setFetchedProducts([...products]);
        }
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, [categories]);

  return (
    <div className="grid grid-cols-2 md:flex flex-col gap-6 md:pr-6">
      {categories.map((category) => (
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
          <span className="ml-2 text-gray-700 text-sm">
            {category.label.charAt(0).toUpperCase() + category.label.slice(1)}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Checkboxes;
