// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBVR6v0Mzz12yEVAjLWo5JxUNeiqhoRA",
  authDomain: "realfast-69718.firebaseapp.com",
  projectId: "realfast-69718",
  storageBucket: "realfast-69718.appspot.com",
  messagingSenderId: "303630678875",
  appId: "1:303630678875:web:dec26b0ba2d1b35ee0b87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }