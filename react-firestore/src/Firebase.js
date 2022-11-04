import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import firestore from 'firebase/firestore';

const settings = {timestampslnSnapshots: true};

const config = {
    apiKey: "AIzaSyDxVqGM8vtjT7Q8nswcXh57fsVaGZC7jMk",
    authDomain: "fir-app-5d9ac.firebaseapp.com",
    projectId: "fir-app-5d9ac",
    storageBucket: "fir-app-5d9ac.appspot.com",
    messagingSenderId: "974615944212",
    appId: "1:974615944212:web:394138477eb4055ed85b01",
    measurementId: "G-TCTPWZ3V46"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);
export default firebase;