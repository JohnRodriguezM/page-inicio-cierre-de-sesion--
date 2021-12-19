import { autenticacion } from "../js/index.mjs";

function cerrarSesion(a) {
    a.preventDefault();
    const butonCierreS = document.getElementById('btn-cierreS');
    const cierre = new autenticacion();
    cierre.cerrarSesión();
}

document.getElementById('btn-cierreS').addEventListener('click',cerrarSesion);