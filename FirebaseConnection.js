// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgmsqnFZHd8Cv5VnDgoT5xyrisKShatGQ",
  authDomain: "treinosfirebase.firebaseapp.com",
  projectId: "treinosfirebase",
  storageBucket: "treinosfirebase.appspot.com",
  messagingSenderId: "536649641468",
  appId: "1:536649641468:web:079a33a5c85d84ab1a1679",
  measurementId: "G-GW8GS5HVLX"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {db};