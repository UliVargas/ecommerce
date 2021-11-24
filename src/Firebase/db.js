import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh9LRh-zvA53Q-4fzkB3yxammIUO3LP84",
  authDomain: "portfolio-e5bfd.firebaseapp.com",
  databaseURL: "https://portfolio-e5bfd-default-rtdb.firebaseio.com",
  projectId: "portfolio-e5bfd",
  storageBucket: "portfolio-e5bfd.appspot.com",
  messagingSenderId: "329212474841",
  appId: "1:329212474841:web:afd9ea8929d0eda2c015c8"
};

export const app = firebase.initializeApp(firebaseConfig);