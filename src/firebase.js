import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwSy-jG0FKb2x9ug5K5mzDnKC-RPkNp8g",
    authDomain: "africandish-318cf.firebaseapp.com",
    databaseURL: "https://africandish-318cf.firebaseio.com",
    projectId: "africandish-318cf",
    storageBucket: "africandish-318cf.appspot.com",
    messagingSenderId: "17440063208",
    appId: "1:17440063208:web:0eb4c27e351f99bd49535d",
    measurementId: "G-GDMKN98Q4H"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {auth, googleProvider, facebookProvider}