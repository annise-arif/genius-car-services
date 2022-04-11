// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyjw6yzDdNikmYnftVHv7AY7PhEHjTaYw",
  authDomain: "genius-car-services-3a0c9.firebaseapp.com",
  projectId: "genius-car-services-3a0c9",
  storageBucket: "genius-car-services-3a0c9.appspot.com",
  messagingSenderId: "352708649508",
  appId: "1:352708649508:web:c9c7c961eeeaa2fe16aeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;