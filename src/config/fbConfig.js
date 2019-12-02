import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
    apiKey: "AIzaSyCiYNNjCmERTDlGZGO5Nl7xt9cbRETeFE0",
    authDomain: "dezvoltare-personala.firebaseapp.com",
    databaseURL: "https://dezvoltare-personala.firebaseio.com",
    projectId: "dezvoltare-personala",
    storageBucket: "dezvoltare-personala.appspot.com",
    messagingSenderId: "57194017224",
    appId: "1:57194017224:web:2b0d16f4e27a6d6c85d0fd",
    measurementId: "G-YS44CF2BR4"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 