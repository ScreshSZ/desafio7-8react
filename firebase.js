import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1jl5_-hTAvmJFAmmrw4Y70ZQI20oA8ik",
  authDomain: "desafio7-97ee8.firebaseapp.com",
  projectId: "desafio7-97ee8",
  storageBucket: "desafio7-97ee8.appspot.com",
  messagingSenderId: "815224598456",
  appId: "1:815224598456:web:433ea0aecd3cc1058d694d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
