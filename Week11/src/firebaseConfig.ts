// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWoS281RDfT8de40K-syAxh-l4XD02ppw",
  authDomain: "kuliah-cdfd5.firebaseapp.com",
  projectId: "kuliah-cdfd5",
  storageBucket: "kuliah-cdfd5.appspot.com",
  messagingSenderId: "377383506757",
  appId: "1:377383506757:web:ded4d77a715e843b1f242c",
  measurementId: "G-6S99RHZZGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);