const productosPorPagina = 5;
let paginaActual = 1;
let maxPaginas = 0;
let data = [];

const listaUsuario = document.getElementById('listaUsuario');
const siguiente = document.getElementById('Siguiente');
const listaResultado = document.getElementById('listaResultado');

siguiente.addEventListener('click', () => {
    paginaActual++;

    if (paginaActual > maxPaginas){
        paginaActual = 1;
    }
    mostrarUsuarios();
})

fetch('https://gorest.co.in/public-api/users', {
    headers: {
        'Authorization': 'Bearer 29814bb49bbdf67e28f836f6fc78724bc1af41e47def6a7433aead96e2e3eebc'
    }
})
    .then(response => response.json())
    .then(result => {
        data = result.data;
        mostrarUsuarios();
    })
    .catch(error => {
        console.error('Error:', error)
    })

function mostrarUsuarios() {
    const indiceInicial = (paginaActual - 1) * productosPorPagina;
    const indiceFinal = paginaActual * productosPorPagina;
    maxPaginas = Math.ceil(data.length / productosPorPagina);

    console.log(data);

    listaUsuario.innerHTML = "";

    for (let i = indiceInicial; i < indiceFinal && i < data.length; i++) {
        if (data[i].name) {
            listaUsuario.innerHTML += `
            <li>${data[i].name}</li>`;
        }
    }
}

let formulario = document.getElementById("buscarUsuario");

buscarUsuario.onsubmit = function(e){
    e.preventDefault();
    
    fetch('https://gorest.co.in/public-api/users', {
        headers: {
            'Authorization': 'Bearer 29814bb49bbdf67e28f836f6fc78724bc1af41e47def6a7433aead96e2e3eebc'
        }
    })
        .then(response => response.json())
        .then(result => {

            let nombre = document.getElementById("nombre").value;

            for (let usuario of result.data) {
                if (usuario.name == nombre)
                listaResultado.innerHTML += '<li>' + usuario.id + '<br>' + usuario.name + '<br>' + usuario.email + '</li>';
            }
            
        })
        .catch(error => {
            console.error('Error:', error)
        })

  }



