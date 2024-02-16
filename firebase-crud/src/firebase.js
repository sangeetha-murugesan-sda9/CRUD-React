// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj9YP8uBhdo5v03I74QB3ML2pyb-4BkAs",
  authDomain: "reactwebapp-9a721.firebaseapp.com",
  projectId: "reactwebapp-9a721",
  storageBucket: "reactwebapp-9a721.appspot.com",
  messagingSenderId: "962509748550",
  appId: "1:962509748550:web:722247194074ce6f8d0d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);