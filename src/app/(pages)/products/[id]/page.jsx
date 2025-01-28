'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState(null);
  const productId = pathname.split('/')[2];
  console.log('productId: ', productId);

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data returned: ', data);
        //   setIsProductsReady(true);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, []);

  const selectedProduct = products?.find((product) => product.id === productId);
  //   console.log('selectedProduct: ', selectedProduct);

  const relatedProducts = products?.filter(
    (product) =>
      product.category === selectedProduct.category &&
      product.id !== selectedProduct.id,
  );

  console.log('relatedProducts: ', relatedProducts);

  return <div className="pt-32">Product Details page</div>;
};

export default page;
