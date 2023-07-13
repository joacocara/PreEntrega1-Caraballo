// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2hHIO8ghRtT8bbCktXakVNmmuO5-MMZE",
  authDomain: "entregafinalrjs.firebaseapp.com",
  projectId: "entregafinalrjs",
  storageBucket: "entregafinalrjs.appspot.com",
  messagingSenderId: "898909381624",
  appId: "1:898909381624:web:a56742ee740334d36f6c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
