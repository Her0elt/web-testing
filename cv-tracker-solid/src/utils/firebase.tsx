import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/*
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};
VITE_FIREBASE_API_KEY = "AIzaSyBuTkHDtrVKNs5I0huYaKk4rIr0vkecSIM"
VITE_FIREBASE_AUTH_DOMAIN = "cv-tracker-db866.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID = "cv-tracker-db866"
VITE_FIREBASE_STORAGE_BUCKET = "cv-tracker-db866.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID = "737430852279"
VITE_FIREBASE_APP_ID = "1:737430852279:web:e5ccb234d493fa9a11f332"
*/
const firebaseConfig = {
  apiKey: "AIzaSyBuTkHDtrVKNs5I0huYaKk4rIr0vkecSIM",
  authDomain: "cv-tracker-db866.firebaseapp.com",
  projectId: "cv-tracker-db866",
  storageBucket: "cv-tracker-db866.appspot.com",
  messagingSenderId: "737430852279",
  appId: "1:737430852279:web:e5ccb234d493fa9a11f332",
};
// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();

export default firestore;
