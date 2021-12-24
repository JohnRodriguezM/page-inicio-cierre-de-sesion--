let elementos = ["piedra", "papel", "tijera"];

function piedraPapelTijera(el) {
    let item = elementos[Math.floor(Math.random() * elementos.length)];
    let mensaje1 = console.log(`empaste contra tu gemelo ${item}`)
    let mensaje2 = console.log(`perdiste contra ${item}`)
    let mensaje3 = console.log(`felicidades, ganaste contra ${item}`)
    if (el === elementos[0] && item === "piedra" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {

        return mensaje1
    }
    if (el === elementos[0] && item === "papel" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {

        return mensaje2
    }
    if (el === elementos[0] && item === "tijera" || el === elementos[1] && item === "piedra" || el === elementos[2] && item === "papel") {

        return mensaje3
    }
    let puntos = 0;
    const contadorP = (puntoss) => {
        if (mensaje1) {
            return console.log(puntos = puntoss)
        }
        if (mensaje2) {
            return console.log(puntos -= puntoss)
        }
        if (mensaje3) {
            return console.log(puntos += puntoss)
        }
    }
    contadorP;
}
let juego = piedraPapelTijera()
console.log(juego(8))

let elementos = ["piedra", "papel", "tijera"];

function piedraPapelTijera() {

    let puntos = 100;
    let item = elementos[Math.floor(Math.random() * elementos.length)];
    const contadorP = (el,puntoss = 100) => {
    
        
        if (el === elementos[0] && item === "piedra" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {
            
            console.log(`empaste contra tu gemelo ${item} y sumaste 0 puntos, llevas ${puntos = puntoss}`)
        }
        if (el === elementos[0] && item === "papel" || el === elementos[1] && item === "tijera" || el === elementos[2] && item === "piedra") {
            
            console.log(`perdiste contra ${item}  y perdiste 1 punto, llevas ${puntos -= puntoss}`)
        }
        if (el === elementos[0] && item === "tijera" || el === elementos[1] && item === "piedra" || el === elementos[2] && item === "papel") {
            let ganancia = 1
            console.log(`felicidades, ganaste contra ${item} y sumaste 1 punto, llevas ${puntos += puntoss}`)
        }
    }
    return contadorP;
}
const hola = piedraPapelTijera()
console.log(hola("piedra"))