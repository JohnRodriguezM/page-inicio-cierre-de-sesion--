import { autenticacion } from "./index.mjs";

function envioGoogle(a) {
    a.preventDefault();
    const envio = new autenticacion();
    envio.google();
    window.location.href = "../html/envioDatos.html"
 }

 document.getElementById('buttonGoogle').addEventListener('click',envioGoogle)

