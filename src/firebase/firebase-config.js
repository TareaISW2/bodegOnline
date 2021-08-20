import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx-RCNfHh4nH2P40NEwKNswX4rrOQl8nc",
  authDomain: "bodegonline-61825.firebaseapp.com",
  projectId: "bodegonline-61825",
  storageBucket: "bodegonline-61825.appspot.com",
  messagingSenderId: "782390072063",
  appId: "1:782390072063:web:933d87b00b466adae4b2ca",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
