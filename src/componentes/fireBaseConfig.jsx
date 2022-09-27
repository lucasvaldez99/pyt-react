// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDFZ714-IBaCwSnj7k4lnHDaxUNpe03A",
  authDomain: "mundo-mascotas-f0560.firebaseapp.com",
  projectId: "mundo-mascotas-f0560",
  storageBucket: "mundo-mascotas-f0560.appspot.com",
  messagingSenderId: "1064465437447",
  appId: "1:1064465437447:web:4167fc630feafc74576ba2",
  measurementId: "G-CXZQGNTV2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);