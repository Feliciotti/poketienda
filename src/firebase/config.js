// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqYRb6U05FoQcSIiktyB-QWcclGTP76Ds",
  authDomain: "poketienda-f52b1.firebaseapp.com",
  projectId: "poketienda-f52b1",
  storageBucket: "poketienda-f52b1.appspot.com",
  messagingSenderId: "1091548023232",
  appId: "1:1091548023232:web:6e8e6fcc0149f144f7a025"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db