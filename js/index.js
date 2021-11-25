





const envioForm = (e) => {
    e.preventDefault(e)
    let nombreH = document.getElementById('nombrecito').value
    let emailH = document.getElementById('email').value
    let comentariosH = document.getElementById('comentarios').value
    let edadH = document.getElementById('edad').value
    let x = confirm(`Tu nombre es ${nombreH}, lo confirmas?`)
    if(x){
        alert("Tu nombre ha sido enviado")
    }else{
        alert("porfavor pon bien tu nombre")
    }
    let y = confirm(`Tu email es ${emailH}, lo confirmas?`)
    if(y){
        alert("Tu correo ha sido enviado")
    }else{
        alert("porfavor pon bien tu correo")
    }
    let comentarios = confirm(`Tus comentarios son ${comentariosH}, estas de acuerdo?`)
    if(comentariosH.length < 30){
        alert("Los comentarios estan muy escasos, porfavor, cuentanos más ")
    }
    alert(`Tu edad es ${edadH}`);



}
const envioFormm = document.getElementById("formularioEnvio").addEventListener('submit',envioForm);
