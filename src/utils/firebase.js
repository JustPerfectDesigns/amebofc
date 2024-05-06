// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "amebofc.firebaseapp.com",
	projectId: "amebofc",
	storageBucket: "amebofc.appspot.com",
	messagingSenderId: "104041513444",
	appId: "1:104041513444:web:627d8596e71385f1f5c7f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
