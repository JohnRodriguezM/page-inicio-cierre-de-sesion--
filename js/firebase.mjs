// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyDs6LWUMEomu27-E1xYqGuMnpybXIPvakU",
  authDomain: "sencillo-crud.firebaseapp.com",
  projectId: "sencillo-crud",
  storageBucket: "sencillo-crud.appspot.com",
  messagingSenderId: "856935980484",
  appId: "1:856935980484:web:d97e6b0e2e5849c0171891"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app)
console.log(firebaseConfig)