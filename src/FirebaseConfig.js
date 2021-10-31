// import firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBECW27nQ35Yca1PxFUEaKcotY-C51gEPc',
  authDomain: 'affirmations-tech.firebaseapp.com',
  projectId: 'affirmations-tech',
  storageBucket: 'affirmations-tech.appspot.com',
  messagingSenderId: '631843579854',
  appId: '1:631843579854:web:a1bf79ce78a8f28e502d9f',
  measurementId: 'G-XFTDTH4KGR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
