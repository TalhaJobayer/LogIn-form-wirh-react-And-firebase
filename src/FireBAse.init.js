// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7nFkM_X2ADSqoKHmJ5SowAF3uaxrU37s",
  authDomain: "sign-in-log-in-project.firebaseapp.com",
  projectId: "sign-in-log-in-project",
  storageBucket: "sign-in-log-in-project.appspot.com",
  messagingSenderId: "5492009707",
  appId: "1:5492009707:web:83a3e553f28b79b044ecae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app