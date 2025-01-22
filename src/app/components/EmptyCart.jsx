import React from 'react';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col gap-4 justify-center items-center text-center">
      <h1 className="font-semibold text-xl "> Cart is Empty</h1>
      <p>
        Go to{' '}
        <Link href={'/products'} className="underline">
          shop
        </Link>
      </p>
    </div>
  );
};

export default EmptyCart;
