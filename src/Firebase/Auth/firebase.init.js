// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuth = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuth;
