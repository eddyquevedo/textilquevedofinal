
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbCbOIqqv-yY4kitB_03ZNkJoZTgucUqk",
  authDomain: "tecnicoquevedo-bcde9.firebaseapp.com",
  projectId: "tecnicoquevedo-bcde9",
  storageBucket: "tecnicoquevedo-bcde9.appspot.com",
  messagingSenderId: "819827104860",
  appId: "1:819827104860:web:a36ce82a73c8e54c8a9a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
