// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-b429a.firebaseapp.com",
    projectId: "mern-estate-b429a",
    storageBucket: "mern-estate-b429a.appspot.com",
    messagingSenderId: "91114024859",
    appId: "1:91114024859:web:6e871ebfb627e02482fb3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


