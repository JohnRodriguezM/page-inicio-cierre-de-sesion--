// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIoouw-AJ8HFwcDk22D4oquQ-OufuHYtw",
  authDomain: "crud-baf3e.firebaseapp.com",
  databaseURL: "https://crud-baf3e-default-rtdb.firebaseio.com",
  projectId: "crud-baf3e",
  storageBucket: "crud-baf3e.appspot.com",
  messagingSenderId: "819463359747",
  appId: "1:819463359747:web:0ae98b65b3d5eb77692d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/*
codigo sin firebase, perfecto

function envioForm(e) {
    e.preventDefault(e)
    let nombreH = document.getElementById('nombrecito').value
    let emailH = document.getElementById('email').value
    let edad = document.getElementById('edad').value;
    let comentariosH = document.getElementById('comentarios').value
    const datos = {
        nombreH,
        emailH,
        edad,
        comentariosH,
    }
    
    document.getElementById("formularioEnvio").reset()
    alert("enviado")
    

}
const envioFormm = document.getElementById("formularioEnvio").addEventListener('submit',envioForm);



*/


