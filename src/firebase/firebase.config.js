// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnUFdwIW5UPEXWgUik8BfqpOOOFNeyjyM",
  authDomain: "coffee-store-5.firebaseapp.com",
  projectId: "coffee-store-5",
  storageBucket: "coffee-store-5.appspot.com",
  messagingSenderId: "649505009496",
  appId: "1:649505009496:web:474c8ea9bb6e1707cfff2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;