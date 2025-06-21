# 🧠 FocusFlow - Task Manager

FocusFlow is a minimal and responsive task manager built with **React**, **Tailwind CSS**, and **Firebase Firestore**. It allows users to organize daily tasks using cards, add up to 5 tasks per card, and persist them in a Firestore database with real-time updates.

---

## ✨ Features

- 📅 Day-wise task card components
- ➕ Add up to 5 tasks per card
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 🔄 Real-time sync with Firebase Firestore
- 💅 Clean UI with Tailwind CSS
- 🚀 Deployed on Vercel

---

## 🛠 Tech Stack

- **React** (with Vite)
- **Tailwind CSS**
- **Firebase Firestore** (Database)
- **Lucide Icons**
- **Vercel** for deployment

---

## 🔧 Folder Structure

src/
├── components/
│ └── Card.jsx
├── firebase.jsx
├── App.jsx
└── index.css

---

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Firestore Database**
4. Copy your Firebase config and add it to `firebase.jsx`:

```js
// firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
