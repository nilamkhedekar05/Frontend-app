import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBzr7syrl76qpdgOPSMWe2qVQuCuEgZCCw",
    authDomain: "frontend-app-3d995.firebaseapp.com",
    projectId: "frontend-app-3d995",
    storageBucket: "frontend-app-3d995.firebasestorage.app",
    messagingSenderId: "371745954272",
    appId: "1:371745954272:web:85d434f3d44d769dba3385",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };