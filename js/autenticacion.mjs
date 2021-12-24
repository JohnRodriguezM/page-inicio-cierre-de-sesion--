import {
    autenticacion
} from "./index.mjs";

function envioAuth(a) {
    a.preventDefault();
    let email = document.getElementById('emailLogin').value;
    let contrasennia = document.getElementById('passwordLogin').value;
    const auth = new autenticacion();
    auth.autenticacion(email, contrasennia);
    document.getElementById('formularioLogin').reset();
}

const envio = document.getElementById('formularioLogin').addEventListener('submit', envioAuth)