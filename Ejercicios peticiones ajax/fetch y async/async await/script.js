//No he conseguido que me funcione el primero botón volver, como en el ejercicio de los fetch

let listaUsuarios = document.getElementById("listaUsuarios");

let dataUsers;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        function getData () {
            return new Promise ((resolve,reject) => {
                if (data.lenght === 0) {
                    reject (new Error("Data is empty"))
                }
                setTimeout(()=> {
                    resolve (data);
                },2000)
            })
        }

        async function fetchingData() {
            const usuarios = await getData();

            for (let infoUsuario of data) {
                let listaItem = document.createElement("LI");
                listaItem.innerHTML = `${infoUsuario.id} - ${infoUsuario.name} <br>
                    - ${infoUsuario.username} <br>
                    - ${infoUsuario.website} <br>
                    <br><button id="boton" onclick="muestraListaPost(${infoUsuario.id})">Ver Posts</button><br><br><br>`
                listaUsuarios.appendChild(listaItem);
            }

            function muestraListaPost(ip)
            {
                fetch('https://jsonplaceholder.typicode.com/users/'+ip+'/posts')
                .then(response => response.json())
                .then(data => {
                    function getData () {
                        return new Promise ((resolve,reject) => {
                            if (data.lenght === 0) {
                                reject (new Error("Data is empty"))
                            }
                            setTimeout(()=> {
                                resolve (data);
                            },2000)
                        })
                    }

                    async function fetchingData() {
                        const usuarios = await getData();

                        for (let infoUsuario of data) {
                            listaUsuarios.innerHTML = '<button id="boton" onclick="crearListaUsuarios()">Volver</button><br><br><br><br>';
                            for (let post of data) {
                                let listaItem = document.createElement("LI");
                                listaItem.innerHTML = `${post.id} - ${post.title} <br>
                                    <br><button id="boton" onclick="muestraPost(${post.id})">Ver Post</button><br><br><br>`
                                listaUsuarios.appendChild(listaItem);
                            }
                        }


                    }

                    fetchingData();

                    })
                    .catch(error => console.log(error));
            }

            


        }

        fetchingData();

    })
    .catch(error => console.log(error));



function muestraListaPost(ip)
{
    fetch('https://jsonplaceholder.typicode.com/users/'+ip+'/posts')
    .then(response => response.json())
    .then(data => {
        function getData () {
            return new Promise ((resolve,reject) => {
                if (data.lenght === 0) {
                    reject (new Error("Data is empty"))
                }
                setTimeout(()=> {
                    resolve (data);
                },2000)
            })
        }

        async function fetchingData() {
            const usuarios = await getData();

            for (let infoUsuario of data) {
                listaUsuarios.innerHTML = '<button id="boton" onclick="crearListaUsuarios()">Volver</button><br><br><br><br>';
                for (let post of data) {
                    let listaItem = document.createElement("LI");
                    listaItem.innerHTML = `${post.id} - ${post.title} <br>
                        <br><button id="boton" onclick="muestraPost(${post.id})">Ver Post</button><br><br><br>`
                    listaUsuarios.appendChild(listaItem);
                }
            }


        }

        fetchingData();

        })
        .catch(error => console.log(error));
}

function muestraPost (idP) {
    fetch('https://jsonplaceholder.typicode.com/users/'+idP+'/posts')
    .then(response => response.json())
    .then(data => {
        function getData () {
            return new Promise ((resolve,reject) => {
                if (data.lenght === 0) {
                    reject (new Error("Data is empty"))
                }
                setTimeout(()=> {
                    resolve (data);
                },2000)
            })
        }

        async function fetchingData() {
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
        }
        fetchingData();
    })
    .catch(error => console.log(error));
}