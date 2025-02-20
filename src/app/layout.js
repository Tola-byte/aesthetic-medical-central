import React from 'react';
// import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import { Roboto, Montserrat } from 'next/font/google';
import Footer from './components/Footer';
import ReduxProvider from './features/Provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'AMC',
  description: 'Aesthetic Medical Central',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {' '}
        <ReduxProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
