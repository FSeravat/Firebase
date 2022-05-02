// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBC9Ipms2E2_kF322ni4lvo3jUrdnwLs",
  authDomain: "nsb-mobile.firebaseapp.com",
  projectId: "nsb-mobile",
  storageBucket: "nsb-mobile.appspot.com",
  messagingSenderId: "575032928513",
  appId: "1:575032928513:web:565be7c96d57476d595300",
  measurementId: "G-MNT1EHX4B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;