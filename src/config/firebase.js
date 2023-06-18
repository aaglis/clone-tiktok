import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb8RGc84TGCKB7_vwn28g-lwnZnO5Pa18",
  authDomain: "clone-do-tiktok.firebaseapp.com",
  projectId: "clone-do-tiktok",
  storageBucket: "clone-do-tiktok.appspot.com",
  messagingSenderId: "572163639345",
  appId: "1:572163639345:web:553251730ac6514652ed10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;