//No he conseguido que me funcione el primero botón volver

let listaUsuarios = document.getElementById("listaUsuarios");

let dataUsers;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => crearListaUsuarios(data))
    .catch(error => console.log(error));



function crearListaUsuarios (data) {
    for (let infoUsuario of data) {
        let listaItem = document.createElement("LI");
        listaItem.innerHTML = `${infoUsuario.id} - ${infoUsuario.name} <br>
            - ${infoUsuario.username} <br>
            - ${infoUsuario.website} <br>
            <br><button id="boton" onclick="muestraListaPost(${infoUsuario.id})">Ver Posts</button><br><br><br>`
        listaUsuarios.appendChild(listaItem);
    }
}

function muestraListaPost (idU) {
    fetch('https://jsonplaceholder.typicode.com/users/'+idU+'/posts')
    .then(response => response.json())
    .then(data => {+
        console.log(data);
        listaUsuarios.innerHTML = '<button id="boton" onclick="crearListaUsuarios()">Volver</button><br><br><br><br>';
        for (let post of data) {
            let listaItem = document.createElement("LI");
            listaItem.innerHTML = `${post.id} - ${post.title} <br>
                <br><button id="boton" onclick="muestraPost(${post.id})">Ver Post</button><br><br><br>`
            listaUsuarios.appendChild(listaItem);
        }
    })
    .catch(error => console.log(error));
}

function muestraPost (idP) {
    fetch('https://jsonplaceholder.typicode.com/users/'+idP+'/posts')
    .then(response => response.json())
    .then(data => {+
        console.log(data);
        listaUsuarios.innerHTML = '<button id="boton" onclick="muestraListaPost('+ idP +')">Volver</button><br><br><br><br>';
        for (let post of data) {
            if (idP == post.id)
            {
                let listaItem = document.createElement("LI");
                listaItem.innerHTML = `${post.id} - ${post.title} <br>
                ${post.body} <br>`
                listaUsuarios.appendChild(listaItem);
            }
            
        }
    })
    .catch(error => console.log(error));
}