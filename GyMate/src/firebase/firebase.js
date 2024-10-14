// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBId6PE58tBwzp3AcW2Nx4d9Fu47AlquuI",
    authDomain: "bd-gymate.firebaseapp.com",
    projectId: "bd-gymate",
    storageBucket: "bd-gymate.appspot.com",
    messagingSenderId: "619544392738",
    appId: "1:619544392738:web:54f5b48b5cb96c88e6067b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence using AsyncStorage
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});