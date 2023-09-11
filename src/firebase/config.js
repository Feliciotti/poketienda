// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYDUr71RIZiQKxH1Zc14PtS_HSfUD3Vw4",
  authDomain: "myecommerce-d0dab.firebaseapp.com",
  projectId: "myecommerce-d0dab",
  storageBucket: "myecommerce-d0dab.appspot.com",
  messagingSenderId: "897066323149",
  appId: "1:897066323149:web:255c0bd9408fb67089ad84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db