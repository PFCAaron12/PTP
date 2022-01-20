import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth, signOut } from 'firebase/auth';

export const firebase = initializeApp({
  apiKey: "AIzaSyAwvYxNAcR-KGXRajJHAaTYz-8TrdqFDUg",
  authDomain: "users-1be0c.firebaseapp.com",
  projectId: "users-1be0c",
  storageBucket: "users-1be0c.appspot.com",
  messagingSenderId: "1028801663502",
  appId: "1:1028801663502:web:cb1ab96650d515909ae25f",
  measurementId: "G-6NXWTN5D4E"
});

const auth = getAuth();
const storage = getStorage();
const storageRef = ref(storage);
const db = getFirestore();

export {db, storage, storageRef, signOut, auth, Timestamp}