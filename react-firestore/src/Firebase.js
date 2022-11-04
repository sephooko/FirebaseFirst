import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampslnSnapshots: true};

const config = {
    apiKey:"YOUR_API_KEY",
    authDomain:"YOUR_AUTH_DOMAIN",
    databaseURL:"YOUR_DATABASE_URL",
    projectID: "YOUR_PROJETCT_ID",
    storageBucke:"YOUR_STORAGE_BUCKET",
    messagingSendID:"YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
export default firebase;