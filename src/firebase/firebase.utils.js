import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJZViSC4n5PmQtWqwEkKXh9Z8FrQLLwGw",
  authDomain: "crwn-db-b83f6.firebaseapp.com",
  databaseURL: "https://crwn-db-b83f6.firebaseio.com",
  projectId: "crwn-db-b83f6",
  storageBucket: "crwn-db-b83f6.appspot.com",
  messagingSenderId: "1073736075959",
  appId: "1:1073736075959:web:77ab781167c26bc2649b32"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
