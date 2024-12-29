import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDpHUv1rPnOTyO8mT34P2VaHG5h6177Trw",
  authDomain: "netflix-c3929.firebaseapp.com",
  projectId: "netflix-c3929",
  storageBucket: "netflix-c3929.appspot.com",
  messagingSenderId: "706296239286",
  appId: "1:706296239286:web:4509ad4c8d90d7ef4a0217",
  measurementId: "G-95DZGEJ7Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();