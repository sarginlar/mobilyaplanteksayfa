import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4UBdXVTcZvUkaTR7Oj-ZBdsqVxBLgtvA",
  authDomain: "mobilyamiciz.firebaseapp.com",
  projectId: "mobilyamiciz",
  storageBucket: "mobilyamiciz.appspot.com",
  messagingSenderId: "254503887717",
  appId: "1:254503887717:web:ab82aeac3963686218f78c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
