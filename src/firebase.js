//for testing! Connects the app to firebase
import "firebase/auth";
import firebase from "firebase";

// import 'firebase/firestore'
//const APIKEY = require("./secert");

firebase.initializeApp({
  apiKey: "AIzaSyBcTLiaUw9N-4kle7OGzECw-UoJ6MVh2NY",
  authDomain: "germgangpractice.firebaseapp.com",
  projectId: "germgangpractice",
  storageBucket: "germgangpractice.appspot.com",
  messagingSenderId: "1060499409594",
  appId: "1:1060499409594:web:dbc946b85a2c5231e01083",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
