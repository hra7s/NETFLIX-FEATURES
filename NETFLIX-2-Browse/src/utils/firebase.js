// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDQ65hpb-Byyc-umXqhDFcga-I1uPPaZY",
  authDomain: "netflix-skill.firebaseapp.com",
  projectId: "netflix-skill",
  storageBucket: "netflix-skill.appspot.com",
  messagingSenderId: "245028961438",
  appId: "1:245028961438:web:ccd8fd069c718dc4cbcf8f",
  measurementId: "G-HETK3E80GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();