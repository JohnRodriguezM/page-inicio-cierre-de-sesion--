import { autenticacion } from "./js/index.mjs";

function google(a) {
    a.preventDefault();
    const envioGoogle = new autenticacion();
    envioGoogle.google()
    window.location.href = "https://johnrodriguezm.github.io/firsrCrud/html/envioDatos.html";

}

const envioG = document.getElementById('buttonGoogle').addEventListener('click',google)