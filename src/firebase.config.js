// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLI3V1jemZcUTgtPgEp4mY1jRoD2NntY",
  authDomain: "garospars.firebaseapp.com",
  databaseURL: 'https://garospars-default-rtdb.firebaseio.com/',
  projectId: "garospars",
  storageBucket: "garospars.firebasestorage.app",
  messagingSenderId: "429377955522",
  appId: "1:429377955522:web:711e71cff081da967e7d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app