//src / firebase / config.js
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import * as authFirebase from "firebase/auth";
import * as firestone from "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";
//import { auth } from "../firebase";
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/compat/firestore";
//import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4UBdXVTcZvUkaTR7Oj-ZBdsqVxBLgtvA",
  authDomain: "mobilyamiciz.firebaseapp.com",
  projectId: "mobilyamiciz",
  storageBucket: "mobilyamiciz.appspot.com",
  messagingSenderId: "254503887717",
  appId: "1:254503887717:web:ab82aeac3963686218f78c",
};

firebase.initializeApp(firebaseConfig);

const db = firestone.getFirestore();
const auth = authFirebase.getAuth();

export { db, auth };
