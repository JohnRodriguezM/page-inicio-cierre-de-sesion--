import { autenticacion } from "./index.mjs";

function registro(a) {
    a.preventDefault();
    let correo = document.getElementById('emailLogin').value;
    let contrasennia = document.getElementById('passwordLogin').value;
    const instanciaRegistro = new autenticacion();
    instanciaRegistro.registro(correo,contrasennia);
}

const envioRegistro = document.getElementById('formularioLogin').addEventListener('submit',registro)