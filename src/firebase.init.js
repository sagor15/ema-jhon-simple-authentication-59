// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdndatTce42Rp2fznE6Uv9ORV2yvOOb04",
  authDomain: "ema-jhon-f6bd1.firebaseapp.com",
  projectId: "ema-jhon-f6bd1",
  storageBucket: "ema-jhon-f6bd1.appspot.com",
  messagingSenderId: "182057494194",
  appId: "1:182057494194:web:5ab50c9f0bc29b58d9cbab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
