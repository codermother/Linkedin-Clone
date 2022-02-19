import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9k3vBG8BoEVG83F-CnH4uI1cHzEPFG8M",
  authDomain: "linkedin-clone-v02.firebaseapp.com",
  projectId: "linkedin-clone-v02",
  storageBucket: "linkedin-clone-v02.appspot.com",
  messagingSenderId: "966865673296",
  appId: "1:966865673296:web:e8f0d9164f4c614a9a4555",
  measurementId: "G-TJMB50V78S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
