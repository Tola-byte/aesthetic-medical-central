'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../(pages)/admin-area/login/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const SignOut = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/admin-area/login');
      }
    });
  }, []);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <button
      className="block w-fit px-4 py-1 bg-red-500 text-white font-semibold rounded-sm"
      onClick={logOut}
    >
      Log out
    </button>
  );
};

export default SignOut;
