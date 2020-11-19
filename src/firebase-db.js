
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBcLryAqiJZjfdfKeLyoNbQEvDNUvLohQY",
    authDomain: "digital-startup-7d80a.firebaseapp.com",
    databaseURL: "https://digital-startup-7d80a.firebaseio.com",
    projectId: "digital-startup-7d80a",
    storageBucket: "digital-startup-7d80a.appspot.com",
    messagingSenderId: "58814178141",
    appId: "1:58814178141:web:fc0d494a83d510d3c7beb4"
  })
  .firestore();

export const postRef = db.collection("posts");