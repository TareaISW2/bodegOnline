import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBx-RCNfHh4nH2P40NEwKNswX4rrOQl8nc",
  authDomain: "bodegonline-61825.firebaseapp.com",
  projectId: "bodegonline-61825",
  storageBucket: "bodegonline-61825.appspot.com",
  messagingSenderId: "782390072063",
  appId: "1:782390072063:web:933d87b00b466adae4b2ca",
});

var db = firebase.firestore();
export default db;
export const auth = app.auth();
