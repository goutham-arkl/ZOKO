import firebase from "firebase/compat/app";

import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9uETYxMzGAQ81-rp9nEiWfk73H43nOU",
  authDomain: "zoko-b16f2.firebaseapp.com",
  projectId: "zoko-b16f2",
  storageBucket: "zoko-b16f2.appspot.com",
  messagingSenderId: "64614696950",
  appId: "1:64614696950:web:d8bc7261968243884fa9d7",
  measurementId: "G-T9RKX4CSGP"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;