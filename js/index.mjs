
// inicializacion de firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// uso de analiticas para google
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// firestore data base
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
// autenticacion
import {
    getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup,signInWithRedirect,FacebookAuthProvider
    } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
// configuaracion de firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCbJe3qhb9PAY6CeBh0Di0BE9KloZxWyvw",
    authDomain: "firstcrud-377ff.firebaseapp.com",
    projectId: "firstcrud-377ff",
    storageBucket: "firstcrud-377ff.appspot.com",
    messagingSenderId: "663953197521",
    appId: "1:663953197521:web:ea1c2aad2bf19f72a6f8f0",
    measurementId: "G-VW0CE0J6CE"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


// desarrollo para autenticacion de firebase

export class autenticacion{
    // funcion para registro

    registro(email,password){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert(`Bienvenido, listo para aprender?, inicia sesión`)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    // funcion para autenticacion de firebase
    autenticacion(email,password){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // Signed in
        const user = userCredential.user;
        window.location.href = "../html/envioDatos.html"
    // ...
        })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        });
    }
    // funcion de cerrar sesión
    cerrarSesión(){
        signOut(getAuth())
            .then(()=> {
                alert("haz cerrado sesion")
            })
            .catch((error)=>{
                console.error(error.message)
            });
    }
}
