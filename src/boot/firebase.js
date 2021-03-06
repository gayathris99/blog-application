import { initializeApp } from "firebase/app";
import "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(app);
const firebaseAuth = getAuth(app);


export  {firestoreDatabase , app, firebaseAuth};
