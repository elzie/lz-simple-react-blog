require("firebase/firestore");
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpEMiW9X5bSwbYLmQQ2KXevqsratKrWb8",
    authDomain: "sandbox-4b692.firebaseapp.com",
    databaseURL: "https://sandbox-4b692.firebaseio.com",
    projectId: "sandbox-4b692",
    storageBucket: "sandbox-4b692.appspot.com",
    messagingSenderId: "271700242137",
    appId: "1:271700242137:web:ba314a9c00f9f02e4958c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;