import { autenticacion } from "./index.mjs";

function registro(a) {
    a.preventDefault();
    let correo = document.getElementById('emailValidar').value;
    let contrasennia = document.getElementById('passWordValidar').value;
    const instanciaRegistro = new autenticacion();
    instanciaRegistro.registro(correo,contrasennia);
    document.getElementById('formularioRegistro').reset()
}

const envioRegistro = document.getElementById('formularioRegistro').addEventListener('submit',registro)