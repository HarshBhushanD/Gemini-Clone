// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAM7TJs5kf6xRjtUnrvS_Bz5-erQ4fpWiw",
  authDomain: "ai-project-3c694.firebaseapp.com",
  projectId: "ai-project-3c694",
  storageBucket: "ai-project-3c694.firebasestorage.app",
  messagingSenderId: "437095602961",
  appId: "1:437095602961:web:3746c5ba1fc8f9b376cab0",
  measurementId: "G-FWW1MHXE2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, analytics,db,auth };