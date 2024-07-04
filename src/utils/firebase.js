// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5RrH8NXSaXshQOnTcAJjN7OEi-PyIsRI",
  authDomain: "netflixgpt-8ee17.firebaseapp.com",
  projectId: "netflixgpt-8ee17",
  storageBucket: "netflixgpt-8ee17.appspot.com",
  messagingSenderId: "405623380775",
  appId: "1:405623380775:web:6a933b26dd2efbf1e12702",
  measurementId: "G-1DM8ERYVF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();