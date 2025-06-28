// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // For authentication
import { getFirestore } from "firebase/firestore";  // For Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChHG-RefMMXN1SDa5NZoVypCYwvenLDMw",
  authDomain: "project-management-tool-cd4a6.firebaseapp.com",
  projectId: "project-management-tool-cd4a6",
  storageBucket: "project-management-tool-cd4a6.firebasestorage.app",
  messagingSenderId: "641444311006",
  appId: "1:641444311006:web:e78ee0d64498522805f74f",
  measurementId: "G-X7KSDPTYWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Firebase Authentication
const db = getFirestore(app);  // Firestore database

export { auth, db };
