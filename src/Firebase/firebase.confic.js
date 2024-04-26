// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxpozzHF_94_QVtU-yij__Z8W7dY227bA",
  authDomain: "dragon-news-auth-5504e.firebaseapp.com",
  projectId: "dragon-news-auth-5504e",
  storageBucket: "dragon-news-auth-5504e.appspot.com",
  messagingSenderId: "123198280184",
  appId: "1:123198280184:web:87244d03415493651b860d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
