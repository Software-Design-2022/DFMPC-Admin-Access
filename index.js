
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAZVQZO8XWR0UTPoSMLrRN7nSltUDW9Xzs",
  authDomain: "dfmpc-student-placement-system.firebaseapp.com",
  databaseURL: "https://dfmpc-student-placement-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dfmpc-student-placement-system",
  storageBucket: "dfmpc-student-placement-system.appspot.com",
  messagingSenderId: "295214875936",
  appId: "1:295214875936:web:546dcdb4f822d1c4c84345",
  measurementId: "G-1JPG0HXVWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize variables
const auth  = getAuth();

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  

  
