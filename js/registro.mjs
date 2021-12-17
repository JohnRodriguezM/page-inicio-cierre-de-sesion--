import { autenticacion } from "./index.mjs";

function registro(a) {
    a.preventDefault();
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passwordLogin').value;
    const instanciaRegistro = new autenticacion();
    instanciaRegistro.registro(email,password);
}

const envioRegistro = document.getElementById('formularioLogin').addEventListener('submit',registro)