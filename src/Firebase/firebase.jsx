import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1xnBewym0i4usF1EPgc2ymSnnC9Wdwy0",
  authDomain: "notes-app-de2cc.firebaseapp.com",
  projectId: "notes-app-de2cc",
  storageBucket: "notes-app-de2cc.firebasestorage.app",
  messagingSenderId: "790390897966",
  appId: "1:790390897966:web:d002f3c983d6fc00fc0ebf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
