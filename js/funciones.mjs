
// funcines del programa
// funciones para el menu superior

const mostrar = () => {
    document.getElementById('barraOpciones').style.display = 'block';
    document.getElementById('spancito').style.display = 'inline';
  }

  const activacion = document.getElementById('target2').addEventListener("click",mostrar)



  const ocultar = () => {
    document.getElementById('barraOpciones').style.display = 'none';
    document.getElementById('spancito').style.display = 'none';
  }

   const activacion2 = document.getElementById('spancito').addEventListener("click",ocultar)


     // funciones para mostrar y ocultar contraseña
  // estas dos funciones son para el inicio de sesión()
  // pendientes las del regístrate
  
  function mostrarContrasennia(){
    //para el login
    const password = document.getElementById('spanEye').style.display = 'none';
    const password2 = document.getElementById('spanEyeOculto').style.display = 'inline-flex';
  
    const passwordLogin = document.getElementById('passwordLogin');
  
    if(passwordLogin.type === 'password'){
      return passwordLogin.type = 'text';
    }
  
    // para el registro
    const password3 = document.getElementById('spanEyeRegistro').style.display = 'none';
    const password4 = document.getElementById('spanEyeOcultoRegistro').style.display = 'inline-flex';
  
    const passwordRegistro = document.getElementById('passWordValidar');
  
    if(passwordRegistro.type === 'password'){
      return passwordRegistro.type = 'text';
    }
  
  }

const ojo = document.getElementById('spanEye').addEventListener("click",mostrarContrasennia)

  
  function ocultarContraseña() {
    const password5 = document.getElementById('spanEye').style.display = 'inline-flex';
    const password6 = document.getElementById('spanEyeOculto').style.display = 'none';
  
    const passwordLogin = document.getElementById('passwordLogin');
  
    if(passwordLogin.type === 'text'){
      return passwordLogin.type = 'password';
    }
    // para el registro

    const password7 = document.getElementById('spanEyeRegistro').style.display = 'inline-flex';
    const password8 = document.getElementById('spanEyeOcultoRegistro').style.display = 'none';
  
    const passwordRegistro = document.getElementById('passWordValidar');
  
    if(passwordRegistro.type === 'text'){
      return passwordRegistro.type = 'password';
    }
  
  }
  const ojoCerrado = document.getElementById('spanEyeOculto').addEventListener("click",ocultarContraseña)
  // cambiar de tipo password a texto
