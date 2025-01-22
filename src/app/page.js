import Image from 'next/image';
import React from 'react';
import HomeComponent from './components/Home';
export default function Home() {

  return (
    <div className="min-h-screen pt-20 gap-16 font-[family-name:var(--font-geist-sans)]  bg-[#D4AF37] text-black">
      <HomeComponent />
    </div>
  );
}
