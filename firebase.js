// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnzjTN1LC0h-FhvcrK7DfMSrpeF3-8CAk",
    authDomain: "pixtagram-mobile-insta-clone.firebaseapp.com",
    projectId: "pixtagram-mobile-insta-clone",
    storageBucket: "pixtagram-mobile-insta-clone.appspot.com",
    messagingSenderId: "564649960259",
    appId: "1:564649960259:web:f68677a8b47c7bf83f45f6"
};

// console.log(firebase)
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


const db = firebase.firestore();


export { firebase, db }

// //expo install firebase!!!


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDnzjTN1LC0h-FhvcrK7DfMSrpeF3-8CAk",
//     authDomain: "pixtagram-mobile-insta-clone.firebaseapp.com",
//     projectId: "pixtagram-mobile-insta-clone",
//     storageBucket: "pixtagram-mobile-insta-clone.appspot.com",
//     messagingSenderId: "564649960259",
//     appId: "1:564649960259:web:f68677a8b47c7bf83f45f6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
