import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgoHxq5_YNVbBq2oseYQGaOm4f6WF72H0",
  authDomain: "chat-app-17cb8.firebaseapp.com",
  projectId: "chat-app-17cb8",
  storageBucket: "chat-app-17cb8.appspot.com",
  messagingSenderId: "307409531718",
  appId: "1:307409531718:web:30e3785c09adc145366b47",
  measurementId: "G-VHV3GCBTB9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();


export { db , auth };
export default firebase;
