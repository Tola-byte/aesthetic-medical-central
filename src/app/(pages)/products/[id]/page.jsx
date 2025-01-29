'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  increaseCount,
  decreaseCount,
  addProduct,
  removeProduct,
} from '@/app/features/productSlice';
import Loading from '@/app/components/Loading';

const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState(null);
  const [isProductsReady, setIsProductsReady] = useState(false);
  const productId = pathname.split('/')[2];
  // console.log('productId: ', productId);

  const dispatch = useDispatch();

  let productToDisplay;
  const productsCarted = useSelector((store) => store.productSlice.products);

  useEffect(() => {
    fetch('https://amc-server.vercel.app/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('data returned: ', data);

        setProducts(data.products);
        setIsProductsReady(true);
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }, []);

  const selectedProduct = products?.find((product) => product.id === productId);

  const relatedProducts = products?.filter(
    (product) =>
      product.category === selectedProduct.category &&
      product.id !== selectedProduct.id,
  );

  const isProductAlreadyCarted = productsCarted.findIndex(
    (product) => product.id === productId,
  );
  if (isProductAlreadyCarted === -1) {
    productToDisplay = { ...selectedProduct, count: 0 };
  } else {
    productToDisplay = productsCarted.filter(
      (product) => product.id === productId,
    )[0];
  }

  const increaseProductCount = (prod) => {
    if (isProductAlreadyCarted === -1) {
      dispatch(addProduct(prod));
    } else {
      dispatch(increaseCount(prod));
    }
  };

  const decreaseProductCount = (product) => {
    if (product.count === 0) {
      return;
    } else if (product.count === 1) {
      removeFromCart(product);
    } else {
      dispatch(decreaseCount(product));
    }
  };

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };

  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
    productToDisplay = { ...selectedProduct, count: 0 };
  };

  // console.log(productToDisplay);

  const goToProductsDetails = (id) => {
    // console.log(id);
    router.push(`/products/${id}`);
  };

  return (
    <div className="pt-32 px-12 pb-8">
      {isProductsReady ? (
        <div>
          <div className="md:flex gap-8 justify-center">
            <Image
              src={productToDisplay.image}
              alt="product image"
              width={350}
              height={350}
              className="rounded-md object-cover"
            />{' '}
            <div>
              <h2 className="text-xl mb-24">Description</h2>
              <p className="mb-2 font-semibold text-lg text-gray-500">
                {productToDisplay.name}
              </p>
              <p className="mb-8">{productToDisplay.description}</p>
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-10">
                <p className="font-semibold text-xl">
                  {' '}
                  &#8358;{' '}
                  {new Intl.NumberFormat('en-US').format(
                    productToDisplay.price,
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <p
                    className="bg-[#D4AF37] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={() => increaseProductCount(productToDisplay)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </p>
                  <p className="px-4 font-semibold">{productToDisplay.count}</p>
                  <p
                    className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={() => decreaseProductCount(productToDisplay)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </p>
                </div>
                <button className="block w-24 px-2 py-1 text-sm bg-[#D4AF37] text-white rounded-md ">
                  {productsCarted.some(
                    (p) => p.name === productToDisplay.name,
                  ) ? (
                    <p onClick={(e) => removeFromCart(productToDisplay)}>
                      Remove
                    </p>
                  ) : (
                    <p onClick={(e) => addToCart(productToDisplay)}>Cart</p>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-semibold text-xl">Related Products</h2>
            <div className="flex-1 py-6 md:pb-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2">
              {relatedProducts.map((product) => (
                <div
                  className="cursor-pointer block p-2 px-6 bg-gray-100 rounded-lg hover:shadow-md hover:z-20 hover:scale-105 transition-all relative"
                  key={product.name}
                  onClick={() => goToProductsDetails(product.id)}
                >
                  <div className="flex justify-between pt-2 pb-1">
                    <p className="text-gray-400 text-xs">AMC</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={'none'}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      // onClick={() => toggleLike(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-sm my-1">{product.name}</p>
                  <div className="flex gap-[4px] mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  <Image
                    src={product.image}
                    alt={`${product.name} image`}
                    width={250}
                    height={50}
                    className="object-cover mb-4 mx-auto"
                  />

                  <p className="text-[14px] px-2 font-semibold">
                    &#8358;{' '}
                    {new Intl.NumberFormat('en-US').format(product.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
