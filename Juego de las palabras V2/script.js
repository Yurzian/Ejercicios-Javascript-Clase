import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";

let palabraABuscar;
let historialPalabras;
let historialFalladas;
let puntuacionTotal;
let tiempoJuego;
let numContador;
let usuario;
let escribirContador = document.getElementById("contador");
let letra;


document.getElementById("comenzar").addEventListener("click", () => comenzarJuego()); //al hacer clic en el boton de comenzar, empieza el juegoi
document.getElementById("restart").addEventListener("click", () => ponerUsuario());  //al hacer clic en el boton de restart, ponemos el usuario para vovler a jugar de nuevo

document.getElementById('logUsuario').addEventListener('submit', (evento) => {  //al enviar el usuario
    evento.preventDefault();
    usuario = document.getElementById("user").value;  //guardamos el nombre
    comenzarJuego();  //comenzamos juego
});

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
        if (historialFalladas.includes(palabraABuscar) === false || historialPalabras.includes(palabraABuscar === false)) //si ya está escrita
        {
            document.getElementById('historialMalas').innerHTML += "<center>❌  " + document.getElementById("campo1").value + "</center><br>";  //escribimos la palabra en la lista de palabras falladas
            historialFalladas.push(document.getElementById("campo1").value);  //metemos la palabra en el array de palabras falladas
        }
    
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
        finalizarJuego();
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

    for (let i=1; i< palabra.length; i++)  //si la palabra contiene alguna de estas letras, debemos sumar puntos
    {
        if (palabra[i]=== "k" || palabra[i]=== "ñ" || palabra[i]=== "q" || 
                palabra[i]=== "w" || palabra[i]=== "x" || palabra[i]=== "y")
        puntos ++;
    }

    return puntos;
}

function comenzarJuego()
{
    document.getElementById("final").style.display = "none";
    document.getElementById("log").style.display = "none";
    document.getElementById("juego").style.display = "block";  //solo mostramos en el html la parte del juego
    palabraABuscar = ""  //ponemos todos los valores en 0
    puntuacionTotal = 0;
    letra = letraAleatoria();
    numContador = 15;
    escribirContador.innerHTML = numContador;
    historialPalabras = [];  
    historialFalladas = [];
    document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;  //escribimos la letra
    tiempoJuego = setInterval(contador, 1000); //usamos el contador
    document.getElementById("resultado").textContent = "";  
    document.getElementById('historialMalas').innerHTML = "";
    document.getElementById('historialBuenas').innerHTML = "";
    document.getElementById("puntuacion").textContent = puntuacionTotal;  //escribimos puntuacion
}

function finalizarJuego()
{
    clearInterval(tiempoJuego); //paramos contador
    document.getElementById("juego").style.display = "none"; //mostramos final
    document.getElementById("final").style.display = "block"; //mostramos final
    guardarUsuario(usuario,historialPalabras.length);  //guardamos la información del usuario (nombre y palabras acertadas)
    document.getElementById("puntuacion").innerHTML = puntuacionTotal; //mostramnos la puntuacion de la partida actual
    document.getElementById("puntuacionFinal").innerHTML = puntuacionTotal; //escribimos en la pagina la puntuacion
    document.getElementById("acertadas").innerHTML = historialPalabras.length;  //escribimos en la pagina las palabras acertadas
    document.getElementById("usuario").innerHTML = obtenerUsuario(usuario).nombre;  //recogemos el nombre de usuario y lo mostramos
    document.getElementById("historialJugadas").innerHTML = obtenerUsuario(usuario).partidas;  //recogemos el historial de partidas jugadas guardado y lo mostramos
    document.getElementById("puntuacionMedia").innerHTML = puntuacionMedia(obtenerUsuario(usuario));  //recogemos la media de palabras acertadas con la información guardada y la mostramos
}

function ponerUsuario ()
{
    document.getElementById("final").style.display = "none";  
    document.getElementById("log").style.display = "block";  //solo mostramos la parte del html para poner el usuario
    document.getElementById("juego").style.display = "none";
}

function guardarUsuario(cpNombre,cpAcertadas){
    let persona;  //creamos persona

    if (localStorage.getItem(cpNombre)) //si ya existe el usuario 
    {
        persona = JSON.parse (localStorage.getItem (cpNombre));  //le ponemos los valores del usuario a persona
        persona.partidas ++;  //sumamos una partida
        persona.pAcertadas.push(cpAcertadas);  //metemos en el array el numero de palabras acertadas en la partida
    }
    else  //si no existe el usuario creamos la persona de 0
    {
        persona = {
            nombre : cpNombre,
            partidas : 1,
            pAcertadas : []
        }
        persona.pAcertadas.push(cpAcertadas);  //metemos en el array el numero de palabras acertadas en la partida
    }

    localStorage.setItem(cpNombre,JSON.stringify(persona));  //metemos al usuario en el local storage
}

function obtenerUsuario(cpNombre){

    let persona = JSON.parse(localStorage.getItem(cpNombre));  //obtenemos la información del usuario a traves del nombre

    return persona;  //devolvemos el usuario
}

function puntuacionMedia(persona){
    let temporal=0;
    for (let i=0; i< persona.pAcertadas.length; i++)  //recorremos cada partida jugada, sumamos los valores y los dividimos entre el numero de partidas para obtener la media
    {
        temporal += persona.pAcertadas[i];
    }
    temporal = temporal / persona.pAcertadas.length;

    return temporal.toFixed(2);  //devolvemos la media
}
