//He intentado hacerlo para cada ususario pero no lo he logrado, solo me lo hace en el primero, no sé como hacerlo
//He utilizado primero el fetch como pedías y después el GET para hacerlo de las dos formas

let listaUsuarios = document.getElementById("listaUsuarios");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => crearListaUsuarios(data))
    .catch(error => console.log(error));

function crearListaUsuarios (data) {
    for (let infoUsuario of data) {
        let listaItem = document.createElement("LI");
        listaItem.innerHTML = `${infoUsuario.id} - ${infoUsuario.name} 
            <br><button id="boton" class="${infoUsuario.id}">Ver Tareas</button>
            <ul id="listaTareasPendientes" class="${infoUsuario.id}"></ul><br>
            <ul id="listaTareasCompletadas" class="${infoUsuario.id}"></ul><br><br>`
        listaUsuarios.appendChild(listaItem);
    }

    let boton = document.getElementById ("boton");
    
    boton.addEventListener("click", (e) => {

        let idusuario = e.target.className; //Es la variable con la que he intentado hacerlo para cada usuario pero no he conseguido sacar la solución

        let listaTareasPendientes = document.getElementById("listaTareasPendientes");
        let listaTareasCompletadas = document.getElementById("listaTareasCompletadas");

        if (listaTareasCompletadas.textContent != "" || listaTareasPendientes.textContent != "")
        {
            listaTareasPendientes.innerHTML = "";
            listaTareasCompletadas.innerHTML = "";
            return;
        }
        listaTareasPendientes.innerHTML = "<strong>Tareas pendientes:</strong><br>";
        listaTareasCompletadas.innerHTML = "<strong>Tareas completadas:</strong><br>";

        let xhr;
    
        if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1/todos");
    
        xhr.addEventListener("load", (data) =>  {
            let dataJSON = JSON.parse(data.target.response);
    
            for (let infoTarea of dataJSON) {
                let listaItem = document.createElement("LI");
                listaItem.textContent = `${infoTarea.id} - ${infoTarea.title}`

                if(infoTarea.completed == true) listaTareasCompletadas.appendChild(listaItem);
                else listaTareasPendientes.appendChild(listaItem);
            }
        })
    
        xhr.send()
    })
}