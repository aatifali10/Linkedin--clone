import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWR5hegsTJhVol60dp4UeL3p9X0GuMYTk",
  authDomain: "linkdin-clone-d2977.firebaseapp.com",
  projectId: "linkdin-clone-d2977",
  storageBucket: "linkdin-clone-d2977.appspot.com",
  messagingSenderId: "249282088328",
  appId: "1:249282088328:web:760fcb6ee9a825ef96be3d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
