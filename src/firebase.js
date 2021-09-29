import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyB-8HQgoQ2NBOAGDX8T6TXUEjKs9JaOi2c",
  authDomain: "agram-d9d63.firebaseapp.com",
  projectId: "agram-d9d63",
  storageBucket: "agram-d9d63.appspot.com",
  messagingSenderId: "675372453131",
  appId: "1:675372453131:web:fbf829cea5217da566260e",
  measurementId: "G-WVWT4JBFXG"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }