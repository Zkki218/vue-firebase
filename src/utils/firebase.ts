// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB653mnPDmoxPn6BfxMy2HQIIYv1jD61_0",
  authDomain: "vue-firebase-de055.firebaseapp.com",
  projectId: "vue-firebase-de055",
  storageBucket: "vue-firebase-de055.firebasestorage.app",
  messagingSenderId: "724022485991",
  appId: "1:724022485991:web:012ff6b138e16e839b9342"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };