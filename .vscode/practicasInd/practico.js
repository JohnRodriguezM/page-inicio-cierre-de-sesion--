function contador() {
    let frutas = 100;
    return function fruitas(nF) {
        frutas -= nF;
        console.log(frutas);
    }
}

let frutero = contador();
frutero(20)
frutero(50)
frutero(30)


// se crea una clausura para el juego de piedra, papel o tijera y que de esta manera almacene los puntos necesarios



function piedraPapelTijera() {

    let puntos = 0;

    function contadorP(el, puntoss = puntos) {
        let elementos = ["piedra", "papel", "tijera"];
        let item = elementos[Math.floor(Math.random() * elementos.length)];

        /*const tiempo = setTimeout(() => {
            puntos += 20;
            console.log(`llevas un segundo jugando, tu puntos han incrementado en 20, felicidades, tus puntos actuales son ${puntos}`);
        }, 5000);
        clearTimeout(tiempo)*/

        if (el === elementos[0] && item === "piedra" || el === elementos[1] && item === "papel" || el === elementos[2] && item === "tijera") {
            puntos = puntoss + 0;
            console.log(`empaste contra tu gemelo ${item} y sumaste 0 puntos, llevas ${puntos}`)
            return puntos;
        }
        if (el === elementos[0] && item === "papel" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {
            puntos = puntoss - 1;

            console.log(`perdiste contra ${item}  y perdiste 1 punto, llevas ${puntos}`)
            return puntos;
        }
        if (el === elementos[0] && item === "tijera" || el === elementos[1] && item === "piedra" || el === elementos[2] && item === "papel") {
            puntos = puntoss + 1;
            console.log(`felicidades, ganaste contra ${item} y sumaste 1 punto, llevas ${puntos}`)
            return puntos;
        }
        
    }

    return contadorP;

}
const hola = piedraPapelTijera()
console.log(hola("tijera"))
console.log(hola("papel"))
console.log(hola("piedra"))
console.log(hola("tijera"))
console.log(hola("papel"))
console.log(hola("tijera"))
console.log(hola("piedra"))
console.log(hola("tijera"))
console.log(hola("papel"))
console.log(hola("tijera"))
console.log(hola("piedra"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("papel"))
console.log(hola("piedra"))
console.log(hola("tijera"))
console.log(hola("papel"))





let elementos = ["piedra", "papel", "tijera"];

function piedraPapelTijera() {

    let puntos = 0;

    return function contadorP(el, puntoss = puntos) {

        let item = elementos[Math.floor(Math.random() * elementos.length)];
        if (el === elementos[0] && item === "piedra" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {
            puntos = puntoss + 0;
            console.log(`empaste contra tu gemelo ${item} y sumaste 0 puntos, llevas ${puntos}`)
            return puntos;
        }
        if (el === elementos[0] && item === "papel" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {
            puntos = puntoss - 1;

            console.log(`perdiste contra ${item}  y perdiste 1 punto, llevas ${puntos}`)
            return puntos;
        }
        if (el === elementos[0] && item === "tijera" || el === elementos[1] && item === "piedra" || el === elementos[2] && item === "papel") {
            puntos = puntoss + 1;
            console.log(`felicidades, ganaste contra ${item} y sumaste 1 punto, llevas ${puntos}`)
            return puntos;
        }
    }
}
const hola = piedraPapelTijera()
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))
console.log(hola("tijera"))