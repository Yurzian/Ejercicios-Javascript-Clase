import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";

let palabraABuscar = "";
let historialPalabras = [];
let puntuacionTotal = 0;
let numContador = 15;
let escribirContador = document.getElementById("contador");
let letra = letraAleatoria();
escribirContador.innerHTML = numContador;


document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;  //escribimos la letra
document.getElementById("comenzar").addEventListener("click", () => window.setInterval(contador, 1000)); //al hacer clic en el boton empieza el contador
document.getElementById("comenzar").addEventListener("click", () => document.getElementById("boton").style.display = "none");  //al hacer clic en el boton, desaparece
document.getElementById("comenzar").addEventListener("click", () => document.getElementById("formulario").style.display = "block");  //al hacer clic en el boton, aparece el formulario
document.getElementById("puntuacion").textContent = puntuacionTotal;  //escribir puntuacion

document.getElementById('formulario').addEventListener('submit', (evento) => {  //al enviar la palabra
    evento.preventDefault();
    palabraABuscar = document.getElementById("campo1").value;  //metemos la palabra en una variable
    comprobarPalabra(palabraABuscar);  //llamamos a la funcion para comprobarla
    document.getElementById("campo1").value = "";  //en el formulario, borramos la palabra
});

function comprobarPalabra(palabraABuscar) {
    if (palabraABuscar[0] === letra && diccionario.includes(palabraABuscar) === true && historialPalabras.includes(palabraABuscar) === false) {  //si la primera letra de la palabra es la aleatoria 
        document.getElementById("resultado").textContent = "PALABRA CORRECTA!";
        historialPalabras.push(document.getElementById("campo1").value);  //metemos la palabra en el array de palabras acertadas
        document.getElementById('historialBuenas').innerHTML += "<center>✔️  " + document.getElementById("campo1").value + "</center><br>";  //escribimos la palabra en la lista de palabras acertadas
        puntuacionTotal += puntuacion(palabraABuscar);  //sumamos puntuacion
        document.getElementById("puntuacion").textContent = puntuacionTotal;  //escribimos puntuacion
        numContador = 15;  //reiniciamos contador
    }
    else {
        document.getElementById("resultado").textContent = "FALLASTE!";
        document.getElementById('historialMalas').innerHTML += "<center>❌  " + document.getElementById("campo1").value + "</center><br>";  //escribimos la palabra en la lista de palabras falladas
    }
}

function letraAleatoria() {
    return String.fromCharCode(Math.random() * (122 - 97) + 97);  //valor ascii de letras aleatorio que se pasa a string
}

function contador() {
    escribirContador.innerHTML = numContador;  //se escribe el valor actual del contador
    numContador--;  //se resta contador

    if (numContador < 10) {
        escribirContador.style.color = "red";  //si el contador es menor o igual que diez, se pone en rojo como advertencia
    }
    else {
        escribirContador.style.color = "black";
    }
    if (numContador < 0) {  //cuando se acabe el tiempo
        document.getElementById("juego").style.display = "none"; //mostramos final
        document.getElementById("final").style.display = "block"; //mostramos final
        document.getElementById("puntuacion").textContent = puntuacionTotal;  
        document.getElementById("puntuacionFinal").innerHTML = puntuacionTotal; //escribimos en la pagina la puntuacion
        document.getElementById("acertadas") = historialPalabras.length;  //escribimos en la pagina las palabras acertadas
    }
}

function puntuacion (palabra){
    let primeraLetra = palabra.charCodeAt(0);  //cogemos la primera palabra y la pasamos a ascii
    let puntos = 0;

    switch (palabra.length) { //segun la longitud de la palabra
        case 8,9,10,11,12 : puntos ++;
            break;

        case 6,7,13,14 : puntos += 2;
            break;

        case 5,15 : puntos +=3;
            break;

        case 4, 16, 17: puntos += 4;
            break;
            
        default:
            puntos += 5;
    }

    switch (primeraLetra) {  //segun la primera letra, estan en codigo ascii
        case 97,99,100,101 : puntos ++;
            break;

        case 109,112,114,115,116 : puntos += 2;
            break;

        case 98,102,103,104,105,118 : puntos +=3;
            break;

        case 106,108,110,111,122: puntos += 4;
            break;
            
        default:
            puntos += 5;
    }

    return puntos;
}
