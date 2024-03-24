'use strict'; 

const boton = document.querySelector('.boton');
const textColor = document.querySelector('.textColor');
const pantalla = document. querySelector('.pantalla');
let primerClick = false; 
let colorActual = null; 

// Función que genera un número aleatorio y lo asigna. 
function genColHexAleat () {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indAlet = Math.floor(Math.random() * 16); 
        colorHex += digitos[indAlet]; 
    }
    return colorHex;
}
// Función que crea un historial de colores.
function crearHistorial (colorAleatorio) {
    let container = document.querySelector('.container2');
    let article = document.createElement('article');
    article.classList.add('article');

    let div = document.createElement('div');
    div.classList.add('colorsito');
    div.style.backgroundColor = colorAleatorio;

    let parrafo = document.createElement('p');
    parrafo.classList.add('codigo');
    parrafo.textContent = colorAleatorio;

    container.appendChild(article);
    article.appendChild(parrafo);
    article.appendChild(div);

    if (container.childElementCount === 10) {
        container.firstElementChild.remove();
    }
}
// Función que agrega el evento de click sobre el botón de generar colores.
boton.addEventListener('click', function() {
   // Si es el primer clic, establecemos el color actual como el color predefinido
    if (!primerClick) {
        colorActual = '#C21023';
        crearHistorial(colorActual);
        primerClick = true;
    } else {
        // Si no es el primer clic, agregamos el color actual al historial
        crearHistorial(colorActual);
    }

    // Generamos un nuevo color aleatorio y actualizamos la pantalla
    let nuevoColor = genColHexAleat();
    textColor.textContent = nuevoColor;
    pantalla.style.backgroundColor = nuevoColor;

    // Actualizamos el color actual con el nuevo color generado
    colorActual = nuevoColor;
})


