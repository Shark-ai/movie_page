// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX2tGuzHgzp0fRGsSqreqixsq0TPKF_0g",
  authDomain: "examdatabase-38585.firebaseapp.com",
  projectId: "examdatabase-38585",
  storageBucket: "examdatabase-38585.appspot.com",
  messagingSenderId: "881344525936",
  appId: "1:881344525936:web:bdff3f0da093054e8a26b5",
  measurementId: "G-GB8GP93C6T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
