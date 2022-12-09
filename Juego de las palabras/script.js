let palabraABuscar = "";
let historialPalabras = [];
let puntuacionTotal = 0;
let numContador = 15;
let escribirContador = document.getElementById("contador");
let letra = "?";
escribirContador.innerHTML = numContador;
document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;
document.getElementById("puntuacion").textContent = puntuacionTotal;

document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(evento);
    console.log("Has hecho submit");
    palabraABuscar = document.getElementById("campo1").value;
    comprobarPalabra(palabraABuscar);
    document.getElementById("campo1").value = "";
});

function comprobarPalabra(palabraABuscar) {
    if (palabraABuscar[0] === letra) {
        document.getElementById("resultado").textContent = "PALABRA CORRECTA!";
        historialPalabras.push(document.getElementById("campo1").value);
        letra = letraAleatoria();
        document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;
        document.getElementById('historialBuenas').innerHTML += "<center>✔️  " + document.getElementById("campo1").value + "</center><br>";
        puntuacionTotal += 10;
        document.getElementById("puntuacion").textContent = puntuacionTotal;
        numContador = 15;
    }
    else {
        document.getElementById("resultado").textContent = "FALLASTE!";
        document.getElementById('historialMalas').innerHTML += "<center>❌  " + document.getElementById("campo1").value + "</center><br>";
    }
}

function letraAleatoria() {
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
}

document.getElementById("comenzar").addEventListener("click", () => window.setInterval(contador, 1000), letra=letraAleatoria(), );

function contador() {
    document.getElementById('letra').textContent = "Escribe una palabra que empiece por " + letra;
    escribirContador.innerHTML = numContador;
    numContador--;
    if (numContador < 10) {
        escribirContador.style.color = "red";
    }
    else {
        escribirContador.style.color = "black";
    }
    if (numContador < 0) {
        document.getElementById("resultado").textContent = "Tiempo agotado! Escribe otra palabra";
        letra = letraAleatoria();
        document.getElementById("puntuacion").textContent = puntuacionTotal;
        document.getElementById("cuerpo").innerHTML = "<h1>TIEMPO AGOTADO!</h1><br><br> Tu puntuación es: " + puntuacionTotal + "<br><br> Palabras acertadas: " + historialPalabras.length;
    }
}
