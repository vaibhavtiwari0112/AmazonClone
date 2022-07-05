// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAtK9miLJP1GtAaHhv7GxjBWBQBKzNYcdA",
    authDomain: "clone-61553.firebaseapp.com",
    projectId: "clone-61553",
    storageBucket: "clone-61553.appspot.com",
    messagingSenderId: "661319583656",
    appId: "1:661319583656:web:9d104964ef57b767eabf9d",
    measurementId: "G-WZ02WZ51QW"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
   