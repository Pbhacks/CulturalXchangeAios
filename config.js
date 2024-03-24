import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBafypfE6ljHUk_QmfEp2KO3q4sdRedIyk",
    authDomain: "culturalxchange-80950.firebaseapp.com",
    projectId: "culturalxchange-80950",
    storageBucket: "culturalxchange-80950.appspot.com",
    messagingSenderId: "7607692588",
    appId: "1:7607692588:web:ab66e67cd92874c12bd089",
    measurementId: "G-WLWENQP5CP"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};