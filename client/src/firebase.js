// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-25237.firebaseapp.com",
  projectId: "mern-estate-25237",
  storageBucket: "mern-estate-25237.appspot.com",
  messagingSenderId: "600060251717",
  appId: "1:600060251717:web:50b79932cb079838341d2c",
  measurementId: "G-WQ138TL81H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
