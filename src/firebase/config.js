// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhfFfJ5pu-btBRz-ihdvq4XqV9pRRaZiA",
  authDomain: "miniblog-89a0c.firebaseapp.com",
  projectId: "miniblog-89a0c",
  storageBucket: "miniblog-89a0c.appspot.com",
  messagingSenderId: "611390250156",
  appId: "1:611390250156:web:358deb4d2b825237c4d309",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
