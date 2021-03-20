import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6NrtdnP2WqAdOdm2WhsaU-Scwnjr5Og4",
  authDomain: "firstly-apparels.firebaseapp.com",
  projectId: "firstly-apparels",
  storageBucket: "firstly-apparels.appspot.com",
  messagingSenderId: "864143912335",
  appId: "1:864143912335:web:7f6f8929a38b790280effa",
  measurementId: "G-HTEDT9GHRT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
