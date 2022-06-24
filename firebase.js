// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrSlERfkyQ_LEY3ZjwTtZcseHRWjM-Afs',
  authDomain: 'guanxin-algalreef.firebaseapp.com',
  projectId: 'guanxin-algalreef',
  storageBucket: 'guanxin-algalreef.appspot.com',
  messagingSenderId: '968822167274',
  appId: '1:968822167274:web:fa97bf0554a8b33acf6993',
  measurementId: 'G-G0P4EPJLB2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


