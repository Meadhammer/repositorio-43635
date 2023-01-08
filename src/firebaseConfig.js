import {getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAghtcahy5bn0h-ZBWeLXpPGkUGWUmqKcw",
  authDomain: "react-43635-tripel.firebaseapp.com",
  projectId: "react-43635-tripel",
  storageBucket: "react-43635-tripel.appspot.com",
  messagingSenderId: "488170301965",
  appId: "1:488170301965:web:26c79c99d922c1081cc344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)