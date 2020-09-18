import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdS-OLOIndH-0jbHageLp7lirOPPjDBkM",
  authDomain: "mfashion-b7b97.firebaseapp.com",
  databaseURL: "https://mfashion-b7b97.firebaseio.com",
  projectId: "mfashion-b7b97",
  storageBucket: "mfashion-b7b97.appspot.com",
  messagingSenderId: "637160757661",
  appId: "1:637160757661:web:49f5ae0f1de9b9f4c3f774",
  measurementId: "G-5N2DYXH5NT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database
const db = firebaseApp.firestore();

// Authentication
const auth = firebase.auth();

export { db, auth };
