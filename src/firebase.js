import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyDH4M0C7hEMd6A1cnwI-xvKHJk9xV8mD34",
  authDomain: "clone-a2607.firebaseapp.com",
  projectId: "clone-a2607",
  storageBucket: "clone-a2607.appspot.com",
  messagingSenderId: "836774361829",
  appId: "1:836774361829:web:d7bdf63feb17e742d8b20c",
  measurementId: "G-GTJ2VX5E8H",
});


// const db = firebaseApp.firestore();
const auth= firebase.auth();

export {auth};