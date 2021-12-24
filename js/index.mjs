// inicializacion de firebase
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// uso de analiticas para google
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// firestore data base
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// autenticacion
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  FacebookAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
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
// const analytics = getAnalytics(app);


// desarrollo para autenticacion de firebase
/*

pocisionar en otro documento, ya que interrumpe la carga

function envioLogin(e) {
  e.preventDefault(e);
      const envioDatos = async() => {
          try {
          const docRef = await addDoc(collection(db, "usuarios"),{
              user: document.getElementById('userValidar').value,
              telefono : document.getElementById('telefonoValidar').value,
          });
          console.log("Document written with ID: ",docRef.id);
          } catch (e) {
          console.error("Error adding document: ", e);
          }
      }
      envioDatos();
      alert("Tus datos han sido enviados")
     /* nombre(document.getElementById('userValidar').value); // pendiente definir esta funcion 
      document.getElementById('formularioInfoAdicional').reset()
    }

    const enviar = document.getElementById('formularioInfoAdicional').addEventListener('submit',envioLogin)
*/





export class autenticacion {

  // funcion para registro

  registro(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password)
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
  autenticacion(email, password) {
    signInWithEmailAndPassword(getAuth(), email, password)
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
  cerrarSesión() {
    signOut(getAuth())
      .then(() => {
        window.location.href = "https://johnrodriguezm.github.io/firsrCrud/html/index.html"
      })
      .catch((error) => {
        console.error(error.message)
      });
  }
  // inicio de sesion con google
  google() {
    const auth = getAuth();
    const google = new GoogleAuthProvider();
    signInWithRedirect(auth, google)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert("noo")
      });
  }
  redireccion() {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  observador(){
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        window.location.href = "https://johnrodriguezm.github.io/firsrCrud/html/envioDatos.html"
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
}