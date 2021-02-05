import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7JMsCAQsD786wdolrmuQyc7IQIg8FEUo",
  authDomain: "discord-clone-22c0f.firebaseapp.com",
  databaseURL: "https://discord-clone-22c0f-default-rtdb.firebaseio.com",
  projectId: "discord-clone-22c0f",
  storageBucket: "discord-clone-22c0f.appspot.com",
  messagingSenderId: "1060287654205",
  appId: "1:1060287654205:web:8631888ed414cecdd2fd54",
  measurementId: "G-5VEL788YGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;