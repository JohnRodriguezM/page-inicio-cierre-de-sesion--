import { autenticacion } from "./js/index.mjs";

function google(a) {
    a.preventDefault();
    const envioGoogle = new autenticacion();
    envioGoogle.google()

}

document.getElementById('buttonGoogle').addEventListener('click',google)