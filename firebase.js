require("firebase/firestore");
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDStshVjtIAAr6hs7djh2QEoU7COujp6dY",
    authDomain: "lz-reactjs-blog.firebaseapp.com",
    databaseURL: "https://lz-reactjs-blog.firebaseio.com",
    projectId: "lz-reactjs-blog",
    storageBucket: "lz-reactjs-blog.appspot.com",
    messagingSenderId: "385028209479",
    appId: "1:385028209479:web:48a2bd7b4485be0680ea62"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;