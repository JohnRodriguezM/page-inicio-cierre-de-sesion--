import { autenticacion } from "./index.mjs";

function envioGoogle(a) {
    a.preventDefault();
    const envio = new autenticacion();
    if(envio.google()){
        window.location.href = "https://johnrodriguezm.github.io/firsrCrud/html/envioDatos.html"
    }
 }

 document.getElementById('buttonGoogle').addEventListener('click',envioGoogle)

