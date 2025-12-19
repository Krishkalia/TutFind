// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBElYBfthUEZBuHP8HJirJhIVCYk5JZxH4",
  authDomain: "tutfind-83d3e.firebaseapp.com",
  projectId: "tutfind-83d3e",
  storageBucket: "tutfind-83d3e.firebasestorage.app",
  messagingSenderId: "809341862890",
  appId: "1:809341862890:web:d40c6db6998f3da775a893",
  measurementId: "G-98JVBTYDX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const db =getFirestore(app)