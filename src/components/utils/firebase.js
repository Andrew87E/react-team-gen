// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { api_key } from "../../../secret"
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "react-team-gen-f3139.firebaseapp.com",
  databaseURL: "https://react-team-gen-f3139-default-rtdb.firebaseio.com",
  projectId: "react-team-gen-f3139",
  storageBucket: "react-team-gen-f3139.appspot.com",
  messagingSenderId: "1065303467201",
  appId: "1:1065303467201:web:088f3626329b3200296040",
  measurementId: "G-QZDGTD3RGW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const db = firebase.database();
export default firebaseConfig;
