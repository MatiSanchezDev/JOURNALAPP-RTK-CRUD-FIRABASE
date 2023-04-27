// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwIpXmh6ZCmzYFg_WsIH6mGPqKlVxwRBI",
  authDomain: "journalapp-57b68.firebaseapp.com",
  projectId: "journalapp-57b68",
  storageBucket: "journalapp-57b68.appspot.com",
  messagingSenderId: "823140538627",
  appId: "1:823140538627:web:ed594771c830a2a1c43136",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
