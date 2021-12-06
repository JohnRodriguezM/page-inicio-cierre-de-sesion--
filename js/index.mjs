import {firebaseConfig,app} from "./firebase.mjs"


console.log(app)



function envioForm(e) {
    e.preventDefault(e)
    let nombreH = document.getElementById('nombrecito').value
    let emailH = document.getElementById('email').value
    let edad = document.getElementById('edad').value;
    let comentariosH = document.getElementById('comentarios').value
    const datos = {
        nombreH,
        emailH,
        edad,
        comentariosH,
    }
    envio(datos)
    envioForm.reset()
    alert(datos)

}
const envioFormm = document.getElementById("formularioEnvio").addEventListener('submit',envioForm);

function envio(datos){
    firebase.database().ref('contacto').push(datos)
        .then(function(){
            alert("guardado")
        })
        .catch(function(){
            alert("no guardado")
        })
};
