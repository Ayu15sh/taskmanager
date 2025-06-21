import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBHmJMCdySYqp5i_zM3H3fP0FbULbnk7YY",
  authDomain: "taskmanager-5309a.firebaseapp.com",
  projectId: "taskmanager-5309a",
  storageBucket: "taskmanager-5309a.firebasestorage.app",
  messagingSenderId: "330495878077",
  appId: "1:330495878077:web:dc79498b657a8ace89a8d4",
  measurementId: "G-B2XKG8D5JJ"
};
const app=initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };