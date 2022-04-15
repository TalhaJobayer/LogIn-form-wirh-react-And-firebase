// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.envREACT_APP_NOT_apiKey,
  authDomain:process.envREACT_APP_NOT_authDomain,
  projectId:process.envREACT_APP_NOT_projectId,
  storageBucket:process.envREACT_APP_NOT_storageBucket,
  messagingSenderId:process.envREACT_APP_NOT_messagingSenderId,
  appId:process.envREACT_APP_NOT_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app