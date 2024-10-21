import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsc8iUDoM25U11T4HZEjwUP1nVvEt-wNg",
  authDomain: "new-app-a3d80.firebaseapp.com",
  projectId: "new-app-a3d80",
  storageBucket: "new-app-a3d80.appspot.com",
  messagingSenderId: "718354011915",
  appId: "1:718354011915:web:723f368bc6290e26bcb40e"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const Provider = new GoogleAuthProvider();
Provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; 
  return await createUserWithEmailAndPassword(auth, email, password);
 
};
