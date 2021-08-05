import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCBuYXPMbxGvfbx-mGphLkXDYbZNsjOcSk",
    authDomain: "dreamcoding-cardmaker-c7087.firebaseapp.com",
    databaseURL: "https://dreamcoding-cardmaker-c7087-default-rtdb.firebaseio.com",
    projectId: "dreamcoding-cardmaker-c7087",
    storageBucket: "dreamcoding-cardmaker-c7087.appspot.com",
    messagingSenderId: "1071906347926",
    appId: "1:1071906347926:web:5a7c7e25f148ef9b695bb7",
    measurementId: "G-RZJPP748WB"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();