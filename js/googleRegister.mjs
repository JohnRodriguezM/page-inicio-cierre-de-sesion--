import { autenticacion } from "./index.mjs";

function google(a) {
    a.preventDefault();
    const envioGoogle = new autenticacion();
    envioGoogle.google()

}

const envioG = document.getElementById('buttonGoogle').addEventListener('click',google)