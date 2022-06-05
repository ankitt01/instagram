import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS32e62m21cnL-X20EkoTXMp4MGEZInB4",
  authDomain: "instagram-85a66.firebaseapp.com",
  projectId: "instagram-85a66",
  storageBucket: "instagram-85a66.appspot.com",
  messagingSenderId: "750897652308",
  appId: "1:750897652308:web:9f0ca066e9701aaaa403c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);