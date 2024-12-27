import React from 'react';
// import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import { Roboto } from 'next/font/google';
import Footer from './components/Footer';
import ReduxProvider from './features/Provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
        //  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
