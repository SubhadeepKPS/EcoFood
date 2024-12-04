// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2UMjlWY3mmM19PJpQRvuYMf4ivTM40U",
  authDomain: "ecofood-bc706.firebaseapp.com",
  projectId: "ecofood-bc706",
  storageBucket: "ecofood-bc706.firebasestorage.app",
  messagingSenderId: "195183923586",
  appId: "1:195183923586:web:5bbfb88c48c2b95979bf9b",
  measurementId: "G-6VB34NX895",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install -g firebase-tools
// firebase login
// firebase init

// {
//   "hosting": {
//     "site": "ecofood-bc706-3d",

//     "public": "public",
//     ...
//   }
// }

// "site": "ecofood-bc706-3d",

// firebase deploy --only hosting:ecofood-bc706-3d

export const auth = getAuth();
