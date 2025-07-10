// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wfQ5eFTU3sxWkH5ZWdRXUlEydsTATrs",
  authDomain: "login-auth-ceafa.firebaseapp.com",
  projectId: "login-auth-ceafa",
  storageBucket: "login-auth-ceafa.firebasestorage.app",
  messagingSenderId: "94880720771",
  appId: "1:94880720771:web:71464b30687daa53b238b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export default app