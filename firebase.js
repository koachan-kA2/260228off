import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "offline-meet-up.firebaseapp.com",
  projectId: "offline-meet-up",
  storageBucket: "offline-meet-up.firebasestorage.app",
  messagingSenderId: "834362010778",
  appId: "1:834362010778:web:4af33334a26024f3cfc323",
  measurementId: "G-BX7SWWG5T5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
