
import { initializeApp , getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBG6Li3M6CO1tCaxLM4NHFt0xJq6Ib2Ki8",
  authDomain: "chatv2-f04cb.firebaseapp.com",
  projectId: "chatv2-f04cb",
  storageBucket: "chatv2-f04cb.appspot.com",
  messagingSenderId: "624761996037",
  appId: "1:624761996037:web:256b2bb4b8ebf687c26d6c",
  measurementId: "G-DVMH0TZ69B"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider()

export { db , auth , storage, provider}