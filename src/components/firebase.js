// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfmIbwgrmgqTdw8OyjaRk9XOvgeaxZ8bE",
  authDomain: "lingualive.firebaseapp.com",
  projectId: "lingualive",
  storageBucket: "lingualive.appspot.com",
  messagingSenderId: "257083985500",
  appId: "1:257083985500:web:f62ace575f7ae1909ba099",
  measurementId: "G-NZL3WFBKMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
