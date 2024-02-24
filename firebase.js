import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDNI39GqTlkz1YZgxav2Re-k4rbPjj7nJo",
    authDomain: "d-str-a8356.firebaseapp.com",
    projectId: "d-str-a8356",
    storageBucket: "d-str-a8356.appspot.com",
    messagingSenderId: "536908913912",
    appId: "1:536908913912:web:35fc34febc3c596a116f0d"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storeImg = getStorage(app)
export const db = getFirestore(app);