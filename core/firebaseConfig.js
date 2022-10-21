// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg6c25N28Lp_6pQ4SPST1z5_J2Vop85TE",
  authDomain: "cuneclubapp.firebaseapp.com",
  projectId: "cuneclubapp",
  storageBucket: "cuneclubapp.appspot.com",
  messagingSenderId: "935475976784",
  appId: "1:935475976784:web:d995bf54bad320fccfcf55",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Database Reference
export const db = getFirestore(app);
