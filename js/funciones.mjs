/// libreria scrollreveal

// funcines del programa
// funciones para el menu superior

const mostrar = () => {
  document.getElementById('barraOpciones').style.display = 'block';
  document.getElementById('spancito').style.display = 'inline';
}

const activacion = document.getElementById('target2').addEventListener("click", mostrar)



const ocultar = () => {
  document.getElementById('barraOpciones').style.display = 'none';
  document.getElementById('spancito').style.display = 'none';
}

const activacion2 = document.getElementById('spancito').addEventListener("click", ocultar)


// funciones para mostrar y ocultar contraseña
// estas dos funciones son para el inicio de sesión()
// pendientes las del regístrate

function mostrarContrasennia() {
  //para el login
  const password = document.getElementById('spanEye').style.display = 'none';
  const password2 = document.getElementById('spanEyeOculto').style.display = 'inline-flex';

  const passwordLogin = document.getElementById('passwordLogin');

  if (passwordLogin.type === 'password') {
    return passwordLogin.type = 'text';
  }

  // para el registro
  const password3 = document.getElementById('spanEyeRegistro').style.display = 'none';
  const password4 = document.getElementById('spanEyeOcultoRegistro').style.display = 'inline-flex';

  const passwordRegistro = document.getElementById('passWordValidar');

  if (passwordRegistro.type === 'password') {
    return passwordRegistro.type = 'text';
  }

}

const ojo = document.getElementById('spanEye').addEventListener("click", mostrarContrasennia)
const ojoRegistro = document.getElementById('spanEyeRegistro').addEventListener('click', mostrarContrasennia)


function ocultarContraseña() {
  const password5 = document.getElementById('spanEye').style.display = 'inline-flex';
  const password6 = document.getElementById('spanEyeOculto').style.display = 'none';

  const passwordLogin = document.getElementById('passwordLogin');

  if (passwordLogin.type === 'text') {
    return passwordLogin.type = 'password';
  }
  // para el registro

  const password7 = document.getElementById('spanEyeRegistro').style.display = 'inline-flex';
  const password8 = document.getElementById('spanEyeOcultoRegistro').style.display = 'none';

  const passwordRegistro = document.getElementById('passWordValidar');

  if (passwordRegistro.type === 'text') {
    return passwordRegistro.type = 'password';
  }

}
const ojoCerrado = document.getElementById('spanEyeOculto').addEventListener("click", ocultarContraseña)
const ojoRegistroOculto = document.getElementById('spanEyeOcultoRegistro').addEventListener("click", ocultarContraseña)
// cambiar de tipo password a texto

function ocultarPopup() {
  document.getElementById('popupDesplegable').style.display = 'none';
  document.getElementById('parragoSignIn').style.display = 'none';
}

function mostrarPopup() {
  document.getElementById('popupDesplegable').style.display = 'block';
}
document.getElementById('buttonLogin').addEventListener('click', mostrarPopup)
document.getElementById('cierre').addEventListener('click', ocultarPopup)




// para la ventana de informacion adicional

document.getElementById('popupRegistro2').addEventListener('click', (_) => {
  document.getElementById('popupDesplegableInfoAdicional').style.display = 'block';
  document.getElementById('popupDesplegable').style.display = 'none';
})

document.getElementById('cierre2').addEventListener('click', (_) => {
  document.getElementById('popupDesplegableInfoAdicional').style.display = 'none';
})


// funcion para ocultar y mostrar el contenido

/*let btn1 = document.querySelector('#control');
export let divBtn = document.querySelector('#info-Content1')

btn1.addEventListener('click', ()=>{
 
    divBtn.classList.toggle('flex')
    divBtn.classList.toggle('hidden')
    let x = document.getElementById('info-Content1').innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sint corporis, eius excepturi quidem fuga! Voluptatum rem voluptates, laborum, ratione esse nulla nam alias culpa atque ut inventore fugiat quas."
})*/