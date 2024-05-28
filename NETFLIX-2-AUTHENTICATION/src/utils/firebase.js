// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQf7ItYW9Jfn4TpgBIsAbXIamJsTqYig",
  authDomain: "netflix-clone-33899.firebaseapp.com",
  projectId: "netflix-clone-33899",
  storageBucket: "netflix-clone-33899.appspot.com",
  messagingSenderId: "990315649265",
  appId: "1:990315649265:web:a15f3507042eddf127b150",
  measurementId: "G-DHHDVVK8RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 