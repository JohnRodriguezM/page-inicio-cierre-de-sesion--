// el btn del burger menu
// el div que contiene la informacion 

/*const burgerMenu = document.querySelector('#btn-burgerMenu');
const divCierre = document.querySelector('#div-cierreBurgerMenu');

burgerMenu.addEventListener("click", ()=>{
    divCierre.classList.toggle("hidden")
    divCierre.classList.toggle("flex")
})*/


let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};