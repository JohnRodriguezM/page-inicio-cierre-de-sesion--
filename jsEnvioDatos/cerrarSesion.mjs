import {
    autenticacion
} from "../js/index.mjs";

function cerrarSesion(a) {
    a.preventDefault();
    const cierre = new autenticacion();
    cierre.cerrarSesión();
}
document.getElementById('btn-cierreS').addEventListener('click', cerrarSesion);