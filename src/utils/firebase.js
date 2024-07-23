// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMq9085rZvGT-vvdO-sDy6WNEkzUYYFE",
  authDomain: "netflixgpt-73f9b.firebaseapp.com",
  projectId: "netflixgpt-73f9b",
  storageBucket: "netflixgpt-73f9b.appspot.com",
  messagingSenderId: "899651345862",
  appId: "1:899651345862:web:3a532702cb90b839fca6c7",
  measurementId: "G-1LEPJY45MH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
