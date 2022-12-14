import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";

console.log(diccionario);

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
document.getElementById("puntuacion").textContent = puntuacionTotal;  //escribir puntuacion

document.getElementById('formulario').addEventListener('submit', (evento) => {  //al enviar la palabra
    evento.preventDefault();
    palabraABuscar = document.getElementById("campo1").value;  //metemos la palabra en una variable
    comprobarPalabra(palabraABuscar);  //llamamos a la funcion para comprobarla
    document.getElementById("campo1").value = "";  //en el formulario, borramos la palabra
});

function comprobarPalabra(palabraABuscar) {
    if (diccionario.has(palabraABuscar) && palabraABuscar.length > 0) {  //si la primera letra de la palabra es la aleatoria 
        document.getElementById("resultado").textContent = "PALABRA CORRECTA!";
        historialPalabras.push(document.getElementById("campo1").value);  //metemos la palabra en el array de palabras acertadas
        letra = letraAleatoria();  //metemos otra letra aleatoria
        document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;  //escribimos la nueva letra
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
        document.getElementById("puntuacion").textContent = puntuacionTotal;  
        document.getElementById("cuerpo").innerHTML = "<h1>TIEMPO AGOTADO!</h1><br><br> Tu puntuación es: " + puntuacionTotal + "<br><br> Palabras acertadas: " + historialPalabras.length;  //escribimos en la pagina la puntuacion final
    }
}

function puntuacion (palabra){
    let primeraLetra = palabra[0];
    let puntos = 0;

    switch (palabra.length) {
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

    switch (primeraLetra) {
        case a,c,d,e : puntos ++;
            break;

        case matchMedia,p,r,s,t : puntos += 2;
            break;

        case blur,f,g,h,i,v : puntos +=3;
            break;

        case j,l,n,o,z: puntos += 4;
            break;
            
        default:
            puntos += 5;
    }

    return puntos;
}
