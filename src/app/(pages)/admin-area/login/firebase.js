// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5C4ozCxMBbjrvdkBQJyirSkBCEfxxz1I',
  authDomain: 'amc-service-f9b2a.firebaseapp.com',
  projectId: 'amc-service-f9b2a',
  storageBucket: 'amc-service-f9b2a.firebasestorage.app',
  messagingSenderId: '531428492971',
  appId: '1:531428492971:web:d66e3f88ead9f9761159ee',
  measurementId: 'G-KPLK5ZEHCS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
