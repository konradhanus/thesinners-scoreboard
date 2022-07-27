// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATfXEGkJO-UXMWIdnyG7NBRn1OUUj69TM",
  authDomain: "rankingdog.firebaseapp.com",
  databaseURL: "https://rankingdog-default-rtdb.firebaseio.com",
  projectId: "rankingdog",
  storageBucket: "rankingdog.appspot.com",
  messagingSenderId: "1035209169566",
  appId: "1:1035209169566:web:23ae5c86e3148510f3f98f",
  measurementId: "G-DG8JFVBP1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app, analytics};