// Para mostrar el primer hijo
const contenedorCartas = document.querySelector('#contenedorCartas');
console.log(contenedorCartas.firstElementChild)

// Mostrar el tercer hijo
const tercerHijo = document.querySelector('#contenedorCartas');
console.log(tercerHijo.children[2]);

const hermanoTercerHijo = document.querySelector('#contenedorCartas');
console.log(hermanoTercerHijo.children[2].nextElementSibling);

//  Mostrar el último hijo
const ultimoHijo = document.querySelector('#contenedorCartas');
console.log(ultimoHijo.lastElementChild);

// Mostrar el padre
const elementoPadre = document.querySelector('#contenedorCartas');
console.log(elementoPadre.parentElement)

// Mostrar el elemento padre del padre
const padre = document.querySelector('#contenedorCartas');
console.log(padre.parentElement.parentElement);

// Mostrar el hermano anterior
const hermanoAnterior = document.querySelector('#contenedorCartas');
console.log(hermanoAnterior.parentElement.previousElementSibling)

// Las clases del ultimo hijo
const clasesUltimoHijo = document.querySelector('#contenedorCartas');
console.log(clasesUltimoHijo.lastElementChild.classList);
