// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA14L0rJchA3pMfH3eirOdOOSh3eXZ5l9I",
  authDomain: "e-commerce-d13bc.firebaseapp.com",
  projectId: "e-commerce-d13bc",
  storageBucket: "e-commerce-d13bc.appspot.com",
  messagingSenderId: "880365842359",
  appId: "1:880365842359:web:60e513700936d5a0a64232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;