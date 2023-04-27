import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVBVR6v0Mzz12yEVAjLWo5JxUNeiqhoRA",
  authDomain: "realfast-69718.firebaseapp.com",
  projectId: "realfast-69718",
  storageBucket: "realfast-69718.appspot.com",
  messagingSenderId: "303630678875",
  appId: "1:303630678875:web:dec26b0ba2d1b35ee0b87e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const auth = getAuth();
//firestore
//storage

export { auth }