'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { allProducts } from '@/app/components/productsList';
import Checkboxes from '@/app/components/Checkboxes';
import Sort from '@/app/components/Sort';
import Search from '@/app/components/Search';
import { addProduct, removeProduct } from '@/app/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const [products, setProducts] = useState([...allProducts]);
  const [runEffect, setRunEffect] = useState(false);
  const dispatch = useDispatch();
  const addedProducts = useSelector((store) => store.productSlice.products);

  const addToCart = (product) => {
    product.count = 1;
    console.log(product);
    dispatch(addProduct(product));
    setRunEffect((runEffect) => !runEffect);
  };

  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
    setRunEffect((runEffect) => !runEffect);
  };

  return (
    <div className="flex px-8">
      <div
        className="w-[15%] pt-44"
        style={{ boxShadow: '6px 0 10px -2px rgba(0, 0, 0, 0.1)' }}
      >
        <Checkboxes products={products} setProducts={setProducts} />
      </div>

      <div className="flex-1 pt-24 pl-12">
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold">Explore our products</h1>

          <Search products={products} setProducts={setProducts} />
          <Sort setProducts={setProducts} products={products} />
        </div>

        <div className="flex-1 py-6 pb-12 flex flex-wrap gap-4">
          {products?.map((product) => (
            <div
              className="w-[20%] p-2 px-6 shadow-md hover:shadow-xl hover:scale-110 transition-all flex-grow relative"
              key={product.name}
            >
              <Image
                src={product.image}
                alt={`${product.name} image`}
                className="w-40 h-32 object-cover"
              />
              <div className="pt-4">
                <div className="flex justify-between items-center mb-20">
                  <h2 className="font-semibold">{product.name}</h2>

                  <p className="text-[12px] px-2 rounded-md whitespace-nowrap">
                    &#8358;{' '}
                    {new Intl.NumberFormat('en-US').format(product.price)}
                  </p>
                </div>

                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 block min-w-fit px-4 mx-auto text-center text-sm border border-[#D4AF37] text-[#D4AF37] hover:bg-yellow-50  py-1 rounded-sm">
                  {addedProducts.includes(product) ? (
                    <p
                      className="w-32 text-center"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove from Cart
                    </p>
                  ) : (
                    <p onClick={() => addToCart(product)}>Add to Cart</p>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
