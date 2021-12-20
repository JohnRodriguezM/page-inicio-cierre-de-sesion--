import { autenticacion } from "./js/index.mjs";

function envioGoogle(a) {
   a.preventDefault();
   const envio = new autenticacion();
   envio.google();

}

document.getElementById('buttonGoogle').addEventListener('click',envioGoogle)