'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import bannerImage from '../../../assets/login-banner.jpg';
import Image from 'next/image';
import { auth } from './firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInError, setLoggedInError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    setIsLoading(true);
    if (loggedInError) {
      setLoggedInError(false);
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      console.log(user);
      router.push('/admin-area/products');
    } catch (err) {
      setIsLoading(false);
      console.log('Error logging in');
      if (err.message === 'Firebase: Error (auth/invalid-credential).') {
        setLoggedInError(true);
      }
    }
  };

  return (
    <div className="w-full h-screen relative">
      <Image
        src={bannerImage}
        alt="banner"
        className="w-full h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="py-6 min-h-60 px-4 md:px-12 bg-white rounded-md shadow-md w-[95%] max-w-[40rem]">
          <h1 className="font-semibold text-center text-2xl py-6 mb-4">
            Login
          </h1>
          <div className="flex flex-col gap-4 items-center justify-stretch w-full flex-1">
            <div className="flex flex-1 gap-4 w-full">
              <label htmlFor="email" className="w-[6rem]">
                Email
              </label>
              <input
                type="text"
                placeholder="Email..."
                className="px-2 py-1 border border-gray-100 rounded-sm focus:outline-none flex-1 block w-full"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-full">
              <label htmlFor="password" className="w-[6rem]">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="px-2 py-1 border border-gray-100 rounded-sm focus:outline-none flex-1 block w-full"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="border-none bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold w-40 h-8 mx-auto flex justify-center items-center mt-2 mb-3 rounded-md"
              onClick={login}
            >
              {isLoading ? (
                <div className="flex items-center justify-center h-2 w-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-blue-500"></div>
                </div>
              ) : (
                <p> Log in</p>
              )}
            </button>

            {loggedInError && (
              <p className="text-center text-red-500">Invalid Login Details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
