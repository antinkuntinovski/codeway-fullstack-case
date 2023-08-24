// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoBV1QzM4M9EXn_PbxmhxfWn9JzBZq-ac",
  authDomain: "codewayfullstackcase.firebaseapp.com",
  projectId: "codewayfullstackcase",
  storageBucket: "codewayfullstackcase.appspot.com",
  messagingSenderId: "398260101379",
  appId: "1:398260101379:web:95610a8037e3c3f79a0936",
  measurementId: "G-RRD9C8L5E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }