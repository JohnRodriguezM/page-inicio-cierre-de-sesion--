import {
    autenticacion
} from "./index.mjs";

function envioGoogle(a) {
    a.preventDefault();
    const envio = new autenticacion();
    envio.google()
    envio.redireccion()
}

document.getElementById('buttonGoogle').addEventListener('click', envioGoogle)