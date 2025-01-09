// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA39ImXqs6LMS7PkweGYj4_j_MAMEoeBJw",
  authDomain: "lovary-f0c76.firebaseapp.com",
  projectId: "lovary-f0c76",
  storageBucket: "lovary-f0c76.firebasestorage.app",
  messagingSenderId: "337368039083",
  appId: "1:337368039083:web:d80b5bd3152d31b1ee01ee",
  measurementId: "G-6GRFEFBZEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
