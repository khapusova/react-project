// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// import firebase from 'firebase'
// import {firebase } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwn93WEScVoMrfYnBvJ6XF2axQmKXHRB8",
  authDomain: "react-project-cbecd.firebaseapp.com",
  databaseURL: "https://react-project-cbecd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-project-cbecd",
  storageBucket: "react-project-cbecd.appspot.com",
  messagingSenderId: "108673853849",
  appId: "1:108673853849:web:68f2eec6978f41ce1a4b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);